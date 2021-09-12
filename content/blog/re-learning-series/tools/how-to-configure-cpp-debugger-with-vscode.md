---
title: 在 windows 上配置 c/c++ 开发环境
date: 2021-09-11
description: 了解 gcc/g++, gdb, make 和 cmake 这些名词的含义以及用处，并且基于 cmake 完成 vscode 的 c/c++ 开发调试环境的配置。
---

作为一个前端开发工程师，接触最多的编辑器就是 vscode，所以在我需要搭建c/c++开发环境时，第一选择就是 vscode，差点没把我劝退了🙃。

```cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello C++" << endl;
}
```

在进入到 vscode 配置之前，我们需要了解几个工具，以及工具的作用。只有清楚这些工具的作用，才能更好的理解 vscode 的配置。

## what hell is g++, gdb, make and cmake?

### g++

与 JavaScript 这类的脚本语言不同，cpp 代码需要先编译，再执行。g++ 就是 C++ 的编译器，它能给把代码字符串编译成字节码，在 windows 编译结果就是 exe 文件：
```sh
g++ test.cpp -o test.exe
```
多文件编译的话，也很简单：
```sh
g++ test.cpp test2.cpp -o test.exe
```

### gdb

在前端开发过程中，我们经常会用到浏览器的 debugger 工具进行断点调试。gdb 就是用来进行 cpp 代码调试的。为了更好的调试体验，我们需要在编译文件中增加一些信息，比如代码是行列信息，这就需要通过参数 `-g` 告诉编译器：

```sh
g++ -g test.cpp -o test.exe
```

再通过以下命令进行 cpp 调试：

```sh
gdb test.exe
```

### make & cmake

`gcc/g++` 是编译工具，而 `make` 是构建工具，有点类似于 `gulp` 和 `babel` 的区别。

构建是一个非常复杂的过程，哪些文件需要先编译，哪些需要后编译等，开发者需要通过 `Makefile` 去编写构建规则去指示 `make` 工具。`Makefile` 设计一整套语法，支持规则的编写。手写 `Makefile` 是一件麻烦的事情，不同的平台可能需要编写不同的 `Makefile` 工具。

`cmake` 的出现就是为了简化这一过程，`cmake` 能给帮你生成 `Makefile` 文件，你没看错，`cmake` 不是替代 `make`，而且为了更简便使用 `make`。

那么，`cmake` 是如何生成 `Makefile` 文件的呢？答案是，你需要配置 `CMakeLists.txt`。`cmake` 会根据你手写的 `CMakeLists.txt` 生成 `Makefile`， 所以 `cmake = make maker`，😃。一个最简单的 `CMakeLists.txt` 差不多是这样：

```cmake
project(test)

add_executable(test test.cpp test1.cpp)
```

## vscode 配置

### 配置编译构建任务 task.json

我们以 `cmake` 为示例，用 `g++`也是同理。

#### 准备阶段

1. 首先，在项目根目录下，新建文件 `CMakeLists.txt`;
2. 其次，配置 `CMakeLists.txt`;
```cmake
project(test)

add_executable(test test.cpp test1.cpp)
```
3. 最后，在项目根目录下，创建 `build` 目录;

#### 正式构建

1. 进入到 `build` 目录下，执行以下命令生成 `Makefile` 文件：

```sh
cd build
cmake ..
```

2. 执行 make 命令生成可执行文件：

```sh
mingw32-make.exe
```

3. 让 vscode 替你完成步骤 1 和 2，配置 `task.json`

```json
{
	"version": "2.0.0",
	"options": {
		"cwd": "${workspaceFolder}/build"
	},
	"tasks": [
		{
			"type": "shell",
			"label": "cmake",
			"command": "cmake",
			"args": [
				".."
			]
		},
		{
			"label": "make",
			"command": "mingw32-make.exe"
		},
		{
			"label": "build",
			"dependsOn": [
				"cmake",
				"make"
			]
		}
	]
}
```

### 配置调试 launch.json

配置参数比较多，大多数是 vscode 自动生成的，我们需要关注以下几个参数：

|参数|说明|
|-|-|
|program|调试程序，因为这里通过 cmake 构建的，构建产物在 build 目录下|
|miDebuggerPath|degugger 调试工具路径，这里就是 gdb 的路径|
|preLaunchTask|调试前需要做的任务，这里配置的 `build` 就是对应 `task.json` 的 `tasks[2]`|

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "(gdb) 启动",
      "type": "cppdbg",
      "request": "launch",
      "program": "${fileDirname}\\build\\example.exe",
      "args": [],
      "stopAtEntry": false,
      "cwd": "${workspaceFolder}",
      "environment": [],
      "externalConsole": true,
      "MIMode": "gdb",
      "miDebuggerPath": "C:\\Program Files (x86)\\mingw-w64\\mingw32\\bin\\gdb.exe",
      "setupCommands": [
        {
          "description": "为 gdb 启用整齐打印",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        }
      ],
      "preLaunchTask": "build"
    }
  ]
}
```

好了，vscode 的 c/c++ 的开发/调试环境就配置好了，又可以愉快的断点调试了 🥂。
