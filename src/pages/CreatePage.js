import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { urls, constants } from "../utils/index";
import { PageAPI } from "../data/api/pages";

export const CreatePage = () => {
  let history = useHistory();
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Title is required")
      .min(8, "Title must be at least 8 characters"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    const token = localStorage.getItem(constants.base.token);
    let getData =
      data.img.length === 0
        ? { title: data.title, desc: data.desc, img: "" }
        : { title: data.title, desc: data.desc, img: data.img[0].name };

    const result = await PageAPI.createPage(getData, token);
    if (result !== undefined && result !== null) {
      alert("Tạo trang thành công");
      history.push(urls.allPages.path);
    } else {
      alert("Có lỗi, nhập lại hoặc liên hệ admin!");
    }
  };

  return (
    <div className="container content mx-auto px-40">
      <h3 className="text-center text-2xl py-3">Tạo Page</h3>
      <form className="form-page" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nhập tiêu đề"
          className="w-full p-2 my-2 rounded-md border-2"
          {...register("title")}
        />
        <p className="p-2">{errors.title?.message}</p>
        <div className="page-image">
          <input type="file" {...register("img")} />
          <button className="rounded-md bg-main-light p-3">
            Chọn hình từ Media
          </button>
        </div>
        <textarea
          type="text"
          placeholder="Nhập mô tả"
          className="w-full h-52 p-2 my-2 rounded-md border-2"
          {...register("desc")}
        />
        <input
          type="submit"
          className="text-center bg-main py-3 rounded-md w-full my-3 text-white text-2xl"
          value="Submit"
        ></input>
      </form>
    </div>
  );
};
