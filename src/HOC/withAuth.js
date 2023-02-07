import { useEffect } from "react";
import { userLocalService } from "./../service/localService";

const withAuth = (WrappedComponent) => {
  function WithAuth() {
    useEffect(() => {
      if (userLocalService.get()?.maLoaiNguoiDung !== "HV")
        window.location.href = "/";
    }, []);
    return <WrappedComponent />;
  }
  return WithAuth;
};
export default withAuth;
