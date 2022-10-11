const ApiError = require('../exceptions/api-errors')
const {validateAccessToken} = require('../services/token-services')

module.exports = (req,res,next) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return next(ApiError.UnauthorizedError())
        }
        const accessToken = authHeader.split(' ')[1]
        if(!accessToken){
            return  next(ApiError.UnauthorizedError())
        }
        const userData = validateAccessToken(accessToken)
        if (!userData) {
            return next(ApiError.UnauthorizedError())

        }
        req.users = userData
        next()
    } catch (e) {
        return next(ApiError.UnauthorizedError())
    }
}