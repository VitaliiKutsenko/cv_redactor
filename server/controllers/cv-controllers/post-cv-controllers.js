const { addCvCard } = require('../../services/cv-services');

const addCvData = async (req, res, next) => {
    try {
        const cvData = req.body;
        console.log(cvData);
        const cvCard = await addCvCard({ ...cvData });
        res.status(200).json(cvCard);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    addCvData,
};
