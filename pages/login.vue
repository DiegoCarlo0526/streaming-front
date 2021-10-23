<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <div
          class="text-h2 blue--text text--darken-4 transition-swing font-weight-medium d-flex d-sm-none"
          v-text="'Streaming Shop'"
        ></div>
        <div
          class="text-h1 blue--text text--darken-4 transition-swing font-weight-medium d-none d-sm-flex"
          v-text="'Streaming Shop'"
        ></div>
        <v-card class="elevation-12 mt-1" shaped color="blue lighten-5">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row wrap >
                <v-col cols="12" md="12">
                  <v-card-text
                    class="white--text mt-6 text-center"
                    style="height:70%"
                  >
                    <div
                      class="text-h4 transition-swing blue--text text--darken-3"
                      v-text="'¡Bienvenido!'"
                    />

                    <div
                      class="text-h6 transition-swing mb-4 font-weight-thin blue--text text--darken-2"
                      v-text="'Inicia sesión para empezar.'"
                    />
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-text-field
                        label="Usuario"
                        name="user"
                        :rules="[v => !!v || 'El usuario es requerido']"
                         color="blue darken-4"
                        filled
                        rounded
                        dense
                      ></v-text-field>
                      <v-text-field
                        :append-icon="viewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="viewPassword ? 'text' : 'password'"
                        :rules="[v => !!v || 'La contraseña es requerida']"
                        @click:append="viewPassword = !viewPassword"
                        label="Contraseña"
                        name="password"
                        color="blue darken-4"
                       
                        filled
                        rounded
                        dense
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-2">
                    <!-- <v-btn rounded color="primary" large class="mr-3" dark>
                      Registro
                    </v-btn> -->
                    <v-btn
                      @click="Login"
                      rounded
                      outlined
                      x-large
                      color="primary"
                      dark
                    >
                      Iniciar sesion
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="teal accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Welcome Back!</h1>
                    <h5 class="text-center">
                      To Keep connected with us please login with your personnel
                      info
                    </h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="step--">Sign in</v-btn>
                  </div>
                </v-col>

                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 teal--text text--accent-3">
                      Create Account
                    </h1>
                    <div class="text-center mt-4">
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-facebook-f</v-icon>
                      </v-btn>

                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-google-plus-g</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-linkedin-in</v-icon>
                      </v-btn>
                    </div>
                    <h4 class="text-center mt-4">
                      Ensure your email for registration
                    </h4>
                    <v-form>
                      <v-text-field
                        label="Name"
                        name="Name"
                        prepend-icon="person"
                        type="text"
                        color="teal accent-3"
                      />
                      <v-text-field
                        label="Email"
                        name="Email"
                        prepend-icon="email"
                        type="text"
                        color="teal accent-3"
                      />

                      <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="lock"
                        type="password"
                        color="teal accent-3"
                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-n5">
                    <v-btn rounded color="teal accent-3" dark>SIGN UP</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: "Login",
  data: () => ({
    valid: true,
    viewPassword: false
  }),
  methods: {
    Login() {
      if (this.$refs.form.validate()) console.log("next");
    }
  }
};
</script>
<style>
.theme--dark.v-text-field--filled > .v-input__control > .v-input__slot{
    background-color: #BBDEFB;
}
.theme--dark.v-label {
    color: #0D47A1;
}
</style>