<script>
import Inspector from "./Inspector.vue";
export default {
    data(){
        return{
        }
    },
    mounted(){
    },
    components:{
        Inspector
    }
}
</script>
<template>
    <div class="art-controller-wrapper">
        <div class="canvas-wrapper" id='canvas-wrapper'></div>
        <Inspector/>
    </div>
</template>
<style lang="scss" scoped>
.art-controller-wrapper{
    width: 100%;
    height: 100%;
    .canvas-wrapper{
        width: 520px;
        height: 520px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>