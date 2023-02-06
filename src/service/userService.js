import { https } from "./configURL";
//dang nhap
export let postLogin = (data) => {
  return https.post("/api/QuanLyNguoiDung/DangNhap", data);
};

//dang ky user
export let postRegister = (xxxx) => {
  return https.post("/api/QuanLyNguoiDung/DangKy", xxxx);
};

//cap nha thong tin
export let putUser = (dataa) => {
  return https.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", dataa);
};

// lay danh sach da dang ky khoa hoc
export const postCourseRegister = (datad) => {
  return https.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan", datad);
};

export const deleteCourseRegister = (dataDelete) => {
  return https.post(`/api/QuanLyKhoaHoc/HuyGhiDanh`, dataDelete);
};
