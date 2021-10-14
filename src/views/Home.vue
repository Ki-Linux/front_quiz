<template>
    <div id="home">
      <h1>いろいろ３択クイズ</h1><!--title -->
      <div class="quizDes"><!-- 概要 -->
        <p>いくつもの問の中から10問がランダムで出題されます。<br>クイズの内容はいろいろです。</p>
      </div>
      <div class="buttonAverage" v-for="(level, index) in urlName" :key="index"
      :class="{ beginButton: index === 0, intButton: index === 1, advancedButton: index === 2 }">
        <button @click="toMain(index)">{{ level.levelName }}</button><!-- レベルごとのボタンの表示 -->
        <ul><!--平均点の表示 -->
          <li>平均正答率</li>
          <li>{{ level.apiA }}%</li>
        </ul>
      </div>
      <footer><!-- 利用規約とお問い合わせ -->
        <a href="/rule"><ul><li>ご利用に関して</li><li>プライバシーポリシー</li></ul> </a>
        <a href="/form">お問い合わせ</a>
      </footer>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import $router from '../router/index';
import axios from 'axios';
@Component
export default class Home extends Vue {
  //headの部分
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
    ],
    link: [
      { rel: "icon", href: "../public/favicon.ico" },
      { rel: "apple-touch-icon", href: "../public/apple-touch-icon.png" }
    ]
  }
  //本文
  public urlName: { levelName: string; url: string; apiA: number; }[] = [  //ボタンとリンクの情報
    {
      levelName: '初級',
      url: 'https://servicenewquiz.azurewebsites.net/',
      apiA: 0
    },
    {
      levelName: '中級',
      url: 'https://servicenewquiz.azurewebsites.net/iAPI',
      apiA: 0
    },
    {
      levelName: '上級',
      url: 'https://servicenewquiz.azurewebsites.net/adAPI',
      apiA: 0
    }
  ]
  public toMain(index: number): void {//押したボタンに応じたリンク先へ
    switch(index) {
      case 0:
        $router.push({path: '/begin'});
      break;
      case 1:
        $router.push({path: '/int'});
      break;
      case 2:
        $router.push({path: '/adv'});
      break;
    }
  }
  public mounted(): void {
    //title
    const title = "いろいろ3択クイズ"
    document.title = title
    //scroll
    scrollTo(0, 0);
    //平均点の表示
    for(let i = 0; i < this.urlName.length; i++){
      axios.get(this.urlName[i].url)
      .then((response) => {
        const Api = JSON.parse(JSON.stringify(response.data));
        let sum = 0;
        for(let i = 0; i < Api.length; i++){
          sum += Api[i].totalNumber;
        }
        const ApiAverage = (Math.round(sum/Api.length * 100)) / 10;
        for(let I = 0; I < this.urlName.length; I++){
          switch(i) {
            case I:
              this.urlName[I].apiA = ApiAverage;
            break;
          }
        }
      })
      .catch((err) => {
        alert(err);
      });
    }
  }
}
</script>
<style scoped>
/*960~*/
@media screen and (min-width: 960px) {
  *#home {
    margin-top: 100px;
  }
  #home h1 { 
    font-size: 70px;
  }
  .quizDes p { 
    font-size: 30px;
  }
  footer { 
    padding: 140px 0;
  }
  footer a {
    font-size: 30px;
    padding:0 60px;
  }
  footer a:first-of-type {
    position: absolute;
    right: 50%;
  }
  footer a:last-of-type {
    position: absolute;
    left: 50%;
  }
}
/*481~959*/
@media screen and (min-width: 481px) and (max-width: 959px) {
  *#home {
    margin-top: 85px;
  }
  #home h1 { 
    font-size: 40px;
  }
  .quizDes p { 
    font-size: 18px;
  }
  footer { 
    flex-direction: column;
    padding: 30px 0 60px;
  }
  footer a {
    font-size: 30px;
    padding:20px 0;
  }
}
/*~480*/
@media screen and (max-width: 480px) {
  *#home {
    margin-top: 70px;
  }
  #home h1 { 
    font-size: 35px;
  }
  .quizDes p { 
    font-size: 14px;
  }
   footer { 
    flex-direction: column;
    padding: 30px 0 60px;
  }
  footer a {
    font-size: 25px;
    padding:10px 0;
  }
}
/*全体*/
.buttonAverage {
  margin-top: 90px;
}
.buttonAverage button {
  font-size: 65px;
  padding: 7px 19px;
  background-color: rgba(234, 241, 234, 0.678);
}
/*.buttonaverageタグの中身のクラス*/
.beginButton button {
  color: rgb(110, 110, 84);
}
.beginButton ul > li {
  color: rgb(110, 110, 84);
}
.intButton button {
  color: rgb(63, 134, 117);
}
.intButton ul > li {
  color: rgb(63, 134, 117);
}
.advancedButton button {
  color: rgba(156, 0, 0);
}
.advancedButton ul > li {
  color: rgba(156, 0, 0);
}
/*普通にタグについているクラス*/  
.buttonAverage ul {
  font-size: 40px;
  margin-bottom: 120px;
}
.buttonAverage ul:first-of-type {
  color: rgb(163, 163, 127);
}
.buttonAverage ul > li:nth-of-type(2) {
  margin-left: 0.5em;
}
footer { 
  background-color: rgb(135, 135, 209);
  display: flex;
  align-items: center;
  width: 100%;
}
footer  a {
  vertical-align: middle;
  color: white;
  text-decoration: none;
}
footer a > ul {
  display: inline-block;
}
</style>