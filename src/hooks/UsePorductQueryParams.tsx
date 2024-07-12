import { useAppSelector } from "@/redux/hooks"; // Import your Redux selector hook

const UseProductQueryParams = () => {
  const searchTerm = useAppSelector((state) => state.filter.searchTerm);
  const price = useAppSelector((state) => state.filter.price);
  const brand = useAppSelector((state) => state.filter.brand);
  const rating = useAppSelector((state) => state.filter.rating);
  const category = useAppSelector((state) => state.filter.category);

  return { searchTerm, price, brand, rating, category };
};

export default UseProductQueryParams;
