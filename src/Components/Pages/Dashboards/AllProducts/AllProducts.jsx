import React from 'react'
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Loading from './../../../Shared/Loading/Loading';

const AllProducts = () => {
    const {
        data: products,
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
          const res = await fetch("http://localhost:7000/products");
          const data = res.json();
          return data;
        },
      });

      const handleDeleteProduct = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:7000/products/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Product deleted successfully.",
                    icon: "success",
                  });
                  // toast.success("Doctor Deleted Successfully!");
                   refetch();
                }
              })
              .catch((error) => {
                console.error(error);
              });
          }
        });
      };
    
      if (isLoading) {
        return <Loading />;
      }
  return (
    <div>
      <h1 className="text-3xl font-semibold">
        All Products: {products.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full mt-6">
          {/* head */}
          <thead className="bg-base-200 rounded-t-lg">
            <tr className="text-black text-[16px]">
              <th>SERIAL</th>
              <th>AVATAR</th>
              <th>TITLE</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody className="bg-base-100">
            {products.length === 0 && (
              <h1 className="text-lg font-semibold">
                No Product to Show Here!
              </h1>
            )}
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={`data:image/png;base64, ${product.image1}`}
                        className="object-fill object-top"
                      />
                    </div>
                  </div>
                </td>
                <td className='text-md font-semibold'>{product.title}</td>
                <td className='text-md font-semibold'>{product.price}</td>
                <td>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="btn btn-error text-base-100 px-6 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllProducts