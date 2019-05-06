<script>
/* eslint-disable */
import toolbar from "../tools/Toolbar.vue"
import subtoolbar from "../tools/SubToolbar.vue"
import layout from "../layout/Layout.vue"
import footer from "../tools/Footer.vue"
import formfields from "../inputs/TextInputBrick.vue"
// Asi se importan las marcas de Vuetify
import * as comp from 'vuetify/lib/components'
import draggable from 'vuedraggable'

let listComponents = {
  "layout":[layout,0],
  "toolbar":[toolbar,0],
  "subtoolbar":[subtoolbar,0],
  "footer":[footer,0],
  "formfields":[formfields,0]
}

export default {
  data(){
    return {
      comps:[
        {
          tag: formfields,
          options:{
            props:{
              brickJSON:{
                "fieldCode" : "field1", 
                "fieldValue": "",
                "fieldWidth":"xs12 md4",
                "fieldColor":"blue-grey",
                "dataClass":"",
                "dataStyle":"",
                "label" : "Chavista sin sentido",
                "labelPosition" : "",
                "append":"",
                "prepend":"fa-tasks",  
                "defaultValue" : "",  
                "brickType" : "checkbox",
                "visible" : true,
                "prefix":"das",
                "suffix":"",
                "enabled" : true,
                "validationRule" : {
                  required:true
                },
                "hint" : ""
              },
            },
            key:"brickprueba"
          }
        },
        {
          tag: formfields,
          options:{
            props:{
              brickJSON:{
                "fieldCode" : "field2", 
                "fieldValue": "",
                "fieldWidth":"xs12 md6",
                "fieldColor":"green",
                "dataClass":"",
                "dataStyle":"",
                "label" : "Prueba",
                "labelPosition" : "",
                "append-icon":"",
                "prepend-icon":"",  
                "defaultValue" : "",  
                "brickType" : "TEXTINPUT",
                "visible" : true,
                "prefix":"Brick",
                "suffix":"a llegado",
                "enabled" : true,
                "validationRule" : {
                  required:true
                },
                "hint" : ""
              },
            },
            key:"brickprueba2"
          }
        },
        //{
        //   tag:footer,
        //   options:{
        //     ref:'myfooter'
        //   }
        // },
        // {
        //   tag:toolbar,
        //   options:{
        //     ref:'mytoolbar'
        //   }
        // },
        // {
        //   tag:subtoolbar,
        //   options:{
        //     ref:'mysubtoolbar'
        //   }
        // },
        // // Asi se crea contenido con las etiquetas de Vuetify
        // {
        //   tag:'div',
        //   options:{
        //     style:{
        //       border:'1px solid red'
        //     },
        //     key:'layout_1'
        //   }
        // },
        // {
        //   tag:'div',
        //   options:{
        //     style:{
        //       margin:"2px",
        //       border:'1px solid red'
        //     },
        //     key:'layout_2'
        //   },
        //   parent:'layout_1'
        // },
        // {
        //   tag:'div',
        //   options:{
        //     style:{
        //       margin:"2px",
        //       border:'1px solid red'
        //     },
        //     key:'layout_3'
        //   },
        //   parent:'layout_2'
        // },
        // {
        //   tag:'div',
        //   options:{
        //     style:{
        //       margin:"2px",
        //       border:'1px solid red'
        //     },
        //     key:'layout_4'
        //   },
        //   parent:'layout_3'
        // },
        // {
        //   tag:'div',
        //   options:{
        //     style:{
        //       margin:"2px",
        //       border:'1px solid red'
        //     },
        //     key:'layout_5'
        //   },
        //   parent:'layout_3'
        // },
        // {
        //   tag:'div',
        //   options:{
        //     style:{
        //       margin:"2px",
        //       border:'1px solid red'
        //     },
        //     key:'layout_6'
        //   },
        //   parent:'layout_3'
        // }
      ]
    }
  },
  render(createElement){
    var addchildrens = (children) => {
      return children.map((node) => {
        let childrens = this.comps.filter(i => i.parent === node.options.key) 
        return createElement(node.tag,
          JSON.parse(JSON.stringify(node.options)),
          childrens.length > 0 ? addchildrens(childrens):''
        )
      })
    }
    return createElement(draggable,this.comps.map((val)=>{
      if(val.parent == undefined || val.parent == ""){
        let childrens = this.comps.filter(i => i.parent === val.options.key)
        return createElement(val.tag, JSON.parse(JSON.stringify(val.options)),
          childrens.length > 0 ? addchildrens(childrens):''
        )
      }
    }))
  },
  methods:{
    addElement(evt){
      // let listComponents = {
      //   "layout":[layout,0],
      //   "toolbar":[toolbar,0],
      //   "subtoolbar":[subtoolbar,0],
      //   "footer":[footer,0]
      // }
      listComponents[evt.tag][1] += 1
      //evt.tag+'_'+listComponents[evt.tag][1]
      //example layout_1
      let elementkey = `${evt.tag}_${listComponents[evt.tag][1]}` 
      let instanceVue = listComponents[evt.tag][0]
      //console.log("key",elementkey)
      evt.options.key = elementkey
      evt.options.props.idname = elementkey
      this.comps.push({
        tag:instanceVue,
        options:evt.options,
        parent: evt.parent === undefined ? "" : evt.parent
      })
    },
    removeElement(evt){
      let i = this.comps.findIndex(j => j.options.key === evt.keyname)
      this.comps.splice(i,1)
    }
  }
}
</script>