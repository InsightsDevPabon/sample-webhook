const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/webhook", (req, res) => {
	console.log("Received Webhook (GET):", req.body);
	const result = JSON.stringify(res.body);
	res.json({ message: "Success! Webhook GET", result });
});

app.post("/webhook", (req, res) => {
	console.log("Received Webhook (POST):", req.body);
	const result = JSON.stringify(res.body);
	res.json({ message: "Success! Webhook POST", result });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
