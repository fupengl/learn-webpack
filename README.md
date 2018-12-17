# Learn Webpack

![webpack](/assets/webpack.png)

[Webpack](https://webpack.js.org/) 是一个现代 JavaScript 应用程序的静态模块打包器(static module bundler)。在 webpack 处理应用程序时，它会在内部创建一个依赖图(dependency graph)，用于映射到项目需要的每个模块，然后将所有这些依赖生成到一个或多个bundle

### webpack.config.js配置项简介

1. Entry：入口文件配置，Webpack 执行构建的第一步将从 Entry 开始，完成整个工程的打包。
2. Module：模块，在`Webpack`里一切皆模块，`Webpack`会从配置的`Entry`开始递归找出所有依赖的模块，最常用的是`rules`配置项，功能是匹配对应的后缀，从而针对代码文件完成格式转换和压缩合并等指定的操作。
3. Loader：模块转换器，用于把模块原内容按照需求转换成新内容，这个是配合`Module`模块中的`rules`中的配置项来使用。
4. Plugins：扩展插件，在`Webpack`构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
5. Output：输出结果，在`Webpack`经过一系列处理并得出最终想要的代码后输出结果，配置项用于指定输出文件夹，默认是`./dist`。
6. DevServer：用于配置开发过程中使用的本机服务器配置，属于`webpack-dev-server`这个插件的配置项。

### webpack打包流程简介

- 根据传入的参数模式(`development` | `production`)来加载对应的默认配置。
- 在`entry`里配置的`module`开始递归解析`entry`所依赖的所有`module`。
- 每一个`module`都会根据`rules`的配置项去寻找用到的`loader`,接受所配置的`loader`的处理。
- 以`entry`中的配置对象为分组，每一个配置入口和其对应的依赖文件最后组成一个代码块文件(chunk)并输出。
- 整个流程中`webpack`会在恰当的时机执行`plugin`的逻辑，来完成自定义的插件逻辑。

### Example
* [Example 1: hello world!](https://github.com/fupengl/learn-webpack/tree/master/examples/1.hellow-word)
* [Example 2: Multiple entries](https://github.com/fupengl/learn-webpack/tree/master/examples/2.multiple-entries)
