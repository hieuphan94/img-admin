import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { TourAPI } from "../data/api/tours";
import { urls, constants } from "../utils/index";
import { useHistory } from "react-router-dom";

export const CreateTour = () => {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  // Days
  const [day1Title, setDay1Title] = useState("");
  const [day1Desc, setDay1Desc] = useState("");
  const [day2Title, setDay2Title] = useState("");
  const [day2Desc, setDay2Desc] = useState("");
  const [day3Title, setDay3Title] = useState("");
  const [day3Desc, setDay3Desc] = useState("");
  const [day4Title, setDay4Title] = useState("");
  const [day4Desc, setDay4Desc] = useState("");
  const [day5Title, setDay5Title] = useState("");
  const [day5Desc, setDay5Desc] = useState("");
  const [day6Title, setDay6Title] = useState("");
  const [day6Desc, setDay6Desc] = useState("");
  const [day7Title, setDay7Title] = useState("");
  const [day7Desc, setDay7Desc] = useState("");

  const onSubmit = async () => {
    const timeline = [
      {
        title: day1Title,
        description: day1Desc,
      },
      {
        title: day2Title,
        description: day2Desc,
      },
      {
        title: day3Title,
        description: day3Desc,
      },
      {
        title: day4Title,
        description: day4Desc,
      },
      {
        title: day5Title,
        description: day5Desc,
      },
      {
        title: day6Title,
        description: day6Desc,
      },
      {
        title: day7Title,
        description: day7Desc,
      },
    ];

    const tour = {
      title: title,
      price: parseInt(price),
      desc: desc,
      timeline: timeline,
    };

    const token = localStorage.getItem(constants.base.token);
    const result = await TourAPI.createTour(tour, token);
    if (result !== undefined && result !== null) {
      console.log(result);
      alert("Tạo trang thành công");
      history.push(urls.allTours.path);
    } else {
      alert("Có lỗi, nhập lại hoặc liên hệ admin!");
    }
  };

  return (
    <div className="container content mx-auto px-40">
      <h3 className="text-center text-2xl py-3">Tạo Tour</h3>
      <div className="form-page">
        <input
          type="text"
          placeholder="Nhập tiêu đề"
          className="w-full p-2 my-2 rounded-md border-2"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="page-image">
          <input type="file" />
          <button className="rounded-md bg-main-light p-3">
            Chọn hình từ Media
          </button>
        </div>
        <div className="tour-price flex justify-between items-center">
          <h4>Nhập giá tour</h4>
          <input
            type="text"
            placeholder="Giá"
            className="w-2/3 p-2 my-2 rounded-md border-2"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <h3 className="text-center text-2xl py-3">Nhập mô tả</h3>
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            const data = editor.getData();
            setDesc(data);
          }}
          onBlur={(event, editor) => {}}
          onFocus={(event, editor) => {}}
        />
        <div className="timeline">
          <h3 className="text-center text-2xl py-3">Nhập lịch trình</h3>
          <div className="timeline-sample">
            {/* DAY 1 */}
            <div className="day bg-main-light rounded-md p-2 my-2">
              <div className="day-title flex justify-between items-center">
                <h4>Day 1</h4>
                <input
                  type="text"
                  placeholder="Tiêu đề ngày"
                  className="w-2/3 p-2 my-2 rounded-md border-2"
                  onChange={(e) => setDay1Title(e.target.value)}
                />
              </div>
              <div className="day-content flex justify-between items-start">
                <h4>Nội dung ngày</h4>
                <textarea
                  className="w-2/3 p-2 my-2 rounded-md border-2"
                  onChange={(e) => setDay1Desc(e.target.value)}
                ></textarea>
              </div>
            </div>
            {/* DAY 2 */}
            <div className="day bg-main-light rounded-md p-2 my-2">
              <div className="day-title flex justify-between items-center">
                <h4>Day 2</h4>
                <input
                  type="text"
                  placeholder="Tiêu đề ngày"
                  className="w-2/3 p-2 my-2 rounded-md border-2"
                  onChange={(e) => setDay2Title(e.target.value)}
                />
              </div>
              <div className="day-content flex justify-between items-start">
                <h4>Nội dung ngày</h4>
                <textarea
                  className="w-2/3 p-2 my-2 rounded-md border-2"
                  onChange={(e) => setDay2Desc(e.target.value)}
                ></textarea>
              </div>
            </div>
            {/* DAY 3 */}
            <div className="day bg-main-light rounded-md p-2 my-2">
              <div className="day-title flex justify-between items-center">
                <h4>Day 3</h4>
                <input
                  type="text"
                  placeholder="Tiêu đề ngày"
                  className="w-2/3 p-2 my-2 rounded-md border-2"
                  onChange={(e) => setDay3Title(e.target.value)}
                />
              </div>
              <div className="day-content flex justify-between items-start">
                <h4>Nội dung ngày</h4>
                <textarea
                  className="w-2/3 p-2 my-2 rounded-md border-2"
                  onChange={(e) => setDay3Desc(e.target.value)}
                ></textarea>
              </div>
            </div>
            {/* DAY 4 */}
            <div className="day bg-main-light rounded-md p-2 my-2">
              <div className="day-title flex justify-between items-center">
                <h4>Day 4</h4>
                <input
                  type="text"
                  placeholder="Tiêu đề ngày"
                  className="w-2/3 p-2 my-2 rounded-md border-2"
                  onChange={(e) => setDay4Title(e.target.value)}
                />
              </div>
              <div className="day-content flex justify-between items-start">
                <h4>Nội dung ngày</h4>
                <textarea
                  className="w-2/3 p-2 my-2 rounded-md border-2"
                  onChange={(e) => setDay4Desc(e.target.value)}
                ></textarea>
              </div>
            </div>
            {/* DAY 5 */}
            <div className="day bg-main-light rounded-md p-2 my-2">
              <div className="day-title flex justify-between items-center">
                <h4>Day 5</h4>
                <input
                  type="text"
                  placeholder="Tiêu đề ngày"
                  className="w-2/3 p-2 my-2 rounded-md border-2"
                  onChange={(e) => setDay5Title(e.target.value)}
                />
              </div>
              <div className="day-content flex justify-between items-start">
                <h4>Nội dung ngày</h4>
                <textarea
                  className="w-2/3 p-2 my-2 rounded-md border-2"
                  onChange={(e) => setDay5Desc(e.target.value)}
                ></textarea>
              </div>
            </div>
            {/* DAY 6 */}
            <div className="day bg-main-light rounded-md p-2 my-2">
              <div className="day-title flex justify-between items-center">
                <h4>Day 6</h4>
                <input
                  type="text"
                  placeholder="Tiêu đề ngày"
                  className="w-2/3 p-2 my-2 rounded-md border-2"
                  onChange={(e) => setDay6Title(e.target.value)}
                />
              </div>
              <div className="day-content flex justify-between items-start">
                <h4>Nội dung ngày</h4>
                <textarea
                  className="w-2/3 p-2 my-2 rounded-md border-2"
                  onChange={(e) => setDay6Desc(e.target.value)}
                ></textarea>
              </div>
            </div>
            {/* DAY 7 */}
            <div className="day bg-main-light rounded-md p-2 my-2">
              <div className="day-title flex justify-between items-center">
                <h4>Day 7</h4>
                <input
                  type="text"
                  placeholder="Tiêu đề ngày"
                  className="w-2/3 p-2 my-2 rounded-md border-2"
                  onChange={(e) => setDay7Title(e.target.value)}
                />
              </div>
              <div className="day-content flex justify-between items-start">
                <h4>Nội dung ngày</h4>
                <textarea
                  className="w-2/3 p-2 my-2 rounded-md border-2"
                  onChange={(e) => setDay7Desc(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={onSubmit}
          className="text-center bg-main py-3 rounded-md w-full my-3 text-white text-2xl"
        >
          Đăng
        </button>
      </div>
    </div>
  );
};
