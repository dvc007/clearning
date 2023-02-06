import { https } from "./configURL";

export let getCourse = () => {
  return https.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01");
};

export let getSearchCourse = (dataSearch) => {
  return https.get(
    `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${dataSearch}&MaNhom=GP01`
  );
};

export let postRegisterCourse = (data) => {
  return https.post("/api/QuanLyKhoaHoc/DangKyKhoaHoc", data);
};
