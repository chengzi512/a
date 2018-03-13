## html5中script的async属性和defer属性

### async - html代码

```javascript
<script async src="myscript.js" onload="myInit()"></script>
```

加个属性很容易.

### defer - html代码

script标签也有个defer属性,目前所有浏览器都已实现, 在firefox和chrome的早期版本没有实现此属性,IE从一开始就支持此属性.

```javascript

```

# 作用

**defer** 属性标注的脚本是延迟脚本，使得浏览器延迟脚本的执行，也就是说，脚本会被异步下载但是不会被执行，直到文档的载入和解析完成，并可以操作，脚本才会被执行.

**async** 属性标注的脚本是异步脚本，即异步下载脚本时，不会阻塞文档解析，但是一旦下载完成后，立即执行，阻塞文档解析.

还要注意一点，html5说这些属性只在和src属性联合使用时才有效.

如果同时指定了两个属性，则会遵从async属性而忽略defer属性.

### async & defer - 它们的区别是什么

带有async或者defer的script都会立刻下载并不阻塞页面解析,而且都提供一个可选的onload事件处理, 在script下载完成后调用,用于做一些和此script相关的初始化工作.它们的不同之处在于script执行的 时机.带有async的script,一旦下载完成就开始执行(当然是在window的onload之前).这意味着这些script 可能不会按它们出现在页面中的顺序来执行,如果你的脚本互相依赖并和执行顺序相关,就有很大的可能出问题, 例如变量或者函数未定义之类的错误. 而对于带有defer的script,它们会确保按在页面中出现的顺序来执行,它们执行的时机是在页面解析完后,但在 DOMContentLoaded事件之前.

使用async的意义就在于使得下载脚本时，不会阻塞文档的解析。因为async的脚本执行顺序是没有保证的，因此要确认脚本间没有依赖关系。

现在呢基本上都是在文档的最后写脚本，那么这和 defer 的区别在哪里呢?

第一点当然是异步下载脚本了，第二点就是 使用async或defer任何一个都意味着在脚本里不能出现 document.write.

### 目前哪些浏览器支持defer和async

目前来看,最新版本的firefox和chrome都已支持这两个属性,也都支持script的load事件. IE的话对于defer是一直都支持的,async属性IE6~9都没有支持(IE10毫无疑问的会支持),onload是在IE9中新加入的属性.