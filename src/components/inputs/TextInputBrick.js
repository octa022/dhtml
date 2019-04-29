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
  "append-icon":"",
  "prepend-icon":"",  
  "defaultValue" : "",  
  "brickType" : "TEXTINPUT",
  "visible" : true,
  "enabled" : true,
  "validationRule" : "",
  "hint" : "",
*/
export default {
  props:{
    brickJSON:{
      type:Object,
      default:()=> {
        return{
          "fieldCode" : "", 
          "fieldValue": "",
          "fieldWidth":"xs12 md4",
          "fieldColor":"",
          "dataClass":"",
          "dataStyle":"",
          "label" : "",
          "labelPosition" : "",
          "append-icon":"",
          "prepend-icon":"",  
          "defaultValue" : "",  
          "brickType" : "TEXTINPUT",
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
  mounted(){
    console.log(this.brickJSON,"JSON")
  }
}