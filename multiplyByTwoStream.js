const { KafkaStreams } = require("kafka-streams");

const config = require("./config");

const multiplyByTwo = x => x * 2;

const factory = new KafkaStreams(config);
const kafkaStream = factory.getKStream();

kafkaStream
  .from("numbers")
  /*
  Example message:

  { "value": [21, 34, 12],
  "size": 5,
  "key": [21, 34, 12, 14, 12],
  "topic": "numbers",
  "offset": 46,
  "partition": 0,
  "timestamp": 1524412800216 }

  Note that "value" and "key" are byte arrays!

  */
  .mapBufferValueToString() // map "value" -> string
  .mapWrapKafkaValue() // extract just the "value"
  .map(multiplyByTwo)
  .to("numbers-multiplied-by-two");

kafkaStream.start();
