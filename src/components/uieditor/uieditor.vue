<script>
/* eslint-disable */
import toolbar from "../tools/Toolbar.vue"
import subtoolbar from "../tools/SubToolbar.vue"
import layout from "../layout/Layout.vue"
import footer from "../tools/Footer.vue"
// Asi se importan las marcas de Vuetify
import * as comp from 'vuetify/lib/components'

let listComponents = {
  "layout":[layout,0],
  "toolbar":[toolbar,0],
  "subtoolbar":[subtoolbar,0],
  "footer":[footer,0]
}

export default {
  data(){
    this.$listenners
    return {
      comps:[
        // {
        //   tag: comp.VBtn,
        //   options:{
        //     directives:{
        //       value:"prueba"
        //     },
        //     on:{
        //       click: function(event){
        //         console.log('click')
        //       }
        //     }
        //   }
        // }
      ]
    }
  },
  render(createElement){
    var addchildrens = (children) => {
      return children.map((node) => {
        return createElement(node.tag,
          JSON.parse(JSON.stringify(node.options)),
          node.children != undefined ? addchildrens(node.children):''
        )
      })
    }
    return createElement('div',this.comps.map((val)=>{ 
      return createElement(val.tag, JSON.parse(JSON.stringify(val.options)),
        val.children != undefined ? addchildrens(val.children):''
      )
    }))
  },
  methods:{
    addElement(evt){
      listComponents[evt.tag][1] += 1
      let elementkey = `${evt.tag}_${listComponents[evt.tag][1]}` 

      this.comps.push({
        tag:listComponents[evt.tag][0],
        options:{
          props:{
            idname: elementkey,
            mode: evt.number
          },
          key: elementkey
        },
      })
    },
    removeElement(evt){
      let i = this.comps.findIndex(j => j.options.key == evt.idname)
      this.comps.splice(i,1)
    }
  }
}
</script>