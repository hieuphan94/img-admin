import React from "react";
import { useHistory } from "react-router-dom";

export const ErrorAccess = () => {
  let history = useHistory();
  const handleGoLogin = () => {
    history.push("/login");
  };
  return (
    <div>
      <p>Bạn không có quyền truy cập vào trang này</p>
      <button onClick={handleGoLogin}>Đăng nhập</button>
    </div>
  );
};
