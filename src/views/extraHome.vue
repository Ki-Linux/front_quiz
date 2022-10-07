<template>
   <div id="extraHome">
      <div class="top">
         <p>ようこそ {{ user_name }}様</p>
      </div>
      <div class="buttonAndAverage" v-for="(title_average, index) in Title_Average" :key="index"
      :class="{ extra: index === 0, img: index === 1}">
            <h1>{{ title_average.title }}</h1>
         <div class="button_to_quiz">
            <button @click="toQuiz(index)">{{ title_average.button }}</button>
         </div>
          <ul>
            <li>平均正答率</li>
            <li>{{ title_average.average_number }}%</li>
            <li><meter min="0" max="100" low="20" high="40" :value="title_average.average_number">max100%</meter></li>
            <li>個人の平均正答率です。</li>
         </ul>
      </div>
      <div class="back">
         <back-top/>
      </div>
   </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import backTop from '../components/backTop.vue';
import axios from 'axios';
import $router from '../router/index';

@Component({
   components: {
      'back-top': backTop
   }
})
export default class extraHome extends Vue {
   public user_name = "";
   public title_number = 0;
   public Title_Average: { title: string; button: string; average_number: number; }[] = [
      {
         title: "エキストラステージ",
         button: "エキストラ",
         average_number: 0
      },
      {
         title: "画像クイズ",
         button: "画像",
         average_number: 0
      }
   ]


   public mounted(): void {
      const data_name: string = localStorage.getItem('myKey') || '';
      this.user_name = data_name;

      
      axios.defaults.baseURL = process.env.VUE_APP_API_ORIGIN;

      axios.post('post/isdeihofhwioefwlvasknd', {
         select_user_name: this.user_name,
         
      })
      .then((response) => {
         
         const Api = JSON.parse(JSON.stringify(response.data));
         //console.log(Api)
         
         //nullを除外
         const new_extra_Api = Api.filter(function(new_api: any){
            return new_api.extra_quiz !== null;
         });

         const new_img_Api = Api.filter(function(new_api: any){
            return new_api.img_quiz !== null;
         });

         //合計を抽出
         let extra_sum = 0;
         let img_sum = 0;
         for(let i = 0; i < new_extra_Api.length; i++){
           
            extra_sum += new_extra_Api[i].extra_quiz;
         }

         for(let i = 0; i < new_img_Api.length; i++){
           
            img_sum += new_img_Api[i].img_quiz;
         }
         //console.log(extra_sum);
         
         //average
         const ApiAverage_extraSum = (Math.round(extra_sum/new_extra_Api.length * 100)) / 10;
         const ApiAverage_imgSum = (Math.round(img_sum/new_img_Api.length * 100)) / 10;
         //console.log(ApiAverage_extraSum);
         //console.log(ApiAverage_imgSum);
         
         this.Title_Average[0].average_number = ApiAverage_extraSum;
         this.Title_Average[1].average_number = ApiAverage_imgSum;
         

      })
      .catch((err) => {
         console.log(err);
      })
      
   }

   //別のページへ
   public toQuiz(index: number): void {//押したボタンに応じたリンク先へ

      if(index === 0) {
         $router.push({path: '/extra'});
      } else if(index === 1) {
         $router.push({path: '/extraImg'});
      }

   }

}

</script>
<style scoped lang="scss">
#extraHome {

   .top {
      background-color:rgba(214, 214, 214, 0.288);

      p {
         font-size: 20px;
         text-align: right;
         padding: 20px;
         color: black;
      }
   }


   /*.buttonAndAverage h1 {
      padding-top: 130px;
   }*/



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

   &:nth-of-type(4) {
      padding-left: 15px;
      font-size: 18px;
   }

}

.back {
   
   background-color:rgba(240, 240, 240, 0.486);

}
$colors: (
  b:rgb(3, 3, 116),
  o:rgb(116, 63, 3),
);

@function blue_color($color) {
  @return #{map-get($colors, $color)}
};

@function orange_color($color) {
  @return #{map-get($colors, $color)}
};

.extra {

   background-color: rgba(235, 235, 255, 0.514);
   padding-top: 60px;
   padding-bottom: 30px;

   button {
      color: blue_color(b);
   }

   ul > li {
      color: blue_color(b);
   }

}

.img {

   background-color: rgba(255, 247, 235, 0.568);
   padding-top: 60px;
   padding-bottom: 30px;

   button {
      color: orange_color(o);
   }

   ul > li {
      color: orange_color(o);
   }

}
}
</style>