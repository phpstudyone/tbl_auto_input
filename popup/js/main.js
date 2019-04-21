window.onload = () => { 
    let chore = JSON.parse(localStorage.getItem('chore')) || '';
    chore && exec[chore.action][action.setup];

    let photographyLogin = document.getElementById('photography-login');
    photographyLogin.addEventListener('click', () => {
        // localStorage.setItem('chore',JSON.stringify({
        //     action: 'photographyLogin',
        //     setup: 'A'
        // }));

        // chrome.storage.local.set();


        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            console.log(tabs);
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'photographyLogin',
                setup: 'A'
            }, (response) => {});
        });

    });
}