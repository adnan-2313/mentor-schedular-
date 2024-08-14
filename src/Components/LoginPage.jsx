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
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[69rem] p-[100px_50px] flex justify-between items-center font-DMSANS max-md:justify-center">
        <div className="w-full max-md:hidden">
          <img src={LoginImage} alt="Login" />
        </div>
        <div className="w-full max-md:p-[60px_20px] max-md:w-[80%] max-md:shadow-[0px_-2px_10px_rgba(0,0,0,0.18)] rounded-[20px]">
          <h2 className="text-blue-950 text-[2rem] text-center font-[800]">
            Hello, Welcome
          </h2>
          <form className="w-full p-[40px_20px] flex items-center flex-col gap-10" onSubmit={handleSubmit}>
            <div className="w-[80%] flex flex-row justify-between px-[50px]">
              <label>
                <input
                  type="radio"
                  value="student"
                  checked={userType === "student"}
                  onChange={handleUserTypeChange}
                />
                Student
              </label>
              <label>
                <input
                  type="radio"
                  value="mentor"
                  checked={userType === "mentor"}
                  onChange={handleUserTypeChange}
                />
                Mentor
              </label>
            </div>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
