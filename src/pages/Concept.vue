<template>
    <div class="concept-wrapper">
        <Header></Header>
        <section class="section-concept">
            <div class="top-part">
                <div class='box-container'>
                    <h3>基本介紹</h3>
                    <div class="text">利用網頁的技術，將聲音的頻率、大小等變化，與視覺元素做結合，並加上可調整的聲音參數滑桿，使畫面上的物體與播放的聲音，隨著使用者對滑桿的操控而變化，使觀者產生視覺、聽覺合一的情緒感動。 操作方式：利用多個滑桿調整聲音參數（如：緩慢／急促、低沈／尖銳等），並產生視覺上的連動，進而引起情感上的反應。</div>
                </div>
                <div class='box-container'>
                    <h3>概念發想</h3>
                    <div class="text">我們參考了論文中，關於不同種類的聲音頻率的色彩聯想，並加入個人經驗與想像，加以歸納整理，並將它轉化為聲音特質滑桿的參數。當該參數被調大時，該項元素在聲音中或畫面上就會增加。</div>
                </div>
            </div>
            <div class="bottom-part">
                <div class='box-container'>
                    <h3>參考案例</h3>
                    <div class="img-text-container">
                        <div class="">
                            <h3>聲音的建築</h3>
                            <div class="text">2020 「AUDIO ARCHITECTURE：聲音的建築展」由東京 21_21 DESIGN SIGHT 企劃、INCEPTION 啟藝主辦。 在此展覽中我們可以看到聲音與視覺的多面向呈現，無論是藝術形式上、媒材表現上都具有以往未見的樣貌，同時促進不同文化背景的創作者與觀賞者交流與討論。</div>
                        </div>
                        <img src="../assets/img/img-1.png" alt="">
                        <div class="">
                            <h3>xysynth</h3>
                            <div class="text">透過網頁呈現聲音與視覺變化的關聯性。<a href='https://tothepoweroftom.github.io/xysynth/' target='_blank'>https://tothepoweroftom.github.io/xysynth/</a></div>
                        </div>
                        <img src="../assets/img/img-2.png" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script lang='ts'>;
import Header from '../components/Header.vue';
export default {
    data(){
        return{}
    },
    components:{
        Header
    },
    methods:{
    },
    
}
</script>
<style lang="scss" scoped>
.concept-wrapper{
    width: 100%;
    height: 100%;
    padding: 88px 56px 32px 56px;
    .section-concept{
        width: 100%;
        height: 100%;
        // border: 1px solid red;
        .top-part{
            width: 100%;
            display: flex;
            .box-container{
                width: 430px;
                h3{
                    font-size: 24px;
                    line-height: 24px;
                    letter-spacing: 0.5em;
                    color: #fff;
                    font-weight: 700;
                    margin-bottom: 12px;
                }
                .text{
                    min-height: 180px;
                    border: 3px solid #fff;
                    border-radius: 5px;
                    color: #fff;
                    padding: 16px 20px;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 1.1;
                    letter-spacing: 0.2em;
                    text-align: justify;
                }
                &:last-child{
                    margin-left: 56px;
                }
            }
        }
        .bottom-part{
            width: 100%;
            margin-top: 32px;
            .box-container{
                width: 100%;
                display: flex;
                flex-direction: column;
                h3{
                    font-size: 24px;
                    line-height: 24px;
                    letter-spacing: 0.5em;
                    color: #fff;
                    font-weight: 700;
                    margin-bottom: 12px;
                }
                .img-text-container{
                    border: 3px solid #fff;
                    border-radius: 5px;
                    width: 100%;
                    display: flex;
                    padding: 16px 24px;
                    // justify-content: space-between;
                    @media screen and (max-width: 1280px){
                        flex-direction: column;
                    }
                    > img{
                        margin: 0 12px;
                        max-height: 236px;
                        object-fit: contain;
                    }
                    > div{
                        display: flex;
                        flex-direction: column;
                        max-width: 266px;
                        h3{
                            font-size: 24px;
                            line-height: 24px;
                            letter-spacing: 0.5em;
                            color: #fff;
                            font-weight: 700;
                            margin-bottom: 12px;
                        }
                        .text{
                            color: #fff;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 1.1;
                            letter-spacing: 0.2em;
                            word-break: break-word;
                            a{
                                color: #fff;
                                margin-top: 4px;
                                transition: all 0.25s ease-in-out;
                                &:hover{
                                    color: rgb(89, 244, 255);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>