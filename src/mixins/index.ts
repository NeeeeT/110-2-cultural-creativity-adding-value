export const mixinItem = {
    methods:{
        getRandomInt(min: number, max: number): number {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        openUrl(url: string){
            if(!url) return;
            window.open(url);
        },
    }
}