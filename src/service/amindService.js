import { https } from "./configURL";

//lay danh sach nguoi dung
export let getUserList = () => {
  return https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
};

//them nguoi dung
// export let postAddUser = (kkk) => {
//   return https.post("/api/QuanLyNguoiDung/ThemNguoiDung", kkk);
// };

export const postAddUser = (data) => {
  return https.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, data);
};
