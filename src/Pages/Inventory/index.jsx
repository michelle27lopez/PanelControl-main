import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Productos</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Imagen",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "Nombre",
            dataIndex: "title",
          },
          {
            title: "Precio",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Calificacion",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },

          {
            title: "Marca",
            dataIndex: "brand",
          },
          {
            title: "Categoria",
            dataIndex: "category",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}
export default Inventory;
