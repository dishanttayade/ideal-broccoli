const Restaurant = require('../models/Model');

exports.listAllRestaurants = async (req, res) => {
    try {
        const result = await Restaurant.find();
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        // if(page==undefined || limit==undefined){
        //     res.status(200).json(result);
        // }
        console.log(page+ " " + limit);
        const start = (page - 1) * limit;
        const endIndex = page*limit;
        const resultres = result.slice(start, endIndex);
        res.status(200).json(resultres);
    }catch (err){
        return res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
};
