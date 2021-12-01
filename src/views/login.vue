<template>
    <div id="login">
        <h1>ログイン</h1>
        <my-edit-login @to-parent="toParent"/>
        <div class="setLogin">
            <p>{{ noWritten }}</p>
            <button @click="goLogin">ログインする</button>
        </div>
        <button-to-home/>
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import myEdit from '@/components/myEdit.vue';
    import toRouter from '@/components/toRouter.vue';
    import { nextPage, sendPage } from '../components/ableSendYes';
    import axios from 'axios';


    @Component({
        components: {
            'my-edit-login': myEdit,
            'button-to-home': toRouter,
        }
    })
    export default class login extends Vue {

        public bothWritten = false;
        public noWritten = "";
        public login_name = "";
        public login_password = "";
        public wordTrue: boolean = nextPage;

        toParent(childName: string, childPassword: string): void {
            this.login_name = childName;
            this.login_password = childPassword;
        }

        goLogin(): void {
            console.log('goLogin');
                        
            axios.defaults.baseURL = "http://localhost:3000";

            //reload
            const startReload = () => {
                location.reload();
            }

            if(this.login_name !== "" && this.login_password !== "") {

                console.log("no nothing Written");
                this.bothWritten = true;

            } else if(this.login_name === "" && this.login_password === "") {

                console.log("nothing both");
                this.noWritten = "ユーザーニックネームとパスワードが入力されていません。";
                setTimeout(startReload, 1000);


            } else if(this.login_name === "") {

                console.log("nothing name");
                this.noWritten = "ユーザーニックネームが入力されていません。"
                setTimeout(startReload, 1000);

            } else if(this.login_password === "") {

                console.log("nothing password");
                this.noWritten = "パスワードが入力されていません。"
                setTimeout(startReload, 1000);

            }

            const canSend = () => {

                axios.post('/loginTwo', {

                    loginName: this.login_name,
                    loginPassword: this.login_password
                })
                .then((response) => {
                    console.log("response");
                })
                .catch((error) => {
                    console.log("error");
                });

            }

            if(this.bothWritten) {
                canSend();
            }


            //ログイン成功か失敗かを表示させる
            
            const judgeYes = () => {
               
               //ableSendYes実行
                sendPage();
                
                setTimeout(()=> {


                    if(!this.wordTrue) {
                        
                        this.noWritten = "ユーザーニックネームまたはパスワードが違います。"
                        setTimeout(startReload, 1000);

                    }

                },1000);
            }

            setTimeout(judgeYes,1000);
            

            
           
        }
    }
</script>
