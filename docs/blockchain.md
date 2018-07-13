---
title: Blockchain Class Usage
...

Library to work with Blockchain in RecordsKeeper Blockchain.

You can generate new address, check all addresses, check address
validity, check address permissions, check address balance by using
Address class. You just have to pass parameters to invoke the
pre-defined functions.

Libraries
=========

Import recordskeepr library first to get started with the functionality.

``` {.sourceCode .python}
var recordskeeper = require('recordskeeper');  
```

Creating Connection
===================

Config file to import config parameters:

``` {.sourceCode .python}
var config = require('./config.json');
```

Importing chain url and chain name from config file:

-   URL: Url to connect to the chain (\[RPC Host\]:\[RPC Port\])
-   Chain-name: chain name

``` {.sourceCode .python}
var rk_host = config['rk_host'];

var rk_chain = config['rk_chain'];
```

Node Authentication
===================

Importing user name and password values from config file to authenticate
the node:

-   User name: The rpc user is used to call the APIs.
-   Password: The rpc password is used to authenticate the APIs.

``` {.sourceCode .python}
var rk_user = config['rk_user'];

var rk_pass = config['rk_pass'];
```

Now we have node authentication credentials.

Blockchain Class
================

<div class="Blockchain">

Blockchain class is used to call blockchain related functions like
retrieving blockchain parameters, retrieving node's information,
retrieving mempool's information, retrieving node's permissions and
check node's balance functions which are used on the RecordsKeeeper
Blockchain.

</div>

**1. Retrieve Blockchain parameters of RecordsKeeper Blockchain**

getChainInfo() function is used to retrieve Blockchain parameters.

``` {.sourceCode .python}
getChainInfo(callback)  

var blockchain = new recordskeeper.Blockchain(); #object of class blockchain

block.getblockinfo(function(response){          #getblockinfo() function call  

console.log(response['chain-protocol'])         #prints blockchain's protocol
console.log(response['chain-description'])       #prints blockchain's description
console.log(response['root-stream-name'])       #prints blockchain's root stream
console.log(response['maximum-blocksize'])      #prints blockchain's maximum block size
console.log(response['default-network-port'])    #prints blockchain's default network port
console.log(response['default-rpc-port'])        #prints blockchain's default rpc port
console.log(response['mining-diversity'])        #prints blockchain's mining diversity
console.log(response['chain-name'])              #prints blockchain's name

 });
```

It will return the information about RecordsKeeper blockchain's
parameters.

**2. Retrieve node's information on RecordsKeeper Blockchain**

getNodeInfo() function is used to retrieve node's information on
RecordsKeeper Blockchain.

``` {.sourceCode .python}
getNodeInfo(callback) 

var blockchain = new recordskeeper.Blockchain(); #object of class blockchain

block.getblockinfo(function(response){      #getblockinfo() function call

console.log(response['node-balance'])     #prints balance of the node
console.log(response['blocks'])     #prints no of synced blocks
console.log(response['node-address'])     #prints node's address
console.log(response['difficulty'])     #prints node's difficulty 

 });
```

It will return node's balance, no of synced blocks, node's address and
node's difficulty.

**3. Retrieve permissions given to the node on RecordsKeeper
Blockchain**

permissions() function is used to retrieve node's permissions.

``` {.sourceCode .python}
permissions(callback)

var blockchain = new recordskeeper.Blockchain(); #object of class blockchain

block.permissions(function(permissions){                #permissions() function call 

console.log(permissions)      # prints permissions available to the node

 });
```

It will return the permissions available to the node.

**4. Retrieve pending transaction's information on RecordsKeeper
Blockchain**

getpendingTransactions() function is used to retrieve pending
transaction's information like no of pending transactions and the
pending transactions.

``` {.sourceCode .python}
getpendingTransactions(callback) 

var blockchain = new recordskeeper.Blockchain(); #object of class blockchain

block.getpendingTransactions(function(response){    #getpendingTransactions() function call

console.log(response['tx'])            #prints pending transactions
console.log(response['tx_count'])       #prints pending transaction count

 });
```

It will return the information of pending transactions on Recordskeeper
Blockchain.

**5. Check node's total balance**

checkNodeBalance() function is used to check the total balance of the
node.

``` {.sourceCode .python}
checkNodeBalance(callback)

var blockchain = new recordskeeper.Blockchain(); #object of class blockchain

block.getpendingTransactions(function(balance){  #checkNodeBalance() function call

console.log(balance);          #prints total balance of the node

 });
```

It will return the total balance of the node on RecordsKeeper
Blockchain.