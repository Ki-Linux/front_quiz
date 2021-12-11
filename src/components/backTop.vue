<template>
    <div>
        <button @click="backTop">トップに戻る</button> 
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import $router from '../router/index';

    @Component
    export default class BackTop extends Vue {
        backTop(): void {
            $router.push({ path:'/' });
        }
    }
</script>
<style scoped lang="scss">
    button {
        margin-top: 10px;
    }
</style>
