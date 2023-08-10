const Plan = require("../models/plans");
const User = require("../models/user");


const getAllPlans = async (req, res, next) => {
  try {
    const response = await Plan.find();
    return res.json(response);
  } catch (error) {
    next(error);
  }
};

const getUserPlans = async (req, res, next) => {
  try {
    const { planId } = req.params;
    const response = await Plan.findById(planId);
    return res.json(response);
  } catch (error) {
    next(error);
  }
};


const setUserPlans = async (req, res, next) => {
  try {
    const { planId } = req.body;
    const response = await User.updateOne({ planId: planId })
    return res.json(response);
  } catch (error) {
    next(error);
  }
};



module.exports = { getAllPlans, getUserPlans, setUserPlans };
