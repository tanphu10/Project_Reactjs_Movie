import React from "react";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { userServ } from "../../services/userServices";
import { getAllUser } from "../../redux/slice/nguoiDungSlice";

//  id , họ tên , email, số điện thoại , mã loại người dùng, xóa sửa
const TableUser = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.nguoiDung);
  // console.log(users);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      //   custom lại cái hiện thị cột
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDT",
      key: "soDT",
    },
    {
      title: "Loại Người Dùng",
      key: "maLoaiNguoiDung",
      dataIndex: "maLoaiNguoiDung",
      render: (text, record, index) => {
        // TEXT chứa giá trị của thuộc tính đó trong data
        console.log(text);
        // record chứa các phần tử trong mảng data
        console.log(record);
        // index là vị trí của phần tử trong mảng data
        console.log(index);
        // text ==" QuanTri" ?"Quản Trị" :"Khách Hàng"
        return (
          <Tag color={text == "QuanTri" ? "magenta" : "blue"}>
            {text == "QuanTri" ? "Quản Trị" : "Khách Hàng"}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            className="py-2 px-5 bg-red-600 text-white rounded-lg hover:bg-red-400 duration-500"
            // sẽ sửa lại thêm một prpconfirm vào để hỏi người dùng có muốn xóa hay không và thêm thông báo khi xóa thành công cũng như thất bại
            onClick={() => {
              userServ
                .deleteUser(record.taiKhoan)
                .then((res) => {
                  alert("xóa thành công");
                  dispatch(getAllUser());
                })
                .catch((err) => {
                  alert("có vấn đề xảy ra");
                });
            }}
          >
            Xóa
          </button>{" "}
          <button className="py-2 px-5 bg-yellow-500 text-white rounded-lg hover:bg-yellow-800">
            Sửa
          </button>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  let newUser = users.map((item, index) => {
    return { ...item, id: index + 1 };
  });
  return <Table columns={columns} dataSource={users.length > 0 && newUser} />;
};

export default TableUser;
