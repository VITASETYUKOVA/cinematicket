import React, { useRef, useState } from "react";
import { Layout, Menu, Button, Input } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const AppLayout = () => {
  const footerRef = useRef(null);
  const [name, setName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);
  const handleNameSubmit = (e) => {
    if (e.key === "Enter" && name.trim()) {
      setIsNameEntered(true);
    }
  };

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#001529" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Головна</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/todo">Як замовити</Link>
          </Menu.Item>
          <Menu.Item key="3" style={{ marginLeft: "auto", cursor: "default" }}>
            {isNameEntered ? (
              <span style={{ color: "#fff" }}>Привіт, {name}</span>
            ) : (
              <Input
                placeholder="Ваше ім’я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleNameSubmit}
                size="small"
                style={{ width: 120 }}
              />
            )}
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: "50px" }}>
        <Outlet />
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <Button type="primary" size="large" onClick={scrollToFooter}>
            Зв'язатися з нами
          </Button>
        </div>
      </Content>

      <Footer
        ref={footerRef}
        style={{
          textAlign: "center",
          backgroundColor: "#001529",
          color: "#fff",
          paddingTop: 100,
        }}
      >
        <div>
          <PhoneOutlined /> Телефон: +380 123 456 789 | <MailOutlined /> Email:
          email@example.com
        </div>
        <div>
          <a href="/privacy" style={{ color: "#fff" }}>
            Політика конфіденційності
          </a>{" "}
          |{" "}
          <a href="/terms" style={{ color: "#fff" }}>
            Умови використання
          </a>
        </div>
      </Footer>
    </Layout>
  );
};

export default AppLayout;
