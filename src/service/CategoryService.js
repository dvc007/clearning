import { https } from "./configURL"



export let getCategoryCourse = () => {
    return https.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
}




export let getCourseByCategory = (data) => {
    return https.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${data}&MaNhom=GP01`)
}

export let getInforCourse = (dataInfo) => {
    return https.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${dataInfo}`)
}