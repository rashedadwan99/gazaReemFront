import { Col, Row } from "react-bootstrap";
import Cimg from "../../common/image/Cimg";
import loginLogo from "../../../assets/images/loginLogo.png";
import AosContainer from "../../common/aos/Aos";
import "./AuthLayout.css";
import { memo } from "react";
function AuthLayoutComponent({ children, className = "" }) {
  return (
    <AosContainer dataaos="fade-in">
      <Row
        className={`auth_page justify-content-center align-items-center mt-2 ${className}`}
      >
        {/* <Col xs={11} sm={11} lg={5} className="py-3">
          <Cimg src={loginLogo} className="auth_page_img" />
        </Col> */}
        <Col xs={12} sm={12} lg={12} className="py-3">
          {children}
        </Col>
      </Row>
    </AosContainer>
  );
}
const AuthLayout = memo(AuthLayoutComponent);
export default AuthLayout;
