<template>
   <div id="extraHome">
      <div class="top">
         <p>ようこそ{{ user_name }}様</p>
      </div>
      <div class="buttonAndAverage" v-for="(title_average, index) in Title_Average" :key="index"
      :class="{ extra: index === 0, img: index === 1}">
            <h1>{{ title_average.title }}</h1>
         <div class="button_to_quiz">
            <button @click="toQuiz">{{ title_average.button }}</button>
         </div>
          <ul>
            <li>平均正答率</li>
            <li>{{ title_average.average_number }}%</li>
            <li><meter min="0" max="100" low="20" high="40" :value="average">max100%</meter></li>
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

@Component({
   components: {
      'back-top': backTop
   }
})
export default class extraHome extends Vue {
   public user_name = "";
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


   public mounted() {
      const data_name: string = localStorage.getItem('myKey') || '';
      this.user_name = data_name;

      setTimeout(() => {
axios.post('/select_user_name/isdeihofhwioefwlvasknd', {
         select_user_name: this.user_name
      })
      .then((response) => {
         const Api = JSON.parse(JSON.stringify(response.data));
         //console.log(Api);
         let extra_sum = 0;
         let img_sum = 0;
        for(let i = 0; i < Api.length; i++){
            extra_sum += Api[i].extra_quiz;
            img_sum += Api[i].img_quiz;
        }

         console.log(Api.length);

        const ApiAverage_extraSum = (Math.round(extra_sum/Api.length * 100)) / 10;
        const ApiAverage_imgSum = (Math.round(img_sum/Api.length * 100)) / 10;

         this.Title_Average[0].average_number = ApiAverage_extraSum;
         this.Title_Average[1].average_number = ApiAverage_imgSum;

      })
      .catch((err) => {
         console.log(err);
      })
      },1000)
      
   }

}

</script>
<style scoped lang="scss">
#extraHome {

   .top > p {
         font-size: 20px;
         float: right;
         padding: 20px 20px 0 0;
   }

   .buttonAndAverage h1 {
      padding-top: 130px;
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

   &:nth-of-type(4) {
      padding-left: 15px;
      font-size: 18px;
   }

}

.back button{
   font-size: 30px;
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

   button {
      color: blue_color(b);
   }

   ul > li {
      color: blue_color(b);
   }

}

.img {

   button {
      color: orange_color(o);
   }

   ul > li {
      color: orange_color(o);
   }

}
</style>