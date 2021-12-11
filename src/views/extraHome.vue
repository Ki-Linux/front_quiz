<template>
   <div id="extraHome">
      <div class="top">
         <p>ようこそ{{ showUserName }}様</p>
      </div>
      <div class="buttonAndAverage">
            <h1>エキストラステージ</h1>
         <div class="buttonToExtra">
            <button @click="toQuiz">エキストラ</button>
         </div>
         <ul>
            <li>平均正答率</li>
            <li>{{ average }}%</li>
            <li><meter min="0" max="100" low="20" high="40" :value="average">max100%</meter></li>
            <li>{{ individual }}</li>
         </ul>
      </div>
      <div class="quizOfImg">
         <div class="imgDes">
            <h1>画像クイズ</h1>
            <p>画像クイズは全15問のうち5問がランダムで出題されます。</p>
         </div>
         <div class="buttonToExtraImg">
            <button @click="toImgQuiz">画像クイズ</button>
         </div>
         <ul>
            <li>平均正答率</li>
            <li>{{ averageImg }}%</li>
            <li><meter min="0" max="100" low="20" high="40" :value="average">max100%</meter></li>
            <li>{{ individual }}</li>
         </ul>
      </div>
      <div class="back">
         <back-top/>
      </div>
   </div>
</template>
<script lang="ts">
   import { Component, Vue } from 'vue-property-decorator';
   import backTop from '../components/backTop.vue';
   import $router from '../router/index';
   import axios from 'axios';

   @Component({
    components: {
        'back-top': backTop,
    }
})
   export default class extraHome extends Vue {
      public showUserName = "";
      public average = 0;
      public averageImg = 0;
      public individual = "※個人の平均正答率です。";


      toQuiz(): void {

         $router.push('/extra');
      }

      toImgQuiz(): void {

         $router.push('/extraImg');
      }

      backTop(): void {
         $router.push('/');
      }

      public mounted(): void {

         axios.defaults.baseURL = "https://servicenewquiz.azurewebsites.net";

         axios.get('/getUserNameWithiykrnmltpoebrlmknebwr34t35reefwefWEFYUMm4te')
         .then((response) => {
            this.showUserName = response.data;
         })
         .catch((err) => {
            console.log(err);
         })    


         setTimeout(() => {

            //EXTRA
            axios.post('/exAPI', {
               
               sendName: this.showUserName
            })
            .then((response) => {
               const receiveAverage = JSON.parse(JSON.stringify(response.data));

               let sum = 0;
               for(let i = 0; i < receiveAverage.length; i++){
                  sum += receiveAverage[i].totalNumber;
               }

               const ApiAverage = (Math.round(sum/receiveAverage.length * 100)) / 10;

               this.average = ApiAverage;

            })
            .catch((err) => {
               console.log(err);
            })    
            

            //IMG
            axios.post('/imgAPI', {
               
               sendImgName: this.showUserName
            })
            .then((response) => {
               const receiveExtraImg = JSON.parse(JSON.stringify(response.data));

               let sum = 0;
               for(let i = 0; i < receiveExtraImg.length; i++){
                  sum += receiveExtraImg[i].totalNumber;
               }

               const ApiImgeAverage = (Math.round(sum/receiveExtraImg.length * 100)) / 10;

               this.averageImg = ApiImgeAverage;

            })
            .catch((err) => {
               console.log(err);
            })

         },1000);

         

      }


   }
</script>
<style scoped lang="scss">

$breakpoint: (
  sp: 'screen and (max-width: 480px)'
);

@mixin sp {
  @media #{map-get($breakpoint, sp)} {
    @content;
  }
}

@include sp {
   .imgDes p {
      padding: 0 20px;
   }
}


#extraHome {
   .top > p {
         font-size: 20px;
         float: right;
         padding: 20px 20px 0 0;
   }


$blue: rgb(3, 3, 116);
   .buttonAndAverage {

         h1 {
            padding-top: 70px;
         }

          button, ul > li {
         &:first-of-type, &:nth-of-type(2) {
            color: $blue;
         }
      }
   }


$orange: rgb(116, 63, 3);
.quizOfImg {
   padding-top: 60px;

      button, ul > li {
      &:first-of-type, &:nth-of-type(2) {
         color: $orange;
      }
   }
}

button {
      font-size: 45px;
      margin-top: 20px;
      padding: 7px 19px;
      background-color: rgba(234, 241, 234, 0.678);
   }

   ul > li {
   &:first-of-type, &:nth-of-type(2), &:nth-of-type(3){
      font-size: 30px;
   }
      font-size: 18px;
   }
}

.back button{
   font-size: 30px;
}
</style>