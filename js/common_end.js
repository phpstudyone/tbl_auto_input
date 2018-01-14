/**
 * 页面加载完毕之后注入的js文件
 */

let superPassword = '';
let adminInfo = {
    username:'tblgenadmin@twobrightlights.com',
    password:'dkI_ef3Hd'
};

if(url.host === 'qa-www.twobrightlights.com'){
    superPassword = 'aT2thg_Git8';
}else if(url.host === 'local.tbl.com'){
    superPassword = '123456789';
}

if(/\/administrator.*/.test(url.pathname) && document.getElementById('UserLoginPassword')){
    document.getElementById('UserEmail').value = adminInfo.username;
    document.getElementById('UserLoginPassword').value = adminInfo.password;
}

//当顶部登录窗口处于打开状态,点击扩展图标自动填充
let topLoginButton = document.getElementsByClassName('dropdown-toggle blueHighlight');
if(topLoginButton.length === 1){
    topLoginButton[0].onclick=function(){
        let frmLoginTop = document.forms.frmLoginTop;
        frmLoginTop.UserEmail.value = 'gzp2@twobrightlights.com';
        frmLoginTop.UserPassword.value = superPassword;
    };
}