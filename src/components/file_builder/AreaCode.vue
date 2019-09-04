<template>
  <!-- bidirectional data binding -->
  <codemirror v-model="code" :options="cmOptions" class="CodeMirror" @input="onCmCodeChange"></codemirror>
</template>
 
<script>
// language js
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/base16-dark.css'
// more codemirror resources
// import 'codemirror/some-resource...'
export default {
  name: "AreaCode",
  data () {
    return {
      code: '',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: "htmlmixed",
        theme: "monokai",
        lineNumbers: true,
        line: true,
        // more codemirror options, 更多 codemirror 的高级配置...
      }
    }
  },
  methods: {
    onCmCodeChange(newCode) {
		this.code = newCode
		console.log("se cambio" + this.code)
		this.$emit(this.code)
    }
  },
  computed: {
    codemirror() {
      //return this.$refs.myCm.codemirror
      console.log('this is current codemirror object', this.code)
    }
  },
  mounted() {
    //console.log('this is current codemirror object', this.code)
    // you can use this.codemirror to do something...
  }
}
</script>
<style lang="scss" scoped>
   .CodeMirror{
        height: 380px !important;
    }   
</style>
