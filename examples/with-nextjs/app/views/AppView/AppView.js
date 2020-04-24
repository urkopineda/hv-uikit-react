/*
 * Copyright 2019 Hitachi Vantara Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import HvHeader, { HvHeaderBrand } from "@hv/uikit-react-core/dist/NewHeader";
import Login from "@hv/uikit-react-core/dist/Login";
import Footer from "@hv/uikit-react-lab/dist/Footer";

import companyLogo from "./logo.svg";
import backgroundImage from "./bg.png";

const handleLogin = () => alert("Welcome!");

const AppView = ({ classes }) => (
  <div>
    <HvHeader>
      <HvHeaderBrand logo={<img src={companyLogo} />} />
    </HvHeader>
    <div className={classes.login}>
      <Login
        login={handleLogin}
        backgroundImage={backgroundImage}
        backgroundImageSize="cover"
      />
    </div>
    <Footer />
  </div>
);

export default AppView;
