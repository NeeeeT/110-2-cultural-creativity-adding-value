<template>
    <div class="main-wrapper">
        <Header></Header>
        <ArtController/>
    </div>
</template>
<script lang='ts'>;
import Header from '../components/Header.vue';
import ArtController from '../components/ArtController.vue';
export default {
    data(){
        return{}
    },
    components:{
        Header, ArtController
    },
    methods:{
    },
    
}
</script>
<style lang="scss" scoped>
.main-wrapper{
    width: 100%;
    height: 100%;
}
</style>