import { https } from "./config";

export const userServ = {
  dangNhap: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },

  getAllUser: () => {
    return https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
    //  vì sao chổ này lại .get trong khi bên config lại chỉ có https
  },
  deleteUser: (taiKhoan) => {
    return https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  addUser:(data)=>{
  return https.post(
    '/api/QuanLyNguoiDung/ThemNguoiDung',data
  )
  }
};
