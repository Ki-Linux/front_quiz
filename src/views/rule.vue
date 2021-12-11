<template>
<div id="rule">
    <div class="use">
        <h1>ご利用に関して</h1>
        <ul>
            <li>1.本サイトは、作成者個人の判断による情報であることから、情報の正確さは保証いたしかねます。</li>
            <li>2.情報の誤りに関するご指摘は、<router-link to="/form">お問い合わせ</router-link>からお願いします。</li>
            <li>3.平均点の表示は、小数第2位以下の数字を四捨五入しています。(小数第1位が0の場合は、整数として表示されます。)</li>
            <li>4.新規登録をすることにより、エキストラクイズ及び画像クイズもご利用できます。</li>
            <li>5.予告なく変更、追加、削除を行うことがあります。</li>
        </ul>
    </div>
    <div class="privacy">
        <h1>プライバシーポリシー</h1>
        <ul>
            <li>本サイトは、SendGridのメール送信APIサービスを用いるため、
                メール内容(メールアドレスを追記した場合はメールアドレスも同様)がTwilio社及び国内代理店に管理される場合があります。</li>
            <li>Twilio社及び国内代理店に関しては
                <a href="https://support.sendgrid.kke.co.jp/hc/ja/articles/115000151702-%E3%81%A9%E3%81%AE%E3%82%88%E3%81%86%E3%81%AA%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E5%AF%BE%E7%AD%96%E3%81%8C%E3%81%A8%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%8B-" target="_blank" rel="noopener noreferrer">
                こちら</a>
                をご覧ください。</li>
            <li>本サイトによって保持したメールアドレスは、本サイトの範囲で利用します。</li>
        </ul>
    </div>
    <div class="back">
        <button @click="toTop">トップページに戻る</button>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class rule extends Vue{
    //head
    mounted() {
        //scroll
        scrollTo(0, 0);
    }
    //本文
    public toTop():void {
        this.$router.push({path: '/'});
    }
}
</script>
<style scoped lang="scss">
#rule {
    margin: 0 20px;
    .use {
        margin-top: 50px;
    }

    .privacy {
        margin-top: 70px;
    }

    ul {
        font-size: 20px;
        li {
            margin-bottom: 20px;

            a {
                white-space: pre;
            }

        }
    }

    .back {
        input {
            padding: 3px 13px;
        }
    }

}
</style>