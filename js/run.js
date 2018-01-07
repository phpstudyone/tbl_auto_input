
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    let url = new URL(tabs[0].url);
    switch(url.host){
        case 'qa-www.twobrightlights.com':
            qa(url);
            break;
        case 'tbl.local.com':
            local(url);
            break;
        case 'www.twobrightlights.com':
            prod(url);
            break;
        default:break;
    }
})

function qa(url){
    chrome.tabs.executeScript(null,{file:"./js/common.js"});
}



function local(url){

}

function prod(url){

}