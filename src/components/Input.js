import { useRef, useState } from "react";

const Input = () => {
  const [isValid, setIsValid] = useState({ email: false, password: false });
  const [invalidAlert, setInvalidAlert] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const passwordRef = useRef();

  const onEmailChange = (e) => {
    setIsValid({ ...isValid, email: e.target.validity.valid });
  };

  const onEmailBlur = (e) => {
    if (isValid.email) {
      e.target.classList.remove("border-red-500");
      setInvalidAlert(false);
    } else {
      e.target.classList.add("border-red-500");
      setInvalidAlert(true);
    }
  };

  const togglePasswordVisibility = () => {
    if (passwordVisible) {
      passwordRef.current.type = "password";
      setPasswordVisible(false);
    } else {
      passwordRef.current.type = "text";
      setPasswordVisible(true);
    }
  };

  return (
    <div className="flex flex-col w-[300px] after:ml-0.5 after:text-red-500">
      <div className={`relative before:content-['Email'] before:text-xs`}>
        <input
          required
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Type your Email."
          placeholder="name@example.com"
          className="w-full pl-2 pr-8 border-2 leading-loose placeholder:italic focus:outline-cyan-500"
          onChange={onEmailChange}
          onBlur={onEmailBlur}
        />
        <span
          className={`material-icons absolute right-1 translate-y-1/4 ${
            isValid.email ? "text-cyan-500" : "text-gray-300"
          }`}
        >
          check_circle
        </span>
      </div>
      {invalidAlert && (
        <span className="text-xs text-red-500">Invalid Email Type</span>
      )}
      <div className="relative mt-2 before:content-['Password'] before:text-xs">
        <input
          required
          ref={passwordRef}
          type="password"
          title="Type your password."
          placeholder="Password"
          className="w-full pl-2 pr-8 border-2 leading-loose placeholder:italic focus:outline-cyan-500"
        />
        <span
          onClick={togglePasswordVisibility}
          className={`material-icons absolute right-1 translate-y-1/4 ${
            passwordVisible ? "text-cyan-500" : "text-gray-300"
          } cursor-pointer`}
        >
          {passwordVisible ? "visibility" : "visibility_off"}
        </span>
      </div>
    </div>
  );
};

export default Input;
