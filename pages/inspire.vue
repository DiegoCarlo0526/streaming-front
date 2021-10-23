<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
      <v-app-bar  color="rgba(0,0,0,0)" tile>
              <v-btn tile fab small color="orange lighten-4" elevation="0">
                <v-icon color="black">fas fa-book</v-icon>
              </v-btn>
              <strong class="subtitle black--text ml-2">
                Articles Posted <span class="caption"><br>80</span>
              </strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" class="ml-2">fas fa-chevron-circle-right</v-icon>
            </v-app-bar>
  </v-row>
</template>
