<script>
import toolbar from "../tools/Toolbar.vue"
import footer from "../tools/Footer.vue"
import componentsm from '../tools/ComponentSm';
import row from "../tools/Row.vue"
import * as comp from 'vuetify/lib/components'

export default {
  data(){
    return {
      comps:[
        // {
        //   tag:"h1",
        //   options:{
        //     domProps: {
        //       innerHTML:'Hola pajudito'
        //     }
        //   }
        // },
        {
          tag:footer,
          options:{
            ref:'myfooter'
          }
        },
        {
          tag:toolbar,
          options:{
            ref:'mytoolbar'
          }
        },
        {
          tag:"h1",
          options:{
            domProps: {
              innerHTML:'Hola SINIORES'
            }
          }
        },
        {
          tag:comp.VBtn,
          options:{
            props:{
              color:'red darken-2',
              small:true,
              dark:true
            }
          },
          children:[
            {
              tag:comp.VIcon,
              options:{
                domProps: {
                  innerHTML:'edit'
                },  
              }   
            },
            {
              tag:'span',
              options:{
                domProps: {
                  innerHTML:'editar'
                },  
              }
            }
          ]
        },
        {
          tag: componentsm,
          options:{
            ref:'mycomponentsm'
          }
        },
        {
          tag: row,
          options:{
            ref:'myrow'
          }
        },
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
  mounted(){
  
  }
}
</script>