<template>
    <div id="quiz">
        <h1>{{ level }}</h1>
        <beginner-data v-if="this.ParentTitleNumber <= 10" @child="count" @childTrue="trueCount"
        :question="queBegin" :Answer="ansBegin"/><!-- 問題 -->
        <div class="totalSum" v-else><!-- 結果 -->
            <ul>
                <li id="liFirst" v-if="ParentTrueNumber >= 10">満点！</li>
                <li id="liSecond">結果<br>{{ ParentTrueNumber }}問<span>/10問</span> 正解</li>
            </ul>
            <form class="back">
                <button @click="postIp">トップページに戻る</button>
            </form>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainData from '../components/MainData.vue';
import { questionBeginner, answerBeginner } from '../components/beginnerData';
import axios from 'axios';
@Component({
    components: {
        'beginner-data': MainData,
    }
})
export default class beginner extends Vue{


    //本文
    public level = "初級";
    public queBegin: { question: string; answer: string; }[] = questionBeginner;
    public ansBegin: { select: string; judge: boolean; }[][] = answerBeginner;
    public ParentTitleNumber = 0;
    public ParentTrueNumber = 0;

    public count(titleNumber: number): void {
        this.ParentTitleNumber = titleNumber;
    }

    public trueCount(trueLength: number): void {
        this.ParentTrueNumber = trueLength;
    }

    public postIp(): void {
        this.$router.push({path: '/'});
        
        axios.post('https://servicenewquiz.azurewebsites.net/post/b', {
            postNumber: this.ParentTrueNumber
        })
        .then(function (response) {
            console.log(response + "abc");
        })
        .catch(function (error) {
            console.log(error)
        });

        setTimeout(() => {
            location.reload();
        },2000);
    }
}
</script>
<style scoped>
    #quiz h1 {
        color: rgb(110, 110, 84);
    }
</style>