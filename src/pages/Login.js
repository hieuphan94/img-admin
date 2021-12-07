import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { urls, constants } from "../utils/index";
import API from "../data/api/api";

export const Login = () => {
  let history = useHistory();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .matches("^[A-Za-z0-9+_.-]+@(.+)$")
      .email("Email is not valid"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await API.post("/user/login", data);
      if (result !== null && result !== undefined) {
        const token = result.data.token;
        localStorage.setItem(constants.base.token, token);
      }
      history.push(urls.dashboard.path);
    } catch (err) {
      let statusErr = err.response.status;
      console.log(err);
      if (statusErr === 400) {
        alert("Email or password is wrong");
      }
      console.log(err);
    }
  };
  return (
    <div className="h-screen p-36">
      <img
        className="w-40 p-2"
        src={urls.imgLogo.path}
        alt={urls.imgLogo.title}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col align-middle justify-center"
      >
        <input
          className="p-2 m-2 rounded-md border-2"
          type="text"
          name="email"
          placeholder="Email"
          {...register("email")}
        />
        <p className="p-2">{errors.email?.message}</p>
        <input
          className="p-2 m-2 rounded-md border-2"
          type="text"
          name="password"
          placeholder="Password"
          {...register("password")}
        />
        <p className="p-2">{errors.password?.message}</p>
        <input
          className="p-2 m-2 rounded-md border-2"
          type="submit"
          value="LOGIN"
        />
      </form>
    </div>
  );
};
