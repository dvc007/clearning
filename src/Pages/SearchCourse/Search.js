import React from "react";
import { useParams } from "react-router-dom";
import { Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

export default function Search() {
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  let params = useParams();
  let stringCourse = params.tenKhoaHoc;
  const onSearch = (value: stringCourse) => {
    window.location.href = `/search/${value}`;
  };
  return (
    <div>
      <div className="px-3 ">
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
      </div>
    </div>
  );
}
