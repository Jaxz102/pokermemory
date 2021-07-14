<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  	<button v-on:click="guestPlay" v-if="!front" class="back-button">Back to Home</button>
	<GameCongif v-if="!front" class="gameconfig"/>
	<main v-if="front">
		<h1>POKER MEMORY</h1>
		<p>A game which help you train your memory and thinking</p>
		<section>
			<button>Play</button>
			<button v-on:click="guestPlay">Play as Guest</button>
		</section>
	</main>
	<section class="background"></section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import GameCongif from "@/components/GameConfig.vue"

export default {
	name: 'Home',
	data(){
		return{
			front: true,
		}
	},
	components: {
	HelloWorld,
	GameCongif
	},
	methods:{
		guestPlay(){
			if(this.front){
				this.front = false;
			}
			else{
				this.front = true;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../assets/styles.scss";
	h1{
		font-size: 5rem;
		margin: auto;
		color: $primary-colour;
	}
	main{

		position: absolute;
		z-index: 0;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -70%);
		width: 60%;

		& > section{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			width: 60%;
			margin: auto;
			margin-top: 50px;


			& > button{
				width: 200px;
				font-size: 1.5rem;
				padding: 10px 0px;
				background-color: $primary-colour;
				color: white;

				&:hover{
					background-color: $primary-hover;
				}

			}
		}
	}
	p{
		color: $vue-black;
		font-size: 1.5rem;
		width: 75%;
		margin: auto;

	}
	.background{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -2;
		background-color: $bgcolour;
	}

	.back-button{
		position: absolute;
		border: solid 2px $primary-colour;
		color: $primary-colour;
		font-size: 1.5rem;
		width: 200px;
		padding: 10px 0px;
		top: 20px;
		left: 40px;
		background-color: white;

		&:hover{
			color: $primary-hover;
			border: solid 2px $primary-hover;
		}
	}

	.gameconfig{
		margin: auto;
		margin-top: 50px;

	}
</style>