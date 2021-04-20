const mqtt = require('mqtt')
let client  = mqtt.connect('tcp://45.77.37.89:1883')

client.on('connect', function () {
  client.subscribe('mqtt/demo', function (err, payload) {
    if (!err) {
      console.log('payload', payload);
    }
  })
})

client.on('message', function (topic, message) {
    console.log('message', message.toString())
    // client.end()
})