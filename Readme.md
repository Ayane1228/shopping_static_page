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
                // 关闭节流阀,不知道播放
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

