require('dotenv').config(); 

const Razorpay = require('razorpay');

exports.createRazorpayInstance = () => {
   return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_Rapcm0U86hOyPt',
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'LT5PWkMyvxGKMCtVB25So8FY'
  });
}

