import { Row } from "react-bootstrap";
import "./sectionLayout.css";
import AosContainer from "../../common/aos/Aos";
import { useTranslation } from "react-i18next";
function SectionLayout({ title, dataaos, children, id = "", ...rest }) {
  const { t } = useTranslation();
  return (
    <AosContainer dataaos={dataaos} {...rest}>
      {title ? (
        <Row className="justify-content-center mt-5 mb-3">
          <h3 className="section-header" id={id}>
            {t(title)}
          </h3>
        </Row>
      ) : (
        <></>
      )}
      <Row className="justify-content-center mb-3">{children}</Row>
    </AosContainer>
  );
}

export default SectionLayout;
