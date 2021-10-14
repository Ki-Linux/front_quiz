<template>
<div id="rule">
    <div class="use">
        <h1>ご利用に関して</h1>
        <ul>
            <li>1.本サービスのご利用に際してユーザー登録やログインは必要ありません。</li>
            <li>2.本サービスは、運営者個人の判断による情報であることから、情報の正確さに関しては保証いたしかねます。</li>
            <li>3.情報の誤りに関するご指摘は、<a href="/form">お問い合わせ</a>からお願いいたします。</li>
            <li>4.平均点の表示は、小数第2位以下の数字を四捨五入しております。(小数第1位が0の場合は、整数として表示される。)</li>
            <li>5.予告なく変更、追加、削除を行うことがあります。</li>
        </ul>
    </div>
    <div class="privacy">
        <h1>プライバシーポリシー</h1>
        <ul>
            <li>本サービスは、SendGridのメール送信APIサービスを用いるため、
                メール内容(メールアドレスを追記した場合はメールアドレスも同様)がTwilio社及び国内代理店に管理される場合があります。)</li>
            <li>Twilio社及び国内代理店に関しては
                <a href="https://support.sendgrid.kke.co.jp/hc/ja/articles/115000151702-%E3%81%A9%E3%81%AE%E3%82%88%E3%81%86%E3%81%AA%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E5%AF%BE%E7%AD%96%E3%81%8C%E3%81%A8%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%8B-" target="_blank" rel="noopener noreferrer">
                こちら</a>
                をご覧ください。</li>
            <li>本サービスによって保持したメールアドレスに関しては、本サービスの範囲で利用します。</li>
        </ul>
    </div>
    <div class="back">
        <input @click="toTop" type="button" value="トップページに戻る">
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class rule extends Vue{
    //head
    mounted() {
        const title = "いろいろ3択クイズ[ご利用に関して]"
        document.title = title
    }

    head!: {
        title: {
            inner: "いろいろ3択クイズ[ご利用に関して]"
        },
        meta: [
            { name: "description", content: "いろいろ3択クイズのご利用について。テーマは食べもの、観光地、漫画など...いろいろ！いくつもの問の中から10問がランダムで出題されます。３つの難易度が搭載！" },
            { name: "viewport", content: "width=device-width,initial-scale=1" },
            { charset: "UTF-8" },
            { name: "application-name", content: "いろいろ3択クイズ" },
            { name: "format-detection", content: "email=no, telephone=no, address=no" },
        ],
        link: [
            { rel: "icon", href: "../public/favicon.ico" },
            { rel: "apple-touch-icon", href: "../public/apple-touch-icon.png" }
        ]
    }
    //本文
    public toTop():void {
        this.$router.push({path: '/'});
    }
}
</script>
<style scoped>
#rule {
    margin: 0 20px;
}
#rule .use {
    margin-top: 50px;
}
#rule .privacy {
    margin-top: 70px;
}
#rule ul {
    font-size: 20px;
}
#rule ul > li {
    margin-bottom: 20px;
}
#rule ul > li a {
    white-space: pre;
}
   
#rule .back > input {
    padding: 3px 13px;
}
</style>