<template>
  <div>
    <v-stepper v-model="step" vertical>
      <v-stepper-step :complete="step > 1" step="1">
        Selectionner son type
      </v-stepper-step>

      <v-stepper-content step="1">
        <company-types
          :types="types"
          @selectedType="updateType"
          ref="CompanyTypes"
        />
        <v-btn color="primary" @click="next"> Continue </v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="step > 2" step="2">
        Renseigner ses informations
      </v-stepper-step>

      <v-stepper-content step="2">
        <component
          ref="description"
          :description="{}"
          :is="formDescription"
          @description="updateDescription"
        ></component>
        <v-btn color="primary" @click="next"> Continue </v-btn>
        <v-btn @click="previous"> Précedent </v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="step > 3" step="3">
        Calculer son impot
      </v-stepper-step>

      <v-stepper-content step="3">
        <tax-calculation
          v-if="company.type && company.description"
          :company="company"
        />
        <v-btn color="primary" @click="goTo('/')"> Terminer </v-btn>
        <v-btn @click="previous"> Précedent </v-btn>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompanyTypes from "@/components/Tax/CompanyTypes.vue";
import SARL from "@/components/Tax/CompanyDescriptions/SARL.vue";
import SAS from "@/components/Tax/CompanyDescriptions/SAS.vue";
import TaxCalculation from "@/components/Tax/TaxCalculation.vue";

import { TCompany, TType, TInformation } from "../types";

@Component({
  components: {
    CompanyTypes,
    SARL,
    SAS,
    TaxCalculation,
  },
})
export default class Tax extends Vue {
  private step = 1;

  private formDescription?: string = "";

  private company = {} as TCompany;

  private types = [
    {
      id: 1,
      name: "SARL",
      taxRate: 20,
    },
    {
      id: 2,
      name: "SAS",
      taxRate: 30,
    },
  ];

  public next(): void {
    const CompanyTypes = this.$refs.CompanyTypes as any;
    const Description = this.$refs.description as any;

    if (
      (CompanyTypes?.$refs?.CompanyTypesForm.validate() && this.step == 1) ||
      (Description?.$refs?.DescriptionForm.validate() && this.step == 2)
    )
      this.step++;
  }

  public updateType(type: TType): void {
    this.company.type = type;
    this.formDescription = type.name;
  }

  public updateDescription(description: TInformation): void {
    this.company.description = description;
  }

  public previous(): void {
    this.step--;
  }

  public goTo(path: string): void {
    if (this.$route.path !== path) this.$router.push({ path });
  }
}
</script>
