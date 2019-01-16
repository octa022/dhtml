import uieditor from "./uieditor.vue"
import toolspanel from "../navigation/ToolsPanel.vue"

export default {
  components:{
    'uieditor' : uieditor,
    "toolspanel" : toolspanel
  },
  data(){
    return{
      hidden : false
    }
  },
  methods:{
    addElement(evt){
      this.$refs.ui.addElement(evt)
    }
  },
  mounted(){
    console.log(this,"this")
  }
}