<template>
  <v-form ref="CompanyTypesForm">
    <v-select
      v-model="typeSelected"
      @input="onChangeType"
      :items="types"
      :rules="[(v) => !!v || 'ce champ est requis']"
      label="Veuillez sélectionner votre type d'entreprise"
      item-text="name"
      return-object
      required
    ></v-select>
  </v-form>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

@Component
export default class CompanyTypes extends Vue {
  @Prop({ required: true, type: Array }) readonly types!: [];

  private typeSelected = "";

  @Emit("selectedType")
  public onChangeType(): string {
    return this.typeSelected;
  }
}
</script>
