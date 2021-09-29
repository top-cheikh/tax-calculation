<template>
  <v-form>
    <v-text-field
      type="number"
      suffix="€"
      v-model.number="amount"
      label="Votre chiffre d'affaire"
      :rules="[(v) => /^\d+$/.test(v) || 'saisie incorect']"
      hide-details="auto"
    ></v-text-field>
    <div v-if="tax && tax > 0" class="has-text-centered">
      <span class="is-size-2">
        Montant de vos impots : <b>{{ tax }} €</b></span
      >
    </div>
    <br />
  </v-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { TCompany } from "../../types";

@Component
export default class TaxCalculation extends Vue {
  @Prop({ required: true, type: Object }) private company!: TCompany;
  private amount = 0;

  get taxRate() {
    return this.company.type.taxRate;
  }

  get tax() {
    return (this.amount * this.taxRate).toFixed(2);
  }
}
</script>
