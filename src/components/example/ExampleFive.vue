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
      <v-img style="character" src="https://pixeldotartdotblog.files.wordpress.com/2016/12/donaldtrump.png?w=924" height="50px" width="50px" contain></v-img>
        
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
        },
        cloneEnemy: function(){return},
        createEnemy: function(){return}

  },
  computed: {
      character: function () {
            return this.hex+"transform:translate("+ this.X +"px,"+ this.Y +"px);"
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
    }
  }
}
</script>
<style scope>
.v-responsive.v-image{
    transition-duration: 1s;
}
</style>

