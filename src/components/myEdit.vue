<template>
    <div id="myEdit">
        <div class="user">
            <h2>ユーザーニックネーム</h2>
            <input type="text" maxlength="10" v-model="childName" @input="Write">
        </div>
        <div class="password">
            <h2>パスワード</h2>
            <label id="eye-icon" for="closepassword" @click="closeEye" v-if="isActive"><img src="../assets/eye.png" alt=""></label>
            <label id="eye-closed" for="checkpassword" @click="openEye" v-else><img src="../assets/EyeClosed.png" alt=""></label>
            <input id="checkpassword" type="password" v-if="isActive" maxlength="10" v-model="childPassword" @input="Write">
            <input id="closepassword" type="text" v-else maxlength="10" v-model="childPassword" @input="Write">

        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class myEdit extends Vue {
    public childName = "";
    public childPassword = "";
    public isActive = true;

    Write() {
        
        this.$emit('to-parent', this.childName, this.childPassword);
    }

    closeEye() {
        this.isActive = false;
    }

    openEye() {
        this.isActive = true;
    }
    
}
</script>
<style scoped lang="scss">
    #myEdit {
        margin: 20px 0;
        .user {
            margin: 20px;
        }

        input {
            font-size: 22px;
            padding-left: 3px;
        }
    }

    .password {
            label > img {
                margin: 0 auto;
            }
        } 
 
</style>
