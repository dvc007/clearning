import { https } from "./configURL";

//lay danh sach nguoi dung
export let getUserList = () => {
  return https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
};

//them nguoi dung
export const postAddUser = (data) => {
  return https.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, data);
};

//xoa nguoi dung
export const deleteUser = (datadelete) => {
  return https.delete(
    `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${datadelete}`
  );
};
//cap nhat nguoi dung
export const putUpdateUser = (dataupdate) => {
  return https.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", dataupdate);
};
