<template>
<div id="form">
    <div class="titleDes"><!-- 概要 -->
        <h1>お問い合わせ</h1>
        <p>不具合やご要望等がございましたら、以下より送信してください。
        <br>※返信をご希望の場合は、メールアドレスの記入もお願いします。</p>
    </div>
    <form v-on:submit.prevent = "toSend">
        <textarea name="E" id="E" cols="40" rows="8" v-model="text"></textarea><!-- 内容書き込み -->
        <p>メールアドレス(任意)</p>
        <input type="text" v-model="address" @input="showConsent"><!-- メアド書き込み -->
        <div class="agreement" v-if="written"><!-- 同意 -->
            <p>※本ページは、SendGridのメール送信APIサービスを用いるため、
                メールアドレスがTwilio社及び国内代理店に管理される場合がございます。
            <br>(Twilio社及び国内代理店に関しては
            <a href="https://support.sendgrid.kke.co.jp/hc/ja/articles/115000151702-%E3%81%A9%E3%81%AE%E3%82%88%E3%81%86%E3%81%AA%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E5%AF%BE%E7%AD%96%E3%81%8C%E3%81%A8%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%8B-" target="_blank" rel="noopener noreferrer">
            こちら</a>をご覧ください。)</p>
           <label><input type="checkbox" name="agree" value="YES" v-model="checked">
           <span>同意する</span>
           </label>  
            <p>{{ emerge }}</p><!-- 同意がない場合の注意 -->
        </div>
        <p>{{ notSend }}</p><!-- 何も書いていないときの警告 -->
        <input type="submit" value="送信"><!-- 送信 -->
    </form>
    <div class="back"><!-- トップページへ -->
        <back-top/>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import backTop from '@/components/backTop.vue';
import axios from 'axios';
@Component({
    components: {
        'back-top': backTop,
    }
})
export default class Form extends Vue {
    //headの部分
    mounted() {

        //scroll
        scrollTo(0, 0);
    }
    //本文
    public text = '';
    public address = '';
    public written = false;
    private checked = false;
    public emerge = "";
    public notSend = "";

    public toSend(): void {
        const beTrue = () => {
            this.$router.push({path: '/back'});

            axios.defaults.baseURL = "https://servicenewquiz.azurewebsites.net";

            axios.post('/post/send', {
                postText: this.text,
                postAddress: '/from/'+ this.address
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error)
            });
        }

        if(confirm('送信してもよろしいですか？')) {

            switch(this.address) {
                case "":
                    if(this.text === "") {
                        this.notSend = "内容がないため送信できません。"; 
                    }else {
                        beTrue();
                    }
                break;
            default:

                if(this.checked === true) {
                    beTrue();
                }else{
                    this.emerge = "「同意する」にチェックをしてください。";
                }

            }
        }
    }
    public showConsent(): void {
        this.written = true;
        if(this.address === "") {
            this.written = false;
        }
    }

    public toTop(): void {
        this.$router.push({path: '/'});
    }
}
</script>
<style scoped lang="scss">
$breakpoint: (
    no_more_tb: 'screen and (max-width: 565px)',
    pc: 'screen and (min-width: 566px)'
);

@mixin no_more_tb {
  @media #{map-get($breakpoint, no_more_tb)} {
    @content;
  }
}

@mixin pc {
  @media #{map-get($breakpoint, pc)} {
    @content;
  }
}

/*566~*/
@include pc {
    #form form {
        textarea {
            font-size: 19px;
        }
        input {
            &:first-of-type {
                width: 330px;
                padding-left: 5px;
                font-size: 20px;
            }
        }
    }
}

/*~565*/
@include no_more_tb {
    #form form {
        textarea {
            width: 300px;
            font-size: 19px;
        }
        input {
            &:first-of-type {
                width: 300px;
                padding-left: 5px;
                font-size: 20px;
            }
        }
    }
}

/*全体*/
#form {
    padding: 40px 30px 0;
    .titleDes p {
            font-size: 17px;//20
            margin: 20px 0 50px;
    }

    form {
        p {
            &:first-of-type {
                font-size: 20px;
            }
            &:nth-of-type(2) {
                font-size: 18px;
                margin-top: 20px;
            }
        }

        .agreement {
            margin-top: 20px;
            p:nth-of-type(2) {
                color: red;
                font-size: 20px;
            }
            a {
                white-space: pre;
            }
            span {
                font-size: 20px;
            }
            input {
                transform: scale(1.5);
                width: 20px;
            }
        }

        input[type="submit"] {
            background-color: rgba(234, 241, 234, 0.678);
            margin: 30px 0 70px;
            font-size: 20px;
            padding: 4px 30px;
        }
    }
}
</style>