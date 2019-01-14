<template>
<v-container fluid>
  <uieditor ref="ui"></uieditor>
  <v-navigation-drawer
      v-model="drawerRight"
      stateless
      right
      clipped
      hide-overlay
      app
      class="pa-2"
    >
      <toolspanel @createElement="addElement($event)"></toolspanel>
    </v-navigation-drawer>
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