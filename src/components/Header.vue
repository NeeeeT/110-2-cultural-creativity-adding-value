<template>
    <div class="header-wrapper">
            <div class="left-side" :class="{inactive: !menuToggle}">
                <div class="menu">
                    <nav>
                        <a href="/">首頁</a>
                        <a href="/concept">概念發想＆參考資料</a>
                        <a href="javascript:;">設計說明</a>
                        <a href="javascript:;">技術規格</a>
                    </nav>
                </div>
            </div>
        <div class="right-side">
            <div class="hamburger pointer" @click='menuToggle=!menuToggle'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="title">Some Text</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            menuToggle: false,
        }
    }
}
</script>
<style lang="scss" scoped>
.header-wrapper {
    width: 100%;
    // height: 100%;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    // border: 1px solid red;
    .left-side{
        width: 328px;
        height: 100vh;
        background-color: #605f5f;
        padding: 64px 28px;
        &.inactive{
            width: 0;
            opacity: 0;
            overflow: hidden;
            padding: 0;
            transition: width 0.5s ease;
        }
        .menu{
            nav{
                width: 100%;
                display: flex;
                flex-direction: column;
                a{
                    color: #fff;
                    font-size: 24px;
                    line-height: 24px;
                    font-weight: 400p;
                    margin-bottom: 24px;
                }
            }
        }
    }
    .right-side{
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        padding: 16px 16px;
        .hamburger {
            width: 32px;
            > div{
                width: 100%;
                height: 4px;
                background-color: #fff;
                margin-bottom: 4px;
                border-radius: 30px;
                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
        .title{
            margin-left: 16px;
            font-size: 24px;
            line-height: 24px;
            font-weight: 400;
            color: #fff;
        }
    }
}
</style>