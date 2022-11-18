const ApiError = require('../../exceptions/api-errors');
const { upload } = require('../../storage/storage');
const {
    registration,
    activate,
    login,
    logout,
    refresh,
    getAllUsers,
} = require('../../services/user-services');
const { validationResult } = require('express-validator');

const postRegistration = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(
                ApiError.BadRequestError('Validation error', errors.array())
            );
        }
        const { email, password, name, surname, age } = req.body;
        const userData = await registration(
            email,
            password,
            name,
            surname,
            age
        );
        res.cookie('refreshToken', userData.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        return res.json(userData);
    } catch (error) {
        next(error);
    }
};

const postLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userData = await login(email, password);
        res.cookie('refreshToken', userData.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        return res.json(userData);
    } catch (error) {
        next(error);
    }
};

const postLogout = async (req, res, next) => {
    try {
        const { refreshToken } = req.cookies;
        const token = await logout(refreshToken);
        res.clearCookie('refreshToken');
        return res.json(token);
    } catch (error) {
        next(error);
    }
};

const postUpload = (req, res, next) => {
    upload(req, res, (err) => {
        try {
            const { email, password } = req.files.file;
            const userData = login(email, password);
            return res.json(userData);
        } catch (err) {
            next(err);
        }
    });
};

module.exports = {
    postRegistration,
    postLogin,
    postLogout,
    postUpload,
};
