export type User = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export interface DataState {
  loading: boolean;
  items: User[];
  err: null | string;
}
