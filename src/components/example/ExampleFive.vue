<template >
    <v-container grid-list-xs>
        <v-layout row wrap>
        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Nombre"
            v-model= name
            name
            solo
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Color"
            v-model= color
            color
            solo
          ></v-text-field>
        </v-flex>
        </v-layout>
        <v-tooltip top>
        <v-img slot="activator" :style="character" :src="person" height="50px" width="50px" contain></v-img>
      <span>{{name}}</span>
      
    </v-tooltip>
      
      <v-img id="enemy" :style="enemy" src="https://i.pinimg.com/originals/f0/c8/43/f0c84304e094dec729db296558e03ac9.png" height="50px" width="50px" contain></v-img>
        
    </v-container>
</template>
<script>
/*
tooltip
key down
move
clone
*/
export default {
  data() {
    return {
      name : 'Link',
      color : '',
      hex : '',
      X: 0,
      Y: 0,
      XE:0,
      YE:0,
      person: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/87/Link_pixel.png/revision/latest?cb=20130427125558"
    }
  },
    created: function () {
        window.addEventListener('keydown', this.move)
    },
  methods: {
        move:function(e){
          if(e.keyCode == 40){
              this.Y = this.Y + 10
          }
          else if(e.keyCode == 37){
              this.X = this.X - 10
          }
          else if(e.keyCode == 39){
              this.X = this.X + 10
          }
          else if(e.keyCode == 38){
              this.Y = this.Y - 10 
          }
          else if(e.keyCode == 32){
              this.X = this.X + 150
          }
          this.DeleteEnemy()
        },
        DeleteEnemy: function(){
          if(this.name != "success"){
            if(this.Y <= this.YE+50 && this.Y >= this.YE+20){
              if(this.X <= this.XE+60 && this.X >= this.XE-40){
                let elemento = document.getElementById("enemy")
                elemento.parentNode.removeChild(elemento);
                this.name="success"
              }
            }
          }
        },
        Random: function(){
            this.XE = Math.floor(Math.random() * 1200)
            this.YE = Math.floor(Math.random() * 500)
        }
        
  },
  computed: {
      character: function () {
            return this.hex+"transform:translate("+ this.X +"px,"+ this.Y +"px);"
        },
      enemy: function () {
            this.Random()
            return "transform:translate("+ this.XE  +"px,"+ this.YE +"px);"
        }
    },
  watch: {
    color: function (val) {
        if(val == "verde"){
            this.hex = "filter:hue-rotate(60deg) brightness(100%);"
        }
        else if(val == "azul"){
            this.hex = "filter:hue-rotate(150deg) brightness(100%);"
        }
        else if(val == "morado"){
            this.hex = "filter:hue-rotate(200deg) brightness(100%);"
        }
        else if(val == "rosa"){
            this.hex = "filter:hue-rotate(250deg) brightness(100%);"
        }
        else if(val == "rojo"){
            this.hex = "filter: hue-rotate(265deg) brightness(100%) contrast(500%);"
        }
        else{
            this.hex = "filter: hue-rotate(0deg) brightness(100%) contrast(100%);"
        }
    },
    name: function (val) {
        if(val == "Jesus"){
            this.person = "http://pixelartmaker.com/art/9be7d65e903fedc.png"
        }
        else if(val == "Samus"){
            this.person = "https://ya-webdesign.com/images/samus-pixel-art-png-4.png"
        }
        else if(val == "Mario"){
            this.person = "https://i0.wp.com/luiscavaco.com/wp-content/gallery/posts/cssmario.gif?resize=600%2C630"
        }
        else if(val == "Trump"){
            this.person = "https://pixeldotartdotblog.files.wordpress.com/2016/12/donaldtrump.png?w=924"
        }
        else{
            this.person = "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/87/Link_pixel.png/revision/latest?cb=20130427125558"
        }
    }
  }
}
</script>
<style scope>
.v-responsive.v-image{
    transition-duration: 1s;
}
</style>