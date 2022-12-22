import { Kafka } from 'kafkajs';
import { randomUUID } from 'node:crypto';

async function bootstrap() {
    const kafka = new Kafka({
        clientId: 'test-producer',
        brokers: ['probable-bison-7940-us1-kafka.upstash.io:9092'],
        sasl: {
            mechanism: 'scram-sha-256',
            username: 'cHJvYmFibGUtYmlzb24tNzk0MCTVI0QD3J3WxGJtAQVJBst3wbLeoKqpacpTUHQ',
            password: 'ff70888deec04e97a2b468c66d53dd3e',
        },
        ssl: true,
    });

    const producer = kafka.producer();

    await producer.connect();

    await producer.send({
        topic: 'notifications.send-notification',
        messages: [
            {
                value: JSON.stringify({
                    content: 'New friend solicitation!',
                    category: 'Social',
                    recipientId: randomUUID(),
                })
            }
        ],
    });

    await producer.disconnect();
}

bootstrap();
