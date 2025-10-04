import { useTranslation } from "react-i18next";
import { routes } from "../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuthAction } from "../redux/actions/userActions";
import { removeUserToken } from "../services/userService";
import { CToast } from "../components/common/toast/CToast";

export function usePagesLinks() {
  const { t } = useTranslation();
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return [
    {
      label: t("about-us"),
      path: routes.aboutusRoute,
    },
    {
      label: t("categories"),
      path: routes.cCategoryRoute,
    },

    {
      label: t("ads"),
      path: routes.adsRoute,
    },

    isAuth
      ? {
          label: t("post_ad"),
          path: routes.postAdRoute,
        }
      : {},
    isAuth
      ? {
          label: t("my-ads"),
          path: routes.myAdsRoute,
        }
      : {},
    {
      label: t("p_dir"),
      path: routes.p_dir,
    },
    {
      label: t("terms_c"),
      path: routes.term_c,
    },

    !isAuth
      ? {
          label: t("join_us"),
          path: routes.registerRoute,
        }
      : {
          label: t("logout"),
          onClick: () => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            removeUserToken();
            dispatch(toggleAuthAction());
            CToast("success", "logout-message");
          },
        },
    ,
  ].filter((l) => l.label);
}
