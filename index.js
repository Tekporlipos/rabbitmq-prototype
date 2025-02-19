import "dotenv/config";
import express from "express";
import sendMessage from "./producer.js";
import startConsumer from "./consumer.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/send", async (req, res) => {
    const message = req.body;
    try {
        await sendMessage(message);
        res.status(200).json({ success: true, message: "Message sent to RabbitMQ", data: message });
    } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).json({ success: false, message: "Failed to send message" });
    }
});

// Start the RabbitMQ consumer
startConsumer().catch(console.error);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});