(()=>{

    chrome.storage.local.get(function(message){
        if(message.local){
            document.getElementsByName('webURL[0]').value = message.local.webUrl;
        }
    });


    let submit = document.getElementById('submit');
    submit.addEventListener('click',()=>{
        Array.from(document.getElementsByClassName('inputDiv')).forEach(value=>{
            let nodeNum = value.dataset.node;
            checkUrl(nodeNum,saveInputData);
        });
    });

    let urlPreg = {
        local:/local\.tbl\.com/,
        qa:/qa\-www\.twobrightlights\.com/,
        prod:/\/\/twobrightlights\.com/,
        prod1:/\/\/www\.twobrightlights\.com/
    }

    let checkUrl = (node,callback) =>{
        let url = getUrlByNode(node);
        Object.keys(urlPreg).forEach((key)=>{
            if(urlPreg[key].test(url)){
                callback(node,key)
            }
        });
    }

    let saveInputData = (node,key)=>{
        let setInfo = {};
        setInfo.fusername = document.getElementsByName('fusername['+node+']')[0].value;
        setInfo.fpassword = document.getElementsByName('fpassword['+node+']')[0].value;
        setInfo.busername = document.getElementsByName('busername['+node+']')[0].value;
        setInfo.bpassword = document.getElementsByName('bpassword['+node+']')[0].value;
        setInfo.webUrl = getUrlByNode(node);
        setInfo.preg = key;
        chrome.storage.local.set({[node]:setInfo})
    }

    let getUrlByNode = (node)=>{
        return document.getElementsByName('webURL['+node+']')[0].value;
    }
})()
