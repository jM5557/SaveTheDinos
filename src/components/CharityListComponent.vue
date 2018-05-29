<template>
	<ul id = "charity-list-outer-wrapper">
		<li v-for = "charityItem in charityList" :key = "charityItem.id">
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
				charityList: CharityList.list
			}
		},

		components: {
			CharityListItemComp
		}
	}
</script>