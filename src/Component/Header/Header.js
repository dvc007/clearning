import React, { useEffect, useState } from "react";
import UserNav from "./UserNav";
import { getCategoryCourse } from "./../../service/CourseService";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

export default function Header() {
  const [category, setcategory] = useState([]);
  useEffect(() => {
    getCategoryCourse()
      .then((result) => {
        setcategory(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const items = [
    {
      label: (
        <div>
          {category.map((item, index) => (
            <a
              className='uppercase block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-slate-100 dark:border-gray-700"'
              target="_blank"
              rel="noopener noreferrer"
              href={`/khoahoc/${item.maDanhMuc}`}
              key={item.maDanhMuc}
            >
              {item.tenDanhMuc}
            </a>
          ))}
        </div>
      ),
      key: "0",
    },
  ];

  return (
    <div>
      <div className="w-full pt-11 mt-11">
        <nav className="header">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="/#" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                C-Learning
              </span>
              {/* <div className="px-3 ">
                <form className="">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="Search">
                      <Space direction="vertical">
                        <Search
                          suffix={suffix}
                          placeholder="input search text"
                          onSearch={onSearch}
                          style={{ width: 200 }}
                        />
                      </Space>
                    </div>
                  </div>
                </form>
              </div> */}
            </a>

            <div className="flex md:order-2 ">
              <UserNav />
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="items-center  justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 mt-4 border  border-gray-100 rounded-lg bg-slate-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="/#"
                    className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    <Dropdown
                      menu={{
                        items,
                      }}
                    >
                      <a href="/#" onClick={(e) => e.preventDefault()}>
                        <Space>
                          DANH MUC
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  </a>
                </li>
                <li>
                  <a href="/khoahoc" className="header-tailwind">
                    KHÓA HỌC
                  </a>
                </li>

                <li>
                  <a href="/event" className="header-tailwind">
                    BLOG
                  </a>
                </li>
                <li>
                  <a href="/about" className="header-tailwind">
                    VỀ CHÚNG TÔI
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
