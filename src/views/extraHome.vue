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
         <button>エキストラ</button>
         <p>%</p>
      </div>
   </div>
</template>
<script lang="ts">
   import { Component, Vue } from 'vue-property-decorator';
   //import axios from 'axios';

   @Component
   export default class extraHome extends Vue {
      public showUserName = "";


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
