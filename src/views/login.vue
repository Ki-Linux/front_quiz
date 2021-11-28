<template>
    <div id="login">
        <h1>ログイン</h1>
        <my-edit-login @to-parent="toParent"/>
        <div class="setLogin">
            <button @click="goLogin">ログインする</button>
        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import myEdit from '@/components/myEdit.vue';

    @Component({
        components: {
            'my-edit-login': myEdit,
        }
    })
    export default class login extends Vue {

        public login_name = "";
        public login_password = "";

        toParent(childName: string, childPassword: string): void {
            this.login_name = childName;
            this.login_password = childPassword;
        }

        goLogin(): void {
            console.log('goLogin');
        }
    }
</script>
