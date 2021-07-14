<template>
    <h1>{{message}}</h1>
    <!-- <img src="../assets/cards/9H.png" alt=""> -->
  
        <section class="table">

            <div v-for="(item, index) in selectedimg" class="card" >
                <div class="card__inner">
                    <img class="card__inner--front" :src="item">
                    <img src="../assets/cards/red_back.png" class="card__inner--back" alt="">
                </div>
            </div>

        </section>
        <!-- <img v-for="(item, index) in selectedimg" :src="item"> -->

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
            while (picknum == previousNum && picksuite == previousSuite){
                picknum = Math.floor(Math.random()*13) + 1;
            }
            previousNum = picknum;
            previousSuite = picksuite;
            this.selectedimg.push(require(`../assets/cards/${picknum}${this.suite[picksuite]}.png`))
        }
        
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

    .table{
        display: flex;
        justify-content: center;
        flex-direction: row;
        width: 90%;
        margin: auto;
        background-color: blue;
        flex-wrap: wrap;
    }

    img{
        display: block;
        width: 100%;
        position: absolute;
        backface-visibility: hidden;
        
    }

    .card{
        width: 150px;
        height: 230px;
        position: relative;
        background-color: red;
        perspective: 500px;
        margin: 10px 10px;

        &__inner{
            width: 100%;
            height: fit-content;
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
