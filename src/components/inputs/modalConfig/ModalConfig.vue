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
            <v-flex lg2 md6 xs12 pr-4>
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
            <v-flex lg2 md6 xs12 pr-4>
              <v-select
                :items="brickType"
                v-model="brickJSON.brickType"
                label="brickType"
                data-vv-as="brickType"
                key="brickType-input"
                name="brickType"
                :error-messages="errors.collect('brickType')"
                v-validate="'required'"
              ></v-select>
              <!-- @change="validateChangeSelect(1)" -->
            </v-flex>
            <v-flex lg2 md3 xs12 pr-4>
              <v-select
                :items="append"
                v-model="brickJSON.append"
                label="append"
                data-vv-as="append"
                key="append-input"
                name="append"
                :error-messages="errors.collect('append')"
                v-validate
                item-text="name"
                item-value="name"
              >
                <template slot="selection" slot-scope="append">
                  <v-flex px-2 xs12>
                    <v-icon v-text="append.item.icon"></v-icon>
                    <span style="padding-left: 5px;">{{ append.item.name }}</span>
                  </v-flex>
                </template>
                <template slot="item" slot-scope="append">
                  <v-flex px-2 xs12>
                    <v-icon v-text="append.item.icon"></v-icon>
                    <span style="padding-left: 5px;">{{ append.item.name }}</span>
                  </v-flex>
                </template>
              </v-select>
              <!-- @change="validateChangeSelect(1)" -->
            </v-flex>
            <v-flex lg2 md3 xs12 pr-4>
              <v-select
                :items="prepend"
                v-model="brickJSON.prepend"
                label="prepend"
                data-vv-as="prepend"
                key="prepend-input"
                name="prepend"
                :error-messages="errors.collect('prepend')"
                v-validate
                item-text="name"
                item-value="name"
              >
                <template slot="selection" slot-scope="prepend">
                  <v-flex px-2 xs12>
                    <v-icon v-text="prepend.item.icon"></v-icon>
                    <span style="padding-left: 5px;">{{ prepend.item.name }}</span>
                  </v-flex>
                </template>
                <template slot="item" slot-scope="prepend">
                  <v-flex px-2 xs12>
                    <v-icon v-text="prepend.item.icon"></v-icon>
                    <span style="padding-left: 5px;">{{ prepend.item.name }}</span>
                  </v-flex>
                </template>
              </v-select>
              <!-- @change="validateChangeSelect(1)" -->
            </v-flex>
            <v-flex lg4 md6 xs12 pr-4>
              <v-text-field
                v-model="brickJSON.defaultValue"
                name="defaultValue"
                :error-messages="errors.collect('defaultValue')"
                label="defaultValue"
                class
                data-vv-as="defaultValue"
                v-validate="'required'"
                key="defaultValue-input"
              ></v-text-field>
            </v-flex>
            <v-flex lg2 md6 xs12 pr-4>
              <v-switch
                v-model="brickJSON.visible"
                :label="`Visible: ${brickJSON.visible.toString()}`"
              ></v-switch>
            </v-flex>
            <v-flex lg2 md6 xs12 pr-4>
              <v-switch
                v-model="brickJSON.enabled"
                :label="`Enabled: ${brickJSON.enabled.toString()}`"
              ></v-switch>
            </v-flex>
            <v-flex lg4 md6 xs12 pr-4>
              <v-text-field
                v-model="brickJSON.prefix"
                name="prefix"
                :error-messages="errors.collect('prefix')"
                label="prefix"
                class
                data-vv-as="prefix"
                v-validate="'required'"
                key="prefix-input"
              ></v-text-field>
            </v-flex>
            <v-flex lg4 md6 xs12 pr-4>
              <v-text-field
                v-model="brickJSON.suffix"
                name="suffix"
                :error-messages="errors.collect('suffix')"
                label="suffix"
                class
                data-vv-as="suffix"
                v-validate="'required'"
                key="suffix-input"
              ></v-text-field>
            </v-flex>
            <v-flex lg4 md6 xs12 pr-4>
              <v-text-field
                v-model="brickJSON.hint"
                name="hint"
                :error-messages="errors.collect('hint')"
                label="hint"
                class
                data-vv-as="hint"
                v-validate="'required'"
                key="hint-input"
              ></v-text-field>
            </v-flex>
            <v-flex lg12 md6 xs12 pr-4>
              <chrome-picker disableAlpha v-model="brickJSON.fieldColor"></chrome-picker>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script src="./ModalConfig.js"></script>

