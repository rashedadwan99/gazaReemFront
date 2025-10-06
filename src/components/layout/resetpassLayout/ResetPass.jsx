import AosContainer from "../../common/aos/Aos";
import { Col, Row } from "react-bootstrap";
import "./ResetPass.css";
function ResetPass({ children, className }) {
  return (
    <AosContainer dataaos="fade-in">
      <Row
        className={`reset-pass justify-content-center align-items-center ${className}`}
      >
        <Col xs={12} sm={12} md={6} lg={5} className="reset-pass-form p-5">
          {children}
        </Col>
      </Row>
    </AosContainer>
  );
}

export default ResetPass;
