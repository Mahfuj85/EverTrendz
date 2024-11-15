import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "./../Context/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  //GET USER
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  // SIGN UP ERROR
  const [signUpError, setSignUpError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }; 

  const handleSignUp = (data) => {
    //console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        const updatingUser = {
          displayName: data.name,
        };
        updateUser(updatingUser)
          .then(() => {
            savedUserToDB(data.name, data.email, data.role);
          })
          .catch((error) => {
            setSignUpError(error.message);
          });
      })
      .catch((error) => {
        setSignUpError(error.message);
      });
  };

  

  //FUNCTION TO SAVE THE USERS INTO DATABASE
  const savedUserToDB = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:7000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Account Created Successfully!");
          navigate("/login");
        } else {
          toast.error("Failed to create account!");
        }
      });
  };
  return (
    <div className="flex justify-center mt-10 md:mt-16 lg:mt-20">
      <div className="card bg-base-100 w-[385px] shrink-0 shadow-lg">
        <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
          <h2 className="text-center text-[20px] font-semibold">Sign Up</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Please provide your name" })}
              placeholder="name"
              className="input input-bordered"
            />
            {errors.name && (
              <p className="text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Please provide a valid email",
              })}
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Please provide your password",
                minLength: {
                  value: 6,
                  message: "Password must have 6 characters",
                },
                pattern: {
                  value: /(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*])/,
                  message:
                    "Password must have an uppercase, number & special character",
                },
              })}
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Role</span>
            </label>
            <select
              type="text"
              {...register("role", {
                required: "Please provide your role",
              })}
              placeholder="role"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                
              </option>
              <option>Seller</option>
              <option>Buyer</option>
            </select>
          </div>
          <div className="form-control mt-5">
            <input type="submit" className="btn btn-accent" value="SIGN UP" />
          </div>
          {signUpError === "Firebase: Error (auth/email-already-in-use)." && (
            <p className="text-red-500 text-center">
              This email is already in use
            </p>
          )}
          <label className="text-center">
            <Link
              to="/login"
              className="label-text-alt link link-hover text-sm"
            >
              Already have an account?
              <span className="text-secondary">&nbsp; Please login</span>
            </Link>
          </label>
        </form>
        <div className="divider px-10 -mt-4">OR</div>
        <div className="text-center mb-5">
          <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent w-[327px] h-12">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
