//接受消息
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
// });

let commom = {
    'getAfterNdate' : (n)=>{
        let date = new Date(); 
        let year,month,day ;  
        date.setDate(date.getDate()+n);  
        year = date.getFullYear();  
        month = date.getMonth()+1;  
        day = date.getDate() ;  
        return  ( month < 10 ? ( '0' + month ) : month ) + '/' + ( day < 10 ? ( '0' + day ) : day) + '/' + year ;
    }
};

let url = new URL(window.location.href);
superPassword = '';
adminInfo = {
    username:'tblgenadmin@twobrightlights.com',
    password:'dkI_ef3Hd'
};

if(url.host === 'qa-www.twobrightlights.com'){
    superPassword = 'aT2thg_Git8'; 
}else if(url.host === 'local.tbl.com'){
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
    'administrator':()=>{
        document.getElementById('UserEmail').value = adminInfo.username;
        document.getElementById('UserLoginPassword').value = adminInfo.password;
    },
    '/albums/create_album':()=>{
        document.getElementsByClassName('albumTypeSelect')[0].click();
        let i = 1 , sleep = 1000;
        setTimeout(function(){
           document.getElementsByClassName('categoryBlock')[0].click();
        },sleep*i++);

        setTimeout(function(){
           document.getElementById('real').click();
        },sleep*i++);

        setTimeout(function(){
            document.getElementById('WeddingBrideFirstName').value = 'Jason';
            document.getElementById('WeddingBrideLastName').value = 'Zhang';
            document.getElementById('WeddingGroomFirstName').value = 'Jason';
            document.getElementById('WeddingGroomLastName').value = 'Zhang';
            document.getElementById('wedding_date').value = commom['getAfterNdate'](15);
            document.getElementById('locationCity').value = 'City';
            document.getElementById('WeddingTitle').value = 'test add album title';
            document.getElementById('nextSuccessBtn').click();
        },sleep*i++);

        setTimeout(() => {
            document.getElementById('venue_private_residence').click();
            document.getElementById('tagsShowingBtn').click();
            
        }, sleep*i++);

        setTimeout(() => {
            document.getElementsByClassName('btn-blue albSaveFinal tagSaveBtn new_dom test-nextdone')[0].click();
        }, sleep*i++);
    }
};

console.log(url.host);

if(document.getElementById('cardNum')){
    document.getElementById('cardNum').value = '3333333';
}

function run(){
    console.log(url.host);

    if(document.getElementById('cardNum')){
        document.getElementById('cardNum').value = '22222222';
    }


    //当顶部登录窗口处于打开状态,点击扩展图标自动填充
    let topLoginForm = document.getElementsByClassName('dropdown blueHighlight  test-loginformbtn');
    if(topLoginForm.length === 1 && topLoginForm[0].classList.contains('open')){
        let frmLoginTop = document.forms.frmLoginTop;
        frmLoginTop.UserEmail.value = 'gzp2@twobrightlights.com';
        frmLoginTop.UserPassword.value = superPassword;
    }

    let preg = /\/administrator.*/;
    if(preg.test(url.pathname)){
        pageFunction['administrator']();
    }else{
        if(typeof pageFunction[url.pathname] !== undefined){
            pageFunction[url.pathname]();
        }
    }
}


    


