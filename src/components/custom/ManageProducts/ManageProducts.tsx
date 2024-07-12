import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdCreateNewFolder } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NavLink } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/features/products/products.api";
import { IProduct } from "../AllProducts/ProductCard";
import { PhotoProvider, PhotoView } from "react-photo-view";
import toast from "react-hot-toast";

const ManageProducts = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();
  const handelDelete = async (id:string) => {
    const res = await deleteProduct(id);
    if (res?.data?.success) {
      toast.success(res?.data?.message, { position: "top-center" });
    }
    if (res?.error) {
      toast.error("Something went wrong. Please try again !", {
        position: "top-center",
      });
    }
  };
  if (!data || isLoading) {
    return (
      <span className="loading relative left-[50%] loading-spinner loading-lg text-center my-16"></span>
    );
  }
  return (
    <div className="relative">
      <div className="mt-5 flex justify-end mb-5">
        <NavLink
          className="bg-black w-max flex gap-2 items-center text-white px-4 py-2 rounded-md"
          to="/create-product"
        >
          Create New
          <MdCreateNewFolder className=" text-xl" />
        </NavLink>
      </div>
      <Table className=" mt-[30px]">
        <TableCaption>A list of all your products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Update</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((product: IProduct, i: number) => (
            <TableRow key={product?._id}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>
                <PhotoProvider>
                  <PhotoView src={product?.image}>
                    <img
                      className=" cursor-pointer h-[40px]"
                      src={product?.image}
                      alt=""
                    />
                  </PhotoView>
                </PhotoProvider>
              </TableCell>
              <TableCell>{product?.name}</TableCell>
              <TableCell>{product?.category}</TableCell>
              <TableCell>${product?.stockQuantity}</TableCell>
              <TableCell>{product?.brand}</TableCell>
              <TableCell>
                <NavLink to={`/update-product/${product?._id}`}>
                  <LuClipboardEdit className=" text-2xl" />
                </NavLink>
              </TableCell>
              <TableCell>
                <button onClick={()=>handelDelete(product?._id)}>
                  <RiDeleteBin6Line className=" text-2xl" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageProducts;
