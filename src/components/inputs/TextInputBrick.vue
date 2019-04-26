<template>
<v-flex :class="brickJSON.fieldWidth" v-if="brickJSON.visible">
  <v-text-field 
    v-if="brickJSON.brickType == 'TEXTINPUT'"
    :append-icon="brickJSON.append"
    :prepend-icon="brickJSON.prepend"
    :prefix="brickJSON.prefix"
    :suffix="brickJSON.suffix"
    :id="brickJSON.fieldCode"
    :class="brickJSON.dataClass" 
    :color="brickJSON.color"
    :style="brickJSON.dataStyle"
    :name="brickJSON.fieldCode"
    :error-messages="errors.collect(brickJSON.fieldCode)"
    :label="brickJSON.label"
    :data-vv-as="brickJSON.label"
    :placeholder="brickJSON.hint"
    :disabled="!brickJSON.enabled"
    :value="brickJSON.defaultValue"
    v-validate="brickJSON.validationRule"
  ></v-text-field>
</v-flex>
</template>
<script src="./TextInputBrick.js"></script>