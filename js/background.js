/**
 * chrome.tabs.sendMessage 后台给前台发送消息
 * chrome.runtime.onMessage.addListener 后台监控前台台发送的消息
 */

/**
 * 定义一些常量，前后台保持一致，方便函数调用
 * @type {{A: {key: string, value: string}, B: {key: string, value: string}}}
 */
let defineFunction = {
    'A' : {key:'A',value:'create Photographer data',page:'signup/index',description:'signup/index page Photographer form'},
    'B' : {key:'B',value:'create Vendor data',page:'signup/index',description:'signup/index page Vendor form'},
    'C' : {key:'C',value:'create Videographer data',page:'signup/index',description:'signup/index page Videographer form'},
    'D' : {key:'D',value:'create Editor data',page:'signup/index',description:'signup/index page  Editor form'},
    'E' : {key:'E',value:'create a album',page:'albums/create_album',description:'auto create a album in albums/create_album page'},
    'G' : {key:'G',value:'create Photographer data',page:'users/user_login'}
};

/**
 * 用来存储创建的菜单 防止重复创建
 * @type {{}}
 */
let menusArr = {

};


let createMenu = (defineKey)=>{
        createNormalMenus(defineKey.key,defineKey.value);
    };

/**
 * 处理点击事件后移除菜单
 * @param info
 * @param tab
 */
let clickMenu = (info, tab)=>{
    chrome.tabs.sendMessage(tab.id, info.menuItemId,function(){
        chrome.contextMenus.remove(info.menuItemId,function(){
            menusArr[info.menuItemId] = 'undefined';
        });
    });
};

let createNormalMenus = (id,title)=>{
    if(typeof menusArr[id] === 'undefined' || menusArr[id] === 'undefined'){
        chrome.contextMenus.create({
            'id':id,
            'type':'normal',
            'title':title,
            'contexts':['page'],
            'onclick':clickMenu
        },function(){
            menusArr[id] = true;
        });
    }
};

// localStorage.setItem('chore',JSON.stringify({
//     action: 'photographyLogin',
//     setup: 'A'
// }));

/**
 * 后台向前台页面发送消息: 发送 localStorage 值
 */
// chrome.tabs.sendMessage();

chrome.tabs.getSelected(null, (tab) => {
    console.log(tab);
    // chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
    //     console.log(response);
    // });
});

/**
 * 后台程序监控前台消息
 */
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    Object.keys(menusArr).forEach((value)=>{
        menusArr[value] = undefined;
        chrome.contextMenus.remove(value); 
    });
    if(message.type === "auto_input"){
        let url = new URL(message.text);
        if(/\/signup\/index/.test(url.pathname)){
            createMenu(defineFunction.A);
            createMenu(defineFunction.B);
            createMenu(defineFunction.C);
            createMenu(defineFunction.D);
        }else if(/albums\/create_album/.test(url.pathname)){
            createMenu(defineFunction.E);
        }
    }
});
