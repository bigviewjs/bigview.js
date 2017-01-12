# bigview.js

结合bigview Node.js模块使用的浏览器端实现


- performance
- ready
- onPageletArrive(domid, js, css, html)
- end


bigview.js浏览器端用法，大家看看是否ok？

```
// 统计性能，默认为false
<!-- bigview.performance = false -->


// 当布局输出完成的时候，触发
bigview.ready(function(){

})

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

bigview.on('domid',function(payload={
  js=[], 
  css=[], 
  html=''
}) {

})

// 当浏览器收到pagelet模块，并且js和css加载完成之后触发
// 默认是$(domid).html(html)
// payload为额外信息，默认为{}
bigview.view(function(payload={domid, html='',}) {
  bigview.trigger('pageletArrave')
  bigview.trigger('domid')
})

<!--默认行为
1、插写html 
3、trigger事件
2、js、css
-->

// 当所有模块都是输出完成的时候触发
bigview.on('end',function() {

})

```

<script>
  bigview.pageletArrive(domid, payload={})
</script>

下周三完成以下内容

- 鉴权，未完成，需要招涛哥，继续跟（世龙）
- 改签3个模块，催任天周一之前给出ui，不然就按照之前的写（任琴或刘坤）
- 订单详情，售前相关2个按钮，马上付款和取消订单，从荷花的接口里获取（天依）
- 订单详情，售后所有按钮和改签详情会一起给回来，找服务平台王杰，要新的接口，无业务逻辑，需要配合改签模板做事件处理。接口模拟找愉镔（天依）
- 监控走q-monitor（任琴）
- 前端渲染监控，在bigview.js实现后加入，周一（任琴+世龙）
- bigview.js实现（世龙）
- 4台虚拟机服务器，已经申请账户，15天内部署，否则会被回收（世龙）
