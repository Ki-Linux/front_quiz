<template>
    <div id="extraImg">
        <h1>{{ level }}</h1>
        <div v-if="this.titleNumber <= 5">
            <div class="toNext" v-if="!only"><!-- 次へボタン -->
                <button @click="change(Random)">{{ NextEnd }}</button>
            </div>
            <h1>問{{ titleNumber }}: {{ question[Random] }}</h1>
            <div class="answer" v-show="!only"><!-- 正解か不正解の表示 -->
                <p v-if="showAnswer">◯正解</p>
                <p v-else>✕不正解</p>
            </div>
            <div class="select" v-for="(answer, index) in Answer" v-bind:key="answer[Random].select"><!-- 回答のボタン -->
                <button @click="TrueFalse(index, Random)"><img v-bind:src="answer[Random].select" alt="img"></button>  
            </div>
        </div>
        <div class="totalSum" v-else><!-- 結果 -->
            <ul>
                <li id="liFirst" v-if="this.trueLength >= 5">満点！</li>
                <li id="liSecond">結果<br>{{ trueLength }}問<span>/5問</span> 正解</li>
            </ul>
            <form class="back">
                <button @click="postIp">トップページに戻る</button>
            </form>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { questionExtra, answerExtra } from '@/components/extraImgData';
    import { showNameFromServer } from '../components/userNameFromServer';
    import $router from '../router/index';
    import axios from 'axios';

    @Component
    export default class Img extends Vue {

        public level = "画像クイズ";
        private only = true;
        public showAnswer = false;
        public trueLength = 0;
        public titleNumber = 1;
        public NextEnd = "次の問題へ";

        public question: string[] = questionExtra;

        public Answer: { select: HTMLImageElement; judge: boolean; }[][] = answerExtra;

        public yes(): void {
            console.log('yes');
        }

        get Random(): number {
            const rnd = Math.floor(Math.random() * this.question.length);
            return rnd
        }

      
        change(Random: number): void {
            this.titleNumber++;
            //this.$emit('child', this.titleNumber);
            this.only = true;
            this.question.splice(Random, 1);
            for(let i =0; i <= 2; i++) {
                this.Answer[i].splice(Random, 1);
            }
            if( this.titleNumber >= 5 ) {
                this.NextEnd = "結果へ";
            }
        }  
                


        TrueFalse(index: number, Random: number): void {
        if(this.only === true) {
            this.only = false;
            if(this.Answer[index][Random].judge === true) {
                this.showAnswer = true;
                this.trueLength++;
                //this.$emit('childTrue', this.trueLength);
            }
            else {
                this.showAnswer = false;
            }
        }
        }

        public postIp(): void {
            $router.push({path: '/extraHome'});

            //sendUserName();

            axios.defaults.baseURL = "http://localhost:3000";

            axios.post('/post/img', {
                postNumber: this.trueLength,
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