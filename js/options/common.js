(()=>{
    let setInfo = {};
    let submit = document.getElementById('submit');
    submit.addEventListener('click',()=>{
        Array.from(document.getElementsByClassName('inputDiv')).forEach(value=>{
            let nodeNum = value.dataset.node;
            checkUrl(nodeNum,saveInputData);
        });
    });

    let checkUrl = (node,callback) =>{
        let url = getUrlByNode(node);
        if(/local\.tbl\.com/.test(url) || /qa\-www\.twobrightlights\.com/.test(url) || /\/\/twobrightlights.com/.test(url)){
            callback(node);
        }
    }

    let saveInputData = (node)=>{
        let permissionsUrl;
        switch(node){
            case 0: setInfo.node.permissionsUrl = "*://local.tbl.com/*"; break;
            case 1: setInfo.node.permissionsUrl = "*://qa-www.twobrightlights.com/*"; break;
            case 2: setInfo.node.permissionsUrl = "*://.twobrightlights.com/*"; break;
        }
        setInfo.node.fUserName = document.getElementsByName('fusername['+node+']')[0].value;
        setInfo.node.fUserName = document.getElementsByName('fpassword['+node+']')[0].value;
        setInfo.node.fUserName = document.getElementsByName('busername['+node+']')[0].value;
        setInfo.node.fUserName = document.getElementsByName('bpassword['+node+']')[0].value;
        chrome.storage.local.set(setInfo.node);

        //获取数据
        chrome.storage.local.get('a',function(message){
            console.log(message)
        });
        
    }

    let getUrlByNode = (node)=>{
        return document.getElementsByName('webURL['+node+']')[0].value;
    }


    let inputDiv = document.getElementById('add');
    inputDiv.addEventListener("click", ()=>{
        
    });
    
    let createNode = ()=>{
        let node = document.createElement('div');
        node.className = 'tooltipBox';
        node.createElement();
    }




})()
