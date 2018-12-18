此示例显示如何创建显式供应商块以及入口点之间共享的代码的公共块。在这个例子中，我们有3个入口点：`pageA`，`pageB`，和`pageC`。这些入口点共享一些相同的实用程序模块，但不共享其他模块。此配置将提取至少2个bundle common共有的任何模块，并将其放入bundle中，同时将指定的供应商库保留在自己的bundle中

- `pageA`
  - `utility1`
  - `utility2`
- `pageB`
  - `utility2`
  - `utility3`
- `pageC`
  - `utility2`
  - `utility3`

webpack bundles:

- `vendor`
  - webpack runtime
  - `vendor1`
  - `vendor2`
- `common`
  - `utility2`
  - `utility3`
- `pageA`
  - `pageA`
  - `utility1`
- `pageB`
  - `pageB`
- `pageC`
  - `pageC`

# webpack.config.js

``` javascript
{{webpack.config.js}}
```

# dist/vendor.js

``` javascript
{{dist/vendor.js}}
```

# dist/commons~pageA~pageB~pageC.js

``` javascript
{{dist/commons~pageA~pageB~pageC.js}}
```

# dist/commons~pageB~pageC.js

``` javascript
{{dist/commons~pageB~pageC.js}}
```

# dist/pageA.js

``` javascript
{{dist/pageA.js}}
```

# dist/pageB.js

``` javascript
{{dist/pageB.js}}
```

# dist/pageC.js

``` javascript
{{dist/pageC.js}}
```

# Info

## Unoptimized

```
{{stdout}}
```

## Production mode

```
{{production:stdout}}
```
