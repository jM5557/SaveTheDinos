<template>
	<div id = "selected-modal-outer-wrapper">
		<div id = "selected-modal-display-wrapper">	
			
			<h5>{{ selectedItem.name }}</h5>
			<p class = "age">{{ (selectedItem.age != "Unknown") ? selectedItem.age + ' Years Old' : selectedItem.age }}</p>
			
			<button id = "select-btn" v-on:click = "moveToNextStep(1)" v-if = "current_step == 1">Select +</button>

			<img alt = "Dinosaur Render" :src = "'images/' + selectedItem.image + '.png' " />
		</div>
		
		<div id = "action-menu-container" v-if = "current_step > 1">
			<div v-if = "current_step == 2">
				
				<p>Choose A Charity To Donate To?</p>

				<button v-on:click = "moveToNextStep(2)">Yes</button>

				<button v-on:click = "moveToNextStep(3)">No</button>

			</div>

			<div id = "charity-list-container" v-if = "current_step == 3">
				<CharityListComp v-on:set-item="setCharityItem"></CharityListComp>
			</div>

			<div v-if = "current_step == 4">

				<FormComp 
					:dinoItem = "selectedItem" 
					:charityItem = "charityItem"
				></FormComp>

			</div>

			<button v-if = "current_step > 2" v-on:click = "moveToPrevStep()">Back</button>

			<button v-if = "current_step == 3" v-on:click="moveToNextStep(3)">
				Next
			</button>

			<button v-on:click = "handleCancel" v-if = "current_step >= 3">
				Cancel
			</button>
		</div>
	</div>
</template>

<script>
	import CharityListComp from './CharityListComponent.vue';
	import FormComp from './FormComponent.vue'

	export default {
		name: 'selected-modal',

		props: [ 'selectedItem' ],

		data () {
			return {

				current_step: 1,

				displayCharityList: false,

				charityItem: null

			}
		},

		methods: {

			moveToPrevStep: function () {
				var prev_step = this.current_step - 1;

				// if the charityList is set to NOT display
				// skip step 3 and go to 2
				if (!this.displayCharityList 
						&& this.current_step == 4) {
					prev_step = 2;
				}

				this.current_step = prev_step;

				// reset this.displayCharityList to default value
				if (this.current_step == 1) {
					this.displayCharityList = false;
				}
			},

			moveToNextStep: function (step) {
				this.current_step = step+1;

				// If the step we're moving to is 3
				// display the charity list
				if (step + 1 == 3) {

					this.displayCharityList = true;

				}
			},

			handleCancel: function () {

				// returns to first numbered state
				this.current_step = 1;
				this.displayCharityList = false;
				this.charityItem = null;
			},

			setCharityItem: function (item) {
				this.charityItem = item;
			}

		},

		components: {
			CharityListComp,
			FormComp
		}
	}
</script>

<style lang = "scss">

	#selected-modal-display-wrapper {
		max-width: 1440px;
		margin: auto;
		position: relative;
		z-index: 1;
		padding: 15px 15px;

		h5 {
			font-size: 3.75em;
			max-width: 500px;
			font-family: 'DecoturaICG', 'Roboto Condensed', sans-serif;
		}

		p {
			font-size: 1.35em;
		}

		img {
			display: block;
			margin: -100px 0px auto auto;
			max-width: 500px;
			width: 45%;
			background-color: #6aa150;
			padding: 20px 20px;
		}

		#select-btn {
			margin-top: 25px;		
		}

		@media all and (max-width: 900px) {
			h5 {
				font-size: 2.75em;
			}

			img {
				margin: 15px auto;
				max-width: 95%;
				width: 85%;
			}
		}
	}

	#action-menu-container {
		background-color: #68a24d;
		color: #fefefe;
		text-align: center;
		padding: 35px 17.5px;

		p {
			font-size: 1.95rem;
			font-family: 'Roboto Condensed', sans-serif;
			font-weight: bold;
		}

		button {
			background-color: #fefefe;
			color: #68a24d;
			margin: 15px 10px;
		}

		@media all and (max-width: 720px) {
			p {
				text-align: left;
			}
		}
	}

</style>