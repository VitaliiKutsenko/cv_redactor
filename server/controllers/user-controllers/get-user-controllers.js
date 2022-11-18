const getActivateLink = async (req, res, next) => {
    try {
        const activationLink = req.params.link;
        await activate(activationLink);
        return res.redirect(process.env.CLIENT_URL);
    } catch (error) {
        next(error);
    }
};

const getRefreshToken = async (req, res, next) => {
    try {
        const { refreshToken } = req.cookies;
        const userData = await refresh(refreshToken);
        res.cookie('refreshToken', userData.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        return res.json(userData);
    } catch (error) {
        next(error);
    }
};

const getUsers = async (req, res, next) => {
    try {
        const allUsers = await getAllUsers();
        res.status(200).json(allUsers);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getActivateLink,
    getRefreshToken,
    getUsers,
};
