<template>
    <div>
        <img :src="pathList[0]" alt="image"/>
        <button @click="m">iu</button>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class Img extends Vue {

       // public img = [];

        public pathList = [
            require("@/assets/hawaiiTrue.png"),
            require("@/assets/hawaiiFalse2.png")
        ]

        

        /*m() {
            for(let i = 0; i < this.pathList.length; i++) {

                let image = ;
                this.img.push(this.pathList[i]);
            }
        }*/
    }
</script>
