<template>
    <div>
        <h1>新規登録</h1>
        <div class="user">
            <h2>ユーザーニックネーム</h2>
            <input type="text" v-model="name">
        </div>
        <div class="password">
            <h2>パスワード</h2>
            <input type="text" v-model="password">
        </div>
        <div class="setup">
            <button @click="setup">登録する</button>
        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import axios from 'axios'

    @Component
    export default class add extends Vue {

        public name = '';
        public password = "";
        public Written = false;

        setup(): void {
            console.log('set up can');
            
            axios.defaults.baseURL = "http://localhost:3000";

            if(this.name !== "" && this.password !== "") {

                console.log("no nothing Written");
                this.Written = true;

            } else if(this.name === "" && this.password === "") {

                console.log("nothing both");

            } else if(this.name === "") {

                console.log("nothing name");

            } else if(this.password === "") {

                console.log("nothing password");

            }

            const canPost = () => {

                axios.post('/post/namePost', {
                postName: this.name,
                postPassword: this.password

                });
            }

            if(this.Written === true) {
                canPost();
            }
            

        }
    }
</script>
<style>

</style>