import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface IInitialState {
  brand: string | undefined;
  rating: number | undefined;
  category: string | undefined;
  price: number | undefined;
  searchTerm:string | undefined
}
const initialState: IInitialState = {
  brand: undefined,
  rating: undefined,
  category: undefined,
  price: undefined,
  searchTerm:undefined
};
const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    changeFilterState: (state, action: PayloadAction<IInitialState>) => {
      return action.payload;
    },
    clearFilter: (state) => {
      state.brand = undefined;
      state.rating = undefined;
      state.category = undefined;
      state.price = undefined;
    },
  },
});

export const { changeFilterState, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
