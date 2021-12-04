<template>
    <div id="quiz">
        <h1>{{ level }}</h1>
        <extra-data v-if="this.ParentTitleNumber <= 10" @child="count" @childTrue="trueCount"
        :question="queExtra" :Answer="ansExtra"/><!-- 問題 -->
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
import { questionExtra, answerExtra } from '../components/extraData';
import { showNameFromServer } from '../components/userNameFromServer';
import axios from 'axios';
import $router from '../router/index';


@Component({
    components: {
        'extra-data': MainData,
    }
})
export default class extra extends Vue{


    //本文
    public level = "エキストラ";
    public queExtra: string[] = questionExtra;
    public ansExtra: { select: string; judge: boolean; }[][] = answerExtra;
    public ParentTitleNumber = 0;
    public ParentTrueNumber = 0;

    public count(titleNumber: number): void {
        this.ParentTitleNumber = titleNumber;
    }

    public trueCount(trueLength: number): void {
        this.ParentTrueNumber = trueLength;
    }

    public postIp(): void {
        $router.push({path: '/extraHome'});

      axios.defaults.baseURL = "http://localhost:3000";

        axios.post('/post/ex', {
            postNumber: this.ParentTrueNumber,
            postUserName: showNameFromServer
        })
        .then((response) => {
            console.log(response + "abc");
        }) 
        .catch((error) => {
            console.log(error)
        });

        setTimeout(() => {
            location.reload();
        },1000);
    }
}
</script>
