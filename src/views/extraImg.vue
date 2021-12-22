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
                <li id="liFirst" v-if="this.trueLength >= 5">満点!!</li>
                <li id="liSecond">結果<br>{{ trueLength }}問<span>/5問</span> 正解</li>
            </ul>
            <div class="back">
                <button @click="postIp">トップページに戻る</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { questionExtra, answerExtra } from '@/components/extraImgData';
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

            const data_name: string = localStorage.getItem('myKey') || '';

            axios.defaults.baseURL = "https://servicenewquiz.azurewebsites.net";

            axios.post('/post/img', {

                postUserName: data_name,
                postNumber: this.trueLength
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
<style scoped lang="scss">
    #extraImg {

        $breakpoint: (
            sp: 'screen and (max-width: 480px)',
            tbmin: '(min-width: 481px)',
            tbmax: 'screen and (max-width: 959px)',
            pc: 'screen and (min-width: 960px)'
        );

        @mixin pc {
            @media #{map-get($breakpoint, pc)} {
                @content;
            }
        }

        @mixin tbmax {
            @media #{map-get($breakpoint, tbmax)} and #{map-get($breakpoint, tbmin)} {
                @content;
            }
        }

        @mixin sp {
            @media #{map-get($breakpoint, sp)} {
                @content;
            }
        }

        $max-left: 280px;
        @include pc {
            #liFirst {
                padding-left: $max-left + 50;
            }

            #liSecond {
                font-size: 90px;
            }
        }

        @include tbmax {
            #liFirst {
                padding-left: $max-left;
            }

            #liSecond {
                font-size: 60px;
            }
        }

        @include sp {
            #liFirst {
                padding-left: $max-left - 100
            }

            #liSecond {
                font-size: 50px;
            }
        }

        //全体
        padding-top: 30px;

        .toNext button {
            font-size: 30px;
            margin: 10px 0;
            background-color: rgba(255, 251, 244, 0.726);
            color:rgba(63, 62, 62, 0.911);
            
        }

        .answer p {
            font-size: 30px;
            color: red;
        }

        .select button {
            margin: 10px 0;
        }

        .totalSum ul > li {
            font-size: 45px;
        }

        #liFirst {
            color: red;
            transform: rotate( 15deg);
     
        }
    }
</style>