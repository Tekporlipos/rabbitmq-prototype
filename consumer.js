// import "dotenv/config";
// import amqp from "amqplib";
//
// async function startConsumer() {
//     try {
//         const connection = await amqp.connect(process.env.RABBITMQ_URL);
//         const channel = await connection.createChannel();
//         const queue = process.env.QUEUE_NAME;
//
//         await channel.assertQueue(queue, { durable: true });
//
//         console.log(`Waiting for messages in '${queue}'...`);
//
//         channel.consume(queue, (msg) => {
//             if (msg !== null) {
//                 channel.ack(msg);
//             }
//         });
//     } catch (error) {
//         console.error("Error starting RabbitMQ consumer:", error);
//     }
// }
//
// export default startConsumer;