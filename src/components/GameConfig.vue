<template>
    
    <main>
        <label for="">Number of Cards</label>
        <section class="cardamount">
            <button v-for="(item, index) in cardAmount" :class="[item.selected ? 'selected' : 'unselected']" v-on:click="selectAmount(index)">{{item.amount}} Cards</button>
        </section>
        <div style="height: 50px"></div>
        <label for="" class="time-label">Time Given</label>
        <section class="timeoption">
            <button v-for="(item, index) in timings" :class="[item.selected ? 'selected' : 'unselected']" v-on:click="selectTime(index)">{{item.seconds}} Seconds</button>
        </section>
        <button class="startbutton">Start Game!</button>
    </main>
</template>

<script>


export default {
    name: "GameConfig",
    data(){
        return{
            cardAmount:[
                {amount: 5, selected: true},
                {amount: 8, selected: false},
                {amount: 10, selected: false},
                {amount: 13, selected: false},
                {amount: 15, selected: false},
                {amount: 20, selected: false}

            ],
            timings:[
                {seconds: 5, selected: false},
                {seconds: 10, selected: true},
                {seconds: 15, selected: false},
                {seconds: 20, selected: false},
                {seconds: 25, selected: false}
            ]
        }
    },
    methods:{
        selectTime(index){
            console.log(this.timings[index].selected);
            for (let i = 0; i < this.timings.length;i++){
                if(i != index){
                    this.timings[i].selected = false;
                }
                else{
                    this.timings[i].selected = true;
                }
            }
        },
        selectAmount(index){
            for(let i = 0; i < this.cardAmount.length; i++){
                if(i != index){
                    this.cardAmount[i].selected = false;
                }
                else{
                    this.cardAmount[i].selected = true;
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
	@import "../assets/styles.scss";

    @mixin button-options{
        flex: 1;
        padding: 10px 0px;
        margin: 0px 5px;
        font-size: 1.5rem;
        background: none;

    }

    main{
        background-color: beige;
        width: 75%;
        height: 500px;
        margin: auto;
        margin-top: 50px;

        & > section{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            margin: auto;

            & > button{
                @include button-options;
            }
        }
    }
    
    label{
        font-size: 2rem;
        margin: auto;
    }



    .selected{
        border: solid 2px $primary-colour;
        color: $primary-colour;
    }
    .unselected{
        border: solid 2px $black;
        color: $black;
    }

    .timeoption{

    }
    .cardamount{
        flex-wrap: wrap;
    }

    .startbutton{
        font-size: 1.5rem;
        color: white;
        background-color: $primary-colour;

        padding: 10px 10px;
        margin-top: 40px;

        &:hover{
            background-color: $primary-hover;
        }
    }
</style>