function getAfterNdate (n){
    let date = new Date();
    let year,month,day ;
    date.setDate(date.getDate()+n);
    year = date.getFullYear() + 1;
    month = date.getMonth()+1;
    return  ( month < 10 ? ( '0' + month ) : month ) + '/' + year ;
}

function insertDate(nodeID,value){
    if(document.getElementById(nodeID).value.length === 0){
        //点击输入框
        let clickEvent = document.createEvent("UIEvent");
        clickEvent.initUIEvent("click", true, true, window, 1);
        document.getElementById(nodeID).dispatchEvent(clickEvent);
        //写入值
        document.getElementById(nodeID).value = value;
    }
}

function fireKeyEvent(domNode, evtType, keyCode){
    let clickEvent = document.createEvent("UIEvent");
    clickEvent.initUIEvent(evtType, true, true, window, 1);
    clickEvent.keyCodeVal = keyCode;
    document.getElementById(domNode).dispatchEvent(clickEvent);
}


let button = document.createElement("BUTTON");
button.id = 'tbl_auto_cc' ;
button.innerHTML  = '点我补充数据';
document.getElementById('controlBtn').appendChild(button);
button = document.getElementById('tbl_auto_cc');
button.addEventListener('click',function(){
    insertDate('cardNum','4111111111111111');
    insertDate('expiryDate',getAfterNdate(1));
    insertDate('cvv','123');
    insertDate('firstNameID','Jason');
    insertDate('lastNameID','Lee');
    insertDate('zipID','45648');
    insertDate('billingAddressID','4114 Sepulveda Blvd');
    insertDate('cityID','Culver City');
    insertDate('stateID','CA');
    insertDate('phonenumberID','32453462');
});