# Learn Webpack

![webpack](/assets/webpack.png)

[Webpack](https://webpack.js.org/) 是一个现代 JavaScript 应用程序的静态模块打包器(static module bundler)。在 webpack 处理应用程序时，它会在内部创建一个依赖图(dependency graph)，用于映射到项目需要的每个模块，然后将所有这些依赖生成到一个或多个bundle

### 为什要使用WebPack
现今的很多网页其实可以看做是功能丰富的应用，它们拥有着复杂的JavaScript代码和一大堆依赖包。为了简化开发的复杂度，前端社区涌现出了很多好的实践方法

* 模块化，让我们可以把复杂的程序细化为小的文件;
* 类似于TypeScript这种在JavaScript基础上拓展的开发语言：使我们能够实现目前版本的JavaScript不能直接使用的特性，并且之后还能转换为JavaScript文件使浏览器可以识别；
* Scss，less等CSS预处理器
* ...

这些改进确实大大的提高了我们的开发效率，但是利用它们开发的文件往往需要进行额外的处理才能让浏览器识别,而手动处理又是非常繁琐的，这就为WebPack类的工具的出现提供了需求。

### WebPack和Grunt以及Gulp相比有什么特性
* 其实Webpack和另外两个并没有太多的可比性，Gulp/Grunt是一种能够优化前端的开发流程的工具，而WebPack是一种模块化的解决方案，不过Webpack的优点使得Webpack在很多场景下可以替代Gulp/Grunt类的工具。
* Grunt和Gulp的工作方式是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，工具之后可以自动替你完成这些任务。
* Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。
* 如果实在要把二者进行比较，Webpack的处理速度更快更直接，能打包更多不同类型的文件。

### webpack.config.js配置项简介

* Entry：入口文件配置，Webpack 执行构建的第一步将从 Entry 开始，完成整个工程的打包。
* Module：模块，在`Webpack`里一切皆模块，`Webpack`会从配置的`Entry`开始递归找出所有依赖的模块，最常用的是`rules`配置项，功能是匹配对应的后缀，从而针对代码文件完成格式转换和压缩合并等指定的操作。
* Loader：模块转换器，用于把模块原内容按照需求转换成新内容，这个是配合`Module`模块中的`rules`中的配置项来使用。
* Plugins：扩展插件，在`Webpack`构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
* Output：输出结果，在`Webpack`经过一系列处理并得出最终想要的代码后输出结果，配置项用于指定输出文件夹，默认是`./dist`。
* DevServer：用于配置开发过程中使用的本机服务器配置，属于`webpack-dev-server`这个插件的配置项。
* Resolve：用于更改模块的解析方式，例如增加默认补全文件扩展`extensions`支持`.coffce`,`.ts`，设置`alise`。

### webpack打包流程简介

- 根据传入的参数模式(`development` | `production`)来加载对应的默认配置。
- 在`entry`里配置的`module`开始递归解析`entry`所依赖的所有`module`。
- 每一个`module`都会根据`rules`的配置项去寻找用到的`loader`,接受所配置的`loader`的处理。
- 以`entry`中的配置对象为分组，每一个配置入口和其对应的依赖文件最后组成一个代码块文件(chunk)并输出。
- 整个流程中`webpack`会在恰当的时机执行`plugin`的逻辑，来完成自定义的插件逻辑。

### Example
* [Example 1: hello world!](https://github.com/fupengl/learn-webpack/tree/master/examples/1.hellow-word)
* [Example 2: Multiple entries](https://github.com/fupengl/learn-webpack/tree/master/examples/2.multiple-entries)
* [Example 3: Loader](https://github.com/fupengl/learn-webpack/tree/master/examples/3.loader)
* [Example 4: Plugin](https://github.com/fupengl/learn-webpack/tree/master/examples/4.plugin)
* [Example 3: Dev Server](https://github.com/fupengl/learn-webpack/tree/master/examples/5.dev-server)
* [Example 3: Common](https://github.com/fupengl/learn-webpack/tree/master/examples/6.common)
