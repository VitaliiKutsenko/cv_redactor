const Router = require('express');
const router = new Router();
const { body } = require('express-validator');
const {
    postRegistration,
    postLogin,
    postLogout,
    postUpload,
    getActivateLink,
    getRefreshToken,
    getUsers,
} = require('../controllers/user-controllers.js');
const userMiddleware = require('../middlewares/user-middleware');
// POST
router.post(
    '/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 12 }),
    postRegistration
);
router.post('/login', postLogin);
router.post('/logout', postLogout);
router.post('/upload', postUpload);
// GET
router.get('/activate/:link', getActivateLink);
router.get('/refresh', getRefreshToken);
router.get('/users', userMiddleware, getUsers);
module.exports = router;
