import uieditor from "./uieditor.vue"
import toolspanel from "../navigation/ToolsPanel.vue"

export default {
  components:{
    'uieditor' : uieditor,
    "toolspanel" : toolspanel
  },
  data(){
    return{
      drawerRight : true
    }
  },
  methods:{
    addElement(evt){
      this.$refs.ui.addElement(evt)
    }
  },
}