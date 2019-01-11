<template>
  <div class="menu-list">
    <v-list-tile to="/">
      <v-list-tile-action>
        <!-- <router-link to="/"> -->
          <v-icon>home</v-icon>
        <!-- </router-link> -->
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          <!-- <router-link to="/"> -->
            <v-list-tile-title>
              Home
            </v-list-tile-title>
          <!-- </router-link>   -->
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile to="/create">
      <v-list-tile-action>
        <!-- <router-link to="/"> -->
          <v-icon>add</v-icon>
        <!-- </router-link> -->
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          <!-- <router-link to="/"> -->
            <v-list-tile-title>
              Editor
            </v-list-tile-title>
          <!-- </router-link>   -->
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>