import { useState } from "react";
import LoginImage from "../Utils/Login Image.webp";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userType) {
      alert("Please select a user type");
      return;
    }
      navigate(`/${userType}`);
  };

  return (
    <div className="w-full flex justify-between items-center p-[50px_80px]">
      <div className="w-full max-md:hidden">
        <img src={LoginImage} alt="Login" />
      </div>
      <div className="w-full  p-[100px_80px] flex flex-col justify-center items-center ">
        <h2 className="text-blue-950 text-[2rem] mb-[100px] text-center font-[800]">
          Hello, Welcome
        </h2>
        <div className="text-3xl  flex flex-row mb-[30px] gap-[2rem] items-center justify-center">
          <label className="">
            <input
              type="radio"
              value="student"
              className="size-5 mx-[1rem]"
              checked={userType === "student"}
              onChange={handleUserTypeChange}
            />
            Student
          </label>
          
          <label>
            <input
              type="radio"
              value="mentor"
              className="size-5 mx-[1rem] text-blue-600"
              checked={userType === "mentor"}
              onChange={handleUserTypeChange}
            />
            Mentor
          </label>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-[20rem] shadow-[0px_-2px_10px_rgba(0,0,0,0.4)] rounded-[10px] text-white bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 p-[10px_20px]"
        >
          Login
        </button>

        {/* <form className="w-full p-[40px_20px] flex items-center flex-col gap-10" onSubmit={handleSubmit}>
            
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-[20rem] p-[10px_20px_10px_10px] border-[0.1px] border-gray-400 rounded-[5px] outline-blue-500"
              />
              <input
                type="email"
                placeholder="Username Or Email"
                className="w-[20rem] p-[10px_20px_10px_10px] border-[0.1px] border-gray-400 rounded-[5px] outline-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-[20rem] p-[10px_20px_10px_10px] border-[0.1px] border-gray-400 rounded-[5px] outline-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-[20rem] shadow-[0px_-2px_10px_rgba(0,0,0,0.4)] rounded-[10px] text-white bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 p-[10px_20px]"
            >
              Login as {userType}
            </button>
          </form> */}
      </div>
    </div>
  );
};

export default LoginPage;
