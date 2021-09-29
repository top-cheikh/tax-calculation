<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_finance.png" />
    <h1>
      Bienvenue sur le site de calcul des impots du ministère des finances
    </h1>
    <v-btn color="primary" @click="goTo('/tax')"> Démarrer </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  public goTo(path: string): void {
    if (this.$route.path !== path) this.$router.push({ path });
  }
}
</script>
