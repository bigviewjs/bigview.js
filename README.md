# bigview.js

结合bigview Node.js模块使用的浏览器端实现


- performance
- ready
- onPageletArrive(domid, js, css, html)
- end


## ready

```js
// 当布局输出完成的时候，触发
bigview.ready(function(data){

})
```

## end

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
  js=[], 
  css=[], 
  html='',
  error=undefined
}) {

})
```

### on error

## view

```js
<!--默认行为
1、插写html 
3、trigger事件
2、js、css
-->
// 当浏览器收到pagelet模块，并且js和css加载完成之后触发
// 默认是$(domid).html(html)
// payload为额外信息，默认为{}
bigview.view(function(payload={domid, html='',}) {
  bigview.trigger('pageletArrave')
  bigview.trigger('domid')
})
```

## Event

### on

### off

### trigger
