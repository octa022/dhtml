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
</v-container>
</template>
<script src="./container.js"></script>