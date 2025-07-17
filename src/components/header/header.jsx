import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import {Logo,Logoutbtn} from '../index';

function Header() {
  const authstatus = useSelector((state) => state.Auth.status);
  const navigate = useNavigate();
  const navitem = [
    {
      name: "Home",
      path: "/",
      isactive: true,
    },
    {
      name: "Login",
      path: "/login",
      isactive: !authstatus,
    },
    {
      name: "Signup",
      path: "/signup",
      isactive: !authstatus,
    },
    {
      name: "All post",
      path: "/allpost",
      isactive: authstatus,
    },
    {
      name: "Add Post",
      path: "/addpost",
      isactive: authstatus,
    },
  ];

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark w-100 justify-align-content-lg-stretch">
      <div className="container m-0 ">
        <div onClick={()=>{navigate("/")}}>
          <Logo/>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navitem.map((item) =>
              item.isactive ? (
                <li key={item.path}>
                  <button
                    className="bg-transparent border-0 text-white p-3"
                    type="button"
                    
                    onClick={() => {
                      navigate(item.path);
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
          
        </div>
        
      </div>
      {authstatus?(
            <div className="ms-auto pe-3">
            <Logoutbtn/>
            </div>
          ):(null)}
    </nav>
  );
}

export default Header;
