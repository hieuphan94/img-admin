import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { urls, constants } from "../utils/index";
import { PageAPI } from "../data/api/pages";

export const PageShowSpecial = (props) => {
  const getPageCat = props.isChoose;
  const [desc] = useState("");
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
        category: getPageCat,
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
    <form className="form-page" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex notes bg-main-light rounded-md p-3 my-2">
        <div className="notes-text w-1/2 p-2">
          <p>
            Các trang dạng tour special sẽ thiết kế theo chuẩn riêng: hiện tại
            chỉ có tên. Vui lòng liên hệ Developer để yêu cầu thiết kế
            <br />
            Email: phantronghieu1@gmail.com
          </p>
          <p>
            <span>Link: </span>
            <a
              className="text-main"
              href="https://imagevietnam.com/teambuilding-event/"
            >
              Team Building Event
            </a>
          </p>
        </div>
        <div className="notes-image w-1/2">
          <img className="" src="/img/page-show-special.jpg" alt="" />
        </div>
      </div>
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

      {/* <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {}}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDesc(data);
        }}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
      /> */}
      <input
        type="submit"
        className="text-center bg-main py-3 rounded-md w-full my-3 text-white text-2xl"
        value="Submit"
      ></input>
    </form>
  );
};
