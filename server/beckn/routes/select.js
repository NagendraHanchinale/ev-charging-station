const express = require('express');
const axios = require('axios');
const { signPayload } = require('../utils/signer');
const router = express.Router();

router.post('/select', async (req, res) => {
    try {
        const payload = req.body;
        const signature = signPayload(payload);

        const result = await axios.post('http://localhost:4001/on_select', { payload, signature });

        res.json(result.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
