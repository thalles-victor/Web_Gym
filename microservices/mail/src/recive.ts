import { Kafka } from "kafkajs";
import {  Partitioners } from "kafkajs";

const kafka = new Kafka({
  clientId: 'payment_microservice',
  brokers: ['localhost:9092']
});

const consumer = kafka.consumer({groupId: 'read-grup'})

async function read() {
  await consumer.connect()
  await consumer.subscribe({ topic: 'teste-topic', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message}) => {

      console.log(message.value?.toString())
    }
  })
}

read()
