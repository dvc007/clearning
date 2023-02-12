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

export let getCategoryCourse = () => {
  return https.get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
};

//khoa hoc back end front end
export let getCourseByCategory = (data) => {
  return https.get(
    `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${data}&MaNhom=GP01`
  );
};

export let getCourseByCategoryBackEnd = () => {
  return https.get(
    `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=BackEnd&MaNhom=GP01`
  );
};
export let getCourseByCategoryFontend = () => {
  return https.get(
    `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=FrontEnd&MaNhom=GP01`
  );
};

export let getInforCourse = (dataInfo) => {
  return https.get(
    `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${dataInfo}`
  );
};
