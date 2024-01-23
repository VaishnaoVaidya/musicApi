const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/options', (req, res) => {

})





app.listen(port, () => {
    console.log("server listening on port http://localhost:3000");
})