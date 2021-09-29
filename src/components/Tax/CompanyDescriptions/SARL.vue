<template>
  <section>
    <v-form ref="DescriptionForm">
      <base-part
        :description="description"
        @description="updateDescription"
      ></base-part>
    </v-form>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { TInformation } from "../../../types";

import basePart from "./Base.vue";

@Component({
  components: {
    basePart,
  },
})
export default class SARL extends Vue {
  @Prop({ required: true, type: Object })
  private description!: TInformation;

  @Emit("description")
  public updateDescription(): TInformation {
    return this.description;
  }
}
</script>
