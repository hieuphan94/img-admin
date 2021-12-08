import React, { useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { urls, constants } from "../utils/index";
import { PageAPI } from "../data/api/pages";
import { PageShowBlog } from "./PageShowBlog";
import { PageShowSpecial } from "./PageShowSpecial";
import { PageShowTCategory } from "./PageShowTCategory";
import { PageShowTList } from "./PageShowTList";

export const CreatePage = () => {
  const [choose, setChoose] = useState("blog");

  const pageChoose = (choose) => {
    setChoose(choose);
  };

  const PageEditShow = (props) => {
    const getChoose = props.isChoose;
    if (getChoose === constants.categoryPage.special) {
      return <PageShowSpecial isChoose={choose} />;
    } else if (getChoose === constants.categoryPage.tourCategory) {
      return <PageShowTCategory isChoose={choose} />;
    } else if (getChoose === constants.categoryPage.tourList) {
      return <PageShowTList isChoose={choose} />;
    } else {
      return <PageShowBlog isChoose={choose} />;
    }
  };

  return (
    <div className="container content mx-auto px-40">
      <h3 className="text-center text-2xl py-3">Tạo Page</h3>
      <h4 className="py-3">Chọn loại Trang để tiếp tục</h4>
      <p className="flex justify-around">
        <button
          onClick={() => {
            pageChoose(constants.categoryPage.blog);
          }}
          className="bg-main rounded-md p-2 text-white focus:bg-main-superDark"
        >
          {constants.categoryPage.blog}
        </button>
        <button
          onClick={() => {
            pageChoose(constants.categoryPage.special);
          }}
          className="bg-main rounded-md p-2 text-white focus:bg-main-superDark"
        >
          {constants.categoryPage.special}
        </button>
        <button
          onClick={() => {
            pageChoose(constants.categoryPage.tourCategory);
          }}
          className="bg-main rounded-md p-2 text-white focus:bg-main-superDark"
        >
          {constants.categoryPage.tourCategory}
        </button>
        <button
          onClick={() => {
            pageChoose(constants.categoryPage.tourList);
          }}
          className="bg-main rounded-md p-2 text-white focus:bg-main-superDark"
        >
          {constants.categoryPage.tourList}
        </button>
      </p>
      <PageEditShow isChoose={choose} />
    </div>
  );
};
