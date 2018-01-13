/**
 * chrome.runtime.sendMessage 前台给后台发送消息
 * chrome.runtime.onMessage.addListene 前台监控后台发送的消息
 */

let clickFunction = {
    'A' : ()=>{

    },
    'B' : ()=>{

    },
    'C' : ()=>{

    },
    'D' : ()=>{

    },
    'F' : ()=>{

    },
    'G' : ()=>{

    }
};

window.onmouseup = function(){
    let selection = window.getSelection();
    if(selection.anchorOffset !== selection.extentOffset){
        chrome.runtime.sendMessage({type:"translate","text":selection.toString()});
    }else{
        chrome.runtime.sendMessage({type:"auto_input",'text':window.location.href});
    }
};


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    clickFunction[message]();
});