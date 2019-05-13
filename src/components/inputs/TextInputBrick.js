/*
  "fieldCode" : "", 
  "fieldValue": "",
  "fieldWidth":"",
  "fieldColor":"",
  "dataClass":"",
  "dataStyle":"",
  "label" : "",
  "labelPosition" : "", 
  "description" : "",
  "prefix":"",
  "suffix":"",
  "append":"",
  "prepend":"",  
  "defaultValue" : "",  
  "brickType" : "TEXTINPUT",
  "visible" : true,
  "enabled" : true,
  "validationRule" : "",
  "hint" : "",
*/
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
          "fieldColor":"",
          "dataClass":"",
          "dataStyle":"",
          "label" : "",
          "labelPosition" : "",
          "append":"",
          "prepend":"",  
          "defaultValue" : "",  
          "brickType" : "",
          "visible" : true,
          "prefix":"",
          "suffix":"",
          "enabled" : true,
          "validationRule" : {},
          "hint" : ""
        }      
      }
    }
  },
  data(){
    return {
      jformBRICK:this.brickJSON,
      dateFormat:""
    }
  },
  methods:{
    assingData(val){
      this.jformBRICK = JSON.parse(JSON.stringify(val))
    },
    updateDateFormat(date){
      let dt = new Date(date + ' ')
      var url_l18n = "en"
      var locale = "en-US"
      if(url_l18n == "en"){
          locale = "en-GB"
      }
      this.dateFormat = dt.toLocaleString(locale,{
        "hour12":true,
        "year":"numeric",
        "month":"2-digit",
        "day":"2-digit"
      })
    }
  }
}