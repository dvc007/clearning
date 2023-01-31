import { https } from "./configURL"

export let getCourse = () => {
    return https.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
}

export let getSearchCourse = (dataSearch) => {
    return https.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${dataSearch}&MaNhom=GP01`)
}