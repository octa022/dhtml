<template>
<v-container>
  <uieditor></uieditor>
   <v-btn
      v-if="$route.name === 'create'" @click.prevent="$emit('editPanel')"
      v-show="!hidden"
      color="pink"
      dark
      absolute
      bottom
      right
      fab
    >
      <v-icon>fa-edit</v-icon>
    </v-btn>
</v-container>
</template>
<script src="./container.js"></script>