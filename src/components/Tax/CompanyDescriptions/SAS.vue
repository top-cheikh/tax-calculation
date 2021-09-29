<template>
  <v-form ref="DescriptionForm">
    <base-part :description="description" @description="updateDescription">
      <template slot="additionContent">
        <v-text-field
          v-model="description.adress"
          label="Adresse"
          :rules="[(v) => !!v || 'ce champ est requis']"
          required
          @input="updateDescription"
        >
        </v-text-field>
      </template>
    </base-part>
  </v-form>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { TInformation } from "../../../types";

import basePart from "./Base.vue";

@Component({
  components: {
    basePart,
  },
})
export default class SAS extends Vue {
  @Prop({ required: true, type: Object })
  private description!: TInformation;

  @Emit("description")
  public updateDescription(): TInformation {
    return this.description;
  }
}
</script>
