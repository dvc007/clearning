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

const { Header, Sider, Content } = Layout;
function AdminUserPage() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
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
            onClick={() => {}}
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
            <ListUserPage />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default withAuth(AdminUserPage);
