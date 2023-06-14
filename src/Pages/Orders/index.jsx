import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../API";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orden de Compra </Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Descripcion",
            dataIndex: "title",
          },
          {
            title: "Precio",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: " Descuento",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Cantidad",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
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
export default Orders;
