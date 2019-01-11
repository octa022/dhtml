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
    <v-list>
      <v-list-group
        prepend-icon="home"
        no-action
      >
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>Ejemplos</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/example1">
          <v-list-tile-content>
            <v-list-tile-title>1</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list>

    <v-list-tile @click.prevent="$emit('editPanel')">
      <v-list-tile-action>
          <v-icon>create</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
            <v-list-tile-title>
              Editar
            </v-list-tile-title>
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>