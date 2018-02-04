(()=>{

    chrome.storage.local.get(function(message){
        Object.keys(message).forEach((element)=>{
            document.getElementsByName('webURL['+element+']')[0].value = message[element].webUrl;
            document.getElementsByName('fusername['+element+']')[0].value = message[element].fusername;
            document.getElementsByName('fpassword['+element+']')[0].value = message[element].fpassword; 
            document.getElementsByName('busername['+element+']')[0].value = message[element].busername; 
            document.getElementsByName('bpassword['+element+']')[0].value = message[element].bpassword;  
        })
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
