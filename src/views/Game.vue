<template>
    <h1>{{message}}</h1>
    <!-- <img src="../assets/cards/9H.png" alt=""> -->
    <main>
        <img v-for="(item, index) in selectedimg" :src="item">
    </main>
</template>
<script>


export default {
    name: "Game",
    data(){
        return{
            suite:["D", "C", "H", "S"],
            message: "Remember your cards!",
            source: require("../assets/cards/1C.png"),
            selectedimg:[require("../assets/cards/1C.png"),require("../assets/cards/1C.png"),require("../assets/cards/1C.png"),require("../assets/cards/1C.png")],
            cards:["../assets/cards/1C.png", "../assets/cards/1D.png", "../assets/cards/1H.png", "../assets/cards/1S.png"]
        }
    },
    mounted(){
        console.log("CREATE")
        let amount = this.$store.state.cardAmount;
        let previousNum = 0;
        let previousSuite = -1;
        for(let i = 0; i < amount; i++){
            let picknum = Math.floor(Math.random()*13) + 1;
            let picksuite = Math.floor(Math.random()*4);
            while (picknum == previous){
                this.selectedimg.pop();
                picknum = Math.floor(Math.random()*52) + 1;
            }
            previousNum = picknum;
            previousSuite = picksuite;
            this.selectedimg.push(require(`../assets/cards/${picknum}${this.suite[picksuite]}.png`))
        }
        previous = 0;
        console.log(this.selectedimg);
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
        height: 300px;
    }
</style>
