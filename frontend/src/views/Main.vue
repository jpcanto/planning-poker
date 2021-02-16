<template>
  <v-app>
    <v-container v-if="!entered">
      <v-form ref="form" @submit="updateUsername">
        <v-text-field
          v-model="userName"
          label="Apelido"
          required
        ></v-text-field>

        <v-btn color="success" class="mr-4" @click="updateUsername">
          Submit
        </v-btn>
      </v-form>
    </v-container>

    <v-container v-else class="grey lighten-5">
      <v-row>
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          sm="3"
          @click="updateVote(card.size)"
        >
          <v-card class="mx-auto" max-width="200">
            <v-img contain height="300" :src="card.image"></v-img>

            <v-card-title>{{ card.title }}</v-card-title>

            <v-card-text>
              <div>{{ card.description }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { Cards } from "../data/cards";

export default {
  name: "App",
  data() {
    return {
      cards: Cards,
      entered: false,
      userName: "",
      pokers: [{}],
      poker: { name: null, vote: 0 },
    };
  },
  methods: {
    updateUsername() {
      if (this.userName !== "") {
        this.poker.name = this.userName;
        this.entered = true;
      }
    }
  }
};
</script>
