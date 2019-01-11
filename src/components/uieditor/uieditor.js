import toolbar from "../tools/toolbar.vue"
export default {
  render(createElement){
    console.log(createElement,"createElement")
    return createElement(toolbar,{
      ref:'mytoolbar'
    })
  }

}