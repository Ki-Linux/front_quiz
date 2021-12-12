<template>
    <div id="add">
        <h1>新規登録</h1>
        <p>新規登録をすると<br>エキストラクイズ、画像クイズができます。<br>※本名での登録はお控えください。</p>
        <my-edit @to-parent="toParent"/>
        <div class="setup">
            <p>{{ showNothing }}</p>
            <button @click.once="setup">登録する</button>
        </div>
        <to-home/>
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import myEdit from '../components/myEdit.vue';
    import toRouter from '@/components/toRouter.vue';
    import { sendPage } from '../components/ableSendYes';
    import axios from 'axios';

    @Component({
        components: {
            'my-edit': myEdit,
            'to-home': toRouter,
        }
    })
    export default class add extends Vue {

        public name = "";
        public password = "";
        public Written = false;
        public showNothing = "";

        toParent(childName: string, childPassword: string): void {
            this.name = childName;
            this.password = childPassword;
        }

        setup(): void {
            //console.log('set up can');


            if(this.name !== "" && this.password !== "") {

                //console.log("no nothing Written");
                this.Written = true;

            } else if(this.name === "" && this.password === "") {

                //console.log("nothing both");
                this.showNothing = "ユーザーニックネームとパスワードが入力されていません。";

            } else if(this.name === "") {

                //console.log("nothing name");
                this.showNothing = "ユーザーニックネームが入力されていません。"

            } else if(this.password === "") {

                //console.log("nothing password");
                this.showNothing = "パスワードが入力されていません。"

            }
                        
            axios.defaults.baseURL = "https://servicenewquiz.azurewebsites.net";

            const canPost = () => {

                axios.post('/post/namePost', {
                postName: this.name,
                postPassword: this.password

                })
                .then((response) => {
                    //console.log("response");
                })
                .catch((error) => {
                    //console.log("error");
                });


                //点数の方のデータベースを作る(エキストラ)
                axios.post('/post/pointPost', {
                postUserName: this.name,

                })
                .then((response) => {
                    //console.log("response");
                })
                .catch((error) => {
                    //console.log("error");
                });


                //点数の方のデータベースを作る(画像)
                axios.post('/post/pointImgPost', {
                postUserNameByImg: this.name,

                })
                .then((response) => {
                    //console.log("response");
                })
                .catch((error) => {
                    //console.log("error");
                });
            }

            if(this.Written) {
                canPost();
            }

            const second = () => {

                //ableSendYes実行
                sendPage();

                //console.log("sendTrue");

                axios.get('/sendTrue')
                .then((response) => {
                    //console.log('res success on /sendTrue');
                    this.showNothing = response.data;
  


                })
                .catch((error) => {
                    //console.log(error);
                })

                setTimeout(() => {
                    
                    location.reload();
                },5000);

            }
                         

            setTimeout(second, 6000);


                    
        }
    }
</script>
<style scoped lang="scss">
    #add {
        padding-top: 50px;
        .setup {
            button {
                font-size: 22px;
                padding: 5px 15px;
                margin:10px 0 140px;
            }
        }
    }
</style>