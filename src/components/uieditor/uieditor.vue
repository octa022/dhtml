<script>
import toolbar from "../tools/toolbar.vue"
export default {
  data(){
    return {
      comps:[
        {
          tag:"h1",
          options:{
            domProps: {
              innerHTML:'Hola pajudito'
            }
          }
        },
        {
          tag:toolbar,
          options:{
            ref:'mytoolbar'
          }
        }
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
    console.log(this,'this',this.$vuetify,'vuetify')
    this.comps.push(
    {
      tag:"h1",
      options:{
        class:'text-md-center',
        domProps: {
          innerHTML:'Que mira pajudito'
        }
      }
    })
  }
}
</script>