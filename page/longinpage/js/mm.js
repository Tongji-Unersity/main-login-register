var code ; //在全局定义验证码   
      
function createCode()
{ 
     code = "";    
     var codeLength = 4;//验证码的长度   
     var checkCode = document.getElementById("code");    
     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
     'S','T','U','V','W','X','Y','Z');//随机数   
     for(var i = 0; i < codeLength; i++) {//循环操作   
        var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）   
        code += random[index];//根据索引取得随机数加到code上   
    }   
    checkCode.value = code;//把code值赋给验证码   
} 

//校验验证码   
let button = document.getElementById('button');
button.onclick=function(){
var password=document.getElementById("password").value;
var username=document.getElementById("username").value;

if(!password||!username)
{
alert("请输入用户名或者密码")
return false;
}
/*var xhr=new XMLHttpRequest()
xhr.open('POST','http://localhost:8888/user/login',true)
xhr.onload=function(){
var res=JSON.parse(xhr.responseText)
console.log(res)

}
xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
xhr.send('username'+username+'password'+password)*/


var inputCode =document.getElementById("Captcha").value.toUpperCase(); //取得输入的验证码并转化为大写         
if(inputCode.length <= 0) { //若输入的验证码长度为0   
  alert("请输入验证码！"); //则弹出请输入验证码   
  return false;
}
else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时   
  alert("验证码输入错误！"); //则弹出验证码输入错误   
  createCode();//刷新验证码   
  document.getElementById("Captcha").value = "";//清空文本框 
  return false;
}
else { //输入正确时   
  alert("登录成功,正在跳转...");
  
} 
return true;
}