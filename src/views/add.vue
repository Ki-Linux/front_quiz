<template>
    <div id="add">
        <h1>新規登録</h1>
        <p>新規登録をすると<br>エキストラクイズ、画像クイズができます。<br>※本名での登録はお控えください。</p>
        <my-edit @to-parent="toParent"/>
        <div class="setup">
            <p>{{ showNothing }}</p>
            <p>{{ show_its_same }}</p>
            <button @click.once="setup">登録する</button>
        </div>
        <to-home/>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import myEdit from '../components/myEdit.vue';
import toHome from '../components/toRouter.vue';
import axios from 'axios';

@Component({
    components: {
    'my-edit': myEdit,
    'to-home': toHome
    }
})
export default class add extends Vue {
    public parent_username = "";
    public parent_password = "";
    public showNothing = "";
    //すでにユーザーネームがあるかないかの判断
    private judgeToNextORNot = "";
    public show_its_same = "";

    //ユーザーネームとパスワードのデータ
    public toParent(childName: string, childPassword: string): void {
        this.parent_username = childName;
        this.parent_password = childPassword;
    }

    public setup(): void {

        //reload
        const load = () => {
            location.reload();
        };

        //console.log(this.parent_username + this.parent_password);

        axios.defaults.baseURL = "https://servicenewquiz.azurewebsites.net";

        //名前とパスワードのデータを送る

        const nothing_fault = () => {
            axios.post('/post/sendUserData2.3',{
                user_name: this.parent_username,
                user_password: this.parent_password

            })
            .then((response) => {
                console.log(response);
                this.judgeToNextORNot = JSON.parse(JSON.stringify(response.data));

                if(this.judgeToNextORNot === "このユーザーニックネームはすでにあります。") {

                    this.show_its_same = this.judgeToNextORNot;//表示
                    setTimeout(load, 1000);
                } else if(this.judgeToNextORNot === "ログイン成功です。") {

                    //console.log(this.judgeToNextORNot);
                    //localstrageへ名前を保存
                    localStorage.setItem('myKey', this.parent_username);

                    //次のページへ
                    this.$router.push({path: '/extraHome'});
                    setTimeout(load, 1000);
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }


        //入力が足りない場合
        if(this.parent_username === "" && this.parent_password === "") {
            this.showNothing = "ユーザーニックネームとパスワードが入力されていません";
            setTimeout(load, 1000);

        } else if(this.parent_username === "") {
            this.showNothing = "ユーザーニックネームが入力されていません";
            setTimeout(load, 1000);

        } else if(this.parent_password === "") {
            this.showNothing = "パスワードが入力されていません";
            setTimeout(load, 1000);

        } else {
            nothing_fault(); //axios実行
        }


    }

    
}

</script>
<style scoped lang="scss">
    #add {
        padding-top: 50px;
        .setup {
            button {
                font-size: 22px;
                padding: 5px 15px;
                margin:10px 0 140px;
                background-color: rgb(245, 243, 243);
            }
        }
    }
</style>