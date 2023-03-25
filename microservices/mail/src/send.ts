import { Kafka } from "kafkajs";
import {  Partitioners } from "kafkajs";

const kafka = new Kafka({
  clientId: 'payment_microservice',
  brokers: ['kafka_service:9092']
});

const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner })

async function sender() {
  await producer.connect()
  await producer.send({
    topic: 'REGISTER_PRODUCT',
    messages: [
      {
        value: "thalles comprou um produto" + (new Date()).toISOString()
      },
    ]
  }).then(() => console.log('Message sendded'))
}

sender()
