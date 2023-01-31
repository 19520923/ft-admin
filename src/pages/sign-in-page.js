import { useCallback, useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import API from "services/axiosClient";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

import { RootStore } from "store/RootStore";
import { ACCESS_TOKEN } from "constants/constants";
import Storage from "library/mobx-persist/storage";
import { PROFILE } from "constants/constants";

function SignInPage() {
  const [isShowedPassword, setIsShowedPassword] = useState(false);
  const { setProfile, setIsLoggedIn } = RootStore;
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    if(isShowedPassword === false) {
      setIsShowedPassword(true)
    } else {
      setIsShowedPassword(false)
    }
  };

  const _handleLogin = async () => {
    try {
      const { user, token } = await API.login(info);
      setIsLoggedIn(true);
      setProfile(user);
      await Storage.setItem(ACCESS_TOKEN, token);
      await Storage.setItem(PROFILE, JSON.stringify(info));
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const _handleChange = useCallback((value) => {
    setInfo((state) => ({ ...state, ...value }));
  }, []);

  return (
    <CoverLayout
      top={8}
      bottom={8}
      title="Welcome back"
      description="Enter your email and password to sign in with Foodtalk"
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="email"
            placeholder="Email"
            value={info.email}
            onChange={(e) => _handleChange({ email: e.target.value })}
          />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type={isShowedPassword ? "text" : "password"}
            placeholder="Password"
            value={info.password}
            onChange={(e) => _handleChange({ password: e.target.value })}
          />
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={isShowedPassword} onChange={handleShowPassword} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleShowPassword}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Show password
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton onClick={_handleLogin} variant="gradient" color="primary" fullWidth>
            sign in
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignInPage;
