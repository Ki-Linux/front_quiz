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

        setup(): void {
            console.log('set up can');
            
            axios.defaults.baseURL = "http://localhost:3000";

            axios.post('/post/namePost', {
                postName: this.name,
                postPasswrod: this.password
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        }
    }
</script>
<style>

</style>