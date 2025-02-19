import "dotenv/config";
import amqp from "amqplib";

async function sendMessage(message) {
    try {
        const connection = await amqp.connect(process.env.RABBITMQ_URL);
        const channel = await connection.createChannel();
        const queue = process.env.QUEUE_NAME;

        await channel.assertQueue(queue, { durable: true });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));

        console.log(`Sent message: ${JSON.stringify(message)}`);

        setTimeout(() => {
            connection.close();
        }, 500);
    } catch (error) {
        console.error("Error sending message to RabbitMQ:", error);
    }
}

export default sendMessage;