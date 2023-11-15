export type HandlersHomeTypes = {
  videos:
    | Array<{
        id: number;
        name: string;
        url: string;
        createdAt: string;
        updatedAt: string;
      }>
    | [];
  loading: boolean;
  videoHighlight: {
    id: number | null;
    name: string | null;
    url: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  };
  handleChangeVideoHighlight: (values: {
    id: number;
    name: string;
    url: string;
    createdAt: string;
    updatedAt: string;
  }) => void;
};
