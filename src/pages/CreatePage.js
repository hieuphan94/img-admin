import React from "react";
import { Footer } from "../components/base/Footer";
import { SideBar } from "../components/base/SideBar";

export const CreatePage = () => {
  return (
    <div className="container content mx-auto px-40">
      <h3 className="text-center text-2xl py-3">Tạo Page</h3>
      <div className="form-page">
        <input
          type="text"
          placeholder="Nhập tiêu đề"
          className="w-full p-2 my-2 rounded-md border-2"
        />
        <div className="page-image">
          <input type="file" />
          <button className="rounded-md bg-main-light p-3">
            Chọn hình từ Media
          </button>
        </div>
        <textarea
          type="text"
          placeholder="Nhập mô tả"
          className="w-full h-52 p-2 my-2 rounded-md border-2"
        />
        <button className="text-center bg-main py-3 rounded-md w-full my-3 text-white text-2xl">
          Đăng
        </button>
      </div>
    </div>
  );
};
