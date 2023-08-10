const stripeKey = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(stripeKey);

const makePaymentIntent = async (req, res, next) => {
  try {
    const { planId, plan } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(plan.price.yearly) * 100,
      currency: "inr",
      payment_method_types: ["card"],
      metadata: {
        planId
      }
    });
    return res.json({ response: paymentIntent });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  makePaymentIntent,
};
