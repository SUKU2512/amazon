import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import "../App.css";
import { MyContext } from "./context";

export default function Login() {
  const [hidemail, setHidemail] = useState(false);
  const [hidepass, setHidepass] = useState(false);
  const [emerror, setEmerror] = useState(false);
  const [error,setError]=useState(false)
  const [push,setPush]=useState("");
  const {setProfileName } = useContext(MyContext);


  const [inpval, setInpval] = useState({
    email: "",
    password1: "",
  });

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  console.log(inpval);

  const addData = (e) => {
    

    let c=0;

    const getuserArr = sessionStorage.getItem("sukanya");

    const { email, password1 } = inpval;

    if (email === "") {
      setHidemail(true);
    } else if (validator.isEmail(email)) {
      setHidemail(false);
      setEmerror(false);
      c++;
    } else {
      setHidemail(false);
      setEmerror(true);
    }

    if (password1 === "") {
      setHidepass(true);
    } else {
      setHidepass(false);
      c++;
    }
    if (c === 2) {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const login=userdata.filter((e,k)=>{
          return e.email === email && e.password1 === password1
        });
        if(login.length === 0)
        {
          setError(true);
        }
        else{
          const userdata = JSON.parse(getuserArr);
          const nameif=userdata.map((e)=>{
            return e.name
          });
          setProfileName(nameif);
          setPush("/Home");
        }
      }
    }
  };

  return (
    <div className="LogApp" style={{marginTop:150}}>
      <div class="bg-text">
        <div class="mb-3 col-lg-12">
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="Enter Email"
            onChange={getdata}
          />
        </div>
        {hidemail ? <p id="error">Mail Field Is Required</p> : " "}
        {emerror ? <p id="error">Please Enter Valid Email-ID</p> : " "}

        <div class="mb-3 col-lg-12">
          <input
            type="password"
            name="password1"
            class="form-control"
            placeholder="Enter Password"
            id="inputPassword"
            onChange={getdata}
          />
        </div>

        {hidepass ? <p id="error">Password Field Is Required</p> : " "}
        {error ? <p id="error">Invalid Details</p> : " "}
        <div className="mb-3 col-lg-12">
          <Link to={push}>
            <button
              onClick={() => addData()}
              type="submit"
              className="mb-3 col-lg-12 "
              id="btn"
            >
              LOG-IN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
