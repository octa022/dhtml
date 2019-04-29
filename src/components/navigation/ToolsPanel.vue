<template>
  <v-layout row wrap class="text-xs-center">
    <v-flex xs12>
      <h3 class="text-sm-center text-uppercase">Panel de Herramientas</h3>
    </v-flex>
    <v-flex pt-3 xs12>
      <h4 class="text-sm-center">
        <u>Toolbars</u>
      </h4>
    </v-flex>
    <v-flex xs12 sm6>
      <!-- Cada boton emite el componente que desea crear -->
      <v-btn class="sec2" @click="createToolBar(1)">
        <v-icon>fab fa-windows</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs12 sm6>
      <!-- Cada boton emite el componente que desea crear -->
      <v-btn class="sec2" @click="createSubToolBar(1)">
        <v-icon>fab fa-windows</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs12 pt-3>
      <h4 class="text-sm-center">
        <u>Layout</u>
      </h4>
    </v-flex>
    <v-flex xs12 sm6>
      <v-btn class="sec3" @click="createRow(2)">
        <div v-for="item in 2" :key="item">
          <div v-for="item in 2" :key="item"></div>
        </div>
      </v-btn>
    </v-flex>
    <v-flex xs12 sm6 @click="createRow(3)">
      <v-btn class="sec10">
        <div v-for="item in 2" :key="item">
          <div v-for="item in 2" :key="item"></div>
        </div>
      </v-btn>
    </v-flex>
    <v-flex xs12 sm6 @click="createRow(1)">
      <v-btn class="sec13"></v-btn>
    </v-flex>
    <v-flex pt-3 xs12>
      <h4 class="text-sm-center">
        <u>Footer</u>
      </h4>
    </v-flex>
    <v-flex xs12 sm6 @click="createFooter(1)">
      <v-btn class="sec13"></v-btn>
    </v-flex>
    <v-flex pt-3 xs12>
      <h4 class="text-sm-center">
        <u>Inputs</u>
      </h4>
    </v-flex>
    <v-flex xs12 sm6 @click="createFooter(1)">
      <v-btn class="sec13"></v-btn>
      <v-dialog v-model="dialog" persistent max-width="290">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">Use Google's location service?</v-card-title>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click="dialog = false">Disagree</v-btn>
            <v-btn color="green darken-1" flat @click="dialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  // {
  //   props:{
  //     idname: elementkey,
  //     mode: evt.number
  //   },
  //   key: elementkey
  // }
  methods: {
    createRow(number) {
      this.$emit("createElement", {
        tag: "layout",
        options: {
          props: {
            mode: number
          }
        }
      });
    },
    createToolBar(number) {
      this.$emit("createElement", {
        tag: "toolbar",
        options: {
          props: {
            mode: number
          }
        }
      });
    },
    createSubToolBar(number) {
      this.$emit("createElement", {
        tag: "subtoolbar",
        options: {
          props: {
            mode: number
          }
        }
      });
    },
    createFooter(number) {
      this.$emit("createElement", {
        tag: "footer",
        options: {
          props: {
            mode: number
          }
        }
      });
    }
  }
};
</script>