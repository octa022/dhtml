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
                :items="items"
                v-model="brickJSON.fieldWidth"
                label="Tamaño"
                data-vv-as="Tamaño"
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
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script src="./ModalConfig.js"></script>

