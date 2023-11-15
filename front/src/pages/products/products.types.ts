export type HandlersProductsTypes = {
  products: Array<{
    id: number;
    name: string;
    description: string;
    value: string;
    createdAt: string;
    updatedAt: string;
  }>;
  loading: boolean;
  productSelected: {
    id: number | null;
    name: string | null;
    description: string | null;
    value: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  };
  setProductSelected: React.Dispatch<
    React.SetStateAction<{
      id: number | null;
      name: string | null;
      description: string | null;
      value: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    }>
  >;
};
