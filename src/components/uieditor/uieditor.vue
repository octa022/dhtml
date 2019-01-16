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
        // },
        // // {
        // //   tag:"h1",
        // //   options:{
        // //     domProps: {
        // //       innerHTML:'Hola pajudito'
        // //     }
        // //   }
        // // },
        // {
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
        // // {
        // //   tag:comp.VBtn,
        // //   options:{
        // //     props:{
        // //       color:'red darken-2',
        // //       small:true,
        // //       dark:true
        // //     }
        // //   },
        // //   children:[
        // //     {
        // //       tag:comp.VIcon,
        // //       options:{
        // //         domProps: {
        // //           innerHTML:'edit'
        // //         },  
        // //       }   
        // //     },
        // //     {
        // //       tag:'span',
        // //       options:{
        // //         domProps: {
        // //           innerHTML:'editar'
        // //         },  
        // //       }
        // //     }
        // //   ]
        // // },
        // {
        //   tag:layout,
        //   options:{
        //     ref:'layout'
        //   }
        // },
        // {
        //   tag:layout_sec2,
        //   options:{
        //     ref:'layout_sec2'
        //   }
        // },
        // {
        //   tag:layout_sec3,
        //   options:{
        //     ref:'layout_sec3'
        //   }
        // },
      ],
      mapComps:{}
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
      }),
      this.mapComps[elementkey] = this.comps.length - 1
    },
    removeElement(evt){
      console.log(evt,"delete",this.mapComps)
      this.comps.splice(this.mapComps[evt.idname],1)
      delete this.mapComps[evt.idname]
    }
  }
}
</script>