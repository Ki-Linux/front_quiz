<template>
    <div id="myEdit">
        <div class="user">
            <h2>ユーザーニックネーム</h2>
            <input type="text" maxlength="10" v-model="childName" @input="Write">
        </div>
        <div class="password">
            <h2>パスワード</h2>
            <input type="password" maxlength="10" v-model="childPassword" @input="Write">
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class myEdit extends Vue {
    public childName = "";
    public childPassword = "";

    Write() {
        
        this.$emit('to-parent', this.childName, this.childPassword);
    }
    
}
</script>
<style scoped lang="scss">
    #myEdit {
        margin-top: 20px;
        .user {
            margin: 20px;
        }

        input {
            font-size: 22px;
            padding-left: 3px;
        }
    }

    

    .password input{
        background: url("../assets/eye.png") right center no-repeat;
    }
</style>
