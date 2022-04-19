import { useRef, useState } from "react";

const Input = () => {
  const [isValid, setIsValid] = useState({ email: false, password: false });
  const passwordRef = useRef();

  const onEmailChange = (e) => {
    setIsValid({ ...isValid, email: e.target.validity.valid });
  };

  const onEmailBlur = (e) => {
    if (isValid.email) {
      e.target.classList.remove("border-red-500");
      e.target.parentElement.nextSibling.classList.replace("visible", "hidden");
    } else {
      e.target.classList.add("border-red-500");
      e.target.parentElement.nextSibling.classList.replace("hidden", "visible");
    }
  };

  const togglePasswordVisibility = (e) => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
      e.target.classList.replace("text-gray-300", "text-cyan-500");
      e.target.innerText = "visibility";
    } else {
      passwordRef.current.type = "password";
      e.target.classList.replace("text-cyan-500", "text-gray-300");
      e.target.innerText = "visibility_off";
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
          className="focus:outline-none w-full pl-2 pr-8 border-2 leading-loose placeholder:italic"
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
      <span className="hidden text-xs text-red-500">Invalid Email Type</span>
      <div className="relative mt-2 before:content-['Password'] before:text-xs">
        <input
          required
          ref={passwordRef}
          type="password"
          title="Type your password."
          placeholder="Password"
          className="focus:outline-none w-full pl-2 pr-8 border-2 leading-loose placeholder:italic"
        />
        <span
          onClick={togglePasswordVisibility}
          className="material-icons absolute right-1 translate-y-1/4 text-gray-300"
        >
          visibility_off
        </span>
      </div>
    </div>
  );
};

export default Input;
