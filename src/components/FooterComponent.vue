<template>
	<footer>
		<a href="http://www.dinosaurprotectiongroup.com/">
			<img alt = "save the dinosaurs badge" src = "images/badge.png" />
		</a>

		<p id = "disclaimer">
			All images and trademarked material from the Jurassic World and Jurassic Park brands is property of Universal Studios.
				<br />
				<br />
			We have no affiliation with any of the companies or organizations featured on this site.
		</p>
	</footer>
</template>

<script>
	export default {
		name: 'footer-component'
	}
</script>

<style lang = "scss">
	footer {
		background-color: #EEEEEE;
		padding: 35px 25px;
		margin-top: 25px;

		img {
			max-width: 200px;
			display: block;
			margin: 20px auto;
			opacity: 0.70;
			border-radius: 50%;

			&:hover {
				opacity: 0.90;
			}
		}

		#disclaimer {
			font-size: 10pt;
			font-weight: bold;
			max-width: 900px;
			margin: auto;
			color: #888;
			text-align: center;

		}

		@media all and (max-width: 900px) {
			
			#disclaimer {
				text-align: left;
			}

		}
	}
</style>