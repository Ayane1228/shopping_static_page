基于黑马程序员pink老师开发的静态购物网站页面，其中的注册页面手写了登陆验证、判断等功能。

源网站:https://www.bilibili.com/video/BV14J4114768?from=search&seid=7384550154355916756

# 通用组件

- 初始化样式：使用`base.css`进行初始化，对不同浏览器相同标签之间的默认值的差异进行统一。

- 共同样式：`common.css`对通用组件设置样式。

- 通用组件：顶部导航栏`shortcut`,底部导航栏`footer`。

- 使用`icomoon`字体文件,引入css之后，打开`demo.html`复制想要使用的图标的编码直接使用即可。

  ```css
  @font-face{
      /* 声明字体名(可以自定义) */
  	font-family: 'icomoon';
  	src: url('../fonts/icomoon.eot?7kkyc2');
  	src: url('../fonts/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'),
  	url('../fonts/icomoon.ttf?7kkyc2') format('truetype'),
  	url('../fonts/icomoon.woff?7kkyc2') format('woff'),
  	url('../fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
      /*字体默认大小样式为nromal*/
  	font-size: normal;
  	font-style: normal;
  }
  /* 引入字体文件，设置样式 */
  .icomoon{
  	font-family: 'icomoon';
  }
  .fr icomoon{
  	font-family: 'icomoon';
  	font-size: 16px;
  	line-height: 24px;
  	/* 让小三角的行高小于盒子行高，让小三角居中显示 */
  }
  ```

顶部导航栏：

```html
	<!-- 顶部导航条start-->
	<div class="shortcut">
		<div class="w">
			<div class="fl">
				<ul>
					<li>品优购欢迎你！</li>
					<li>
						<a href="register.html">请登录 </a>
						<a href="register.html" class="style-red">免费注册</a>
					</li>
				</ul>
			</div>
			<div class="fr">
				<ul>
					<li><a href="#">我的订单</a></li>
					<li class="spacer"></li>
					<li>
						<a href="#">我的品优购</a>
						<i class="icomoon"></i>
					</li>
					<li class="spacer"></li>
					<li><a href="#">品优购会员</a></li>
					<li class="spacer"></li>
					<li><a href="#">企业采购</a></li>
					<li class="spacer"></li>
					<li>
						<a href="#">关注品优购</a>
						<i class="icomoon"></i>
					</li>
					<li class="spacer"></li>
					<li>
						<a href="#">客户服务</a>
						<i class="icomoon"></i>
					</li>
					<li class="spacer"></li>
					<li>
						<a href="#">网站导航</a>
						<i class="icomoon"></i>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- 顶部导航条end-->
```

```css
/* 所有特殊的红色的样式 */
.style-red {
	color: #c81623;
}
/* 顶部快捷导航区域 */
.shortcut {
	height: 31px;
	background-color: #f1f1f1;
	line-height: 31px;
}
/* 版心设置宽1200px 水平居中 */
.w {
	width: 1200px;
	margin: 0 auto;
}
/* 公共样式 */
.fl {
	float: left;
}

.fr {
	float: right;
}
```

> 整个顶部导航栏区域都设置了字体高度等于行高，使得字垂直居中对齐 。
>
> 设置内容区域类名均为`w`，并设置内容区域宽度均为1200px,上下无margin值，左右auto使得内容区域居中。
>
> 将顶部分为2部分，设置`float:left`和`float:right`,两部分分别浮动到`w`的左右2边。

底部导航栏：

```html
		<!-- footer制作部分start -->
		<div class="footer">
			<div class="w">
				<div class="mod_service">
					<ul>
						<li>
							<i class="mod-service-icon mod_service_zheng"></i>
							<div class="mod_service_tit">
								<h5>正品保障</h5>
								<p>正品保障，提供发票</p>
							</div>
						</li>
						<li>
							<i class="mod-service-icon mod_service_kuai"></i>
							<div class="mod_service_tit">
								<h5>极速物流</h5>
								<p>急速物流，极速送达</p>
							</div>
						</li>
						<li>
							<i class="mod-service-icon mod_service_bao"></i>
							<div class="mod_service_tit">
								<h5>无忧售后</h5>
								<p>7天无理由退换货</p>
							</div>
						</li>
						<li>
							<i class="mod-service-icon mod_service_tei"></i>
							<div class="mod_service_tit">
								<h5>特色服务</h5>
								<p>私人订制家电套餐</p>
							</div>
						</li>
						<li>
							<i class="mod-service-icon mod_service_help"></i>
							<div class="mod_service_tit">
								<h5>帮助中心</h5>
								<p>您的购物指南</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="help">
					<dl class="mod_help_item">
						<dt>购物指南</dt>
						<dd><a href="#">购物流程</a></dd>
						<dd><a href="#">会员介绍</a></dd>
						<dd><a href="#">生活旅行/团购</a></dd>
						<dd><a href="#">常见问题</a></dd>
						<dd><a href="#">大家电</a></dd>
						<dd><a href="#">联系客服</a></dd>
					</dl>
					<dl class="mod_help_item">
						<dt>购物指南</dt>
						<dd><a href="#">购物流程</a></dd>
						<dd><a href="#">会员介绍</a></dd>
						<dd><a href="#">生活旅行/团购</a></dd>
						<dd><a href="#">常见问题</a></dd>
						<dd><a href="#">大家电</a></dd>
						<dd><a href="#">联系客服</a></dd>
					</dl>
					<dl class="mod_help_item">
						<dt>购物指南</dt>
						<dd><a href="#">购物流程</a></dd>
						<dd><a href="#">会员介绍</a></dd>
						<dd><a href="#">生活旅行/团购</a></dd>
						<dd><a href="#">常见问题</a></dd>
						<dd><a href="#">大家电</a></dd>
						<dd><a href="#">联系客服</a></dd>
					</dl>
					<dl class="mod_help_item">
						<dt>购物指南</dt>
						<dd><a href="#">购物流程</a></dd>
						<dd><a href="#">会员介绍</a></dd>
						<dd><a href="#">生活旅行/团购</a></dd>
						<dd><a href="#">常见问题</a></dd>
						<dd><a href="#">大家电</a></dd>
						<dd><a href="#">联系客服</a></dd>
					</dl>
					<dl class="mod_help_item">
						<dt>购物指南</dt>
						<dd><a href="#">购物流程</a></dd>
						<dd><a href="#">会员介绍</a></dd>
						<dd><a href="#">生活旅行/团购</a></dd>
						<dd><a href="#">常见问题</a></dd>
						<dd><a href="#">大家电</a></dd>
						<dd><a href="#">联系客服</a></dd>
					</dl>
					<dl class="mod_help_item mod_help_item_app">
						<dt>帮助中心</dt>
						<dd>
							<img src="images/wx_cz.jpg">
							<p>品优购客户端</p>
						</dd>
					</dl>
				</div>
				<div class="mod_copyright">
					<p class="mod_copyright_link">
						<a href="#">联系我们 |</a>
						<a href="#">关于我们 |</a>
						<a href="#">商家入驻 |</a>
						<a href="#">营销中心 |</a>
						<a href="#">友情链接 |</a>
						<a href="#">关于我们 |</a>
						<a href="#">营销中心 |</a>
						<a href="#">友情链接 |</a>
						<a href="#">关于我们</a>
					</p>
					<p>地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100</p>
					<p >京ICP备08001421号京公网安备110108007702</p>
				</div>
			</div>
		</div>
		<!-- footer制作部分end -->
```

```css
.mod-service-icon {
	float: left;
	width: 50px;
	height: 50px;
	background: url(../images/icons.png) no-repeat ;
	margin-left: 35px;
}
.mod_service_zheng{
	background-position: -253px -3px;
}
```

> 这里使用了精灵图，将`i`标签的背景为均设置为一张大的精灵图，然后分别设置不同标签的背景图的位置。

# 首页

SEO优化：html文件`head`部分，设置了title、description、keywords对SEO进行了优化。

> ​		`title`:网站名称-主关键词-主关键词描述
>
> ​		`description`：内容摘要，一般不超过150字对网站用一句话描述网站的内容
>
> ​		`keywords`:关键词，一般写网站名，关键词等。重要的关键词往前放。

```html
<head>
	<meta charset="utf-8">
    <!-- title、description、keywords有利于SEO优化 -->
	<!-- 网站名字（产品名）- 网站介绍 -->
	<title>
		品优购-综合网购首选-正品低价、品质保障、配送及时、轻松购物！
	</title>
	<!-- 网站说明description：描述网站的整体业务和主题概况 -->
	<meta name="description" content="京东JD.COM-专业的综合网上购物商城,
		销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.
		便捷、诚信的服务,为您提供愉悦的网上购物体验!" />
	<!-- keywords 关键字 6~8个关键词 搜索引擎关注点 -->
	<meta name="keywords" content="网上购物,家电,数码通讯,电脑,家居百货,服装服饰,母婴,图书,食品" />
	<!-- 网页图标 -->
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
	<!-- 引入初始化的css -->
	<link rel="stylesheet" href="css/base.css" />
	<!-- 引入公告样式的css -->
	<link rel="stylesheet" href="css/common.css" />
	<!-- 引入首页的css -->
	<link rel="stylesheet" href="css/index.css" />
	<!--  引入animate的JS文件 -->
	<script src="JS/animate.js"></script>
	<!-- 引入首页的JS文件 -->
	<script src="JS/index.js"></script>
</head>
```

## 首页轮播图

>  1.鼠标经过轮播图模块，左右按钮显示，离开隐藏左右按钮。
>
>  2.点击右侧按钮一次，图片往右播放一张，以此类推，左侧按钮同理。
>
>  3.图片播放的同时，下面小圆圈模块跟随一起变化。
>
>  4.点击小圆圈，可以播放相应图片。
>
>  5.鼠标不经过轮播图，轮播图也会自动播放图片。

##### 鼠标移入移出隐藏左右箭头，开关定时器。 

```js
	var arrow_l = document.querySelector('.arrow_l');
	var arrow_r = document.querySelector('.arrow_r');
	var focus = document.querySelector('.focus');
	// circle获得点击按钮时地小圆圈的播放
	var circle = 0;
	// 获得图片的宽度
	var focusWidth = focus.offsetWidth;
	// 鼠标经过focus 就显示隐藏左右按钮并停止定时器 
	focus.addEventListener('mouseenter', function() {
	    arrow_l.style.display = 'block';
	    arrow_r.style.display = 'block';
		clearInterval(timer);
		// 清除定时器变量
		timer = null;
	});
	// 鼠标离开,重新开启定时器。定时器在一进入页面的时候就调用,离开重新开启。 
	focus.addEventListener('mouseleave', function() {
	    arrow_l.style.display = 'none';
		arrow_r.style.display = 'none';
		timer = setInterval(function(){
			// 手动调用函数,这时定时器已经进行过了定义,所以不需要重新定义定时器（不需要加var）
			arrow_r.click();
		},2000);
	    });
```

##### 点击右侧按钮一次，图片往右播放一张，以此类推，左侧按钮同理。

```js
	// 点击右侧按钮的效果实现
		arrow_r.addEventListener('click',function(){
			if( flag = true){
                // 关闭节流阀
				flag = false;
                    // 如果走到了最后复制的一张,ul要快速复原
                    if(num == ul.children.length - 1){
                        // 重置轮播图 回到第一张之后继续触发下面的函数 num从0开始变为1
                        ul.style.left = 0;
                        num = 0;
                    }
			num++;
			animate(ul,-num * focusWidth,function(){
                // 重新打开节流阀
				flag = true;
			});
			// 点击按钮 小圆圈跟随一起变化 可以再定义一个变量circle控制小圆圈的播放
			circle++;
			// 加判断条件 如果circle为4说明走到了最后的克隆图片,再回到0
			if(circle == ol.children.length){
				circle = 0;
			}
			circleChange();
			}
		});
		
		// 点击左侧按钮的效果实现
		arrow_l.addEventListener('click',function(){
			if(flag){
				if(num ==0){
					num = ul.children.length - 1;
					ul.style.left = -num * focusWidth + 'px';
				}
				num--;
				animate(ul,-num * focusWidth,function(){
					flag = true;
				});
				circle--;
				// 加判断条件 如果circle<0,说明第一张图片，点击之后小圆圈改为第四个小圆圈（3） 
				if(circle < 0){
					circle = ol.children.length - 1 ;
				}
			}
			circleChange();
		});
```

##### 动态添加圆圈

> （1）利用for循环动态生成小圆圈（这个小圆圈要放到ol里面）。
> （2）创建节点 createElement(‘li’)
> （3）插入节点 ol.appendChild(li)

```js
		// 动态添加小圆圈 有几张图就有几个小圆
		var ol = focus.querySelector('.circle');
		var ul = focus.querySelector('ul');
    	// 遍历图片个数，动态添加圆圈
		for(var i = 0; i < ul.children.length; i++){
			// 创建一个li
			var li = document.createElement('li');
			ol.appendChild(li);
			// 通过自定义属性定义每个小圆的索引号
			li.setAttribute('index',i);
		...
	}
```

##### circleChange();图片播放的同时，下面小圆圈模块跟随一起变化。

> ## 排他思想:干掉所有人，留下我自己。
>
> （1）给每个ol新建的li都要绑定点击事件。
> （2）点击当前的小圆圈，就添加current类。
> （3）其余的小圆圈就移除这个current类。

```js
		function circleChange(){
			// 先清除其他小圆圈的current类名
			for(var i = 0;i < ol.children.length;i++){
				ol.children[i].className = '';
			}
			// 留下当前的小圆圈的current类名
			ol.children[circle].className = 'current';
		}	
		// 自动播放事件 类似于自动按右侧按钮 手动调用arrow_r的click事件
		var timer = setInterval(function(){
			// 手动调用函数
			arrow_r.click();
		},2000);
```

##### 点击小圆圈，可以播放相应的图片。

> 引入	`animate.js`，点击某个小圆圈，就让图片滚动 小圆圈的索引号乘以图片的宽度作为ul的移动距离（ animate.js 里的 target 值）
>
> 此时需要知道小圆圈的索引号，可以在生成小圆圈的时候，给它设置一个自定义属性，点击时候获取这个自定义属性即可 setAttribute(‘index’,i)

```js
function animate(obj,target,callBack){
	// 清除其他定时器使得元素只有一个定时器执行
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		// 给步长值取整 向上（Math.ceil）向下（Math.floor）
		var step = (target - obj.offsetLeft) / 10 ;
		// 如果step为正值则向上取整 若为负值（倒着走）则向下取整
		step = step > 0 ?Math.ceil(step) : Math.floor(step); 
			if(obj.offsetLeft == target){
				clearInterval(obj.timer);
				// 回调函数写到定时器结束里面
				//判断是否有回调函数
					if(callBack){
					// 有就调用回调函数（callback函数）
					callBack();
					}
				}
			obj.style.left = obj.offsetLeft + step + 'px';
		},30);
	}		
```

```js
			li.addEventListener('click',function(){
				for( var i = 0 ;i < ol.children.length; i++){
				// 其余的小圆圈就移除current类
					ol.children[i].className = '';
				// 点击当前的小圆圈添加current类
					this.className = 'current';
				}
				// 将小圆圈的索引号*li的宽度得到ul（图片）的移动距离 
                // 自定义属性 index
				// 当我们点击了li就得到当前的索引号
				var index = this.getAttribute('index');
				// 当我们通过下面的小圆圈就要把这个li的索引号给num 实现小圆圈改变图片和按钮改变图片的一致性
				num = index;
				// 把索引号给circle控制小圆圈的自动播放
				circle = index;
				// 点击小白点移动图片
				animate(ul,-index * focusWidth);	
		})
```

##### 无缝滚动：

> 把ul第一li复制一份，放到ul的最后面（不复制第一个Li就跳的话会导致最后一张图不显示）
> 当图片滚动到克隆的最后一张图片时，让ul快速的不作动画的跳到最左侧：left为0。
> 同时num赋值为0，又可以重新开始滚动图片了

```js
	// 点击右侧的按钮 图片滚动一张
		var num = 0;
		var flag = true;
		// 点击右侧按钮的效果实现
		arrow_r.addEventListener('click',function(){
			if( flag = true){
                // 关闭节流阀
				flag = false;
                    // 如果走到了最后复制的一张,ul要快速复原
                    if(num == ul.children.length - 1){
                        // 重置轮播图 回到第一张之后继续触发下面的函数 num从0开始变为1
                        ul.style.left = 0;
                        num = 0;
                    }
			num++;
			animate(ul,-num * focusWidth,function(){
                // 重新打开节流阀
				flag = true;
			});
			// 点击按钮 小圆圈跟随一起变化 可以再定义一个变量circle控制小圆圈的播放
			circle++;
			// 加判断条件 如果circle为4说明走到了最后的克隆图片,再回到0
			if(circle == ol.children.length){
				circle = 0;
			}
			circleChange();
			}
		});
```

html部分

```html
			<div class="focus fl">
				<!-- 左侧按钮 -->
				<a href="javascript:;" class="arrow_l">
					&lt;
				</a>
				<!-- 右侧按钮 -->
				<a href="javascript:;" class="arrow_r"> </a>
				<a href="#"></a>

				<ul>
					<li>
						<a href="#"><img src="upload/focus.jpg" alt="图片不见了"></a>
					</li>
					<li>
						<a href="#"><img src="upload/focus1.jpg" alt="图片不见了"></a>
					</li>
					<li>
						<a href="#"><img src="upload/focus2.jpg" alt="图片不见了"></a>
					</li>
					<li>
						<a href="#"><img src="upload/focus3.jpg" alt="图片不见了"></a>
					</li>				
				</ul>
				<!-- 小圆圈 -->
				<ol class="circle">
				</ol>
			</div>
```

css

```css
.focus{
	width: 721px;
	height: 455px;
	float: left;
	overflow: hidden;
	position: relative;
}
.focus ul{
	position: absolute;
	top: 0;
	left:0;
	/* ul的宽度是父元素的有几张图片的倍数 最后一张也是用第一张 并快速使用left：0 不使用动画使得快速回到真正的第一张 */
	width: 650%;
}
.focus ul li{
	float: left;
}
```

JS

```js
window.addEventListener('load',function(){
	var arrow_l = document.querySelector('.arrow_l');
	var arrow_r = document.querySelector('.arrow_r');
	var focus = document.querySelector('.focus');
	// circle获得点击按钮时地小圆圈的播放
	var circle = 0;
	// 获得图片的宽度
	var focusWidth = focus.offsetWidth;
	// 鼠标经过focus 就显示隐藏左右按钮并停止定时器 
	focus.addEventListener('mouseenter', function() {
	    arrow_l.style.display = 'block';
	    arrow_r.style.display = 'block';
		clearInterval(timer);
		// 清除定时器变量
		timer = null;
	});
	// 鼠标离开,重新开启定时器。定时器在一进入页面的时候就调用,离开重新开启。 
	focus.addEventListener('mouseleave', function() {
	    arrow_l.style.display = 'none';
		arrow_r.style.display = 'none';
		timer = setInterval(function(){
			// 手动调用函数,这时定时器已经进行过了定义,所以不需要重新定义定时器（不需要加var）
			arrow_r.click();
		},2000);
	    });
		
		// 动态添加小圆圈 有几张图就有几个小圆
		var ol = focus.querySelector('.circle');
		var ul = focus.querySelector('ul');
    	// 遍历图片个数，动态添加圆圈
		for(var i = 0; i < ul.children.length; i++){
			// 创建一个li
			var li = document.createElement('li');
			ol.appendChild(li);
			// 通过自定义属性定义每个小圆的索引号
			li.setAttribute('index',i);
			// 给每个小圆圈点击触发函数：点击的当前圆圈变白
			li.addEventListener('click',function(){
				for( var i = 0 ;i < ol.children.length; i++){
				// 其余的小圆圈就移除current类
					ol.children[i].className = '';
				// 点击当前的小圆圈添加current类
					this.className = 'current';
				}
				// 将小圆圈的索引号*li的宽度得到ul（图片）的移动距离 
				// 当我们点击了li就得到当前的索引号
				var index = this.getAttribute('index');
				// 当我们通过下面的小圆圈就要把这个li的索引号给num 实现小圆圈改变图片和按钮改变图片的一致性
				num = index;
				// 把索引号给circle控制小圆圈的自动播放
				circle = index;
				// 点击小白点添加轮播图动画效果
                // 
				animate(ul,-index * focusWidth);	
		})
	}
    
		// 把第一个li默认设置为白色
		ol.children[0].className = 'current';

		// 克隆第一章图片并放到ul的最后 
    	// true深克隆 连同节点内的内容一起克隆 浅克隆只克隆一份节点
		var first = ul.children[0].cloneNode(true);
		ul.appendChild(first);

		// 点击右侧的按钮 图片滚动一张
		var num = 0;
		var flag = true;
		// 点击右侧按钮的效果实现
		arrow_r.addEventListener('click',function(){
			if( flag = true){
                // 关闭节流阀
				flag = false;
                    // 如果走到了最后复制的一张,ul要快速复原
                    if(num == ul.children.length - 1){
                        // 重置轮播图 回到第一张之后继续触发下面的函数 num从0开始变为1
                        ul.style.left = 0;
                        num = 0;
                    }
			num++;
			animate(ul,-num * focusWidth,function(){
                // 重新打开节流阀
				flag = true;
			});
			// 点击按钮 小圆圈跟随一起变化 可以再定义一个变量circle控制小圆圈的播放
			circle++;
			// 加判断条件 如果circle为4说明走到了最后的克隆图片,再回到0
			if(circle == ol.children.length){
				circle = 0;
			}
			circleChange();
			}
		});
		
		// 点击左侧按钮的效果实现
		arrow_l.addEventListener('click',function(){
			if(flag){
				if(num ==0){
					num = ul.children.length - 1;
					ul.style.left = -num * focusWidth + 'px';
				}
				num--;
				animate(ul,-num * focusWidth,function(){
					flag = true;
				});
				circle--;
				// 加判断条件 如果circle<0,说明第一张图片，点击之后小圆圈改为第四个小圆圈（3） 
				if(circle < 0){
					circle = ol.children.length - 1 ;
				}
			}
			circleChange();
		});
		function circleChange(){
			// 先清除其他小圆圈的current类名
			for(var i = 0;i < ol.children.length;i++){
				ol.children[i].className = '';
			}
			// 留下当前的小圆圈的current类名
			ol.children[circle].className = 'current';
		}	
		// 自动播放事件 类似于自动按右侧按钮 手动调用arrow_r的click事件
		var timer = setInterval(function(){
			// 手动调用函数
			arrow_r.click();
		},2000);
		
})
```

## 详情页仿放大镜效果

> 3个功能模块
> 鼠标经过盒子 黄色的遮罩层显示和大图片盒子显示 离开隐藏
> 黄色的遮挡层跟随鼠标
> 移动黄色遮挡层，大图片跟着动

```js
/* 
	3个功能模块
	鼠标经过盒子 黄色的遮罩层显示和大图片盒子显示 离开隐藏
	黄色的遮挡层跟随鼠标
	移动黄色遮挡层，大图片跟着动
 */
	// 页面加载完之后再执行JS代码
window.addEventListener('load', function() {
	// 获取元素
    var preivew_img = document.querySelector('.preivew_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 1. 当我们鼠标经过/离开的时候  preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preivew_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preivew_img.addEventListener('mouseout', function() {
            mask.style.display = 'none';
            big.style.display = 'none';
        })	
	 // 黄色的遮盖层跟随鼠标功能
	 // 把鼠标坐标给遮挡层不合适
	 // 因为遮挡的top和left值是相对于它的父元素来说的
	 // 因此将鼠标在盒子内的坐标给遮挡层
	 preivew_img.addEventListener('mousemove',function(e){
		 // 计算鼠标在盒子内的坐标
		 var x = e.pageX - this.offsetLeft;
		 var y = e.pageY - this.offsetTop;
		 // 将遮盖层的移动距离提取出来并限制其只能在0~100px（图片盒子内部进行移动）
		 var maskX =  x - mask.offsetWidth / 2;
		 var maskY =  y - mask.offsetHeight / 2;
		 // 遮挡层最大移动距离 正方形宽高一致
		 var maskMax = preivew_img.offsetWidth - mask.offsetWidth;
		 if(maskX <= 0){
			 maskX = 0;
		 }else if(maskX >=maskMax)
		 {
			 maskX = maskMax;
		 }
		 if(maskY <= 0){
			 maskY = 0;
		 }else if(maskY >= maskMax)
		 {
			 maskY = maskMax;
		 }		 
		// 将盒子的坐标赋值给遮盖层 将位置减去遮盖层的宽高的一半使鼠标一直在遮盖层的中央
		mask.style.left =maskX + 'px';
		mask.style.top = maskY + 'px';
		// 大图片移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层最大移动距离
		var bigImg = document.querySelector('.bigImg');
		// 计算大图的最大移动距离
		var bigMax = bigImg.offsetWidth - big.offsetWidth;
		var bigX = maskX*bigMax/maskMax;
		var bigY = maskY*bigMax/maskMax;
		// 遮罩层向左大图应该向右移动（加-号）
		bigImg.style.left=-bigX + 'px';
		bigImg.style.top=-bigY + 'px';
		})
	
})

```

## 注册页面

> 正则表达式验证手机号,输入框失去焦点进行判断并确定提示框的内容和提示图标的样式。

```js
    // 当鼠标在phone的表单框失去焦点的时候对phoneinp.value的内容进行判断
    // 若为手机号，输出正确的样式
    var phoneinp = document.querySelector('.tel');
    var phone_icon = document.querySelector('.phone_icon');
    var phone_number = document.querySelector('.phone_number');
    phoneinp.addEventListener('blur',function(){
        if(!(/^1[3456789]\d{9}$/.test(phoneinp.value))){
            phone_number.innerHTML = '输入错误';
            phone_icon.className ='phone_icon phonewrong';
        }else{
            phone_number.innerHTML = '输入正确';
            phone_icon.className ='phone_icon phoneright';
        }
    });
```

> 点击图标，查看密码和确认密码的明文内容。
>
> 设置flag值，当flag为 1 时，当前为密码状态，点击切换输入框的`type`，眼睛的图片资源,flag的值。

```js
    // 当鼠标点击时，检查flag值，
    // 若为1，则将表单类型变为text和img src变为open 并将flag变为0
    // 若为0，将表单类型变为password和img src变为close 并将flag变为1
    var mima = document.querySelector('.mima');
    var eye = document.getElementById('eye');
    var xianshi = document.querySelector('.xianshi');
    var phoneflag = 1;
    xianshi.addEventListener('click',function(){
            if(phoneflag == 1){
                mima.type = 'text';
                eye.src = 'images/open.png';
                phoneflag = 0;
            }else{
                mima.type = 'password';
                eye.src = 'images/close.png';
                phoneflag = 1;                
            }
    });
```

> 使用正则表达式确认密码的格式是否符合自定义标准。

```js
    // 对密码的输入内容进行判断，若不符合规范，
    // 使得提示框的内容变为：密码不符合规范，
    // 请使用由数字，字母（不包括特殊符号）的6~16位密码
    var reg = /^[0-9a-zA-Z]+$/;
    var mimatishi = document.querySelector('.mimatishi');
    mima.addEventListener('blur',function(){
        if(mima.value.length < 6 || mima.value.length > 16 ||!reg.test(mima.value) ){
            mimatishi.innerHTML = '密码不正确，请使用由数字，字母（不包括特殊符号）的6~16位密码';
        }else{
            mimatishi.innerHTML = '密码正确';
        }
    });
```

> 重新输入，确认密码的一致性

```js
// 当确认密码的value和密码的value的值不一致时，显示密码不一致，请重新输入
    var querentishi = document.querySelector('.querentishi');
    querenmima.addEventListener('blur',function(){
        if(querenmima.value === mima.value ){
            querentishi.innerHTML = '密码一致';
        }else{
            querentishi.innerHTML = '密码不一致，请重新输入';
        }
    });
```

> 模拟发送短信。
>
> 点击后禁用按钮。
>
> 点击后提示已发送短信，并设置一个值 `wait`和定时器一起减少。即设置定时器使得点击按钮之后`wait`每秒减一，当	`wait`小于0时清除定时器。
>
> 当`wait`大于0时，将按钮的值修改为`wait + '秒可以重新发送'`,`wait`小于0时，重置按钮`wait`的值，去掉`disabled`属性,清除定时器。

```js
// 当点击获取验证码之后开启定时器并让按钮颜色变灰并开始倒计时效果
    var getduanxin = document.querySelector('.getduanxin');
    getduanxin.addEventListener('click',function(){
        // 禁用按钮
        getduanxin. disabled="disabled";
        var wait = 30;
        // 设置定时器，让value的值开始随时间改变
        // 在外面定义一个值为30的数字，点击以后开始计时器，
        // 每1秒减1，值为0时停止计时器
        var timer = setInterval(function(){
            wait--;
            if(wait >= 0){
                getduanxin.value = wait + '秒可以重新发送';
            }else{
                getduanxin.value = '免费获取验证码';
                getduanxin.removeAttribute('disabled');
                wait = 30;
                clearInterval(timer); 
            }
        },1000);
        alert("短信已发送。");
    });
```

HTML代码

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>注册页面</title>
	<!-- 引入favicon.ico网页图标 -->
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />		
		<!-- 初始化css -->
		<link rel="stylesheet" href="css/base.css">
		<!-- 注册CSS -->
		<link rel="stylesheet" href="css/register.css">
		<!-- 引入JS文件 -->
		<script src="JS/register.js"></script>
	</head>
	<body>
		<!-- 注册页面开始 -->
		<div class="w">
			<div class="header">
				<div class="logo">
					<a href="index.html">
					<img src="images/logo.png" />						
					</a>
				</div>
			</div>
			<div class="registerArea ">
				<h3>
					注册新用户
					<em>我有账号，前去
					<a href="#">登录</a></em>
					</h3>
				<div class="reg_form">
					<!-- 表单域 -->
					<form action="domo.php">
					<ul>
						<li>
							<label for="tel">手机号:</label>
							<input type="text" class="inp tel" id="tel"/>
								<span class="phone">
									<i class="phone_icon begin"></i>
									<em class="phone_number">请输入手机号</em>
								</span>
						</li>
						<li>
						<label for="duanxin">短信验证码:</label>
							<input type="text" class="inp" id="duanxin" />
							<input type="text" class="getduanxin"
									 value="免费获取验证码">
						</li>
						<li class="mima_content">
							<label for="mima">登录密码:</label>
							<input type="password" class="inp mima" id="mima"/>
							<i class="xianshi">
								<img src = 'images/close.png' id="eye">
							</i>
							<span class="error">
								<i class="error_icon"></i>
								<i class="mimatishi">
									密码长度为6~16位，
									请使用数字，字母，
									不包括特殊符号。
								</i>
							</span>
						</li>
						<!-- <li class="safe">
							安全程度 
							<em class="ruo">弱</em>
							<em class="zhong">中</em>
							<em class="qiang">强</em>
						</li> -->
						<li>
							<label for="queren">确认密码:</label>
							<input type="password"  class="inp querenmima" id="queren"/>
							<span class="error">
								<i class="queren_xianshi">
									<img src = 'images/close.png' id="queren_eye">
								</i>
								<i class="error_icon">
								</i>
								<em class="querentishi">
									请再次输入密码
								</em>
							</span>
						</li>
						<li class="agree">
							<input type="checkbox" /><!-- 复选框 -->
							同意协议并注册
							<a href="#">
								《用户协议》
							</a>
						</li>
						<li >
							<input type="submit" value="完成注册" class="over" />
						</li>
					</ul>						
					</form>
				</div>
			</div>
			<!-- 底部 -->
			<footer>
				<div>
					<p class="links">
						<a href="#">联系我们 |</a>
						<a href="#">关于我们 |</a>
						<a href="#">商家入驻 |</a>
						<a href="#">营销中心 |</a>
						<a href="#">友情链接 |</a>
						<a href="#">关于我们 |</a>
						<a href="#">营销中心 |</a>
						<a href="#">友情链接 |</a>
						<a href="#">关于我们</a>
					</p>
					<p class="mod_copyright_info">地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100</p>
					<p class="mod_copyright_info">京ICP备08001421号京公网安备110108007702</p>
				</div>
			</footer>
		</div>
	</body>
</html>

JS代码：

```js
window.onload = function(){
    // 当鼠标在phone的表单框失去焦点的时候对phoneinp.value的内容进行判断
    // 若为手机号，输出正确的样式，反之亦然。
    var phoneinp = document.querySelector('.tel');
    var phone_icon = document.querySelector('.phone_icon');
    var phone_number = document.querySelector('.phone_number');
    phoneinp.addEventListener('blur',function(){
        if(!(/^1[3456789]\d{9}$/.test(phoneinp.value))){
            phone_number.innerHTML = '输入错误';
            phone_icon.className ='phone_icon phonewrong';
        }else{
            phone_number.innerHTML = '输入正确';
            phone_icon.className ='phone_icon phoneright';
        }
    });
    // 当鼠标点击时，检查flag值，
    // 若为1，则将表单类型变为text和img src变为open 并将flag变为0
    // 若为0，将表单类型变为password和img src变为close 并将flag变为1
    var mima = document.querySelector('.mima');
    var eye = document.getElementById('eye');
    var xianshi = document.querySelector('.xianshi');
    var phoneflag = 1;
    xianshi.addEventListener('click',function(){
            if(phoneflag == 1){
                mima.type = 'text';
                eye.src = 'images/open.png';
                phoneflag = 0;
            }else{
                mima.type = 'password';
                eye.src = 'images/close.png';
                phoneflag = 1;                
            }
    });
    // 确认密码并显示明文部分，方法同上
    var querenmima = document.querySelector('.querenmima');
    var queren_eye = document.getElementById('queren_eye');
    var queren_xianshi = document.querySelector('.queren_xianshi');
    var querenflag = 1;
    queren_xianshi.addEventListener('click',function(){
        if(querenflag == 1){
            querenmima.type = 'text';
            queren_eye.src = 'images/open.png';
            querenflag = 0;
        }else{
            querenmima.type = 'password';
            queren_eye.src = 'images/close.png';
            querenflag = 1;                
        }
});
    // 对密码的输入内容进行判断，若不符合规范，
    // 使得提示框的内容变为：密码不符合规范，
    // 请使用由数字，字母（不包括特殊符号）的6~16位密码
    var reg = /^[0-9a-zA-Z]+$/;
    var mimatishi = document.querySelector('.mimatishi');
    mima.addEventListener('blur',function(){
        if(mima.value.length < 6 || mima.value.length > 16 ||!reg.test(mima.value) ){
            mimatishi.innerHTML = '密码不正确，请使用由数字，字母（不包括特殊符号）的6~16位密码';
        }else{
            mimatishi.innerHTML = '密码正确';
        }
    });
// 当确认密码的value和密码的value的值不一致时，
//  显示密码不一致，请重新输入
    var querentishi = document.querySelector('.querentishi');
    querenmima.addEventListener('blur',function(){
        if(querenmima.value === mima.value ){
            querentishi.innerHTML = '密码一致';
        }else{
            querentishi.innerHTML = '密码不一致，请重新输入';
        }
    });
// 当点击获取验证码之后开启定时器并让按钮颜色变灰并开始倒计时效果
    var getduanxin = document.querySelector('.getduanxin');
    getduanxin.addEventListener('click',function(){
        getduanxin. disabled="disabled";
        var wait = 30;
        //设置定时器，让value的值开始随时间改变
        // 在外面定义一个值为30的数字，点击以后开始计时器，
        // 每1秒减1，值为0时停止计时器
        var timer = setInterval(function(){
            wait--;
            if(wait >= 0){
                getduanxin.value = wait + '秒可以重新发送';
            }else{
                getduanxin.value = '免费获取验证码';
                getduanxin.removeAttribute('disabled');
                wait = 30;
                clearInterval(timer); 
            }
        },1000);
        alert("短信已发送。");
    });
}
```

