const { Producer } = require("sinek");
const most = require("most");

const addOne = x => x + 1;
const numbersStream = most.iterate(addOne, 1).take(500);

const producer = new Producer(require("./config"), ["numbers"], 1);

const sendToNumbers = item => producer.send("numbers", item);

const streamToProducer = numbersStream.map(sendToNumbers).awaitPromises();

const streamToProducerIndefinitely = () => streamToProducer.drain().then(streamToProducerIndefinitely);

producer.connect().then(streamToProducerIndefinitely);
