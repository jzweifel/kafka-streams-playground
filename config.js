module.exports = {
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
    autoCommitIntervalMs: 10,
    requireAcks: 1,
    ackTimeoutMs: 100,
    partitionerType: 3,
  }
};
