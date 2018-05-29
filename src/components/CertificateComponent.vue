<template>
	<div id = "certificate-outer-wrapper">
		<canvas id = "main-canvas"></canvas>

		<div id="rendered-img-container" v-if = "renderedImgSrc != null">
			<img alt = "Certificate of Adoption" :src = "renderedImgSrc" />
		</div>
			
	</div>
</template>

<script>
	

	export default {
		name: 'certificate-component',

		props: ['data'],

		data () {
			return {

				canv: null,

				ctx: null,

				renderedImgSrc: null

			}
		},

		methods: {
			populateCanvasWithData: function () {
				this.ctx.fillText(this.data.name, 10, 25);

				if (this.data.msg.length > 0) {
					this.ctx.fillText(this.data.msg, 25, 50);
				}

				var img = new Image();

				img.crossOrigin = 'Anonymous';
				img.src = 'images/' + this.data.dinoItem.image + '.png';

				var imgSrc = '';

				img.onload = () => {

					this.ctx.drawImage(img, 0, 0);

					imgSrc = this.canv.toDataURL("image/png");

				};


				this.renderedImgSrc = imgSrc;
			}
		},

		updated: function () {

		},

		mounted: function () {
			this.canv = document.getElementById("main-canvas");
			this.ctx = document.getElementById("main-canvas").getContext("2d");

			this.populateCanvasWithData();
		}
	}
</script>

<style>
	#main-canvas {
		width: 640px;
		height: 480px;
	}
</style>