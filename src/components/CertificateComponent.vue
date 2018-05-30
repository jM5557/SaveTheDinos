<template>
	<div id = "certificate-outer-wrapper">
		
		<canvas id = "main-canvas" width = "640" height = "900" v-if="canvLoading == true"></canvas>

		<div id="rendered-img-container" v-if = "renderedImgSrc != null">
			<img alt = "Certificate of Adoption" :src = "renderedImgSrc" />
		</div>

		<div class = "button_ctr">
			<a class = "save_btn" v-on:click="downloadImg" href="#">Save Image</a>
			<button v-on:click = "resetAll">Adopt Another Dinosaur</button>
		</div>
	</div>
</template>

<script>
	import { certDataBus } from './../certDataBus.js';

	export default {
		name: 'certificate-component',

		props: ['data'],

		data () {
			return {

				canvLoading: true,

				canv: null,

				adjustedHeightFactor: 0,

				ctx: null,

				renderedImgSrc: null

			}
		},

		methods: {
			/*
			*
			* Adapted solution from:
			* 	https://www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/
			*
			* Custom solution determines dynamic height change
			* necessary for the canvas to fit the wrapped text
			*
			*/
			wrapText: function (context, text, x, y, maxWidth, lineHeight) {
		        var words = text.split(' ');
		        var line = '';
		        var lineCount = 0;

		        for(var n = 0; n < words.length; n++) {

		        	var testLine = line + words[n] + ' ';

		        	var metrics = context.measureText(testLine);

		        	var testWidth = metrics.width;

		        	if (testWidth > maxWidth && n > 0) {

		        	  context.fillText(line, x, y);
		        	  line = words[n] + ' ';
		        	  y += lineHeight;
		        	  lineCount++;
		        	  
		        	  console.log(lineCount);
		        	}

		        	else {
		        	  line = testLine;
		        	}
		        }

		        // For use in re-rendering the canvas with appropriate height
		        this.adjustedHeightFactor = lineCount;
		       	
		       	context.fillText(line, x, y);

		    },

		    calcHeightOfCanvas: function () {
		    	var base = 720;
		    	var final = base;

		    	if (this.data.msg.length > 0) {

		    		this.wrapText(this.ctx, this.data.msg, 25, this.canv.height - 720 + 128, this.canv.width - 50, 25);

		    	}

		    	this.canv.height = final + (47 * this.adjustedHeightFactor);
		    },

			populateCanvasWithData: function () {

				var img = new Image();
				var charityLogo = new Image();

				img.onload = () => {

					this.ctx.drawImage(img, 0, 140);

					var mainBoxVertOffset = 550;

					this.ctx.fillStyle = "#fff";

					this.ctx.fillRect(0, mainBoxVertOffset, this.canv.width, this.canv.height - 240);

					this.ctx.fillStyle = "#222";

					this.ctx.font = "35px DecoturaICG"
					this.ctx.fillText('Adopted By: ' + this.data.name, 25, mainBoxVertOffset + 64);

					// Optional Message Rendering
					if (this.data.msg.length > 0) {

						this.ctx.font = "20px Roboto Condensed";

						this.wrapText(this.ctx, this.data.msg, 25, mainBoxVertOffset + 108, this.canv.width - 50, 25);

						console.log(this.adjustedHeightFactor);
					}

					if (this.data.charityItem == null) {

						this.renderedImgSrc = this.canv.toDataURL("image/png");
						
					}

				};

				if (this.data.charityItem != null) {

					charityLogo.onload = () => {

						this.ctx.fillStyle = "#fff";
						this.ctx.fillRect(290, 380, 340, 340 * charityLogo.height / charityLogo.width);

						this.ctx.drawImage(charityLogo, 330, 400, 240, 240 * charityLogo.height / charityLogo.width);

						this.renderedImgSrc = this.canv.toDataURL("image/png");

					}
				}

				//img.crossOrigin = 'Anonymous';
				
				img.src = 'images/' + this.data.dinoItem.image + '.png';

				if (this.data.charityItem != null) {

					console.log(this.data.charityItem.image);

					//charityLogo.crossOrigin = 'Anonymous';

					charityLogo.src = 'images/' + this.data.charityItem.image;

				}

			},

			resetAll: function () {
				certDataBus.$emit('generate-cert', null);
			},

			downloadImg: function (e) {
				e.target.href = this.renderedImgSrc;
				e.target.download = "DPGCertificate.png";
			}
		},

		updated: function () {

		},

		mounted: function () {
			this.canv = document.getElementById("main-canvas");
			this.ctx = document.getElementById("main-canvas").getContext("2d");

			this.calcHeightOfCanvas();

			this.ctx.fillStyle = "#6aa150";
			this.ctx.fillRect(0, 0, this.canv.width, this.canv.height);

			this.ctx.fillStyle = "#fff";
			this.ctx.font = "50px DecoturaICG";
			this.ctx.fillText("Certificate of Adoption", 25, 60);

			this.ctx.font = "35px DecoturaICG";
			this.ctx.fillText(this.data.dinoItem.name, 25, 120);

			this.populateCanvasWithData();

			this.canvLoading = false;
		}
	}
</script>

<style>
	#main-canvas {
		
	}

	#certificate-outer-wrapper {
		text-align: center;
	}
</style>