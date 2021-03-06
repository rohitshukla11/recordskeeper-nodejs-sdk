'use strict';
var unirest = require("unirest");

class Address {

constructor(config) {
    this.rk_host = config['rk_host'];
    this.rk_user = config['rk_user'];
    this.rk_pass = config['rk_pass'];
    this.rk_chain = config['rk_chain'];
    }

getAddress(callback){
 var auth = 'Basic ' + Buffer.from(this.rk_user + ':' + this.rk_pass).toString('base64');
 var req = unirest("POST", this.rk_host);
 var address;
 
 req.headers({
    "cache-control": "no-cache",
    "authorization": auth,
    "content-type": "application/json"
    });
 
     req.type("json");
     req.send({
    "method": "getnewaddress",
    "params": [],
    "id": 1,
    "chain_name": this.rk_chain
    });
    req.end(function (response) {
    if (response.error){
        console.log(response.error);
        throw new Error(response.error);
     }
      else{
     var result = response.body; 
     address= result['result'];
     callback(address);
      }
    });
  }

 getMultisigAddress(required, key, callback) {
 var auth = 'Basic ' + Buffer.from(this.rk_user + ':' + this.rk_pass).toString('base64');
 var req = unirest("POST", this.rk_host);
 var address;
 var keys = key.split(",");
 req.headers({
    "cache-control": "no-cache",
    "authorization": auth,
    "content-type": "application/json"
    });
 
     req.type("json");
     req.send({
    "method": "createmultisig",
    "params": [required, keys],
    "id": 1,
    "chain_name": this.rk_chain
    });
    req.end(function (response) {
     var result = response.body; 
     address= result['result'];
     if(address == null){
       address = result['error']['message'];
     } else {
        address= result['result']['address'];
     }
     callback(address);
    });
}

getMultisigWalletAddress(required, key, callback) {
 var auth = 'Basic ' + Buffer.from(this.rk_user + ':' + this.rk_pass).toString('base64');
 var req = unirest("POST", this.rk_host);
 var multisigaddress;
 var address;
 var keys = key.split(",");
 req.headers({
    "cache-control": "no-cache",
    "authorization": auth,
    "content-type": "application/json"
    });
 
     req.type("json");
     req.send({
    "method": "addmultisigaddress",
    "params": [required, keys],
    "id": 1,
    "chain_name": this.rk_chain
    });
    req.end(function (response) {
     var result = response.body; 
     address= result['result'];
     if(address == null){
       multisigaddress = result['error']['message'];
     } else {
        multisigaddress= result['result'];
     }
     callback(multisigaddress);
    });
}

 retrieveAddresses(callback) {
 var auth = 'Basic ' + Buffer.from(this.rk_user + ':' + this.rk_pass).toString('base64');
 var req = unirest("POST", this.rk_host);
 var addresses;
 var address_count;
 var params_array = {};
 req.headers({
    "cache-control": "no-cache",
    "authorization": auth,
    "content-type": "application/json"
    });
 
     req.type("json");
     req.send({
    "method": "getaddresses",
    "params": [],
    "id": 1,
    "chain_name": this.rk_chain
    });
    req.end(function (response) {
    if (response.error){
        console.log(response.error);
        throw new Error(response.error);
     }
      else{
     var result = response.body; 
     addresses = result['result'];
     address_count = addresses.length;
     params_array['addresses'] = addresses;
     params_array['address_count'] = address_count;
     callback(params_array);
     
      }
    });
}

 checkifValid(addr, callback) {
 var auth = 'Basic ' + Buffer.from(this.rk_user + ':' + this.rk_pass).toString('base64');
 var req = unirest("POST", this.rk_host);
 var valid;
 var addressCheck;
 req.headers({
    "cache-control": "no-cache",
    "authorization": auth,
    "content-type": "application/json"
    });
 
     req.type("json");
     req.send({
    "method": "validateaddress",
    "params": [addr],
    "id": 1,
    "chain_name": this.rk_chain
    });
    req.end(function (response) {
     var result = response.body; 
     valid = result['result']['isvalid'];
     if (valid == true){
        addressCheck = "Address is valid";
     }
      else {
        addressCheck = "Address is invalid";
      }
    callback(addressCheck);
    });
  }

 checkifMineAllowed(addr, callback) {
 var auth = 'Basic ' + Buffer.from(this.rk_user + ':' + this.rk_pass).toString('base64');
 var req = unirest("POST", this.rk_host);
 var permission;
 var permissionCheck;
 
 req.headers({
    "cache-control": "no-cache",
    "authorization": auth,
    "content-type": "application/json"
    });
 
     req.type("json");
     req.send({
    "method": "validateaddress",
    "params": [addr],
    "id": 1,
    "chain_name": this.rk_chain
    });
    req.end(function (response) {
    if (response.error){
        console.log(response.error);
        throw new Error(response.error);
     }
      else{
     var result = response.body; 
     var valid = result['result']['isvalid'];
     permission = result['result']['ismine'];
     if (valid == true){
        permission = result['result']['ismine'];
        if (permission == true){
        permissionCheck = "Address has mining permission";
     }
      else {
        permissionCheck  = "Address has not mining permission";
      }
    } else {
        permissionCheck = "Invalid address, please check for valid address";
    }
      
      }
      callback(permissionCheck);
    });
}
checkBalance(address, callback) {
var auth = 'Basic ' + Buffer.from(this.rk_user + ':' + this.rk_pass).toString('base64');
 var req = unirest("POST", this.rk_host);
 var balance;
 
 req.headers({
    "cache-control": "no-cache",
    "authorization": auth,
    "content-type": "application/json"
    });
 
     req.type("json");
     req.send({
    "method": "getaddressbalances",
    "params": [address],
    "id": 1,
    "chain_name": this.rk_chain
    });
    req.end(function (response) {
    var result = response.body; 
    balance = result['result'];
    if(balance == null){
       balance = result['error']['message'];
     } else {
        balance= result['result'][0]['qty'];
     }
     callback(balance);
    });
}

importAddress(addr, callback) {
 var auth = 'Basic ' + Buffer.from(this.rk_user + ':' + this.rk_pass).toString('base64');
 var req = unirest("POST", this.rk_host);
 var status;
 var resp;
 
 req.headers({
    "cache-control": "no-cache",
    "authorization": auth,
    "content-type": "application/json"
    });
 
     req.type("json");
     req.send({
    "method": "importaddress",
    "params": [addr," ", false],
    "id": 1,
    "chain_name": this.rk_chain
    });
    req.end(function (response) {
     var result = response.body; 
     status = result['result'];
     var error = result['error'];
     if (status == null & error == null){
        resp = "Address successfully imported";
     } else if((status == null & error != null)){
        resp = error['message'];
     } else {
        resp = 0;
     }
     callback(resp);
    }); 
 }
}

module.exports = Address;