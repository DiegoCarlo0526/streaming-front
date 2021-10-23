<template>
  <v-app >
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <nav>
      <v-navigation-drawer
        dark
        app
        
        color="blue acent-4"
        v-model="drawer"
        :clipped="true"
        fixed
      >
        <div class="text-center mt-5">
          <v-btn fab color="white" x-large>
            <v-icon color="blue darken-4">fab fa-asymmetrik</v-icon>
          </v-btn>


          <!-- <v-app-bar color="white" class="mx-auto mt-1" tile shaped elevation="12" width="75%">
            <strong class="subtitle black--text ml-2">
              Diego Carlo <span class="caption"><br />$ 80,000</span>
            </strong>
            <v-spacer></v-spacer>
            <v-icon color="grey" class="ml-2"
              >fas fa-chevron-circle-right</v-icon
            >
          </v-app-bar> -->
          <div>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-overline" v-text="'Diego Carlo'"></v-list-item-title>
                <v-list-item-title class="text--disabled text-overline" v-text="'$ 40,000'"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>

        <v-list flat class="mt-5">
          <v-list-item-group v-model="selectedItem" color="black">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              active-class="border"
              class="ml-2 my-3"
              :ripple="false"
              :to="item.to"
            >
              <b></b>
              <b></b>
              <v-list-item-icon class="mr-1">
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div
          style="position: absolute; bottom: 20px;
        margin-left: auto; margin-right: auto; left:0; right: 0; text-align: center;"
        >
          <v-btn text>
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-btn>
        </div>
      </v-navigation-drawer>
    </nav>

    <v-app-bar color="blue darken-4" flat :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" class="white--text" />
      <v-spacer />
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->

      <v-spacer></v-spacer>
      <v-btn icon dark class="">
        <v-icon color="black">far fa-bell</v-icon>
      </v-btn>

      <span text color="#878A94">-</span>
      <v-avatar size="30" class="ml-2">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
      </v-avatar>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Streamin Shop",
      selectedItem: 0,
      drawer: null,
      items: [
        { icon: "fas fa-home", text: "Inicio", to: "/" },
        { icon: "fab fa-amazon", text: "Productos", to: "/products" },
        { icon: "fas fa-aamzon", text: "Inspire", to: "/inspire" },
        { icon: "far fa-user-circle", text: "Cuenta", to: "/account" }
      ]
    };
  }
};
</script>
<style>
.border {
  background: #fff;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  text-decoration: none;
}
.border b:nth-child(1) {
  position: absolute;
  top: -20px;
  height: 20px;
  width: 94%;
  background: #fff;

  display: none;
}
.border b:nth-child(1)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 20px;
  background: #2196F3;
}
.border b:nth-child(2) {
  position: absolute;
  bottom: -20px;
  height: 20px;
  width: 94%;
  background: #fff;
  display: none;
}
.border b:nth-child(2)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top-right-radius: 20px;
  background: #2196F3;
}
.border b:nth-child(1),
.border b:nth-child(2) {
  display: block;
}
</style>
