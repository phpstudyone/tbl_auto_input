/**
 * 页面加载完毕之后注入的js文件
 */
(()=>{
    let url = new URL(window.location.href);

    let _sameFieldINput = (UserProfileFirstName)=>{
        let signUpForm = document.forms.signUpForm;
        signUpForm.UserProfileFirstName.value = UserProfileFirstName;
        signUpForm.UserProfileLastName.value = commom.getRandomMathByTime();
        signUpForm.UserEmail.value = signUpForm.UserProfileFirstName.value + signUpForm.UserProfileLastName.value + '@twobrightlights.com';
        signUpForm.UserPassword.value = '123456789';
        let UserAddressStateId = signUpForm.UserAddressStateId;
        UserAddressStateId.value = 5;
        document.getElementById('UserAddressStateIdSelectBoxItText').innerHTML = UserAddressStateId.options[UserAddressStateId.selectedIndex].text;
        if( document.getElementById('hdn_sub_state_id') ){
            document.getElementById('hdn_sub_state_id').value = 5;
        }
        signUpForm.UserAddressCity.value = 'New York';
        signUpForm.UserAddressZipcode.value = '78234678';
        signUpForm.UserAddressPhoneNumber.value = '2341234646';
        signUpForm.UserProfileOrganizationName.value = signUpForm.UserProfileFirstName.value + signUpForm.UserProfileLastName.value;
        let UserProfileEstablishedWhen = signUpForm.UserProfileEstablishedWhen;
        UserProfileEstablishedWhen.value = 2018;
        document.getElementById('UserProfileEstablishedWhenSelectBoxItText').innerHTML = UserProfileEstablishedWhen.options[UserProfileEstablishedWhen.selectedIndex].text;
        signUpForm.UserProfileWebAddress.value = 'www.' +　signUpForm.UserProfileOrganizationName.value + '.com';
        document.getElementById('chk_condition').click();
    };

    let clickFunction = {
        'A' : ()=>{
            _sameFieldINput('gzp_');
        },
        'B' : ()=>{
            _sameFieldINput('gzv_');
            let VendorServiceVendorCategoryId = document.forms.signUpForm.VendorServiceVendorCategoryId;
            VendorServiceVendorCategoryId.value = 95;
            document.getElementById('VendorServiceVendorCategoryIdSelectBoxItText').innerHTML = VendorServiceVendorCategoryId.options[VendorServiceVendorCategoryId.selectedIndex].text;
        },
        'C' : ()=>{
            _sameFieldINput('gzvp_');
        },
        'D' : ()=>{
            let frmEditor = document.forms.frmEditor;
            frmEditor.UserProfileFirstNameE.value = 'gze_';
            frmEditor.UserProfileLastNameE.value = commom.getRandomMathByTime();
            frmEditor.UserEmailE1.value = frmEditor.UserProfileFirstNameE.value + frmEditor.UserProfileLastNameE.value + '@twobrightlights.com';
            let UserAddressStateIdE = frmEditor.UserAddressStateIdE;
            UserAddressStateIdE.value = 5;
            document.getElementById('UserAddressStateIdESelectBoxItText').innerHTML = UserAddressStateIdE.options[UserAddressStateIdE.selectedIndex].text;
            ((stateValue)=>{
                let actionRole = document.getElementById('otherstate_sub_editor');
                if(actionRole){
                    stateValue ? (actionRole.style.display = 'inline') : (actionRole.style.display = 'none');
                }
                if (document.getElementById('hdn_sub_state_id_e')) {
                    document.getElementById('hdn_sub_state_id_e').value = stateValue;
                }
            })(5);

            frmEditor.UserAddressCityE.value = 'New York';
            frmEditor.UserAddressZipcodeE.value = '2347889';
            frmEditor.UserAddressPhoneNumberE.value = '897347';
            frmEditor.UserProfileOrganizationNameE.value = frmEditor.UserProfileFirstNameE.value + frmEditor.UserProfileLastNameE.value;
            let UserProfileEstablishedWhenE = frmEditor.UserProfileEstablishedWhenE;
            UserProfileEstablishedWhenE.value = 2018;
            document.getElementById('UserProfileEstablishedWhenESelectBoxItText').innerHTML = UserProfileEstablishedWhenE.options[UserProfileEstablishedWhenE.selectedIndex].text;
            frmEditor.UserProfileWebAddressE.value = 'www.' +　frmEditor.UserProfileOrganizationNameE.value + '.com';
            frmEditor.publication_name_1.value = 'publication_' + frmEditor.UserProfileLastNameE.value;
            let PublicationType1 = frmEditor.PublicationType1;
            PublicationType1.value = 'P';
            document.getElementById('PublicationType1SelectBoxItText').innerHTML = PublicationType1.options[PublicationType1.selectedIndex].text;
            frmEditor.circulation_1.value = 100;
            document.getElementById('chk_condition_editor').click();
        },
        'E' : ()=>{
            document.getElementsByClassName('albumTypeSelect')[0].click();
            let i = 1 , sleep = 1000;
            setTimeout(function(){
                document.getElementsByClassName('categoryBlock')[0].click();
            },sleep*i++);

            setTimeout(function(){
                document.getElementById('real').click();
            },sleep*i++);

            setTimeout(function(){
                document.getElementById('WeddingBrideFirstName').value = 'Jason';
                document.getElementById('WeddingBrideLastName').value = 'Zhang';
                document.getElementById('WeddingGroomFirstName').value = 'Jason';
                document.getElementById('WeddingGroomLastName').value = 'Zhang';
                document.getElementById('wedding_date').value = commom['getAfterNdate'](15);
                document.getElementById('locationCity').value = 'City';
                document.getElementById('WeddingTitle').value = 'test add album title';
                document.getElementById('nextSuccessBtn').click();
            },sleep*i++);

            setTimeout(() => {
                document.getElementById('venue_private_residence').click();
                document.getElementById('tagsShowingBtn').click();

            }, sleep*i++);

            setTimeout(() => {
                document.getElementsByClassName('btn-blue albSaveFinal tagSaveBtn new_dom test-nextdone')[0].click();
            }, sleep*i++);
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

    let commom = {
        /**
         * 生成N天后的美式日期
         * @param n
         * @returns {string}
         */
        'getAfterNdate' : (n)=>{
            let date = new Date();
            let year,month,day ;
            date.setDate(date.getDate()+n);
            year = date.getFullYear();
            month = date.getMonth()+1;
            day = date.getDate() ;
            return  ( month < 10 ? ( '0' + month ) : month ) + '/' + ( day < 10 ? ( '0' + day ) : day) + '/' + year ;
        },
        /**
         * 返回距离当天早上10点的秒数
         * @returns {number}
         */
        'getRandomMathByTime' : ()=>{
            return Math.ceil((new Date()).valueOf() / 1000) - ((new Date()).setHours(10, 0, 0, 0)) /1000;
        }
    };

    /**
     * 开启被禁用的右键菜单
     */
    document.oncontextmenu = ()=>{
        event.returnValue = true;
    };

    let superPassword = '';
    let adminInfo = {
        username:'tblgenadmin@twobrightlights.com',
        password:'dkI_ef3Hd'
    };

    if(url.host === 'qa-www.twobrightlights.com'){
        superPassword = 'aT2thg_Git8';
    }else if(url.host === 'local.tbl.com'){
        superPassword = '123456789';
    }

    /**
     *admin login page 加载完毕自动填充登陆表单
     */
    if(/\/administrator.*/.test(url.pathname) && document.getElementById('UserLoginPassword')){
        document.getElementById('UserEmail').value = adminInfo.username;
        document.getElementById('UserLoginPassword').value = adminInfo.password;
    }

    /**
     *users login page 加载完毕自动填充登陆表单
     */
    if(/users\/user_login/.test(url.pathname)){
        let loginForm = document.forms.frmLogin;
        loginForm.UserEmail.value = 'gzp2@twobrightlights.com';
        loginForm.UserPassword.value = superPassword;
    }

    /***
     * 唤出顶部登陆框自动填充
     */
    let topLoginButton = document.getElementsByClassName('dropdown-toggle blueHighlight');
    if(topLoginButton.length === 1){
        topLoginButton[0].onclick=function(){
            let frmLoginTop = document.forms.frmLoginTop;
            frmLoginTop.UserEmail.value = 'gzp2@twobrightlights.com';
            frmLoginTop.UserPassword.value = superPassword;
        };
    }
})();

