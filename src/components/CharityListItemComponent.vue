<template>
	<div class = "charity-list-item-inner-wrapper">
		<p class = "name">{{ item.name }}</p>

		<img alt = "Charity Item Logo" :src = "'images/' + item.image" />
	</div>
</template>

<script>
	export default {
		name: "charity-list-item-component",

		props: [ 'item' ],

		data () {
			return {

			}
		}
	}
</script>

<style lang = "scss">
	.charity-list-item-inner-wrapper {
		display: inline-block;

		.name {
			display: none;
		}

		img {
			max-width: 175px;
			background-color: #fefefe;
			padding: 15px;
		}
	}
</style>