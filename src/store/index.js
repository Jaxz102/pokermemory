import { createStore } from 'vuex'

export default createStore({
	state: {
		cardAmount: 5,
		seconds: 10,
		language: 0,
	},
	mutations: {
		setCardAmount(state, num){
			state.cardAmount = num;
		},
		setSeconds(state, time){
			state.seconds = time;
		}
	},
	actions: {
	},
	modules: {
	}
})
