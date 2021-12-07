import React, { useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { urls, constants } from "../utils/index";
import { PageAPI } from "../data/api/pages";

export const CreatePage = () => {
  const [desc, setDesc] = useState("");
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

    const result = await PageAPI.createPage(
      {
        title: data.title,
        img: data.img.length === 0 ? "" : data.img[0].name,
        desc: desc,
      },
      token
    );
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
        <h3 className="text-center text-2xl py-3">Nhập mô tả</h3>
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            // console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data });
            setDesc(data);
          }}
          onBlur={(event, editor) => {
            // console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            // console.log("Focus.", editor);
          }}
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
