//发送消息  获取当前活动的页面的url，发送消息到back后台
// chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//     chrome.runtime.sendMessage(tabs[0].url,function(response){
//         console.log(response,2222);
//     });
// })

// test();

chrome.tabs.executeScript(null,{file:"./js/common.js"});