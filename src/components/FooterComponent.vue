<template>
	<footer>

		<a href="https://www.youtube.com/watch?v=_TXCVO_O6vE" class = "vid_tagline">Together, we can save them.</a>
		
		<a href="http://www.dinosaurprotectiongroup.com/" class = "bubble_tagline">
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

		.bubble_tagline {
			max-width: 250px;
			position: relative;
			display: block;
			margin: auto;

			img {
				max-width: 250px;
				display: block;
				margin: auto auto;
				opacity: 0.70;
				border-radius: 50%;

				&:hover {
					opacity: 0.90;
				}
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

		.vid_tagline {
			color: #AAA;
			padding: 15px 20px;
			text-align: center;
			display: block;
			width: 80%;
			max-width: 500px;
			font-family: 'DecoturaICG', sans-serif;
			font-size: 3.45rem;
			margin: auto;
		}

		@media all and (max-width: 900px) {
			
			#disclaimer {
				text-align: left;
			}

		}
	}
</style>