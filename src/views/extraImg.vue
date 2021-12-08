<template>
    <div id="extraImg">
        <button @click="yes"><img :src="answerExtra[0][0].select" alt="image"/></button>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { answerExtra } from '@/components/extraImgData';

    @Component
    export default class Img extends Vue {

        public answerExtra: { select: HTMLImageElement; judge: boolean; }[][] = answerExtra;

        public yes(): void {
            console.log('yes');
        }
    }
</script>