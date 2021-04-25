<template>
  <v-app>
    <v-app-bar color="indigo" dark fixed app>
      <v-app-bar-title> Memes Factory </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-layout>
          <router-view/>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
