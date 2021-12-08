<template>
    <div id="extraImg">
        <img :src="pathList[0]" alt="image"/>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class Img extends Vue {

        public pathList: any[] = [
            require("@/assets/hawaiiTrue.png"),
            require("@/assets/hawaiiFalse2.png")
        ]
    }
</script>
