<template>
    <div class ="back">
        <button @click="toExtra">ホームへ戻る</button>
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import $router from '../router/index';

    @Component
    export default class toRouter extends Vue {
        toExtra(): void {
            $router.push('/');
        }
    }
</script>
