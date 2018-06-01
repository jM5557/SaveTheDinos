<template>
	<div class = "dinosaur-list-item-inner-wrapper">
		
		<span :class = "(isSelected) ? 'thumb selected' : 'thumb' " :style="'background-image: url(\'images/' + item.image + '.png\');'"></span>
			
		<div class="stats">
			
			<p class = "name">{{ item.name }}</p>
			
			<p class = "age">{{ (item.age != "Unknown") ? item.age + ' Years Old' : item.age }}</p>

		</div>
			
	</div>
</template>

<script>
	export default {
		name: 'dinosaur-list-item-component',

		props: [ 'item', 'isSelected' ],

		data () {
			return {

			}
		}
	}
</script>

<style lang="scss">
	$thumbWidth: 200;

	.dinosaur-list-item-inner-wrapper {

		display: block;
		text-align: left;
		margin: 5px auto;
		background-color: #ffffff;
		box-shadow: 0px 3px 15px -5px #222;
		padding: 75px;
		cursor: pointer;
		position: relative;
		padding-left: #{$thumbWidth + 20}px;

		.thumb {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			width: #{$thumbWidth}px;
			background-position: top 0px left 0px;
			background-size: auto 120%;
			background-repeat: no-repeat;
			z-index: 1;
			border-top-right-radius: 50%;
    		border-bottom-right-radius: 50%;
    		border-right: solid 3px #92ce76;

			&.selected:after {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: url('./../images/loader.gif') no-repeat center center;
				background-size: auto 70%;
			}

			&.selected:before {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				background-color: #fefefe;
				opacity: 0.64;
			}
		}

		&:before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			width: #{$thumbWidth}px;
			background: url(./../images/info-top.png);
			z-index: 1;
			border-top-right-radius: 50%;
    		border-bottom-right-radius: 50%;
    		border-right: solid 3px #92ce76;
		}


		.name {
			font-family: 'DecoturaICG', 'Roboto', sans-serif;
			font-weight: bold;
			color: #AAA;
			font-size: 2.5rem;
			letter-spacing: 2px;
			margin: 10px auto;
		}

		.age {
			color: #AAA;
			font-size: 1.35rem;
		}

		&:hover {

			p {
				color: #222;
			}

		}

		$thumbWidthSm: $thumbWidth / 1.15;

		@media all and (max-width: 720px) {

			.name {
				font-size: 1.45em;
			}

			 
			.thumb, &:before {
				width: #{$thumbWidthSm}px;
			}
		}
	}
</style>