<template>
  <v-layout row wrap class="text-xs-center tools-panel">
    <v-flex xs12 py-2>
      <h3 class="text-sm-center text-uppercase">Panel de Herramientas</h3>
    </v-flex>
    <v-flex xs12>
      <v-tabs v-model="tabs" color="transparent">
        <v-toolbar tabs>
          <v-layout row wrap pb-3>
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#tab-elements">
              <v-icon>fa-th-large</v-icon>
            </v-tab>
            <v-tab href="#tab-links" class="primary--text">
              <v-icon>fa-external-link-alt</v-icon>
            </v-tab>
            <v-tab href="#tab-config" class="primary--text">
              <v-icon>fa-cogs</v-icon>
            </v-tab>
          </v-layout>
        </v-toolbar>
        <v-tabs-items>
          <v-tab-item value="tab-elements" key="1">
            <v-layout row wrap>
              <v-flex pt-3 xs12>
                <v-expansion-panel>
                  <v-expansion-panel-content>
                    <div slot="header" class="font-weight-medium text-uppercase">Toolbars</div>
                    <v-flex xs12 sm6>
                      <v-btn class="sec2" @click="createToolBar(1)">
                        <v-icon>fab fa-windows</v-icon>
                      </v-btn>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-btn class="sec2" @click="createSubToolBar(1)"></v-btn>
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
                            <v-btn
                              color="green darken-1"
                              flat
                              @click="dialogConfig = false"
                            >Disagree</v-btn>
                            <v-btn
                              color="green darken-1"
                              flat
                              @click="createField($refs.modalConf.getBrickJson())"
                            >Agree</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-flex>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-flex>
              <v-flex pt-3 xs12>
                <v-expansion-panel>
                  <v-expansion-panel-content>
                    <div slot="header" class="font-weight-medium text-uppercase">PreFabricate</div>
                    <v-flex xs12 sm6 @click="createFooter(1)">
                      <v-btn class="sec13"></v-btn>
                    </v-flex>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-flex>
            </v-layout>
          </v-tab-item>
          <v-tab-item value="tab-links" key="2">
            <v-card>
              <v-card-text>En Construccion!!!</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-config" key="3">
            <v-card>
              <v-card-text>En Construccion...</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
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
    },
    createField(jsonValues) {
      console.log("createField", jsonValues);
      this.$emit("createElement", {
        tag: "formfields",
        options: {
          props: {
            brickJSON: jsonValues
          }
        }
      });
      this.dialogConfig = false;
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