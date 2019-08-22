import "@/assets/form.css"
export default {
  props:{
    brickJSON:{
      type:Object,
      default:()=> {
        return{
          "fieldCode" : "", 
          "fieldValue": "",
          "fieldWidth":"",
          "dataClass":"",
          "label" : "",
          "labelPosition" : "",
          "append":"",
          "prepend":"",  
          "defaultValue" : "",  
          "brickType" : "",
          "visible" : true,
          "enabled" : true,
          "validationRule" : {},
          "hint" : ""
        }      
      }
    }
  },
  data(){
    return {
      jformBRICK:this.brickJSON
    }
  },
  methods:{
    assingData(val){
      this.jformBRICK = JSON.parse(JSON.stringify(val))
    }
  }
}