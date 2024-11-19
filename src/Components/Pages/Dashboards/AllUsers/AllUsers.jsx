import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Loading from './../../../Shared/Loading/Loading';

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:7000/users");
      const data = res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:7000/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin Created Successfully!");
          refetch();
        }
      });
  };

  const handleCancelAdmin = (id) => {
    fetch(`http://localhost:7000/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin Cancelled Successfully!");
          refetch();
        }
      });
  };

  const handleVerifySeller = (id) => {
    fetch(`http://localhost:7000/users/seller/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Seller Verified!");
          refetch();
        }
      });
  };


  const handleDeleteUser = (id) => {
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
        fetch(`http://localhost:7000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User deleted successfully.",
                icon: "success",
              });

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
      <h1 className="text-3xl font-semibold">All Users: {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full mt-6">
          {/* head */}
          <thead className="bg-base-200 rounded-t-lg">
            <tr className="text-black text-[16px]">
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Job</th>
              <th>Verify</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-base-100">
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td className="text-[16px] font-semibold">{user.name}</td>
                <td>{user.email}</td>
                <td><button className="btn btn-outline btn-accent">{user.role}</button></td>
                <td>
                  {user?.role === "Admin" ? (
                    <button
                      onClick={() => handleCancelAdmin(user._id)}
                      className="btn  bg-secondary px-9 text-base-100"
                    >
                      Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn  bg-accent text-base-100"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user?.verify === "Verified" ? (
                    <button
                      onClick={() => handleUnverifySeller(user._id)}
                      className="btn  btn-info px-9 text-base-100"
                    >
                      Verified
                    </button>
                  ) : (
                    <button
                      onClick={() => handleVerifySeller(user._id)}
                      className="btn  btn-success px-9 text-base-100"
                    >
                      Verify
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-error text-base-100"
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
