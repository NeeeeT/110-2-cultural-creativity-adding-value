<script>
export default {
    data(){
        return{
        }
    },
    mounted(){
    }
}
</script>
<template>
    <div class="inspector-wrapper">
        <div class="front-part">
            <svg class='hint pointer' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="11" fill="black"/>
                <path d="M10.4883 13.9102C10.3789 13.0716 10.625 12.2376 11.2266 11.4082C11.3177 11.2806 11.4681 11.0892 11.6777 10.834C12.1699 10.2233 12.4661 9.74935 12.5664 9.41211C12.6211 9.23893 12.6484 9.07031 12.6484 8.90625C12.6484 8.26823 12.3978 7.82161 11.8965 7.56641C11.6686 7.45703 11.4134 7.40234 11.1309 7.40234C10.4473 7.41146 9.8457 7.70768 9.32617 8.29102L8.60156 7.62109C9.35807 6.77344 10.2513 6.34505 11.2812 6.33594C12.3294 6.33594 13.0814 6.70508 13.5371 7.44336C13.7741 7.83529 13.8926 8.29557 13.8926 8.82422C13.8926 9.44401 13.6146 10.1094 13.0586 10.8203C12.9948 10.9115 12.8945 11.0391 12.7578 11.2031C12.2201 11.8685 11.8828 12.3971 11.7461 12.7891C11.6276 13.1536 11.5866 13.5273 11.623 13.9102H10.4883ZM11.0898 17.1777C10.6979 17.1777 10.4245 17.0046 10.2695 16.6582C10.2057 16.5215 10.1738 16.3757 10.1738 16.2207C10.1738 15.8014 10.3424 15.5007 10.6797 15.3184C10.8164 15.2546 10.9531 15.2227 11.0898 15.2227C11.4727 15.2227 11.7507 15.4004 11.9238 15.7559C11.9967 15.9017 12.0332 16.0566 12.0332 16.2207C12.0332 16.6491 11.8509 16.9408 11.4863 17.0957C11.3587 17.1504 11.2266 17.1777 11.0898 17.1777Z" fill="white"/>
            </svg>
        </div>
        <div class="back-part"></div>
    </div>
</template>
<style lang="scss" scoped>
.inspector-wrapper{
    position: absolute;
    bottom: 80px;
    right: 80px;
    border: 1px solid red;
    width: 214px;
    height: 276px;
    .front-part, .back-part{
        position: absolute;
        width: 196px;
        height: 260px;
        border-radius: 10px;
    }
    .front-part{
        top: 0;
        left: 0;
        background-color: rgba(255,255,255,1);
        .hint{
            position: absolute;
            top: 8px;
            right: 8px;
            z-index: 3;
        }
    }
    .back-part{
        right: 0;
        bottom: 0;
        background-color: rgba(255,255,255,0.8);
    }
}
</style>