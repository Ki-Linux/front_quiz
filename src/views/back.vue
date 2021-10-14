<template>
    <div id="complete">
        <h1>送信を完了いたしました。</h1>
        <p>ご協力ありがとうございました！</p>
        <div class="back">
            <input type="button" @click="toHome" value="トップページに戻る">
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class back extends Vue {
  //headの部分
  mounted() {
    const title = "いろいろ3択クイズ"
    document.title = title
  }

  head!: {
    title: {
      inner: "いろいろ3択クイズ"
    },
    meta: [
      { name: "description", content: "テーマは食べもの、観光地、漫画など...いろいろ！いくつもの問の中から10問がランダムで出題されます。３つの難易度が搭載！あなたは何問正解できる？" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
      { charset: "UTF-8" },
      { name: "application-name", content: "いろいろ3択クイズ" },
      { name: "format-detection", content: "email=no, telephone=no, address=no" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    link: [
      { rel: "icon", href: "../public/favicon.ico" },
      { rel: "apple-touch-icon", href: "../public/apple-touch-icon.png" }
    ]
  }
  //scroll
  created(): void {
    scrollTo(0, 0);
  }
        
  //本文
  public toHome(): void {
    this.$router.push({path: '/'});
  }
}
</script>
<style scoped>
/*960~*/ 
@media screen and (min-width: 960px) {
  #complete h1 {
    font-size: 45px;
  }
  #complete p {
    font-size: 30px;
    margin: 10px 0 40px;
  }
}
/*481~959*/ 
@media screen and (min-width: 481px) and (max-width: 959px) {
  #complete h1 {
    font-size: 30px;
  }
  #complete p {
    font-size: 20px;
    margin: 10px 0 40px;
  }
}
/*~480*/
@media screen and (max-width: 480px){
  #complete h1 {
    font-size: 25px;
  }
  #complete p {
    font-size: 15px;
    margin: 10px 0 40px;
  }
}
/*全体*/
#complete {
  margin: 50px 15px 0;
}
</style>