const mqtt = require('mqtt');

let client = mqtt.connect('tcp://45.77.37.89:1883')

let time  = [100000, 20000];

for (let i=0;i<=10;i++) {
  (function(ind) {
    setTimeout(function(){
      console.log(ind);
      client.publish("mqtt/demo", "hello world! " + i)
    }, 1000 * ind);
  })(i);
}