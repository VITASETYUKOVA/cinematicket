import React from "react";
import { useLoaderData } from "react-router-dom";
import { Card, Row, Col } from "antd";

const { Meta } = Card;

const HomePage = () => {
  const movies = useLoaderData();

  if (!Array.isArray(movies)) return <div>Фільми не завантажені</div>;

  return (
    <Row gutter={[16, 16]}>
      {movies.map((movie) => (
        <Col key={movie.id} xs={24} sm={12} md={8} lg={6}>
          <Card hoverable cover={<img alt={movie.title} src={movie.image} />}>
            <Meta title={movie.title} description={movie.description} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default HomePage;
