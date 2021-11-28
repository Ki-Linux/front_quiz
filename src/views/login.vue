<template>
    <div id="login">
        <h1>ログイン</h1>
        <my-edit-login @to-parent="toParent"/>
        <div class="setLogin">
            <p>{{ noWritten }}</p>
            <button @click="goLogin">ログインする</button>
        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import myEdit from '@/components/myEdit.vue';
    import axios from 'axios';
    import $router from '../router/index';


    @Component({
        components: {
            'my-edit-login': myEdit,
        }
    })
    export default class login extends Vue {

        public bothWritten = false;
        public noWritten = "";
        public login_name = "";
        public login_password = "";
        public wordTrue = false;

        toParent(childName: string, childPassword: string): void {
            this.login_name = childName;
            this.login_password = childPassword;
        }

        goLogin(): void {
            console.log('goLogin');
                        
            axios.defaults.baseURL = "http://localhost:3000";

             if(this.login_name !== "" && this.login_password !== "") {

                console.log("no nothing Written");
                this.bothWritten = true;

            } else if(this.login_name === "" && this.login_password === "") {

                console.log("nothing both");
                this.noWritten = "ユーザーニックネームとパスワードが入力されていません。";

            } else if(this.login_name === "") {

                console.log("nothing name");
                this.noWritten = "ユーザーニックネームが入力されていません。"

            } else if(this.login_password === "") {

                console.log("nothing password");
                this.noWritten = "パスワードが入力されていません。"

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
                axios.get('/ableSendYes')
                .then((response) => {
                    console.log(response.data);
                    this.wordTrue = response.data;

                    if(this.wordTrue) {
                        $router.push('/extraHome');
                    }

                })
                .catch((error) => {
                    console.log(error);
                })
            }

            setTimeout(judgeYes,1000);
            

            
           
        }
    }
</script>
