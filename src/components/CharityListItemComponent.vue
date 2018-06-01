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
			width: auto;
			background-color: #fefefe;
			padding: 15px;
			height: 100px;
		}

		@media all and (max-width: 720px) {
			display: block;

			img {

				height: auto;
				width: 75%;
				display: block;
				margin: auto;

			}
		}
	}
</style>