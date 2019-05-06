<template>
<v-flex :class="jformBRICK.fieldWidth" v-if="jformBRICK.visible">
  <v-text-field 
    v-if="jformBRICK.brickType.toUpperCase() == 'TEXTINPUT'"
    :append-icon="jformBRICK.append"
    :prepend-icon="jformBRICK.prepend"
    :prefix="jformBRICK.prefix"
    :suffix="jformBRICK.suffix"
    :id="jformBRICK.fieldCode"
    :class="jformBRICK.dataClass" 
    :color="jformBRICK.fieldColor"
    :style="jformBRICK.dataStyle"
    :name="jformBRICK.fieldCode"
    :error-messages="errors.collect(jformBRICK.fieldCode)"
    :label="jformBRICK.label"
    :data-vv-as="jformBRICK.label"
    :placeholder="jformBRICK.hint"
    :disabled="!jformBRICK.enabled"
    :value="jformBRICK.defaultValue"
    v-validate="jformBRICK.validationRule"
  ></v-text-field>
  <v-checkbox 
    v-if="jformBRICK.brickType.toUpperCase() == 'CHECKBOX'"
    :append-icon="jformBRICK.append"
    :prepend-icon="jformBRICK.prepend"
    :prefix="jformBRICK.prefix"
    :suffix="jformBRICK.suffix"
    :id="jformBRICK.fieldCode"
    :class="jformBRICK.dataClass" 
    :color="jformBRICK.fieldColor"
    :style="jformBRICK.dataStyle"
    :name="jformBRICK.fieldCode"
    :error-messages="errors.collect(jformBRICK.fieldCode)"
    :label="jformBRICK.label"
    :data-vv-as="jformBRICK.label"
    :placeholder="jformBRICK.hint"
    :disabled="!jformBRICK.enabled"
    :value="jformBRICK.defaultValue"
    v-validate="jformBRICK.validationRule"
  ></v-checkbox>
  <v-switch 
    v-if="jformBRICK.brickType.toUpperCase() == 'SWITCH'"
    :append-icon="jformBRICK.append"
    :prepend-icon="jformBRICK.prepend"
    :prefix="jformBRICK.prefix"
    :suffix="jformBRICK.suffix"
    :id="jformBRICK.fieldCode"
    :class="jformBRICK.dataClass" 
    :color="jformBRICK.fieldColor"
    :style="jformBRICK.dataStyle"
    :name="jformBRICK.fieldCode"
    :error-messages="errors.collect(jformBRICK.fieldCode)"
    :label="jformBRICK.label"
    :data-vv-as="jformBRICK.label"
    :placeholder="jformBRICK.hint"
    :disabled="!jformBRICK.enabled"
    :value="jformBRICK.defaultValue"
    v-validate="jformBRICK.validationRule"
  ></v-switch>
  
</v-flex>
</template>
<script src="./TextInputBrick.js"></script>