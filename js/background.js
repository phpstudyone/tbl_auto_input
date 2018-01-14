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

/**
 * 跳转到翻译之后删除这个菜单（防止不停的新建相同菜单）
 * 希望后面能改进翻译（不跳转，在页面直接翻译）
 *（pop up 加载iframe 或者弹出modal框）
 * @param info
 * @param tab
 */
function translate(info, tab){
    chrome.contextMenus.remove('cn');
    let url = 'http://translate.google.com.hk/#auto/zh-CN/'+info.selectionText ;
    window.open(url, '_blank');
}

let createMenu = (defineKey)=>{
        createNormalMenus(defineKey.key,defineKey.value);
    };

/**
 * 处理点击事件后移除菜单
 * @param info
 * @param tab
 */
let clickMenu = (info, tab)=>{
    console.log(info, tab);
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tab.id, info.menuItemId,function(){
            chrome.contextMenus.remove(info.menuItemId,function(){
                menusArr[info.menuItemId] = 'undefined';
            });
        });
    // });
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


/**
 * 后台程序监控前台消息
 */
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message.type === "translate"){
        chrome.contextMenus.create({
            'type':'normal',
            'title':'使用Google翻译“'+message.text+'”',
            'contexts':['selection'],
            'id':'cn',
            'onclick':translate
        });
    }else if(message.type === "auto_input"){
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
