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

const ManageProducts = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    // {
    //     id:1
    // },
  ];
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
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Update</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((oneData, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>$250.00</TableCell>
              <TableCell>Puma</TableCell>
              <TableCell>
                <NavLink to="/update-product/lf">
                  <LuClipboardEdit className=" text-2xl" />
                </NavLink>
              </TableCell>
              <TableCell>
                <button>
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
