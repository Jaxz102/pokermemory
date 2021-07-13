<template>
    <h1>{{message}}</h1>
    <img src="../assets/cards/9H.png" alt="">
    <main>
        <img v-for="(item, index) in cards" v-bind:src="'../assets/cards/' + item" />
    </main>
</template>
<script>


export default {
    name: "Game",
    data(){
        return{
            suite:["D", "C", "H", "S"],
            message: "Remember your cards!",
            cards:[]
        }
    },
    mounted(){
        let amount = this.$store.state.cardAmount;
        let previous = 0;
        for(let i = 0; i < amount; i++){
            let picknum = Math.floor(Math.random()*13) + 1;
            let picksuite = Math.floor(Math.random()*4);
            while (picknum == previous){
                picknum = Math.floor(Math.random()*52) + 1;
            }
            previous = picknum;
            this.cards.push(`${picknum}${this.suite[picksuite]}.png`)
        }
        previous = 0;
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles.scss";   
    main{
        width: 75%;
        height: 50%;
        background-color: aliceblue;
        
    }

    img{
        width: 200px;
        height: 400px;
    }
</style>
