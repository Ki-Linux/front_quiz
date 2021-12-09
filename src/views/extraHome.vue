<template>
   <div id="extraHome">
      <div class="top">
         <ul>
            <li><router-link to="/">戻る</router-link></li>
            <li>ようこそ{{ showUserName }}様</li>
         </ul>
      </div>
      <h1>エキストラステージ</h1>
      <div class="buttonAndAverage">
         <div class="buttonToExtra">
            <button @click="toQuiz">エキストラ</button>
         </div>
         <ul>
            <li>{{ average }}%</li>
            <li>{{ individual }}</li>
         </ul>
         <meter id="yu" min="0" max="100" :value="average">max100%</meter>
      </div>
      <div class="quizOFIMG">
         <div class="imgDes">
            <h1>画像クイズ</h1>
            <p>画像クイズは全15問のうち5問がランダムで出題されます。</p>
         </div>
         <div class="buttonToExtraImg">
            <button @click="toImgQuiz">画像クイズ</button>
         </div>
         <ul>
            <li>{{ averageImg }}%</li>
            <li>{{ individual }}</li>
         </ul>
         <meter id="yu" min="0" max="100" :value="average">max100%</meter>
      </div>
   </div>
</template>
<script lang="ts">
   import { Component, Vue } from 'vue-property-decorator';
   import $router from '../router/index';
   import axios from 'axios';

   @Component
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

      public mounted(): void {

         axios.defaults.baseURL = "http://localhost:3000";

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

         /*setTimeout(() => {
            axios.get('/exAPI')
            .then((response) => {
               
               const i = JSON.parse(JSON.stringify(response.data));
               console.log(i);
            })
            .catch((err) => {
               console.log(err);
            })

         },2000);*/

      }


      /*mounted() {

         axios.defaults.baseURL = "http://localhost:3000";

         axios.get('/getUserNameWithiykrnmltpoebrlmknebwr34t35reefwefWEFYUMm4te')
         .then((response) => {
            this.showUserName = response.data;
         })
         .catch((err) => {
            console.log(err);
         })

      }*/

   }
</script>
