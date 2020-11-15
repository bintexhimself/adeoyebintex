const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Get route is live"
    })
});

app.listen(PORT, () => {
    console.log("Server started on port 5000");
})
