import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../../Context/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  // SIGN IN ERROR
  const [loginError, setLoginError] = useState("");
  const { signIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };
  return (
    <div className="flex justify-center mt-10 md:mt-32 lg:mt-40">
      <div className="card bg-base-100 w-[385px] shrink-0 shadow-lg">
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <h2 className="text-center text-[20px] font-semibold">
            Login {name}
          </h2>
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
              })}
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password.message}</p>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-0">
            <input type="submit" className="btn btn-accent" value="LOGIN" />
          </div>
          {loginError && (
            <p className="text-red-500 text-center">
              Email or password does not match!
            </p>
          )}
          <label className="text-center">
            <Link
              to="/sign-up"
              className="label-text-alt link link-hover text-sm"
            >
              New to EverTrendz?
              <span className="text-secondary">&nbsp; Create new account</span>
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
