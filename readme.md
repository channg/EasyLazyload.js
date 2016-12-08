<h5>EasyLazyload.js</h5>
<h4> 1.0.0</h4>
<font>超级好用的js 图片延迟加载插件</font>
<br>
<br>
<a href="https://channg.github.io/test/test.html">→不管怎么样先点进来看看效果（示例网页）</a>

<font color="blue">使用方法</font>
*  引入 EasyLazyload.js

*  将图片 src 替换为 data-lazy-src
```
	<img data-lazy-src="..." />
```
*  调用全局方法
```
	lazyLoadInit(）
```
<br>

<font color="blue">使用须知</font>
*  引入 EasyLazyload.js 前需要引用 jquery && zepto
*  需要在开启服务下运行

<br>
<font color="blue">参数列表</font>
*  示例代码
```
<script>
    lazyLoadInit({
        coverColor:"white",
        coverDiv:"<h1>test</h1>",
        offsetBottom:0,
        offsetTopm:0,
        showTime:1100,
        onLoadBackEnd:function(i,e){
            console.log("onLoadBackEnd:"+i);
        }
        ,onLoadBackStart:function(i,e){
            console.log("onLoadBackStart:"+i);
        }
    });
</script>
```
<span style="color:gray">coverColor：</span>  <span style="color:black">图片即将显示时覆盖层的颜色</span><br><br><span style="color:gray">coverDiv：</span>  <span style="color:black">图片即将显示时覆盖层可显示的土自定义组件</span><br><br><span style="color:gray">offsetBottom：</span>  <span style="color:black">图片距离屏幕底部出现时间点的距离差值（注解：延迟加载图片会在图片顶部接触屏幕底部时出现，如果想要让图片顶部距离屏幕底部有一定距离时出现，请设置此值）</span><br><br><span style="color:gray">offsetTopm：</span>  <span style="color:black">图片距离屏幕底部出现时间点的距离差值（注解：同上，距离顶部）</span><br><br><span style="color:gray">onLoadBackEnd：</span>  <span style="color:black">图片已经完全出现时的回调函数，参数为（index，event）加载的图片下标，以及dom对象（dom对象为jquerydom或zeptodom对象）</span><br><br><span style="color:gray">onLoadBackStart：</span>  <span style="color:black">图片已经下载完成，即将开始显示时的回调函数（参数同上）</span><br><br>

<h5>EasyLazyload.js 优点</h5>

* EasyLazyload.js 是真延迟加载  而且不会对样式有任何影响。

* 队列式加载，不会影响页面效率。

* 不需要设置任何宽高，简单易用