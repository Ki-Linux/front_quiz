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
                <input type="button" @click="postIp" value="トップページに戻る">
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
    
    //headの部分
    mounted() {
        const title = "いろいろ3択クイズ[中級]"
        document.title = title
    }

    head!: {
        title: {
            inner: "いろいろ3択クイズ[中級]"
        },
        meta: [
            { name: "description", content: "テーマは食べもの、観光地、漫画など...いろいろ！いくつもの問の中から10問がランダムで出題されます。３つの難易度が搭載！あなたは何問正解できる？" },
            { name: "viewport", content: "width=device-width,initial-scale=1" },
            { charset: "UTF-8" },
            { name: "application-name", content: "いろいろ3択クイズ" },
            { name: "format-detection", content: "email=no, telephone=no, address=no" },
            { name: "robots", content: "noindex, nofollow" },
        ],
        link: [
            { rel: "icon", href: "../public/favicon.ico" },
            { rel: "apple-touch-icon", href: "../public/apple-touch-icon.png" }
        ]
    }
    //scroll
    created(): void {
        scrollTo(0, 0);
    }
    //本文
    public level = "中級";
    public queInt: string[] = questionIntermediate;
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
    }
}
</script>
<style scoped>
    #quiz h1 {
        color: rgb(63, 134, 117);
    }
</style>