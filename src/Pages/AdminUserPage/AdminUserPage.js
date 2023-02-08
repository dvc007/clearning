import React, { useState } from "react";
import withAuth from "./../../HOC/withAuth";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import ListUserPage from "./ListUserPage/ListUserPage";
import ListCourseUserPage from "./ListCourseUserPage/ListCourseUserPage";

const { Header, Sider, Content } = Layout;
function AdminUserPage() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [page, setPage] = useState(<ListUserPage />);

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            onClick={(items) => {
              if (items.key == 1) {
                console.log("1");
                setPage(<ListUserPage />);
              } else {
                console.log("2");
                setPage(<ListCourseUserPage />);
              }
            }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Quản Lý Người Dùng",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "Quản Lý Khóa Học",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>

          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {page}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default withAuth(AdminUserPage);
