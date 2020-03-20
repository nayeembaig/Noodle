const kafka = require('kafka-node')
const Producer = kafka.Producer
const Consumer = kafka.Consumer
const client = new kafka.KafkaClient(process.env.KAFKA_SERVER)


let producer = null
let consumer = null

try {
producer = new Producer(client);
consumer = new Consumer(

  client,
  [{ topic: 'current-status', 
    partition: 1 }],
    {
      autoCommit: false,
      encoding: 'utf8',
      fromOffset: true
    }
 )
  }
catch (error) {
	console.log(error)
	process.exit()
}

module.exports={producer,consumer}