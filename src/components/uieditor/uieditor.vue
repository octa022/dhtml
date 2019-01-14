<script>
/* eslint-disable */
// import toolbar from "../tools/Toolbar.vue"
// import subtoolbar from "../tools/SubToolbar.vue"
import layout from "../layout/Layout.vue"
// import layout_sec2 from "../layout/LayoutSec2.vue"
// import layout_sec3 from "../layout/LayoutSec3.vue"
// import layout_sec10 from '../layout/LayoutSec10.vue'
// import layout_sec13 from '../layout/LayoutSec13.vue'
//import footer from "../tools/Footer.vue"
// Asi se importan las marcas de Vuetify
// import * as comp from 'vuetify/lib/components'

export default {
  data(){
    return {
      comps:[
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
        // {
        //   tag: layout_sec10,
        //   options:{
        //     ref:'layout_sec10'
        //   }
        // },
        // {
        //   tag: layout_sec13,
        //   options:{
        //     ref:'layout_sec13'
        //   }
        // },
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
      this.comps.push({
        tag:layout,
        options:{
          props:{
            mode: evt.number
          }
        },
      })
    }
  },
  mounted(){
  
  }
}
</script>