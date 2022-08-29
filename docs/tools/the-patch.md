# 如何在项目中修改第三方包(打补丁)

简介：有个功能需要修改node_modules里面的代码，就发现patch-package可以立即修改并保留对 npm 依赖项的修改。

用法：

1.安装依赖patch-package

```javascript
npm i patch-package --save-dev
```

2.修改完依赖后，运行patch-package创建patch文件

```javascript
npx patch-package 依赖名称
例子： npx patch-package element-ui
```

3.修改package.json的内容，在scripts中加入"postinstall": "patch-package"，这个是为了npm install的时候自动为依赖包打上我们改过的依赖

```javascript
   "scripts": {
　　...
　　"postinstall": "patch-package"
　　}
```
