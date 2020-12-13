/* 
	3个功能模块
	鼠标经过盒子 黄色的遮罩层显示和大图片盒子显示 离开隐藏
	黄色的遮挡层跟随鼠标
	移动黄色遮挡层，大图片跟随意动
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
	//黄色的遮盖层跟随鼠标功能
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
