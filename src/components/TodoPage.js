import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../store/slices/bookingSlice";
import {
  Form,
  Input,
  Select,
  Button,
  Card,
  Typography,
  message,
  DatePicker,
} from "antd";

const { Title } = Typography;

const TodoPage = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const movies = useSelector((state) => state.movies.movies);

  const onFinish = (values) => {
    dispatch(addBooking(values));
    message.success(`Квиток на "${values.movie}" заброньовано`);
    form.resetFields();
  };

  return (
    <Card
      title={<Title level={3}>Замовлення квитків</Title>}
      style={{ maxWidth: 600, margin: "0 auto" }}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Ім’я" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="movie" label="Фільм" rules={[{ required: true }]}>
          <Select placeholder="Оберіть фільм">
            {movies.map((m) => (
              <Select.Option key={m.id} value={m.title}>
                {m.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="date" label="Дата" rules={[{ required: true }]}>
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="quantity"
          label="Кількість квитків"
          rules={[{ required: true }]}
        >
          <Input type="number" min={1} />
        </Form.Item>

        <Form.Item name="phone" label="Телефон" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Забронювати
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default TodoPage;
