<template>
    <div id="extraImg">
        <button @click="yes"><img :src="pathList[0]" alt="image"/></button>
<button @click="yes"><img :src="pathList[1]" alt="image"/></button>
<button @click="yes"><img :src="pathList[2]" alt="image"/></button>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class Img extends Vue {

        public pathList: any[] = [
            require("@/assets/hawaiiTrue.png"),
            require("@/assets/hawaiiFalse2.png"),
            require("@/assets/hawaiiFalse1.png")
        ]

        public yes(): void {
            console.log('yes');
        }
    }
</script>