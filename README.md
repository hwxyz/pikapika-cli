# A cli tool for pikapika to create and manage project

### 主要插件
commander：一个命令行框架，用来解析用户命令行输入和参数；例如：rcm -v。
inquirer：一个交互式命令行工具；例如：input 输入，confirm 确认等等。
修饰插件

chalk：给终端的字体加上颜色，显得更加炫酷。
download-git-repo：下载并提取 Git 仓库，主要用来下载项目模板。
execa：NodeJs 运行 shell 命令，主要用来安装插件。
handlebars：一个模板引擎，用来将用户提交的信息动态填充到文件中。主要用来下载模板之后，修改package.json文件。
log-symbols：在终端上显示出 √ 或 × 等的图标。
module-alias：用来取别名，主要是 JS 中加载。
ora：在终端上显示一些小图标，显示下载中的动画效果。
@types/node：在 TS 中识别 NodeJs。