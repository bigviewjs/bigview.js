# bigview.js

结合bigview Node.js模块使用的浏览器端实现


## Client (on Browser)

### ready

```js
// 当布局输出完成的时候，触发
bigview.ready(function(data){

})
```

### end

```js
// 当所有模块都是输出完成的时候触发
bigview.end(function(data) {

})

```

### on pageletArrive event

```js
// 当浏览器收到pagelet模块，立即触发，可以进行定义处理
// 默认是$(domid).html(html)
// payload为额外信息，默认为{}

bigview.on('pageletArrave',function(payload={
  domid='',
  js=[], 
  css=[], 
  html=''
}) {

})
```

### on domid event

```js
bigview.on('domid',function(payload={
  domid='',
  js=[], 
  css=[], 
  html='',
  error=undefined
}) {

})
```

### on error event

```js
bigview.on('error',function(payload={
  domid='',
  js=[], 
  css=[], 
  html='',
  error=undefined
}) {

})
```

## Server

此方法给Node.js模块bigview使用，不对外使用

- ready()
- view()
- end()

### ready

```js
// 当布局输出完成的时候，触发
bigview.ready({})

```

### view

```js
<!--默认行为
1、插写html 
3、trigger事件
2、js、css
-->
// 当浏览器收到pagelet模块，并且js和css加载完成之后触发
// 默认是$(domid).html(html)
// payload为额外信息，默认为{}
bigview.view(payload={
  domid='',
  js=[], 
  css=[], 
  html='',
  error=undefined
})
```

### end

```js
// 当所有模块都是输出完成的时候触发
bigview.end({})

```

## Event

根据jQuery的事件类似，只提供3个基础方法

- on 绑定事件
- off 移除事件
- trigger 触发事件

### on

```js
    bigview.on('pageletArrive', function(payload) {
        console.log(payload)
        if(payload.error) {
          bigview.trigger('error', payload)  
        }
    });
```

### off

```js
    bigview.of('error', payload)  
```

### trigger

```js
    bigview.trigger('error', payload)  
```
