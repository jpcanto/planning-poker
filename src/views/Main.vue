<template>
  <div class="login">
    <form class="login-form" @submit="login" v-if="!username.length">
      <h1>Login poker</h1>
      <label for="username">Username</label>
      <input
        type="text"
        placeholder="Entre com um apelido"
        v-model="username"
      />
      <input type="submit" value="Login" />
    </form>

    <div class="teste" v-else>
      teste
    </div>
  </div>
</template>

<script lang="ts">
import firebase from "../services/firebase";

export default {
  data: () => ({
    username: "",
    messages: [],
    messageRef: firebase.database().ref("messages"),
  }),
  methods: {
    login() {
      if (this.username !== "" && this.username !== null) {
        console.log("username: ", this.username);
      }
    },
    sendMessage() {
      console.log(this.messageRef);
    },
  },
};
</script>
