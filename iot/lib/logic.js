'use strict';
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
/**
 * Add stream data to blockchain
 * @param {org.acme.iot.adddata} input - the input to be processed
 * @transaction
 */
function adddata(input){
    var factory = getFactory();
    var sensor_value=input.sensor_value;
    var rID=makeid();
    var id =input.ID;
    var current_time=input.current_time;
    return getAssetRegistry("org.acme.iot.stream_data")
    .then(function(assetRegistry){
        newdata=factory.newResource("org.acme.iot", "stream_data",rID);
        newdata.ID=id;
        newdata.current_time=current_time;
        newdata.sensor_value=sensor_value;
        assetRegistry.add(newdata);

    });
   
}

/**
 * Add stream data to blockchain
 * @param {org.acme.iot.addsdata} input - the input to be processed
 * @transaction
 */
function addsdata(input){
    var factory=getFactory();
    var sID=makeid();
    var ID=input.ID;
    var timestamp=input.time;
    var switch_state=input.switch_state;
    var credit_left=input.credit_left;
    return getAssetRegistry("org.acme.iot.switchdata")
    .then(function(assetRegistry){
        newdata=factory.newResource("org.acme.iot", "switch_data",sID);
        newdata.ID=ID;
        newdata.timestamp=timestamp;
        newdata.switch_state=switch_state;
        newdata.credit_left=credit_left;
        return assetRegistry.add(newdata);
    
    });
}
