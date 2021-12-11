<template>
    <div id="tryQuiz">
       <div class="questionAnswer" v-if="this.titleNumber <= 5">
            <div class="toNext" v-if="!only"><!-- 次へボタン -->
                <button @click="change">{{ NextEnd }}</button>
            </div>
            <h1>問{{ titleNumber }}: {{ question[titleNumber - 1] }}</h1>
            <div class="answer" v-show="!only"><!-- 正解か不正解の表示 -->
                <p v-if="showAnswer">◯正解</p>
                <p v-else>✕不正解</p>
            </div>
            <div class="select" v-for="(answer, index) in Answer" v-bind:key="answer"><!-- 回答のボタン -->
                <button @click="TrueFalse(index)"><img v-bind:src="answer[titleNumber - 1].select" alt="img"></button>  
            </div>
        </div>
        <div class="totalSum" v-else><!-- 結果 -->
            <ul>
                <li>結果<br>{{ trueLength }}問<span>/5問</span> 正解</li>
            </ul>
            <form class="back">
                <p>お試しは以上です。新規登録をすることでもっとたくさんの画像クイズができます。</p>
                <button @click="postIp">トップページに戻る</button>
            </form>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { questionTry, answerTry } from '@/components/extraImgData';
    import $router from '../router/index';

    @Component
    export default class tryImg extends Vue {
        public NextEnd = "次の問題へ";
        public only = true;
        public showAnswer = false;
        public trueLength = 0;
        public titleNumber = 1;

        public question: string[] = questionTry;

        public Answer: { select: HTMLImageElement; judge: boolean; }[][] = answerTry;

      
        change(): void {
            this.titleNumber++;
            this.only = true;
            if( this.titleNumber >= 5 ) {
                this.NextEnd = "結果へ";
            }
        }  
                


        TrueFalse(index: number): void {
            if(this.only === true) {
                this.only = false;
                if(this.Answer[index][this.titleNumber - 1].judge === true) {
                    this.showAnswer = true;
                    this.trueLength++;
                }
                else {
                    this.showAnswer = false;
                }
            }
        }

        public postIp(): void {
            $router.push({path: '/'});
        }
        
    }
</script>
<style scoped lang="scss">
    #tryQuiz {
        padding-top: 30px;
    }

    .questionAnswer {

        .toNext {
            margin-bottom: 10px;
            font-size: 20px;
            button {
                padding:7px 17px;
            }
        }

        .select {
            margin-top: 30px;
        }

        .answer {
            color: red;
            font-size: 30px;
            margin: 20px;
        }
    }

    .totalSum {
        ul {
            li {
                font-size: 30px;
            }
        }

        .back p {
            margin-bottom: 20px;
        }
    }
</style>