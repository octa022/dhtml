<script>
import toolbar from "../tools/toolbar.vue"
import footer from "../tools/footer.vue"
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
      ]
    }
  },
  render(createElement){
    return createElement('div',this.comps.map(function(val){
      return createElement(val.tag, JSON.parse(JSON.stringify(val.options)))
    }))
  },
  mounted(){
    this.$createElement('h4',"desde la instancia")
    // console.log(this,'this',this.$vuetify,'vuetify')
    // this.comps.push(
    // {
    //   tag:"h1",
    //   options:{
    //     class:'text-md-center',
    //     domProps: {
    //       innerHTML:'Que mira pajudito'
    //     }
    //   }
    // })
  }
}
</script>