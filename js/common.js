/**
 * 页面加载完毕之前注入的js文件
 * （供后台脚本调用）
 */
let url = new URL(window.location.href);

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

let pageFunction = {
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

function run(){
    if(typeof pageFunction[url.pathname] !== undefined){
        pageFunction[url.pathname]();
    }
}


    


