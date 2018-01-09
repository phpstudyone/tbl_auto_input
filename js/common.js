//接受消息
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
// });

url = new URL(window.location.href);
superPassword = '';
adminInfo = {
    username:'tblgenadmin@twobrightlights.com',
    password:'dkI_ef3Hd'
};

if(url.host == 'qa-www.twobrightlights.com'){
    superPassword = 'aT2thg_Git8'; 
}else if(url.host == 'local.tbl.com'){
    superPassword = '123456789'; 
}
//当打开顶部登录框的时候,自动填充(需先绑定事件)
// topLoginForm = document.getElementsByClassName('dropdown-toggle blueHighlight');
// if(topLoginForm.length == 1){
//     topLoginForm[0].addEventListener('click',function(){
//       let frmLoginTop = document.forms.frmLoginTop;
//       frmLoginTop.UserEmail.value = 'gzp2@twobrightlights.com';
//       frmLoginTop.UserPassword.value = superPassword; 
//     }) 
// }

//当顶部登录窗口处于打开状态,点击扩展图标自动填充
topLoginForm = document.getElementsByClassName('dropdown blueHighlight  test-loginformbtn'); 
if(topLoginForm.length == 1 && topLoginForm[0].classList.contains('open')){
    let frmLoginTop = document.forms.frmLoginTop;
    frmLoginTop.UserEmail.value = 'gzp2@twobrightlights.com';
    frmLoginTop.UserPassword.value = superPassword; 
}

pageFunction = {
    '/signup/index' : ()=>{
        console.log(11111);
    },
    '/users/user_login' : ()=>{
        let loginForm = document.forms.frmLogin
        loginForm.UserEmail.value = 'gzp2@twobrightlights.com';
        loginForm.UserPassword.value = superPassword;
    },
    'administrator':()=>{
        document.getElementById('UserEmail').value = adminInfo.username;
        document.getElementById('UserLoginPassword').value = adminInfo.password;
    }
}
console.log(url);
preg = /\/administrator.*/;
if(preg.test(url.pathname)){
    pageFunction['administrator']();
}else{
    if(typeof pageFunction[url.pathname] != undefined){
      pageFunction[url.pathname]();
    }
}
    


