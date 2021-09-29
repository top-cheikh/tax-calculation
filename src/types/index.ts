type TType = {
  id: string;
  name: string;
  taxRate: number;
};

type TInformation = {
  siret: string;
  name: string;
  adress?: string;
};

type TCompany = {
  type: TType;
  description: TInformation;
};

export { TType, TInformation, TCompany };
