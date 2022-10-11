const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const sendActivationMail = require('./mail-services');
const {
    tokenGenerator,
    removeToken,
    validateRefreshToken,
    findToken,
} = require('./token-services');
const ApiError = require('../exceptions/api-errors');
const CvModel = require('../models/cv-model');

const registration = async (email, password, name, surname, age) => {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
        throw ApiError.BadRequestError(
            `User with email:${email} already exists`
        );
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await UserModel.create({
        email,
        password: hashPassword,
        name,
        surname,
        age,
        activationLink,
    });
    await sendActivationMail(
        email,
        `${process.env.API_URL}/api/activate/${activationLink}`
    );
    return tokenGenerator(user);
};

const activate = async (activationLink) => {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
        throw ApiError.BadRequestError('Incorrect activation link');
    }
    user.isActivated = true;
    await user.save();
};

const login = async (email, password) => {
    const user = await UserModel.findOne({ email });
    if (!user) {
        throw ApiError.BadRequestError(
            `User with email:${email} is not found!`
        );
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
        throw ApiError.BadRequestError(`Password:${password} is incorrect`);
    }
    return tokenGenerator(user);
};

const logout = async (refreshToken) => {
    return await removeToken(refreshToken);
};

const refresh = async (refreshToken) => {
    if (!refreshToken) {
        throw ApiError.UnauthorizedError();
    }
    const userData = validateRefreshToken(refreshToken);
    const tokenFromDb = findToken(refreshToken);
    console.log(userData, tokenFromDb);
    if (!userData && !tokenFromDb) {
        throw ApiError.UnauthorizedError();
    }
    const user = UserModel.findById(userData.id);
    return tokenGenerator(user);
};

const getAllUsers = async () => {
    return UserModel.find();
};
const getAllFiles = async () => {
    return CvModel.find();
};
module.exports = {
    registration,
    activate,
    login,
    logout,
    refresh,
    getAllUsers,
    getAllFiles,
};
