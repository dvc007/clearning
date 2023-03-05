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
export const putUpdateUser = (update) => {
  return https.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", update);
};

//Xoa Khoa Hoc

export const deleteCourse = (MaKhoaHoc) => {
  return https.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${MaKhoaHoc}`);
};

//Cap nhat Khoa Hoc
export const putUpdateCourse = (updateCourse) => {
  return https.put("/api/QuanLyKhoaHoc/CapNhatKhoaHoc", updateCourse);
};
