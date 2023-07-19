import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Input, message } from "antd";
import { userServ } from "../../services/userServices";
import { saveLocal } from "../../utils/localStore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDuLieuHoTen } from "../../redux/slice/nguoiDungSlice";
const FormLogin = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      //   xử lí gửi dữ liệu lên server
      userServ
        .dangNhap(values)
        .then((result) => {
          // console.log(result);
          //   Nếu như login thành công chúng ta sẽ lưu thông tin xún local và chuyển hướng người dùng về trang chủ
          saveLocal("user", result.data.content);
          messageApi.success("Đăng nhập thành công");
          //   khi gọi dữ liệu thành công sẽ lấy dữ liệu đó gửi lên redux
          dispatch(setDuLieuHoTen(result.data.content));
          setTimeout(() => {
            navigate("/");
          }, [1000]);
        })
        .catch((err) => {
          console.log(err);
          messageApi.error(err.response.data.content);
        });
    },
    validationSchema: yup.object({
      taiKhoan: yup.string().required("chú ý nhập dữ liệu nhé"),
      matKhau: yup.string().required("Nhập mật khẩu").min(5, "Nhập trên 5 nhé"),
    }),
  });
  const { handleChange, handleSubmit, handleBlur } = formik;
  return (
    <div>
      {" "}
      {contextHolder}
      {""}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Tài Khoản
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="taiKhoan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="taiKhoan"
          />
          {/* <Input
            name="taiKhoan"
            onChange={handleChange}
            onBlur={onBlur}
            status="error"
            placeholder="Error"
            status={
              formik.errors.taiKhoan && formik.touched.taiKhoan ? "error" : ""
            }
          /> */}
          {/* ở đây <p>{formik.errors.taiKhoan}</p> giúp hiển thị lỗi */}
          {/* Nhưng ở đây gặp 1 vấn đề chỉ hiển thị lỗi khi nguoiwgf dùng đã sử ụng */}
          {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
            <p className="text-red-500">{formik.errors.taiKhoan}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Mật Khẩu
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            name="matKhau"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {formik.errors.matKhau && formik.touched.matKhau ? (
            <p className="text-red-500">{formik.errors.matKhau}</p>
          ) : (
            ""
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
