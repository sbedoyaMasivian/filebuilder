<template>
	<!-- bidirectional data binding -->
	<codemirror  :options="cmOptions" class="CodeMirror" @input="onCmCodeChange"></codemirror>
</template>
 
<script>
	// language js
	import "codemirror/mode/javascript/javascript.js"
	// theme css
	import "codemirror/theme/base16-dark.css"
	// more codemirror resources

	export default {
		name: "AreaCode",
		data () {
			return {
			
				cmOptions: {
					// codemirror options
					tabSize: 4,
					mode: "htmlmixed",
					theme: "monokai",
					lineNumbers: true,
					line: true
					
				}
			}
		},
		methods: {
			onCmCodeChange(newCode) {
			/*this.code = newCode
			console.log("se cambio " + this.code)*/
			this.$store.dispatch("pasarHtml", newCode);
			}	
		},
		computed: {
		
		}
	
	}
</script>
<style lang="scss" scoped>
	.CodeMirror{
		height: 380px !important;
	}   
</style>
