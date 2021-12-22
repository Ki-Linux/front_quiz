<template>
    <div id="quiz">
        <h1>{{ level }}</h1>
        <int-data v-if="this.ParentTitleNumber <= 10" @child="count" @childTrue="trueCount"
        :question="queInt" :Answer="ansInt"/><!-- 問題 -->
        <div v-else class="totalSum"><!-- 結果 -->
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
import { questionIntermediate, answerIntermediate } from '../components/intermediateData';
import axios from 'axios';
@Component({
    components: {
        'int-data': MainData,
    }
})
export default class beginner extends Vue{

    //本文
    public level = "中級";
    public queInt: { question: string; answer: string; }[] = questionIntermediate;
    public ansInt: { select: string; judge: boolean; }[][] = answerIntermediate;
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
        axios.post('https://servicenewquiz.azurewebsites.net/post/i', {
            postNumber: this.ParentTrueNumber
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        setTimeout(function() {
            location.reload();
        },1000);
    }
}
</script>
<style scoped>
    #quiz h1 {
        color: rgb(63, 134, 117);
    }
</style>