# Kafka Streams Playground

Playing around with Kafka Streams in Node using the awesome [node-kafka-streams](https://github.com/nodefluent/kafka-streams)! ✨🚀✨

## Why Kafka Streams?

- enables high-throughput, fast stream processing of kafka messages
- simple, high-level API allows you to write clean declarative code in a way that is distributed and fault-tolerant
- built-in backpressuring
- provides a plain JS implementation of a Kafka client as well as an even faster native implementation leveraging `librdkafka`
- isn't a framework -- you can drop the Kafka Streams library into any application, and don't need a specialized Kafka Streams kafka cluster -- it's just a high-level abstraction over the Kafka Consumer and Kafka Producer APIs

## When to use Kafka Streams

- transforming input Kafka topics into output Kafka topics
- draining an input Kafka topic to a database
- processing real-time data streams

## Prerequisities

- kafka broker, version `>= 0.11.x`
  - I recommend using the amazing [🥞 kafka-waffle-stack](https://github.com/TribalScale/kafka-waffle-stack#-installation)
- Node.js version `>= 8.x.x`

## Configuration

```javascript
{
    kafkaHost: "localhost:9092",
    logger: {
      debug: msg => console.log(msg),
      info: msg => console.log(msg),
      warn: msg => console.log(msg),
      error: msg => console.error(msg)
    },
    groupId: "kafka-streams-test",
    clientName: "kafka-streams-test-name",
    workerPerPartition: 1,
    options: {
        sessionTimeout: 8000,
        protocol: ["roundrobin"],
        fromOffset: "earliest",
        fetchMaxBytes: 1024 * 100,
        fetchMinBytes: 1,
        fetchMaxWaitMs: 10,
        heartbeatInterval: 250,
        retryMinTimeout: 250,
        autoCommit: true,
        autoCommitIntervalMs: 1000,
        requireAcks: 1,
        ackTimeoutMs: 100,
        partitionerType: 3
    }
}
```


## Other helpful tools
- [kafkacat](https://github.com/edenhill/kafkacat), a generic command line non-JVM Apache Kafka producer and consumer. It's like netcat, but for Kafka!

## Further Reading
- [Introducing Kafka Streams: Stream Processing Made Simple](https://www.confluent.io/blog/introducing-kafka-streams-stream-processing-made-simple/)
