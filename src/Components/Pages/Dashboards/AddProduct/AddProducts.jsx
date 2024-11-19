import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../../../../Context/AuthProvider';

const AddProducts = () => {
  const { getCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();

      const handleAddProduct = (data) => {
        if(!data.image1 || !data.image2 || !data.image3){
            return
        }
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("title", data.title)
        formData.append("price", data.price)
        formData.append("condition", data.condition)
        formData.append("number", data.number)
        formData.append("location", data.location)
        formData.append("category", data.category)
        formData.append("description", data.description)
        formData.append("oldPrice", data.oldPrice)
        formData.append("year", data.year)
        formData.append("verification", data.verification)
        formData.append("postedDate", data.postedDate);
        formData.append("image1", data.image1[0])
        formData.append("image2", data.image2[0])
        formData.append("image3", data.image3[0])

        fetch("http://localhost:7000/add-product", {
          method: "POST",
          body: formData, 
        })
        .then((res) => res.json())
        .then((data)=> {
          console.log(data);
          if (data.insertedId) {
            toast.success("Product Added Successfully!");
            reset();
            navigate("/dashboard/all-products");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      }
  return (
    <div className="">
      <h1 className="text-3xl font-semibold">Add a New Product</h1>
      <div className="card bg-base-100 w-[500px] shrink-0 shadow-lg mt-8">
        <form onSubmit={handleSubmit(handleAddProduct)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Please provide your name" })}
              placeholder={getCurrentUser?.displayName}
              className="input input-bordered"
              
            />
            {errors.name && (
              <p className="text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Please provide your email" })}
              placeholder={getCurrentUser?.email}
              className="input input-bordered"
              
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Title</span>
            </label>
            <input
              type="text"
              {...register("title", { required: "Please provide a title" })}
              placeholder="Enter the product title"
              className="input input-bordered"
            />
            {errors.title && (
              <p className="text-red-500 mt-1">{errors.title.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <input
              type="number"
              {...register("price", {
                required: "Please provide a price",
              })}
              placeholder="Enter the price"
              className="input input-bordered"
            />
            {errors.price && (
              <p className="text-red-500 mt-1">{errors.price.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Condition</span>
            </label>
            <select
              {...register("condition")}
              className="select select-bordered w-full"
            >
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              {...register("number", {
                required: "Please provide a phone number",
              })}
              placeholder="Enter the phone number"
              className="input input-bordered"
            />
            {errors.number && (
              <p className="text-red-500 mt-1">{errors.number.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", { required: "Please provide a location" })}
              placeholder="Enter your meeting location"
              className="input input-bordered"
            />
            {errors.location && (
              <p className="text-red-500 mt-1">{errors.location.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              {...register("category", { required: "Please provide a category" })}
              placeholder="Enter your product's description"
              className="select select-bordered w-full"
            >
                <option>Electronics</option>
                <option>Laptop</option>
                <option>Mobile</option>
                <option>Motorcycle</option>
                <option>Home Decor</option>
            </select>
            {errors.category && (
              <p className="text-red-500 mt-1">{errors.category.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <textarea
            type="text"
            {...register("description", { required: "Please provide a description" })}
            placeholder="Enter your product's description"
            className="textarea textarea-bordered textarea-lg w-full"></ textarea>
            {errors.description && (
              <p className="text-red-500 mt-1">{errors.description.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Old Price</span>
            </label>
            <input
              type="number"
              {...register("oldPrice", { required: "Please provide a price" })}
              placeholder="Enter your buying price"
              className="input input-bordered"
            />
            {errors.description && (
              <p className="text-red-500 mt-1">{errors.oldPrice.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Year of Purchase</span>
            </label>
            <input
              type="number"
              {...register("year", { required: "Please provide a year" })}
              placeholder="Enter your purchase year"
              className="input input-bordered"
            />
            {errors.year && (
              <p className="text-red-500 mt-1">{errors.year.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Verification</span>
            </label>
            <select
              {...register("verification")}
              className="select select-bordered w-full"
            >
                <option>Verified</option>
                <option>Non-verified</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Posted Date</span>
            </label>
            <input
              type="date"
              {...register("postedDate", { required: "Please provide the posted date" })}
              className="input input-bordered"
            />
            {errors.postedDate && (
              <p className="text-red-500 mt-1">{errors.postedDate.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Your 1st Photo</span>
            </label>
            <input
              accept="image/*"
              type="file"
              {...register("image1", {
                required: "Please provide an image",
              })}
              placeholder="Enter Your picture"
              className="input input-bordered"
            />
            {errors.image1 && (
              <p className="text-red-500 mt-1">{errors.image1.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Your 2nd Photo</span>
            </label>
            <input
              accept="image/*"
              type="file"
              {...register("image2", {
                required: "Please provide an image",
              })}
              placeholder="Enter Your picture"
              className="input input-bordered"
            />
            {errors.image2 && (
              <p className="text-red-500 mt-1">{errors.image2.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Your Photo</span>
            </label>
            <input
              accept="image/*"
              type="file"
              {...register("image3", {
                required: "Please provide an image",
              })}
              placeholder="Enter Your picture"
              className="input input-bordered"
            />
            {errors.image3 && (
              <p className="text-red-500 mt-1">{errors.image3.message}</p>
            )}
          </div>
          <div className="form-control mt-0">
            <input type="submit" className="btn btn-accent" value="Add Your Product" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProducts