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
> 将顶部分为2部分，设置`float:left`和`float:right`,将2部分浮动到`w`的左右2边。

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

