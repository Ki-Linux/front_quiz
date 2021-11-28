<template>
    <div id="myEdit">
        <div class="user">
            <h2>ユーザーニックネーム</h2>
            <input type="text" maxlength="10" v-model="childName">
        </div>
        <div class="password">
            <h2>パスワード</h2>
            <input type="password" maxlength="10" v-model="childPassword">
            <p>↑目をつける</p>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class myEdit extends Vue {
    public childName = "";
    public childPassword = "";

    mounted() {
        
        this.$emit('to-parent', this.childName, this.childPassword);
    }
    
}
</script>

