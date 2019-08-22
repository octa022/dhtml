<script>
/* eslint-disable */
import draggable from 'vuedraggable'

export default {
  data(){
    return {
      comps:[],
      elementkey:0
    }
  },
  render(createElement){
    return createElement(draggable,this.comps.map((val)=>{
        return createElement(val.tag, JSON.parse(JSON.stringify(val.options)),'')
    }))
  },
  methods:{
    addElement(evt){
        console.log("evt",evt)
      this.elementkey += 1 
      evt.options.key = this.elementkey
      evt.options.props.idname = this.elementkey
      this.comps.push({
        tag:evt.tag,
        options:evt.options
      })
    },
    removeElement(evt){
      let i = this.comps.findIndex(j => j.options.key === evt.keyname)
      this.comps.splice(i,1)
    }
  }
}
</script>