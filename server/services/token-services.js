const jwt = require('jsonwebtoken');
const TokenModel = require('../models/token-model');
const UserDto = require("../dtos/user-dto");

const generateToken = (payload) => {
    const accessToken = () => (
        jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, { expiresIn: '30m' }));

    const refreshToken = () => (
        jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, { expiresIn: '30d' }));

    return { accessToken:accessToken(), refreshToken:refreshToken() };
};

const saveToken = async (userId, refreshToken) => {
    const tokenData = await TokenModel.findOne({ user: userId });

    if (tokenData) {
        tokenData.refreshToken = refreshToken;
        return tokenData.save();
    }
    return await TokenModel.create({ user: userId, refreshToken });
};

const tokenGenerator = async (user) => {
    const userDto = new UserDto(user);
    const tokens = generateToken({ ...userDto });
    await saveToken(userDto.id, tokens.refreshToken);

    return {
        ...tokens,
        user: userDto,
    };
}

const removeToken = async (refreshToken) => {
    return TokenModel.deleteOne({refreshToken})
}

const validateAccessToken = (token) => {
    console.log(token)
    try {
        return jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
    } catch (error) {
        return null
    }
}

const validateRefreshToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_REFRESH_TOKEN)

    } catch (error) {
        return null
    }
}

const findToken = async (refreshToken) => {
    return await TokenModel.findOne({refreshToken})
}

module.exports = {
    generateToken,
    saveToken,
    tokenGenerator,
    removeToken,
    validateAccessToken,
    validateRefreshToken,
    findToken
};
