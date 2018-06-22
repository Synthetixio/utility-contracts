# utility-contracts

[![Build Status](https://travis-ci.com/Havven/utility-contracts.svg?branch=master)](https://travis-ci.com/Havven/utility-contracts)

A collection of useful smart contract components.

## Contents

Smart contracts can be found in the `contracts/` directory and include the following:

* `LimitedSetup`: Allows contract functions to operate only during a setup period.
* `Owned`: A contract with a privileged owner.
* `Pausable`: Provides the ability to pause contract functions. 
* `SafeDecimalMath`: Safe manipulation of unsigned fixed point decimal numbers.
* `SelfDestructible`: A contract that can be self destructed by its owner after a delay.


## Running Tests

The testing scripts require Python 3.6+, [web3.py](https://github.com/ethereum/web3.py) 4.0.0+, [py-solc](https://github.com/ethereum/py-solc) 2.1.0+, and [eth-utils](https://github.com/ethereum/eth-utils) 1.0.0+. To install these dependencies, ensure that python is up to date and run:

```pip3 install -r requirements.txt```

In addition [solc](https://github.com/ethereum/solidity) 0.4.24+ must be installed. The test suite uses [ganache](https://github.com/trufflesuite/ganache-cli) 6.1.0+ for execution speed, state snapshots, and time fast-forwarding. It can be installed from the node package manager with. The tests need :

```npm install ganache-cli```

Run the test suite as follows:

```python3 run_tests.py```
