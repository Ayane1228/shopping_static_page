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
    //对密码的输入内容进行判断，若不符合规范，
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
//当点击获取验证码之后开启定时器并让按钮颜色变灰并开始倒计时效果
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