<template>
  <div class="menu-list">
    <v-list-tile to="/">
      <v-list-tile-action>
        <!-- <router-link to="/"> -->
          <v-icon>fa-home</v-icon>
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
    <v-list-tile to="/about">
      <v-list-tile-action>
        <!-- <router-link to="/"> -->
          <v-icon>fa-door-open</v-icon>
        <!-- </router-link> -->
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          <!-- <router-link to="/"> -->
            <v-list-tile-title>
              Introducción
            </v-list-tile-title>
          <!-- </router-link>   -->
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile to="/create">
      <v-list-tile-action>
        <!-- <router-link to="/"> -->
          <v-icon>fa-plus</v-icon>
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
    <v-list>
      <v-list-group
        prepend-icon="fa-people-carry"
        no-action
      >
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>Ejemplos</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/example1">
          <v-list-tile-content>
            <v-list-tile-title>Insertar</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon>fa-plus-square</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile to="/example3">
          <v-list-tile-content>
            <v-list-tile-title>D&D</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon>fa-allergies</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile to="/example4">
          <v-list-tile-content>
            <v-list-tile-title>Add Simple</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon>fa-plus</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </div>
</template>