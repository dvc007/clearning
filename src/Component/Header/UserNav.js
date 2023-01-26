import React from 'react'
import { useSelector } from 'react-redux'
import { userLocalService } from '../../service/localService';

export default function UserNav() {
    let user = useSelector((state) => {
        return state.userSlice.user;
    })
    console.log("User:", user);
    const handleLogout = () => {
        //xoa du lieu
        userLocalService.remove()
        window.location.href = '/'
        // window.location.reload()
    }
    const renderContent = () => {
        if (user) {
            //da dang nhap
            return (
                <>
                    <span>{user?.hoTen}</span>
                    <button onClick={handleLogout} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mx-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '>Dang Xuat</button>
                </>
            )
        }
        else {
            return <div>
                <button
                    onClick={() => { window.location.href = '/login' }}
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mx-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
                >
                    Dang Nhap
                </button>
                <button
                    onClick={() => { window.location.href = '/register' }}
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mx-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
                >
                    Dang Ky
                </button>
            </div>
        }
    }

    return <>
        <div>{renderContent()}</div>
    </>
}
