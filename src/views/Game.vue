<template>
    <h1>{{message}}</h1>
    <!-- <img src="../assets/cards/9H.png" alt=""> -->
  
    <section class="table">

        <div v-for="(item, index) in selectedimg" class="card" :style="{width: cardStyles.width, height: cardStyles.height}">
            <div class="card__inner">
                <img class="card__inner--front" :src="item">
                <img src="../assets/cards/red_back.png" class="card__inner--back" alt="">
            </div>
        </div>

    </section>
        <!-- <img v-for="(item, index) in selectedimg" :src="item"> -->
    <div style="height: 50px"></div>

</template>

<script>
export default {
    name: "Game",
    data(){
        return{
            suite:["D", "C", "H", "S"],
            message: "Remember your cards!",
            source: require("../assets/cards/1C.png"),
            selectedimg:[],
            cardStyles:{width: "125px", height: "192px"} //cardStyles:{width: "150px", height: "230px"}
        }
    },
    methods:{
        
    },
    mounted(){
        console.log("CREATE")
        let amount = this.$store.state.cardAmount;
        let previousNum = 0;
        let previousSuite = -1;

        for(let i = 0; i < amount; i++){
            let picknum = Math.floor(Math.random()*13) + 1;
            let picksuite = Math.floor(Math.random()*4);
            while (picknum == previousNum && picksuite == previousSuite){
                picknum = Math.floor(Math.random()*13) + 1;
            }
            previousNum = picknum;
            previousSuite = picksuite;
            this.selectedimg.push(require(`../assets/cards/${picknum}${this.suite[picksuite]}.png`))
        }
   
       
    },
    unmounted(){
        this.$store.commit("setCardAmount", 5);
        this.$store.commit("setSeconds", 10);

    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles.scss";   
    h1{
        font-size: 3rem;
    }

    .table{
        display: flex;
        justify-content: center;
        flex-direction: row;
        width: 90%;
        margin: auto;
        background-color: blue;
        flex-wrap: wrap;
        margin-top: 20px;
        
    }

    img{
        display: block;
        width: 100%;
        position: absolute;
        backface-visibility: hidden;
        
    }

    .card{
        // width: 150px; //125
        // height: 230px;  //192
        position: relative;
        background-color: red;
        perspective: 500px;
        margin: 5px 10px;

        &__inner{
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            // position: absolute;
            transition: all .5s;
            position: relative;

            &--front{
                
            }

            &--back{
                transform: rotateY(180deg);
            }

           

        }

        &:hover &__inner{

            transform: rotateY(180deg);
        }


    }

</style>
