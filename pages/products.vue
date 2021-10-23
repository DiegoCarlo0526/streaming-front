<template>
  <v-container>
    <v-row v-for="(Category, idx) in availableAccounts" :key="idx">
          <div
          id="overline"
          :class="[idx != 0?'mt-10':'','text-h5 blue--text text--darken-4 transition-swing ']"
          v-text="Category.name"
        ></div>
      <vs-card-group>
        <Card
          v-for="AC in Category.accounts"
          :key="AC"
          :image="AC.image"
          :name="AC.name"
          :price="AC.price"
        />
      </vs-card-group>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    availableAccounts: [
      {
        name: "Netlix",
        accounts: [
          {
            name: "Netflix 1",
            price: 1500000,
            image: "/netflix-icon.png"
          },
          {
            name: "Netflix 2",
            price: 15000,
            image: "/netflix-icon.png"
          },
          {
            name: "Netflix 3",
            price: 15000,
            image: "/netflix-icon.png"
          }
        ]
      },
      {
        name: "Amazon",
        accounts: [
          {
            name: "Amazon 1",
            price: 15000,
            image: "/amazon-icon.png"
          },
          {
            name: "Amazon 2",
            price: 15000,
            image: "/amazon-icon.png"
          },
          {
            name: "Amazon 3",
            price: 15000,
            image: "/amazon-icon.png"
          }
        ]
      },
      {
        name: "Plex",
        accounts: [
          {
            name: "Plex",
            price: 15000,
            image: "/plex-icon.png"
          },
          {
            name: "Plex",
            price: 15000,
            image: "/plex-icon.png"
          },
          {
            name: "Plex",
            price: 15000,
            image: "/plex-icon.png"
          }
        ]
      },
      {
        name: "Disney +",
        accounts: [
          {
            name: "disney",
            price: 15000,
            image: "/disney-icon.png"
          },
          {
            name: "disney",
            price: 15000,
            image: "/disney-icon.png"
          },
          {
            name: "disney",
            price: 15000,
            image: "/disney-icon.png"
          }
        ]
      },
      {
        name: "hbo",
        accounts: [
          {
            name: "hbo",
            price: 15000,
            image: "/hbo-icon.png"
          },
          {
            name: "hbo",
            price: 15000,
            image: "/hbo-icon.png"
          },
          {
            name: "hbo",
            price: 15000,
            image: "/hbo-icon.png"
          }
        ]
      },
      {
        name: "start",
        accounts: [
          {
            name: "start",
            price: 15000,
            image: "/start-icon.jpg"
          },
          {
            name: "disney",
            price: 15000,
            image: "/start-icon.jpg"
          },
          {
            name: "start",
            price: 15000,
            image: "/start-icon.jpg"
          }
        ]
      }
    ]
  })
};
</script>
<style>
#overline {
    margin-bottom: -10px !important;
    font-size: 2rem !important;
    font-weight: 100;
    line-height: 2rem;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
}
</style>