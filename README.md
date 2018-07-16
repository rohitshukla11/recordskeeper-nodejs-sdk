RecordsKeeper-nodejs-sdk 
========================


It is an infrastructure to build RecordsKeeper blockchain-based applications, products and is used to work around applications that are built on top of this blockchain platform.


## Getting Started

Before you begin you'll need to have nodejs and npm installed. There are several options for installation for  depending on the operating system you are using.
Step 1: Create a new directory and make a package.json file inside it.

```bash
{
  "dependencies": {
    "recordskeeper": "^0.1.0"
  }
}

```

Step 2: Run the following command.
```bash

npm i

```
Creating Connection
-------------------

Config file to import config parameters:

```bash
    
   var config = require('./config.json');
```
   
Importing chain url and chain name from config file:

* URL: Url to connect to the chain ([RPC Host]:[RPC Port])
* Chain-name: chain name

```bash
  var rk_host = config['rk_host'];
  var rk_chain = config['rk_chain'];
```   

Node Authentication
-------------------

Importing user name and password values from config file to authenticate the node:

* User name: The rpc user is used to call the APIs.
* Password: The rpc password is used to authenticate the APIs.

```bash
    var rk_user = config['rk_user'];
    var rk_pass = config['rk_pass'];

``` 

## Libraries

- [Addresses](https://github.com/RecordsKeeper/recordskeeper-nodejs-sdk/blob/master/src/address.js) Library to work with RecordsKeeper addresses. You can generate new address, check all addresses, check address validity, check address permissions, check address balance by using Address class. You just have to pass parameters to invoke the pre-defined functions.

- [Assets](https://github.com/RecordsKeeper/recordskeeper-nodejs-sdk/blob/master/src/assets.js) Library to work with RecordsKeeper assets. You can create new assets and list all assets by using Assets class. You just have to pass parameters to invoke the pre-defined functions.

- [Block](https://github.com/RecordsKeeper/recordskeeper-nodejs-sdk/blob/master/src/block.js) Library to work with RecordsKeeper block informaion. You can collect block information by using block class. You just have to pass parameters to invoke the pre-defined functions.

- [Blockchain](https://github.com/RecordsKeeper/recordskeeper-nodejs-sdk/blob/master/src/blockchain.js) Library to work with RecordsKeeper block informaion. You can collect block information by using block class. You just have to pass parameters to invoke the pre-defined functions.

- [Permissions](https://github.com/RecordsKeeper/recordskeeper-nodejs-sdk/blob/master/src/permissions.js) Library to work with RecordsKeeper permissions. You can grant and revoke permissions like connect, send, receive, create, issue, mine, activate, admin by using Assets class. You just have to pass parameters to invoke the pre-defined functions.

- [Stream](https://github.com/RecordsKeeper/recordskeeper-nodejs-sdk/blob/master/src/stream.js) Library to work with RecordsKeeper streams. You can publish, retrieve and verify stream data by using stream class. You just have to pass parameters to invoke the pre-defined functions.

- [Transaction](https://github.com/RecordsKeeper/recordskeeper-nodejs-sdk/blob/master/src/transaction.js) Library to work with RecordsKeeper transactions. You can send transaction, create raw transaction, sign raw transaction, send raw transaction, send signed transaction, retrieve transaction information and calculate transaction's fees by using transaction class. You just have to pass parameters to invoke the pre-defined functions.

- [Wallet](https://github.com/RecordsKeeper/recordskeeper-nodejs-sdk/blob/master/src/wallet.js) Library to work with RecordsKeeper wallet functionalities. You can create wallet, dump wallet into a file, backup wallet into a file, import wallet from a file, lock wallet, unlock wallet, change wallet's password, retrieve private key, retrieve wallet's information, sign and verify message by using wallet class. You just have to pass parameters to invoke the pre-defined functions.


## Unit Tests

Under recordskeeper_node_sdk/test. 

- To run all the test cases:

```bash
npm test

```

- To run a particular test case file:

```bash
npm test test_file name

```

- To run a particular test case:

```bash
npm test test_name

```


## Documentation

The complete docs are here: [RecordsKeeper nodejs-sdk documentation](https://github.com/RecordsKeeper/recordskeeper-nodejs-sdk/tree/master/docs).


## License

Copyright (c) 2016-2018 Recordskeeper 
License: GNU General Public License version 3, see COPYING

Portions copyright (c) 2014-2017 Coin Sciences Ltd
Portions copyright (c) 2009-2016 The Bitcoin Core developers
Portions copyright many others - see individual files
