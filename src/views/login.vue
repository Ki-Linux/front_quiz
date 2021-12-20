<template>
    <div id="login">
        <h1>ログイン</h1>
        <my-edit-login @to-parent="toParent"/>
        <div class="setLogin">
            <p>{{ noWritten }}</p>
            <button @click.once="goLogin">ログインする</button>
        </div>
        <button-to-home/>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import myEdit from '@/components/myEdit.vue';
import toHome from '@/components/toRouter.vue';
import axios from 'axios';

@Component({
    components: {
    'my-edit-login': myEdit,
    'button-to-home': toHome
    }
})
export default class login extends Vue {
    public parent_username = "";
    public parent_password = "";
    public noWritten = "";

    public toParent(childName: string, childPassword: string): void {
        this.parent_username = childName;
        this.parent_password = childPassword;
    }

    public goLogin(): void {
        axios.defaults.baseURL = "http://localhost:3000";

        //名前とパスワードのデータを送る
        const nothing_fault = () => {

            axios.post('/post/login', {
                post_login_name: this.parent_username,
                post_login_password: this.parent_password
            })
            .then((response) => {
                //console.log(response);
                const judge_to_be_true = JSON.parse(JSON.stringify(response.data));

                if(judge_to_be_true) {
                    //console.log('success');
                    
                    //localstrageへ名前を保存
                    localStorage.setItem('myKey', this.parent_username);

                    //次のページへ
                    this.$router.push({path: '/extraHome'});

                } else {
                    //console.log('not success');
                    this.noWritten = "ユーザーニックネームまたはパスワードが違います。";
                }
            })
            .catch((err) => {
                console.log(err);
            })

        }
        


        //inputが空欄の時
        if(this.parent_username === "" && this.parent_password === "") {
            this.noWritten = "ユーザーニックネームとパスワードが入力されていません";

        } else if(this.parent_username === "") {
            this.noWritten = "ユーザーニックネームが入力されていません";

        } else if(this.parent_password === "") {
            this.noWritten = "パスワードが入力されていません";

        } else {
            nothing_fault(); //axios実行
        }


    }

}
</script>
<style scoped lang="scss">
    #login {
        padding-top: 50px;
        .setLogin button {
            font-size: 22px;
            padding: 5px 15px;
            margin:10px 0 140px;
        }
    }
</style>