window.addEventListener('load',function(){
	var arrow_l = document.querySelector('.arrow_l');
	var arrow_r = document.querySelector('.arrow_r');
	var focus = document.querySelector('.focus');
	// circle获得点击按钮时地小圆圈的播放
	var circle = 0;
	// 获得图片的宽度
	var focusWidth = focus.offsetWidth;
	// 2. 鼠标经过focus 就显示隐藏左右按钮并停止定时器 
	focus.addEventListener('mouseenter', function() {
	    arrow_l.style.display = 'block';
	    arrow_r.style.display = 'block';
		clearInterval(timer);
		// 清除定时器变量
		timer = null;
	});
	// 鼠标离开 重新开启定时器 定时器在一进入页面的时候就开调用 移上去之后定时器清除 离开重新开启 这时定时器已经进行过了定义 所以不需要重新定义定时器（不需要加var）
	focus.addEventListener('mouseleave', function() {
	    arrow_l.style.display = 'none';
		arrow_r.style.display = 'none';
		timer = setInterval(function(){
			// 手动调用函数
			arrow_r.click();
		},2000);
	    });
		
		// 动态添加小圆圈 有几张图就有几个小圆
		var ol = focus.querySelector('.circle');
		var ul = focus.querySelector('ul');
		for(var i = 0; i < ul.children.length; i++){
			// 创建一个li
			var li = document.createElement('li');
			ol.appendChild(li);
			// 通过自定义属性来得到小圆的索引号
			li.setAttribute('index',i);

			// 点击小圆圈 变为current类
			li.addEventListener('click',function(){
				for( var i = 0 ;i < ol.children.length; i++){
				// 其余的小圆圈就移除这个current类
					ol.children[i].className = '';
				// 点击当前小圆圈，就添加current类
					this.className = 'current';
				}
				// 将小圆圈的索引号*li的宽度得到ul的移动距离 
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

		// 克隆第一章图片并放到ul的最后 true深克隆 连同节点内的内容一起克隆 浅克隆只克隆一份节点
		var first = ul.children[0].cloneNode(true);
		ul.appendChild(first);

		// 点击右侧按钮 图片滚动一张
		var num = 0;
		var flag = true;
		// 点击右侧按钮的效果实现
		arrow_r.addEventListener('click',function(){
			if( flag = true){
				flag = false;//关闭节流阀
			// 如果走到了最后复制的一张 ul要快速复原
			if(num == ul.children.length - 1){
				// 重置轮播图 回到第一张之后继续触发下面的函数 num从0开始变为1
				ul.style.left = 0;
				num = 0;
			}
			num++;
			animate(ul,-num * focusWidth,function(){
				flag = true;//打开节流阀
			});
			// 点击按钮 小圆圈跟随一起变化 可以再定义一个变量circle控制小圆圈的播放
			circle++;
			// 加判断条件 如果circle为4说明走到了最后的克隆图片
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
				// 点击按钮 小圆圈跟随一起变化 可以再定义一个变量circle控制小圆圈的播放
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