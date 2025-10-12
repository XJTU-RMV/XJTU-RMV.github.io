# 罗禧文 Backup

## Pre.准备型任务

由于视觉组的任务主要涉及在Ubuntu(当前为20.04LTS版本)系统使用C++/Opencv进行开发，因此当前任务聚焦于对开发环境的准备。

### Ubuntu系统的安装

  在自身电脑硬盘空间比较大或者拥有拓展硬盘位置的情况下，推荐按照网上的教程直接安装Ubuntu20.04；
  若电脑空间较少或者缺乏可拓展性，可以考虑安装WSL2,但WSL2无法连接外置的摄像头，仅能作为学习和代码修改用。(https://blog.csdn.net/weixin_45027467/article/details/106862520)

### 开发工具包的安装

1. MVS，可以前往[HIKROBOT官网](https://www.hikrobotics.com/cn/machinevision/service/download?module=0)找到Linux版本的MVS进行下载，之后解压压缩包，运行压缩包中的setup.sh即可。
   ```bash
   # geek一点的也可以wget下载喵
   wget https://www.hikrobotics.com/cn2/source/support/software/MvCamCtrlSDK_STD_V4.4.0_240629.zip
   ```
2. glog，`sudo apt-get install libgoogle-glog-dev`。
3. Eigen3，`sudo apt-get install libeigen3-dev`。
4. ceres，通过 `sudo apt-get install`确保已经下载依赖 `libgoogle-glog-dev`、`libgflags-dev`、`libatlas-base-dev`、`libeigen3-dev`、`libsuitesparse-dev`，之后前往github中[ceres主页](https://github.com/ceres-solver/ceres-solver/tags)下载ceres1.14，使用cmake编译的方式安装。
5. openvino，下载[官方密钥](https://apt.repos.intel.com/openvino/2021/GPG-PUB-KEY-INTEL-OPENVINO-2021)，之后依次输入以下指令 `sudo apt-key add <PATH_TO_DOWNLOADED_GPG_KEY>`，`echo "deb https://apt.repos.intel.com/openvino/2021 all main" | sudo tee /etc/apt/sources.list.d/intel-openvino-2021.list`，`sudo apt update`、`sudo apt install intel-openvino-runtime-ubuntu20-2021.4.752`，其中可能在echo这一步骤出错，导致update无法进行，则删除list文件之后使用 `gedit`或者 `vim`指令手动创建，然后输入echo的内容。
6. opencv，使用openvino自带的opencv。为了播放视频，需要安装依赖：`sudo apt-get install gstreamer1.0-liba`

--------------------------------

# 高宁 Backup

## Ubuntu常用依赖与美化

假如说想要长期住在Ubuntu，一些对于系统的美化，让系统的使用更加的顺手肯定是少不了的，同时系统的常用依赖也是有必要安装的。

### 常用依赖的下载

我们需要下载一些常用的依赖，包括说git(用于github或者gitee相关的支持)、gcc、g++等一些熟悉的面孔以及zsh、curl之类的，使用方法还是在终端直接输入就好。

```zsh
sudo apt install git curl vim gcc g++ zsh chrome-gnome-shell cmake
```

### C++编程环境

#### 前言

在一切的开始，先介绍一下我们要做什么事情。

众所周知，编程需要对应的编程环境，而对于C++来说，这个环境主要是编译器以及CMake，本教程计划通过详细的图文指导，帮助大家快速上手搭建自己的编程环境。

本教程的安装内容均须要联网进行。

终端打开方式的快捷键为`ctrl alt t`。

#### 安装VSCode

通过Ubuntu自带的火狐浏览器找到熟悉的VSCode的[官网](https://code.visualstudio.com/)，并且进行安装。

![VSCode_deb](https://pic.axi404.top/VSCode_deb.8s38tjsmgy.webp)

选择.deb进行下载，下载完毕之后进入下载文件夹，应该可以看到下载的deb包，右键在终端中打开，输入：

```bash
sudo dpkg -i code_your_version.deb
```

其中`code_your_version.deb`为你的deb包的名字，在命令行中可以使用`TAB`进行自动补全，这样你就只需要输入一个code，之后进行自动补全即可。

输入密码，其中密码的输入是不可见的，输入之后终端没有反应并非你没有输入，输入之后按下回车即可。

稍等片刻，等命令行又一次可以输入的时候，在命令行中输入`code`，回车，进入VSCode。

#### 换源（可选）

对于大多数并为使用代理的读者来说，直接从Ubuntu的官方服务器下载是一件十分缓慢的事情，于是需要进行换源操作。

点击左下方的显示应用程序图表：![show_app_icon](https://pic.axi404.top/show_app_icon.4jo1jq2doh.webp)

选择软件和更新，进入以下界面：

![换源](https://pic.axi404.top/换源.1hs5ii11hf.webp)

其中`下载自`这一部分中内容并不相同，点击下拉菜单，其他，在其中选择你心仪的源，可以参照我这个，之后点击关闭-重新载入，等待结束即可。

#### 基础编译套装

换源之后就可以下载基础的编译工具了，也就是gcc、g++以及cmake，同时安装一些常用软件，在终端输入：

```bash
sudo apt install gcc g++ cmake git vim curl
```

之后输入密码，等待安装即可。

进入VSCode，在拓展中安装`CMake`、`CMake Tools`以及`C/C++`。

新建文件夹并且进入，按照老方法进行`ctrl shift p`，选择CMake快速入门，之后按照提示进行：

1. 输入项目名称，如`mytest`。
2. 创建C++项目
3. 创建可执行文件

之后依然是点击下方栏的生成（编译），或者直接点击三角形按钮（编译并运行），得到了喜闻乐见的`Hello`。

![CMake_test](https://pic.axi404.top/CMake_test.41xzv5103s.webp)

#### 豪华编译套装（进阶可选）

同时我们可以使用clangd等内容进行编译器的选择，依然是使用apt安装一定的内容：

```bash
sudo apt install clang-15 clangd-15 clang-format-15
```

之后我们前往建立软链接：

```bash
sudo rm /usr/bin/clang /usr/bin/clang++ /usr/bin/clangd /usr/bin/clang-format
sudo ln -s /usr/bin/clang-15 /usr/bin/clang
sudo ln -s /usr/bin/clang++-15 /usr/bin/clang++
sudo ln -s /usr/bin/clangd-15 /usr/bin/clangd
sudo ln -s /usr/bin/clang-format-15 /usr/bin/clang-format
```

（对于Ubuntu20.04的同学来说，以上全部的15改为12，输出没有找到xxx是正常现象）

在终端分别输入`clang`以及`clangd`得到以下输出：

![check_clang](https://pic.axi404.top/check_clang.2domxyapxg.webp)

则安装成功。

在VSCode安装`clangd`以及`Clang-Format`，其中`Clang-Format`如下图：

![clang-format](https://pic.axi404.top/clang-format.lvo31rd1h.webp)

点击齿轮图表-拓展设置，找到以下内容进行如下设置：

![clang-format_executable](https://pic.axi404.top/clang-format_executable.7ax3rsohqe.webp)

打开终端（`ctrl alt t`），创建`.clang-format`作为格式化代码的配置文件，并且向其中输入配置内容：

```bash
touch .clang-format
gedit .clang-format
```

```
{ BasedOnStyle: LLVM, UseTab: Never, IndentWidth: 4, TabWidth: 4, BreakBeforeBraces: Allman, AllowShortIfStatementsOnASingleLine: false, IndentCaseLabels: false, ColumnLimit: 0, AccessModifierOffset: -4, NamespaceIndentation: All, FixNamespaceComments: false }
```

保存并退出。

此时理想情况下，配置已经结束。

打开某一代码文件，右键选择格式化文档（快捷键为`ctrl shift i`），并且在弹窗中选择`clang-format`，可以发现代码变得十分的工整。

但是有的时候一些代码会用红线，说一些内容未找到（如iostream），但是编译可以正常进行，输入以下命令解决这一问题。

```bash
sudo apt install libstdc++-12-dev
```

按下`ctrl shift i`，可以格式化文档（使得代码变得工整）。

编译代码也可以正常进行。

### VSCode

曾几何时我们不敢使用VSCode进行编程，虽然我们都知道VSCode的拓展性之高，但是却畏于其配置之复杂，一个配置C++环境就已经十分的麻烦，但是就像是一开始我说的那样，Linux系统提供了较为便捷的配置方法，就像是上述的g++与gcc，只需要一行代码即可，所以说让我们从[官网](https://code.visualstudio.com/)下载VSCode吧，选择deb，之后使用下方语句。

```zsh
sudo dpkg -i <deb包的完整名称(包括后缀名)>
# 此行为注释，上方如 sudo dpkg -i code_1.74.0-1670260027_amd64.deb 
```
之后进入VSCode，换成简体中文(插件，一般来说右下角会提示你安装并重启，否则你可以点击在左侧栏中的拓展图标(如下图)，并搜索Chinese (Simplified) (简体中文)，选择第一个，点击install)。
![](https://pic.axi404.top/VSCode拓展.1sezbmz4fa.webp)
之后便是更加多的插件的选择，这些插件能让你的VSCode看上去更加顺眼。

#### CMake && CMake Tools

使用CMake编写CMakeList进行库与项目的关联是很重要的一环，当然，CMake还具有许多其他的强大功能。

### 字体

FiraCode是一款适合程序员的字体，支持很多的符号以及连字符，而且本身等宽，这里使用FiraCode Nerd Font，前往[官网](https://www.nerdfonts.com/font-downloads)，下拉找到FiraCode Nerd Font选择Download，下载并在本地解压，之后在终端使用指令`sudo mv` 你的这个文件夹的绝对路径或相对路径 `/usr/share/fonts`，这里的绝对路径可以进入你解压出来的文件夹，右键属性查看，在后面补全，使得路径以FiraCode结尾，相对路径同理，从当前终端位于的路径开始。这里的mv为move的意思，移动。
移动之后，输入`sudo fc-cache`之后就可以在终端或者VSCode中更换字体，如在终端中单击“三条杠”，选择配置文件首选项，然后点击配置文件下方的任一内容，一般为未命名，勾选自定义字体，点击选择，上拉，可选择为FiraCode Nerd Font Regular。而在VSCode中左下角齿轮-设置-Editor：Font Family，在下方文本框中最前面添加`'FiraCode Nerd Font',`，别忘了复制这个逗号，即可。之后在VSCode中搜索liga，选择Editor：Font Ligatures下方的在settings.json中编辑，将`"editor.fontLigatures": false`中的false改为true。这时候新建一个文本，输入!=，你就能看到连字符的效果了。
假如不行可以先重启一下。

### zsh

假如使用Ubuntu一开始自带的bash，终端界面应该非常的简陋，而zsh可以让你的终端更加美观，而且拥有更强大的补全功能。
在~目录下，假如没有.zshrc文件，创建一个，在其中输入：

```zsh
# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi


### Added by Zinit's installer
if [[ ! -f $HOME/.local/share/zinit/zinit.git/zinit.zsh ]]; then
    command mkdir -p "$HOME/.local/share/zinit" && command chmod g-rwX "$HOME/.local/share/zinit"
    command git clone https://github.com/zdharma-continuum/zinit "$HOME/.local/share/zinit/zinit.git" && \
        print -P "%F{33} %F{34}Installation successful.%f%b" || \
        print -P "%F{160} The clone has failed.%f%b"
fi

source "$HOME/.local/share/zinit/zinit.git/zinit.zsh"
autoload -Uz _zinit
(( ${+_comps} )) && _comps[zinit]=_zinit
### End of Zinit's installer chunk
# zinit
zinit light zsh-users/zsh-autosuggestions
zinit light zdharma/fast-syntax-highlighting
zinit snippet OMZ::lib/clipboard.zsh
zinit snippet OMZ::lib/completion.zsh
zinit snippet OMZ::lib/history.zsh
zinit snippet OMZ::lib/git.zsh
zinit snippet OMZ::lib/theme-and-appearance.zsh
zinit snippet OMZP::sudo/sudo.plugin.zsh
zinit ice depth"1" # git clone depth
zinit light romkatv/powerlevel10k

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

#proxy
alias setproxy="export ALL_PROXY=http://127.0.0.1:7890" 
alias unsetproxy="unset ALL_PROXY"
```

在一开始的基础配置的时候不难发现我们已经`apt-get install`了zsh，这时候在我们的终端直接输入zsh就会运行.zshrc中的配置，应该是正在下载一些东西，假如说下载并不是很顺利，可能需要通过代理解决网络问题，这里指路Clash，其他的在本教程中不进行介绍，绿色上网人人有责。

解决网络问题，成功现在之后，首先确认终端的字体已经更换为FiraCode，之后应该会有一个界面，让你确认是否显示出的图案是菱形等图案，假如是就没问题。然后按照上面的内容选择，一个个选择你想要的外观，选择完毕之后输入`chsh`，再输入`/bin/zsh`，结束，重启电脑就可以用上帅气的zsh了。

同时在zsh支持一种更加智能的补全，其会记录你曾经输入的指令，再次输入之后会有显示，但是不同于正常补全使用TAB键，而是按下“向右”键，即可进行补全。

### Vivaldi

推荐一款浏览器，相关的教程或许在后续会给出，十分的好用。

### Grub

在每一次重启电脑的时候，我们会选择使用哪个系统，这个时候会进入的界面被称为Grub界面，假如说没有经过美化，这个界面的内容会是黑底白字，看上去非常的“极客”，不过假如说我们需要一个更加美观的看上去高端一些的Grub界面的话，GNOME也已经为我们找到了方法。

进入[gnome-look](https://www.gnome-look.org/browse/)网站，在左侧栏选择GRUB Themes，在页面中找到一个你喜欢的Grub界面，点进去，在右侧选择Download，你可以理解为有很多的页面里面其实都是一个合集，但是我们安装知识选取了其中的一个主题，所以在Download后出现的列表中选择一个下载并解压，在目录中可以找到一个install.sh的文件，在这里打开终端，输入指令`sudo ./install.sh`，即可，重启电脑，你就可以看到你的全新的Grub界面了。

## Tips

### 访问Windows中的文件

有的时候我们会遇到一些问题，比如说一个很简单的现象，你刚刚在Ubuntu系统安了家，结果发现自己把什么东西忘记在了Windows系统中，这时候使用重启去获取这个文件将是一件繁琐的事情，毕竟没有人想要天天重启，这时候打开Ubuntu系统的“文件”，在左侧一栏中找到其他位置，点进去就可以看到熟悉的你在Windows系统中设置的盘符了，同理想要进入Ubuntu系统根目录下的除home之外的文件夹(比如opt)，也可以通过这个方法进入。

![](https://pic.axi404.top/其他位置.8z6goyxmp7.webp)

### 终端之自动补全

在未进行zsh的设置的时候，终端仅会有一个不智能的自动补全，在终端使用TAB进行补全，场景一般比如在输入一串本地地址的时候，有一个文件夹“dwajdawjlkjckajcheofca”名字非常的长，而在当前目录下仅有这一个文件夹开头三个字母为dwa，在输入dwa之后即可按下TAB进行补全。
