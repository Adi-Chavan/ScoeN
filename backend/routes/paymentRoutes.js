const express = require('express');
const Razorpay = require('razorpay');
const User = require('../models/User');
const Unit = require('../models/Unit');
const router = express.Router();

const razorpay = new Razorpay({
    key_id: 'YOUR_RAZORPAY_KEY',
    key_secret: 'YOUR_RAZORPAY_SECRET'
});

router.post('/create-order/:unitId', async (req, res) => {
    try {
        const unit = await Unit.findById(req.params.unitId);
        const order = await razorpay.orders.create({
            amount: unit.price * 100,
            currency: 'INR',
            receipt: `receipt_${req.params.unitId}_${Date.now()}`
        });

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Payment error' });
    }
});

// Verify Payment & Grant Access
router.post('/verify-payment', async (req, res) => {
    const { order_id, payment_id, signature, unitId } = req.body;

    // Verify Razorpay payment signature (add verification logic here)

    // If successful, update the user’s purchased units
    const user = await User.findById(req.user._id);
    if (!user.purchasedUnits.includes(unitId)) {
        user.purchasedUnits.push(unitId);
        await user.save();
    }

    res.json({ message: 'Payment successful. Notes unlocked!' });
});

module.exports = router;
