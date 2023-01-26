import { https } from "./configURL"

export let getCourse = () => {
    return https.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
}
