<template>
  <v-layout row wrap class="text-xs-center tools-panel">
    <v-flex xs12>
      <h3 class="text-sm-center text-uppercase">Panel de Herramientas</h3>
    </v-flex>
    <!-- <v-flex pt-3 xs12>
    <h4 class="text-sm-center"><u>Toolbars</u></h4>
  </v-flex>
  <v-flex xs12 sm6>
    <v-btn class="sec2" @click="createToolBar(1)">
      <v-icon>fab fa-windows</v-icon>
    </v-btn>
  </v-flex>
  <v-flex xs12 sm6>
    <v-btn class="sec2" @click="createSubToolBar(1)">
      <v-icon>fab fa-windows</v-icon>
    </v-btn>
  </v-flex>
  <v-flex xs12 pt-3>
    <h4 class="text-sm-center"><u>Layout</u></h4>
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
    <h4 class="text-sm-center"><u>Footer</u></h4>
  </v-flex>
  <v-flex xs12 sm6 @click="createFooter(1)">
    <v-btn class="sec13"></v-btn>
    </v-flex>-->

    <v-flex pt-3 xs12>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header" class="font-weight-medium text-uppercase">Toolbars</div>
          <v-flex xs12 sm6>
            <!-- Cada boton emite el componente que desea crear -->
            <v-btn class="sec2" @click="createToolBar(1)">
              <v-icon>fab fa-windows</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm6>
            <!-- Cada boton emite el componente que desea crear -->
            <v-btn class="sec2" @click="createSubToolBar(1)">
              <!-- <v-icon>fab fa-windows</v-icon> -->
            </v-btn>
          </v-flex>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
    <v-flex pt-3 xs12>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header" class="font-weight-medium text-uppercase">Layout</div>
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
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
    <v-flex pt-3 xs12>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header" class="font-weight-medium text-uppercase">Footer</div>
          <v-flex xs12 sm6 @click="createFooter(1)">
            <v-btn class="sec13"></v-btn>
          </v-flex>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
    <v-flex pt-3 xs12>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header" class="font-weight-medium text-uppercase">Inputs</div>
          <v-flex xs12 sm6>
            <v-btn class="sec13" @click.prevent="dialogConfig=true"></v-btn>
            <v-dialog v-model="dialogConfig" persistent max-width="99%">
              <v-card>
                <v-card-title class="headline">Ingrese la configuracion del Input</v-card-title>
                <modalConf ref="modalConf"/>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" flat @click="dialogConfig = false">Disagree</v-btn>
                  <v-btn color="green darken-1" flat @click="dialogConfig = false">Agree</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>
<script>
import modalConf from "../inputs/modalConfig/ModalConfig.vue";
export default {
  // {
  //   props:{
  //     idname: elementkey,
  //     mode: evt.number
  //   },
  //   key: elementkey
  // }
  components: {
    modalConf: modalConf
  },
  data() {
    return {
      dialogConfig: false
    };
  },
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

<style>
.tools-panel .v-expansion-panel__body {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
}
</style>
>>>>>>> origin/master
