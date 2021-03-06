import { css } from "@emotion/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DotLoader from "react-spinners/DotLoader";
import WelcomeAdmin from "../../src/Components/Dashboard/Admin/WelcomePage/WelcomeAdmin";
import WelcomeUser from "../../src/Components/Dashboard/User/WelcomePage/WelcomeUser";
import WelcomeVendor from "../../src/Components/Dashboard/Vendor/WelcomePage/WelcomeVendor";
import DashAdminMenu from "./DashMenu/DashAdminMenu";
import DashUserMenu from "./DashMenu/DashUserMenu";
import DashVendorMenu from "./DashMenu/DashVendorMenu";

const Dashboard = () => {
  const [color, setColor] = useState("green");


  const user = useSelector((state) => state.states.user);

  const [control, setControl] = useState(false);
  const [loading, setLoading] = useState(true);

/*   // users
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setLoading(true);
    setControl(true);
    axios.get("/api/users").then(response => {
      setUsers(response.data);
      setLoading(false);
    });
  }, [control]); */



  const email = user?.email


 /*  const userNow = users.filter(user => user?.email === email)[0]
  console.log(userNow?.role);
  let role = userNow?.role */

  const override = css`
  display: block;
  margin: 0 auto;
  `;

  return (
    <div>
      <style jsx>
        {`
          ::-webkit-scrollbar {
            width: 1px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: darkcyan;
          }
        `}
      </style>
      <div>
        {/* {
          loading && (
            <DotLoader color={color} loading={loading} css={override} size={60} />
          )
        } */}
      </div>
      {
        user?.email && (
          <div>
            <div id="dashboard-container" className="">
            <DashVendorMenu />
            {/* <DashAdminMenu /> */}
            {/* <DashUserMenu /> */}
            </div>
            <div id="main-content" className="pt-20 pr-8 pl-8 lg:pl-80 bg-gray-100">
            <WelcomeVendor />
            {/* <WelcomeAdmin /> */}
            {/* <WelcomeUser /> */}
              </div>
          </div>

        )
      }
      {/* {!loading && userNow && (

        <div >


          <div id="dashboard-container" className="">
            {userNow?.role === 'admin' && <DashAdminMenu />}
            {userNow?.role === 'vendor' && <DashVendorMenu />}

            {userNow.role === 'user' && <DashUserMenu />}
            {!userNow.role && <DashUserMenu />}



            <div id="main-content" className="pt-24 pr-8 pl-8 lg:pl-80">
              {userNow.role === 'admin' && <WelcomeAdmin />}
              {userNow.role === 'vendor' && <WelcomeVendor />}
              {!userNow.role && <WelcomeUser />}
              {userNow.role === 'user' && <WelcomeUser />}
            </div>

          </div>
        </div>
      )
      } */}
    </div >
  );

};

export default Dashboard;