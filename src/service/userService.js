import { https } from './configURL';
export let postLogin = (data) => {
    return https.post('/api/QuanLyNguoiDung/DangNhap', data)
}

export let postRegister = (xxxx) => {
    return https.post('/api/QuanLyNguoiDung/DangKy', xxxx)
}

export let putUser = () => {
    return https.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung')
}

