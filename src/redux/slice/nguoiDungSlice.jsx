import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { layDuLieuLocal } from "../../utils/localStore";
import { userServ } from "../../services/userServices";

//  nơi tạo các createAsyncThunk để xử lí bất đồng bộ trước khi bắn dữ liệu lên store bằng redux-thunk
// bên trong createAsyncthunk sẽ có 2 tham số 1 là type của hàm , thứ 2 sẽ là hàm cần xử lí bất đồng bộ
export const getAllUser = createAsyncThunk(
  "/nguoiDung/getAllUser",
  async () => {
    const res = await userServ.getAllUser();
    //  sẽ return về giá trị muốn store lưu trữ
    return res.data.content;
  }
);

const initialState = {
  hoTen: layDuLieuLocal("user"),
  users: [],
};
export const nguoiDungSlice = createSlice({
  name: "nguoiDung",
  initialState,
  reducers: {
    //  tạo một phương thức giúp xử lí state bên trên store redux
    setDuLieuHoTen: (state, action) => {
      // check xem họ tên có dữ kiệu hay không nếu không có set dữ liệu cho nó
      if (state.hoTen == null) {
        state.hoTen = action.payload;
      }
    },
  },
  //  không cho phép viết các phương thức bất đồng bộ bên trong reducers
  // tại sao ở đây người ta lại tạo extraReducers ?
  //  giúp tách biệt các logic bất đồng bộ ra khỏi reducer vì khi xử lí bất đồng bộ có nhiều trường hợp xảy ra
  extraReducers: (builder) => {
    //  khi xử lí thì bên trong hàm sẽ có 3 phương thức tương ứng với các trường hợp chạy thành công(fullfilled) ,đang chạy(pending), thất bại(reject)
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      // console.log(state);
      // bên trong action thuộc tính payload sẽ chứa các giá trị được trả về từ hàm chạy createAsyncThunk
      state.users = action.payload;
      // console.log(action);
    });
    // reject sẽ chạy khi mà bất đồng bộ chạy có lỗi sẽ vào case này và xử lí
    builder.addCase(getAllUser.rejected, (state, action) => {
      // console.log(state);
      // bên trong action thuộc tính payload sẽ chứa các giá trị được trả về từ hàm chạy createAsyncThunk
      state.users = [
        {
          hoTen: "Khải",
          maLoaiNguoiDung: "QuanTri",
        },
      ];
      // console.log(action);
    });
  },
});

export const { setDuLieuHoTen } = nguoiDungSlice.actions;

export default nguoiDungSlice.reducer;
