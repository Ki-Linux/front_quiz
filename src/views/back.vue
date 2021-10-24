<template>
    <div id="complete">
        <h1>送信を完了いたしました。</h1>
        <p>ご協力ありがとうございました！</p>
        <div class="back">
            <button @click="toHome">トップページに戻る</button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class back extends Vue {
  //headの部分
  mounted() {

    //scroll
    scrollTo(0, 0);
  }
        
  //本文
  public toHome(): void {
    this.$router.push({path: '/'});
  }
}
</script>
<style scoped lang="scss">
$h1_size: 5px;
$p_width: 10px 0 40px;
$p_size: 10px;

/*960~*/ 
@media screen and (min-width: 960px) {
  #complete {
    h1 {
      font-size: $h1_size * 9;
    }

    p {
      font-size: $p_size * 3;
      margin: $p_width;
    }
  }
}

/*481~959*/ 
@media screen and (min-width: 481px) and (max-width: 959px) {
  #complete {
    h1 {
      font-size: $h1_size * 6;
    }

    p {
      font-size: $p_size * 2;
      margin: $p_width;
    }
  }
} 

/*~480*/
@media screen and (max-width: 480px){
  #complete {
    h1 {
      font-size: $h1_size * 5;
    }

    p {
      font-size: $p_size + 5;
      margin: $p_width;
    }
  }
}

/*全体*/
#complete {
  margin: 50px 15px 0;
}
</style>