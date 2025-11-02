const express = require('express');
const cors = require('cors');
const app = express();
const router = require("./routes/payments.routes")

const port = 8000;

app.use(express.json());
app.use(cors());

app.use('/api',router);

app.get('/' , (req , res) => {
    res.send('HELLO WORD');
})

app.listen(port , () => {
    console.log(`app is listing at http://localhost:${port}`);
})