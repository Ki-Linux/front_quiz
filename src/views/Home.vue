<template>
    <div id="home">
      <div class="title">
        <ul class="loginFunction">
          <li><router-link to="/add" class="newLogin">新規登録</router-link></li>
          <li><router-link to="/login" class="newLogin">ログイン</router-link></li>
        </ul>
        <h1>いろいろ３択クイズ</h1><!--title -->
        <div class="quizDes"><!-- 概要 -->
          <p>いくつもの問の中から10問がランダムで出題されます。<br>クイズの内容はいろいろです。</p>
        </div>
      </div>
      <div class="buttonAverage" v-for="(level, index) in urlName" :key="index"
      :class="{ beginButton: index === 0, intButton: index === 1, advancedButton: index === 2 }">
        <button @click="toMain(index)">{{ level.levelName }}</button><!-- レベルごとのボタンの表示 -->
        <ul><!--平均点の表示 -->
          <li>平均正答率</li>
          <li><meter min="0" max="100" low="20" high="40" :value="level.apiA">最大100%</meter></li>
          <li>{{ level.apiA }}%</li>
        </ul>
      </div>
      <div class="tryImgQuiz">
        <button @click="toTryQuiz">画像クイズ（お試し）</button>
      </div>
      <footer><!-- 利用規約とお問い合わせ -->
        <router-link class="router" to="/rule"><ul><li>ご利用に関して</li><li>プライバシーポリシー</li></ul></router-link>
        <router-link class="router" to="/form">お問い合わせ</router-link>
      </footer>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import $router from '../router/index';
import axios from 'axios';
@Component
export default class Home extends Vue {
  
  //本文
  public urlName: { levelName: string; url: string; apiA: number; }[] = [  //ボタンとリンクの情報
    {
      levelName: '初級',
      url: '',
      apiA: 0
    },
    {
      levelName: '中級',
      url: '',
      apiA: 0
    },
    {
      levelName: '上級',
      url: '',
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

  public toTryQuiz() {
    $router.push({path: '/quizTry'});
  }

  public mounted(): void {

    const url_box = [];
    const base_url = process.env.VUE_APP_API_ORIGIN;

    url_box.push(base_url);
    url_box.push(base_url + 'iAPI');
    url_box.push(base_url + 'adAPI');

    //scroll
    scrollTo(0, 0);

    //平均点の表示
    for(let i = 0; i < this.urlName.length; i++){
      axios.get(url_box[i])
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
<style scoped lang="scss">
$breakpoint: (
  sp: 'screen and (max-width: 480px)',
  tbmin: '(min-width: 481px)',
  tbmax: 'screen and (max-width: 959px)',
  pc: 'screen and (min-width: 960px)'
);

@mixin pc {
  @media #{map-get($breakpoint, pc)} {
    @content;
  }
}

@mixin tbmax {
  @media #{map-get($breakpoint, tbmax)} and #{map-get($breakpoint, tbmin)} {
    @content;
  }
}

@mixin sp {
  @media #{map-get($breakpoint, sp)} {
    @content;
  }
}

$footerwide: 0 60px;//定義
/*960~*/
@include pc {
  *#home {
    //margin-top: 100px;
      h1 { 
        font-size: 70px;
      }
  }

  .loginFunction {
    font-size: 2em;
    margin-right: 80px;
  }

  .quizDes p { 
    font-size: 30px;
    padding-bottom: 50px;
  }

  footer { 
    padding: 140px 0;
    .router {
      font-size: 30px;
      padding: $footerwide;

      $size: 50%;//定義
      &:first-of-type {
        position: absolute;
        right: $size;
      }
      &:last-of-type {
        position: absolute;
        left: $size;
      }
    }
  }
}
/*481~959*/
@include tbmax {
  *#home {
    //margin-top: 85px;

    h1 { 
      font-size: 40px;
    }

  }

  .loginFunction {
    font-size: 1.5em;
    margin-right: 50px;
  }
  
  .quizDes p { 
    font-size: 18px;
    padding-bottom: 40px;
  }

  footer { 
    flex-direction: column;
    padding: 30px $footerwide;

    .router {
      font-size: 30px;
      padding:20px 0;
    }

  }

}
/*~480*/
@include sp {
  *#home {
    //padding-top: 5px;

    h1 { 
      font-size: 35px;
    }

  }

  .loginFunction {
    font-size: 1.6em;
    margin-right: 13px;
  }

  .quizDes p { 
    font-size: 14px;
    padding-bottom: 30px;
  }

  footer { 
    flex-direction: column;
    padding: 30px $footerwide;

    .router {
      font-size: 25px;
      padding:10px 0;
    }

  }

}
/*全体*/
.buttonAverage {
  //margin-top: 90px;

  button {
    font-size: 65px;
    padding: 7px 19px;
    background-color: rgba(234, 241, 234, 0.678);
  }

}

/*.buttonaverageタグの中身のクラス*/
$colors: (
  y: rgb(110, 110, 84),
  g: rgb(63, 134, 117),
  r: rgba(156, 0, 0)
);

@function yellow_color($color) {
  @return #{map-get($colors, $color)}
};

@function green_color($color) {
  @return #{map-get($colors, $color)}
};

@function red_color($color) {
  @return #{map-get($colors, $color)}
};

.beginButton {
  background-color: rgba(248, 247, 228, 0.493);
  padding: 50px 0 10px;

  button {
    color: yellow_color(y);
  }

  ul > li {
    color: yellow_color(y);
  }

} 

.intButton {
  background-color: rgba(239, 250, 239, 0.5);
  padding: 50px 0 10px;

  button {
    color: green_color(g);
  }

  ul > li {
    color: green_color(g);
  }

} 

.advancedButton {
  background-color: rgba(252, 227, 227, 0.267);
  padding: 50px 0 10px;

  button {
    color: red_color(r);
  }

  ul > li {
    color: red_color(r);
  }

} 

.tryImgQuiz {
  background-color:rgba(241, 241, 241, 0.507);
  button {
    font-size: 20px;
    margin: 40px 0;
    padding: 5px 10px;
  }
}

/*普通にタグについているクラス*/  
.buttonAverage ul {
  font-size: 40px;
  //margin-bottom: 120px;

  &:first-of-type {
    color: rgb(163, 163, 127);
  }

}

footer { 
  background-color: rgb(135, 135, 209);
  display: flex;
  align-items: center;
  width: 100%;
  
  a.router {
    vertical-align: middle;
    color: white;
    text-decoration: none;

    ul {
      display: inline-block;
    }

  }

}

  .title {
    padding: 10px;
    background-color:rgba(236, 236, 236, 0.5);
  }


.loginFunction {
  text-align: right;

    li .newLogin {
      display: inline-block;
      padding: 13px 0;
      text-decoration: none;
      color: rgb(15, 24, 102);
    }
}
</style>