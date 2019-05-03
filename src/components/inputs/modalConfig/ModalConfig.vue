<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <v-form>
          <v-layout row wrap>
            <v-flex lg4 md6 xs12 pr-4>
              <v-text-field
                v-model="brickJSON.fieldCode"
                name="fieldCode"
                :error-messages="errors.collect('fieldCode')"
                label="fieldCode"
                class
                data-vv-as="fieldCode"
                v-validate="'required'"
                key="fieldCode-input"
              ></v-text-field>
            </v-flex>
            <v-flex lg4 md6 xs12 pr-4>
              <v-text-field
                v-model="brickJSON.fieldValue"
                name="fieldValue"
                :error-messages="errors.collect('fieldValue')"
                label="fieldValue"
                class
                data-vv-as="fieldValue"
                v-validate="'required'"
                key="fieldValue-input"
              ></v-text-field>
            </v-flex>
            <v-flex lg4 md6 xs12 pr-4>
              <v-select
                :items="widths"
                v-model="brickJSON.fieldWidth"
                label="fieldWidth"
                data-vv-as="fieldWidth"
                key="fieldWidth-input"
                name="fieldWidth"
                :error-messages="errors.collect('fieldWidth')"
                v-validate="'required'"
                multiple
                solo
              ></v-select>
              <!-- @change="validateChangeSelect(1)" -->
            </v-flex>
            <v-flex lg4 md6 xs12 pr-4>
              <chrome-picker disableAlpha v-model="brickJSON.fieldColor"></chrome-picker>
            </v-flex>
            <v-flex lg4 md6 xs12 pr-4>
              <v-text-field
                v-model="brickJSON.dataClass"
                name="dataClass"
                :error-messages="errors.collect('dataClass')"
                label="dataClass"
                class
                data-vv-as="dataClass"
                v-validate="'required'"
                key="dataClass-input"
              ></v-text-field>
            </v-flex>
            <v-flex lg4 md6 xs12 pr-4>
              <v-text-field
                v-model="brickJSON.dataStyle"
                name="dataStyle"
                :error-messages="errors.collect('dataStyle')"
                label="dataStyle"
                class
                data-vv-as="dataStyle"
                v-validate="'required'"
                key="dataStyle-input"
              ></v-text-field>
            </v-flex>
            <v-flex lg4 md6 xs12 pr-4>
              <v-text-field
                v-model="brickJSON.label"
                name="label"
                :error-messages="errors.collect('label')"
                label="Label"
                class
                data-vv-as="Label"
                v-validate="'required'"
                key="label-input"
              ></v-text-field>
            </v-flex>
            <v-flex lg4 md6 xs12 pr-4>
              <v-select
                :items="labelPosition"
                v-model="brickJSON.labelPosition"
                label="labelPosition"
                data-vv-as="labelPosition"
                key="labelPosition-input"
                name="labelPosition"
                :error-messages="errors.collect('labelPosition')"
                v-validate="'required'"
              ></v-select>
              <!-- @change="validateChangeSelect(1)" -->
            </v-flex>
            <v-flex lg4 md6 xs12 pr-4>
              {{prepend}}>
              <v-select
                :items="append"
                v-model="brickJSON.append"
                label="append"
                data-vv-as="append"
                key="append-input"
                name="append"
                :error-messages="errors.collect('append')"
                v-validate="'required'"
              >
                <template v-slot:selection="data">
                  <template v-if="typeof data.item.name !== 'object'">
                    <v-list-tile-content v-text="data.item"></v-list-tile-content>
                  </template>
                  <template v-else>
                    <!-- <v-list-tile-avatar>
                      <img :src="data.item.avatar">
                    </v-list-tile-avatar>-->

                    <v-icon>{{data.item.icon}}</v-icon>
                    <v-list-tile-content>
                      <!-- <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                      <v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>-->
                    </v-list-tile-content>
                  </template>
                </template>
              </v-select>
              <!-- @change="validateChangeSelect(1)" -->
            </v-flex>
            <!-- <v-flex lg4 md6 xs12 pr-4>
              <v-select
                :items="prepend"
                v-model="brickJSON.prepend"
                label="prepend"
                data-vv-as="prepend"
                key="prepend-input"
                name="prepend"
                :error-messages="errors.collect('prepend')"
                v-validate="'required'"
            ></v-select>-->
            <!-- @change="validateChangeSelect(1)" -->
            <!-- </v-flex> -->
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script src="./ModalConfig.js"></script>

