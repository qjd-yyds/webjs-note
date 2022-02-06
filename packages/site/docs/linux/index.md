# shell 简介

## shell 是什么

Shell 这个单词的原意是“外壳”，跟 kernel（内核）相对应，比喻内核外面的一层，即用户跟内核交互的对话界面。

具体来说，Shell 这个词有多种含义。

首先，Shell 是一个程序，提供一个与用户对话的环境。这个环境只有一个命令提示符，让用户从键盘输入命令，所以又称为命令行环境（command line interface，简写为 CLI）。Shell 接收到用户输入的命令，将命令送入操作系统执行，并将结果返回给用户。Shell 基本上指的就是命令行环境。

其次，Shell 是一个命令解释器，解释用户输入的命令。它支持变量、条件判断、循环操作等语法，所以用户可以用 Shell 命令写出各种小程序，又称为脚本（script）。这些脚本都通过 Shell 的解释执行，而不通过编译。

最后，Shell 是一个工具箱，提供了各种小工具，供用户方便地使用操作系统的功能

## shell 的种类

Shell 有很多种，只要能给用户提供命令行环境的程序，都可以看作是 Shell

历史上 shell 有以下种类

- Bourne Shell（sh）
- Bourne Again shell（bash）
- C Shell（csh）
- TENEX C Shell（tcsh）
- Korn shell（ksh）
- Z Shell（zsh）
- Friendly Interactive Shell（fish）

查看当前运行的 shell

```shell
echo $SHELL
```

查看当前系统安装的所有 shell

```shell
cat /etc/shells
```

## 命令行环境

### 终端模拟器

如果是不带有图形环境的 Linux 系统（比如专用于服务器的系统），启动后就直接是命令行环境。

不过，现在大部分的 Linux 发行版，尤其是针对普通用户的发行版，都是图形环境。用户登录系统后，自动进入图形环境，需要自己启动终端模拟器，才能进入命令行环境。

所谓“终端模拟器”（terminal emulator）就是一个模拟命令行窗口的程序，让用户在一个窗口中使用命令行环境，并且提供各种附加功能，比如调整颜色、字体大小、行距等等。

不同 Linux 发行版（准确地说是不同的桌面环境）带有的终端程序是不一样的，比如 KDE 桌面环境的终端程序是 konsole，Gnome 桌面环境的终端程序是 gnome-terminal，用户也可以安装第三方的终端程序。所有终端程序，尽管名字不同，基本功能都是一样的，就是让用户可以进入命令行环境，使用 Shell。

### 命令行提示符

进入命令行环境以后，用户会看到 Shell 的提示符。提示符往往是一串前缀，最后以一个美元符号$结尾，用户可以在这个符号后面输入各种命令
::: tip 
例子中，完整的提示符是[user@hostname] $，其中前缀是用户名（user）加上@，再加主机名（hostname）。比如，用户名是 bill，主机名是 home-machine，前缀就是 bill@home-machine。
:::
::: warning 注意
根用户（root）的提示符，不以美元符号（$）结尾，而以井号（#）结尾，用来提醒用户，现在具有根权限，可以执行各种操作，务必小心，不要出现误操作。这个符号是可以自己定义的
:::

```bash
[user@hostname] $
```

### 进入和退出

进入命令行环境以后，一般就已经打开 Bash 了。如果你的 Shell 不是 Bash，可以输入 bash 命令启动 Bash。

退出 Bash 环境，可以使用 exit 命令，也可以同时按下 Ctrl + d。

:::: code-group
::: code-group-item 进入

```
$ bash
```

:::
::: code-group-item 退出

```
$ exit
```

:::
::::
Bash 的基本用法就是在命令行输入各种命令，非常直观。作为练习，可以试着输入 pwd 命令。按下回车键，就会显示当前所在的目录。

```
$ pwd
/Users/qianjd
```

## Shell 和 Bash 的历史

Shell 伴随着 Unix 系统的诞生而诞生。

1969 年，Ken Thompson 和 Dennis Ritchie 开发了第一版的 Unix。

1971 年，Ken Thompson 编写了最初的 Shell，称为 Thompson shell，程序名是 sh，方便用户使用 Unix。

1973 年至 1975 年间，John R. Mashey 扩展了最初的 Thompson shell，添加了编程功能，使得 Shell 成为一种编程语言。这个版本的 Shell 称为 Mashey shell。

1976 年，Stephen Bourne 结合 Mashey shell 的功能，重写一个新的 Shell，称为 Bourne shell。

1978 年，加州大学伯克利分校的 Bill Joy 开发了 C shell，为 Shell 提供 C 语言的语法，程序名是 csh。它是第一个真正替代 sh 的 UNIX shell，被合并到 Berkeley UNIX 的 2BSD 版本中。

1979 年，UNIX 第七版发布，内置了 Bourne Shell，导致它成为 Unix 的默认 Shell。注意，Thompson shell、Mashey shell 和 Bourne shell 都是贝尔实验室的产品，程序名都是 sh。对于用户来说，它们是同一个东西，只是底层代码不同而已。

1983 年，David Korn 开发了 Korn shell，程序名是 ksh。

1985 年，Richard Stallman 成立了自由软件基金会（FSF），由于 Shell 的版权属于贝尔公司，所以他决定写一个自由版权的、使用 GNU 许可证的 Shell 程序，避免 Unix 的版权争议。

1988 年，自由软件基金会的第一个付薪程序员 Brian Fox 写了一个 Shell，功能基本上是 Bourne shell 的克隆，叫做 Bourne-Again SHell，简称 Bash，程序名为 bash，任何人都可以免费使用。后来，它逐渐成为 Linux 系统的标准 Shell。

1989 年，Bash 发布 1.0 版。

1996 年，Bash 发布 2.0 版。

2004 年，Bash 发布 3.0 版。

2009 年，Bash 发布 4.0 版。

2019 年，Bash 发布 5.0 版。

用户可以通过 bash 命令的--version 参数或者环境变量$BASH_VERSION，查看本机的 Bash 版本。

```shell
$ bash --version
GNU bash, version 3.2.57(1)-release (arm64-apple-darwin20)
Copyright (C) 2007 Free Software Foundation, Inc.
$ echo $BASH_VERSION
3.2.57(1)-release
```