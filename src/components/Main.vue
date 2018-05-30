<template>
	<section id = "top-main">
		
		<h1 class = "header-main">
			<img alt = "DPG main logo" src = "images/main-logo-dpg.png" />

			Save the Dinos.
		</h1>
		
		<DinosaurListComp v-if = "certData == null"></DinosaurListComp>

		<div id="cert-container" v-if = "certData != null">
			<CertificateComp :data = "certData"></CertificateComp>
		</div>
			
		<FooterComp></FooterComp>
	
	</section>
</template>

<script>
	import DinosaurListComp from './DinosaurListComponent.vue';
	import CertificateComp from './CertificateComponent.vue';
	import FooterComp from './FooterComponent.vue';

	import { certDataBus } from './../certDataBus.js';

	export default {
		name: 'Main',

		data () {

			return {

				certData: null
			}

		},

		methods: {

		},

		mounted: function () {

			certDataBus.$on('generate-cert', (data) => {
				this.certData = data;
			});

		},

		components: {
			DinosaurListComp,
			CertificateComp,
			FooterComp
		}
	}
</script>

<style lang = "scss">
	@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:700|Roboto:900');

	$colorGreen: #6aa150;

	/* http://meyerweb.com/eric/tools/css/reset/ 
	   v2.0 | 20110126
	   License: none (public domain)
	*/

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	@font-face {
		font-family: 'DecoturaICG';
		src: url('./../DecoturaICG.ttf');
	}

	body {
		font-family: 'Roboto', sans-serif;
		background-color: #fefefe;
	}

	h1, h2, h3,
	h4, h5, h6 {
		font-family: 'Roboto Condensed', sans-serif;
		letter-spacing: 2px;
		font-weight: bolder;
	}

	h1 {
		font-size: 2.5em;
	}

	h2 {
		font-size: 2.25em;
	}

	h3 {
		font-size: 2em;
	}

	h4 {
		font-size: 1.5em;
	}

	h5 {
		font-size: 1.25em;
	}

	h6 {
		font-size: 1.10em;
	}

	button,
	input[type="submit"],
	.save_btn {
		color: #fefefe;
		font-size: 1.35em;
		border: none;
		background-color: $colorGreen;
		font-family: 'Roboto Condensed', sans-serif;
		font-weight: bold;
		padding: 15px 20px;
		text-transform: uppercase;
		letter-spacing: 2px;
		cursor: pointer;
	}

	.save_btn {
		color: #fefefe;
		text-decoration: none;
	}

	.header-main {
		text-align: center;
		max-width: 500px;
		margin: auto;
		padding: 35px 20px;
		color: #68a24d;

		img {
			display: block;
			max-width: 200px;
			width: 75%;
			margin: -15px auto 15px auto;
		}
	}

</style>