---
title: Smart Contract Develop
date: 2024-12-14
tags: ["web3"]
---

## 什么是智能合约

智能合约是部署在以太坊某个地址上运行的程序，它由数据和函数组成，可以在收到交易时执行。

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
```

pragma 是编译器指令，用来声明编译器版本的。

`uint storedData` 声明一个名叫 storedData 的**无符号整型**的**状态变量**，定义的 set 和 get 函数是用来读写变量 storedData。


### 数据

数据存在两个位置：要么是存储，要么是内存。

1. Storage

状态变量用来表示持久性的数据，这些值会被存储到区块链上。

```solidity
contract SimpleStorage {
    uint storedData; // State variable
    // ...
}
```

常见的类型包括：address，bool，整数，定点数，固定大小的字节数组，动态大小的字节数组，有理数和整数常量，字符常量，十六进制常量，枚举

2. 内存变量

内存变量用来声明仅在合约函数执行阶段存在的值，这些变量不会永久存储在区块链上。

3. 环境变量

除了在自己合约上定义的变量之外，还有一些特殊的全局变量。 它们主要用于提供有关区块链或当前交易的信息。如：

|属性|类型|描述|
|-|-|-|
|block.timestamp|uint256| 当前区块的时间戳|
|msg.sender|地址|消息的发送者（当前调用）|

### 函数

函数定义包含：

- 参数变量和类型
- internal/external 声明
- pure/view/payable 声明
- 返回类型


1. 调用方式

- internal：Internal 函数或者状态变量只能在内部访问
- external：External 函数是合约接口的一部分，可以被其他合约或者交易调用

2. 常见的函数类型

- view 函数：view 函数不会修改合约数据

- constructor 函数：constructor 函数只会在合约部署的时候执行一次

- 内建函数：比如：address.send()，可以将 ETH 发送给另一个账户

### 事件日志

可以通过订阅事件来完成前后端与合约的通信

```solidity
event Transfer(address from, address to, uint amount);

emit Transfer(msg.sender, receiver, amount);
```

### 开发框架

- hardhat：是基于 node 生态的以太网开发环境，对 js 开发者相对友好