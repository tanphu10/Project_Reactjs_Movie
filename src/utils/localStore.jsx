export const saveLocal = (ten, data) => {
  const newData = JSON.stringify(data);
  localStorage.setItem(ten, newData);
};

export const layDuLieuLocal = (ten) => {
  const value = localStorage.getItem(ten);
  //   khi pasre cong có 2 trường hợp xảy ra , một là ó dữ liệu ,hai sẽ là null nếu như không có dữ liệu
//   JSON.parse(value) ? JSON.parse(value) : {};
  if (JSON.parse(value)) {
    return JSON.parse(value);
  } else {
    return null;
  }
};
