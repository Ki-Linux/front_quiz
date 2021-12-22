<template>
    <div id="MainData">
            <form class="toNext" v-if="!only"><!-- 次へボタン -->
                <input @click="change(Random)" type="button" v-model="NextEnd">
            </form>
            <h1>問{{ titleNumber }}: {{ question[Random].question }}</h1><!-- 問題提示 -->
            <div class="answer" v-show="!only"><!-- 正解か不正解の表示 -->
                <p>{{ number_true }}</p>
                <p v-if="showAnswer">◯正解</p>
                <p v-else>✕不正解</p>
            </div>
            <form class="select" v-for="(answer, index) in Answer" v-bind:key="answer[Random].select"><!-- 回答のボタン -->
                <input @click="TrueFalse(index, Random)" type="button" v-model="answer[Random].select">
            </form>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class Main extends Vue {
    mounted() {
        //scroll
        scrollTo(0, 0);
        
    }

    public titleNumber = 1;
    private only = true;
    public showAnswer = false;
    private trueLength = 0;
    public NextEnd = "次の問題へ";
    public number_true = "";

    @Prop()
    public question!: { question: string; answer: string; }[];

    @Prop()
    public Answer!: { select: string; judge: boolean; }[][];


    get Random(): number {
        const rnd = Math.floor(Math.random() * this.question.length);
        return rnd
    }

    change(Random: number): void {
        this.titleNumber++;
        this.$emit('child', this.titleNumber);
        this.only = true;
        this.question.splice(Random, 1);
        for(let i =0; i <= 2; i++) {
            this.Answer[i].splice(Random, 1);
        }
        if( this.titleNumber >= 10 ) {
            this.NextEnd = "結果へ";
        }
    }
    
    TrueFalse(index: number, Random: number): void {
        if(this.only === true) {
            this.only = false;
            if(this.Answer[index][Random].judge === true) {
                this.showAnswer = true;
                this.trueLength++;
                this.$emit('childTrue', this.trueLength);
                this.number_true = "";
            }
            else {
                //正解の表示
                
               this.number_true = "正解: " + this.question[Random].answer;
                this.showAnswer = false;
            }
        }
    }
}
</script>
