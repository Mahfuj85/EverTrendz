import React, { useContext } from 'react'
import { AuthContext } from './../../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from './../../../Shared/Loading/Loading';
import { Link } from 'react-router-dom';

const MyOrder = () => {
  const { getCurrentUser } = useContext(AuthContext);

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", getCurrentUser?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:7000/bookings?email=${getCurrentUser?.email}`
      );
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-semibold">
          My Orders: {bookings.length}
        </h1>
        {/* <p>{selectedDate}</p> */}
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full mt-6">
          {/* head */}
          <thead className="bg-base-200 rounded-t-lg">
            <tr className="text-black text-[16px]">
              <th>Serial</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Product Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody className="bg-base-100">
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.title}</td>
                <td>
                  <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={`data:image/png;base64, ${booking.image}`}
                        className="object-fill object-top"
                      />
                    </div>
                  </div>
                </td>
                <td>{booking.price}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-sm btn-primary text-white">
                        Pay
                      </button>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <button className="btn btn-sm bg-teal-400 text-white">Paid</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrder