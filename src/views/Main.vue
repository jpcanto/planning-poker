<template>
  <v-card class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>
        Small plates, salads sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group active-class="deep-purple accent-4 white--text" column>
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text>
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import fire from "../services/firebase";

export default {
  name: "App",
  data() {
    return {
      userName: "",
      name: null,
      showMessage: "",
      messages: [],
    };
  },
  methods: {
    updateUsername() {
      this.name = this.userName;
      console.log(this.userName);
      this.userName = "";
    },
    sendMessage() {
      const message = {
        text: this.showMessage,
        username: this.name,
      };
      fire
        .database()
        .ref("messages")
        .push(message);
      this.showMessage = "";
    },
  },
  mounted() {
    const itemsRef = fire.database().ref("messages");
    itemsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const messages = [];
      Object.keys(data).forEach((key) => {
        messages.push({
          id: key,
          username: data[key].username,
          text: data[key].text,
        });
      });
      this.messages = messages;
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons");
#app {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
}
.login {
  background: #fff;
  width: 40%;
  height: 50vh;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
}
h3 {
  font-size: 30px;
  text-align: center;
}
input {
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(156, 156, 156);
  padding-left: 2px;
  padding-right: 2px;
}
.message-body {
  width: 40%;
  height: 80vh;
  margin: auto;
}
.message-text {
  min-width: 10%;
  border-radius: 4px;
}
.message {
  font-size: 14px;
}
.mg-text {
  color: rgb(0, 195, 255);
  font-weight: bolder;
}
.message-body input {
  width: 80%;
  border-radius: 4px;
  border: 1px solid rgb(156, 156, 156);
  height: 6vh;
  padding-left: 2px;
  padding-right: 2px;
}
.card {
  width: 100%;
  height: 75vh;
  margin: auto;
}
.card-body {
  min-height: 50vh;
  overflow-x: scroll;
}
</style>
