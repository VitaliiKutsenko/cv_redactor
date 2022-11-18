const { getCvCard } = require('../../services/cv-services');

const getCvData = async (req, res, next) => {
    try {
        const cvCard = await getCvCard();
        res.status(200).json(cvCard);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    getCvData,
};
