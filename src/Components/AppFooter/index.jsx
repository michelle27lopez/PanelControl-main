import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+123456789">+57 3052270634</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Politicas de Privacidad
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Terminos de Uso
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
