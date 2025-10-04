import { Col, Row } from "react-bootstrap";
import Cimg from "../../common/image/Cimg";
import AosContainer from "../../common/aos/Aos";
import "./AuthLayout.css";
import { memo } from "react";
import MediaCarousel from "../../common/carousel/MediaCarousel";
import first from "../../../assets/images/first.png";
import second from "../../../assets/images/second.png";
import last from "../../../assets/images/last.png";
function AuthLayoutComponent({ children, className = "" }) {
  return (
    <AosContainer dataaos="fade-in">
      <Row
        className={`auth_page justify-content-center align-items-center ${className}`}
      >
        <Col xs={11} sm={11} md={6} lg={6} className="py-3 first-sec">
          <MediaCarousel images={[first, second, last]} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="py-3 second-sec">
          <Row className="align-items-center justify-content-center">
            <Col sm={10} md={8}>
              <Row className="justify-content-center">{children}</Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </AosContainer>
  );
}
const AuthLayout = memo(AuthLayoutComponent);
export default AuthLayout;
