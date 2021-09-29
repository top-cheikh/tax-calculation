<template>
  <section>
    <section>
      <v-text-field
        v-model="description.siret"
        :counter="9"
        label="N° SIRET"
        :rules="[
          (v) => !!v || 'ce champ est requis',
          (v) => /^\d+$/.test(v) || 'saisie incorect',
          (v) =>
            (v && v.length === 9) ||
            'Le Numéro de Siret doit contenir 9 chiffres',
        ]"
        @input="updateDescription"
        required
      >
      </v-text-field>

      <v-text-field
        v-model="description.name"
        label="Dénomination"
        :rules="[(v) => !!v || 'ce champ est requis']"
        @input="updateDescription"
        required
      >
      </v-text-field>
    </section>
    <slot name="additionContent"> </slot>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { TInformation } from "../../../types";

@Component
export default class Base extends Vue {
  @Prop({ required: true, type: Object })
  private description!: TInformation;

  @Emit("description")
  public updateDescription(): TInformation {
    return this.description;
  }
}
</script>
