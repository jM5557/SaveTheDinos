<template>
	<ul id = "charity-list-outer-wrapper">
		<li v-for = "charityItem in charityList" 
			:key = "charityItem.id"
			v-on:click = "setSelected(charityItem)"
			:class = "(selectedCharity != null && (selectedCharity.id == charityItem.id)) ? 'selected' : ''"
		>
			<CharityListItemComp :item = "charityItem"></CharityListItemComp>
		</li>
	</ul>
</template>

<script>
	import CharityList from './../data/charity-list.json';
	import CharityListItemComp from './CharityListItemComponent.vue';

	export default {
		name: 'charity-list-component',

		data () {
			return {
				charityList: CharityList.list,

				selectedCharity: null
			}
		},

		methods: {
			setSelected: function (obj) {
				this.selectedCharity = obj;
				this.$emit('set-item', obj);
			}
		},

		components: {
			CharityListItemComp
		}
	}
</script>


<style lang = "scss">
	#charity-list-outer-wrapper {
		li {
			opacity: 0.65;

			display: inline-block;
			margin: 5px 7.5px;
			vertical-align: middle;
			cursor: pointer;
		}

		li.selected {
			opacity: 1;
		}
	}
</style>