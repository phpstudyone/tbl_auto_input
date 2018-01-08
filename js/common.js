//接受消息
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
// });

let url = new URL(window.location.href);
let superPassword = '';
let adminInfo = {
    username:'tblgenadmin@twobrightlights.com',
    password:'dkI_ef3Hd'
};

if(url.host == 'qa-www.twobrightlights.com'){
    superPassword = 'aT2thg_Git8'; 
}else if(url.host == 'tbl.local.com'){
    superPassword = '123456789'; 
}

let pageFunction = {
    '/signup/index' : ()=>{
        console.log(11111);
    },
    '/users/user_login' : ()=>{
        let loginForm = document.forms.frmLogin
        loginForm.UserEmail.value = 'gzp2@twobrightlights.com';
        loginForm.UserPassword.value = superPassword;
    },
}

pageFunction[url.pathname]();