import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { userServ } from "../../services/userServices";
import { saveLocal } from "../../utils/localStore";
import { useNavigate } from "react-router-dom";
const FormLoginAdmin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      userServ
        .dangNhap(values)
        .then((res) => {
          // console.log(res);
          //    điều kiện để vào trang admin  check ma loại ngời dùng
          if (res.data.content.maLoaiNguoiDung == "QuanTri") {
            // lưu dữ liệu xún clocal và chuyển hướng tới trang của admin
            saveLocal("user", res.data.content);
            navigate("/admin");
          } else {
            window.location.hef = "http://localhost:3000";
          }
        })
        .catch((err) => {
          console.log(err);
          //   trường hợp khi mà tài khoản mật khẩu không đúng trên server
          alert("tài khoản hoặc mật khẩu không đúng");
          //  clear hết all dữ liệu ở các trường input
          formik.resetForm();
        });
    },
    validationSchema: yup.object({
      taiKhoan: yup.string().required("không được để trống ô input này "),
      matKhau: yup
        .string()
        .required("Không được để trống ô input này")
        .matches("", "Nhập trùng rồi"),
    }),
  });
  return (
    <div>
      <h2 className="font-bold text-2xl">Login Admin</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tài Khoản
          </label>
          <input
            type="text"
            id="taiKhoan"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.taiKhoan}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Nhập Password"
          />
        </div>
        {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
          <p className="text-red-500">{formik.errors.taiKhoan}</p>
        ) : (
          <></>
        )}
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mật Khẩu
          </label>
          <input
            type="text"
            id="matKhau"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.matKhau}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Nhập Password"
          />
        </div>
        {formik.errors.matKhau && formik.touched.matKhau ? (
          <p className="text-red-500">{formik.errors.matKhau}</p>
        ) : (
          <></>
        )}
        <button
          type="submit"
          className="py-1 px-3 rounded bg-green-500 text-white"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default FormLoginAdmin;
