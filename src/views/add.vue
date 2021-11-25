<template>
    <div>
        <h1>新規登録</h1>
        <div class="user">
            <h2>ユーザーニックネーム</h2>
            <input type="text">
        </div>
        <div class="password">
            <h2>パスワード</h2>
            <input type="text">
        </div>
        <div class="setup">
            <button @click="setup">登録する</button>
        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class add extends Vue {
        setup(): void {
            console.log('set up can');
        }
    }
</script>
<style>

</style>