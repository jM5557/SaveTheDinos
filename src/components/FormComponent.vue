<template>
	<form>
		
		<div v-if = "display_error_message == true" class = "error_msg">A name is required.</div>
		
		<label>
			<p>Your Name.</p>
			<input type="text" name="name" v-model = "name" required>
		</label>

		<label>
			<p>A Message of Care. (Optional)</p>
			<textarea name = "message" v-model = "msg"></textarea>
		</label>

		<input type="submit" name="submit-form" value = "Go" v-on:click = "submitForm">
	</form>
</template>

<script>
	import { certDataBus } from './../certDataBus.js';

	export default {
		name: 'form-component',

		props: ['dinoItem', 'charityItem'],

		data () {
			return {
				name: '',

				msg: 'Together, we can save them.',

				display_error_message: false
			}
		},

		methods: {
			validateInput: function () {
				return this.name.length > 0;
			},

			submitForm: function (event) {
				event.preventDefault();

				let p = () => { return new Promise( function (resolve, reject) {
					if (this.validateInput() == true) {
						resolve("SUCCESS");
					}

					else {
						reject("FAILURE");
					}
				}.bind(this)); };

				p().then(

					function (result) { 

						this.display_error_message = false;

						certDataBus.$emit('generate-cert', {
							
							name: this.name,
						
							msg: this.msg,

							dinoItem: this.dinoItem

						});

					}.bind(this),

					function (reject) { 

						this.display_error_message = true; 

					}.bind(this)

				);
			}
		},

		components: {

		}
	}
</script>

<style lang = "scss">
	input[type=text],
	textarea {
		background-color: #fefefe;
		border-radius: 0px;
		padding: 20px 15px;
		border: none;
		font-size: 1.10em;
		display: block;
		width: 100%;
	}

	textarea {
		min-height: 250px;
	}

	label {
		display: block;
		max-width: 900px;
		margin: 45px auto;


		p {
			font-size: 0.35em;
			margin: 5px auto;
			text-align: left;
		}
	}

	.error_msg {
		background-color: #f54949;
		padding: 20px 15px;
		font-size: 1.10em;
		max-width: 500px;
		margin: auto;
	}

</style>