<template>
	<div id = "dinosaur-list-outer-wrapper">

		<div v-if = "current_state == 2">
			
			<SelectedModal :selectedItem = "selectedItem"></SelectedModal>

			<div class="button_ctr">
				<button v-on:click = "current_state = 1; selectedItem = null">Cancel</button> 
			</div>
		
		</div>
			                                                                                                

		<div v-if = "current_state == 1" id = "dinosaur-list-inner-wrapper">
			
			<h3 class = "heading">
				Pick A Dino.
			</h3>

			<ul>
				<li v-for = "dinoItem in dinoItems" :key = "dinoItem.id" v-on:click="setSelectedItem(dinoItem)">
					<DinosaurListItemComp :item = "dinoItem" :isSelected = "isSelectedDino(dinoItem.id)"></DinosaurListItemComp>
				</li>
			</ul>
		
			<div class = "button_ctr">
				<button v-on:click = "scrollToTop">Back to Top</button>
			</div>
		
		</div>
	</div>
</template>

<script>
	import DinoList from './../data/dino-list.json';
	import DinosaurListItemComp from './DinosaurListItemComponent.vue';
	import SelectedModal from './SelectedModal.vue';

	import scrollToEl from 'scroll-to-element';

	export default {
		name: 'dinosaur-list-component',
		data () {
			return {
				dinoItems: DinoList.list,

				selectedItem: null,

				current_state: 1
			}
		},
		components: {
			DinosaurListItemComp,
			SelectedModal
		},
		methods: {

			setSelectedItem: function (obj) {
				this.selectedItem = obj;

				// Moves to the next displayed state
				this.current_state = 2;
			},

			/*
			*
			* @param Integer id value of the specified 
			* 	dinosaur list item
			* 
			* @return boolean determines whether the current selected item
			* 	is the same as the dinosaur list item being checked
			*
			*/
			isSelectedDino: function (id) {


				// don't do any boolean checking if this.selectedItem
				// is still at its default value
				if ( this.selectedItem == null ) 
					return;

				return (this.selectedItem.id == id);
			},

			scrollToTop: function () {
				scrollToEl('#top-main');
			}
		}
	}
</script>

<style lang="scss">
	#dinosaur-list-inner-wrapper {
		max-width: 1080px;
		margin: 15px auto;

		h3 {
			margin: 15px auto;
			color: #6aa150;
		}
	}

	.button_ctr {
		text-align: center;
		margin: 25px auto;
	}

	@media all and (max-width: 900px) {

		.heading {
			padding: 5px 15px;
		}

		.button_ctr {

			button,
			input[type="submit"], 
			.save_btn {
				display: block;
				max-width: 85%;
				margin: 15px auto;
			}
			
		}
	}

</style>