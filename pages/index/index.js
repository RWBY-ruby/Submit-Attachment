new Vue({
    el: "#index",
    data: {
        userId:"",
        password:"",
        note:"",
        loginMethod:0,
        pwType:true,
        nType:false,
        aType:false,
        isChecked:false,
        isPasswdHide:true,
        checkImgSrc:"../../assets/image/weigouxuan.png",
        hideImgSrc:"../../assets/image/icon-test.png",
        isHideLogin:0,
    },
    methods: {
        choicePasswdLogin:function () {
            console.log("进入密码登录");
            this.loginMethod = 0;
            this.pwType = true;
            this.nType = false;
            this.aType = false;
        },
        choiceNoteLogin:function () {
            console.log("进入短信登录");
            this.loginMethod = 1;
            this.pwType = false;
            this.nType = true;
            this.aType = false;
        },
        choiceAdminLogin:function () {
            console.log("进入管理员登录");
            this.loginMethod = 2;
            this.pwType = false;
            this.nType = false;
            this.aType = true;
        },
        addBtmBorder:function () {
            if (this.loginMethod == 1){
                return
            }
        },
        doCheck:function () {
            this.isChecked = !this.isChecked;
            if (this.isChecked == true){
                this.checkImgSrc = "../../assets/image/xuanzhong.png";
            } else {
                this.checkImgSrc = "../../assets/image/weigouxuan.png";
            }
        },
        doHide:function () {
            this.isPasswdHide = !this.isPasswdHide;
            if (this.isPasswdHide == true){
                this.hideImgSrc = "../../assets/image/icon-test.png";
            } else {
                this.hideImgSrc = "../../assets/image/icon-test-3.png";
            }
        },
        doHideLogin(){
            if (this.isHideLogin == 0){
                this.isHideLogin = 1;
            } else {
                this.isHideLogin = 0;
            }
            console.log(this.isHideLogin);
        }
    }
});