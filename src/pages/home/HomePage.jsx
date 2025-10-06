import { removeUserToken } from "../../services/userService";
import { useDispatch } from "react-redux";
import CButton from "../../components/common/button/CButton";
import { toggleAuthAction } from "../../redux/actions/userActions";

function HomePage() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    removeUserToken();
    dispatch(toggleAuthAction());
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <CButton label="logout" onClick={handleLogOut} variant="contained" />
    </div>
  );
}

export default HomePage;
