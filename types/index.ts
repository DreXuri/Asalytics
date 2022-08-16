export type IAsaList = {
  asalist: {
    result: AsaItem[];
  };
};

export type AsaItem = {
  assetId: string;
  name: string;
  logo: string;
  available: boolean;
};
