<template>
  <v-footer v-if="mode == 1" style="width: 100%; position: absolute; bottom: 0;" color="blue-grey" height="50px" class="block pa-3 white--text">
    <v-spacer></v-spacer>
     <div class="caption">ANALITICOM &copy; {{ new Date().getFullYear() }} | Team Mérida - Ccs <br> @conan4069 | @octa022 | @julian141094</div>
    <v-spacer></v-spacer>
    <v-btn icon class="trash" @click="deleteElement()"><v-icon>fa-trash-alt</v-icon></v-btn>
  </v-footer>
</template>
<script>
  export default {
    props:{
      idname:Number,
      mode:Number
    },
    methods:{
        deleteElement(){
          this.$parent.$parent.removeElement({
            keyname:this.idname
          })
        }
      }
  }
</script>
