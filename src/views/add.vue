<template>
    <div>
        <h1>新規登録</h1>
        <div class="user">
            <h2>ユーザーニックネーム</h2>
            <input type="text" maxlength="10" v-model="name">
        </div>
        <div class="password">
            <h2>パスワード</h2>
            <input type="password" maxlength="10" v-model="password">
        </div>
        <div class="setup">
            <p>{{ showNothing }}</p>
            <button @click="setup">登録する</button>
        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import axios from 'axios'

    @Component
    export default class add extends Vue {

        public name = "";
        public password = "";
        public Written = false;
        public showNothing = "";

        setup(): void {
            console.log('set up can');
            
            axios.defaults.baseURL = "http://localhost:3000";

            if(this.name !== "" && this.password !== "") {

                console.log("no nothing Written");
                this.Written = true;

            } else if(this.name === "" && this.password === "") {

                console.log("nothing both");
                this.showNothing = "ユーザーニックネームとパスワードが入力されていません。";

            } else if(this.name === "") {

                console.log("nothing name");
                this.showNothing = "ユーザーニックネームが入力されていません。"

            } else if(this.password === "") {

                console.log("nothing password");
                this.showNothing = "パスワードが入力されていません。"

            }

            const canPost = () => {

                axios.post('/post/namePost', {
                postName: this.name,
                postPassword: this.password

                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }

            if(this.Written === true) {
                canPost();
            }

            setTimeout(() => {
                axios.get('/sendTrue')
                .then((response) => {
                    const judge = response.data;

                    if(judge) {
                        this.showNothing = "このユーザーネームはすでに登録してあります。"
                    }

                })
                .catch((error) => {
                    console.log(error);
                })
            },1000)
            

        }
    }
</script>
<style>

</style>