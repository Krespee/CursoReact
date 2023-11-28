import { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";

export const FormularioComponent = () => {
  const focusRef = useRef()
  console.log(focusRef);

  const initialform = {
    userName: "",
    email: "",
    password: "",
  };

  const { userName, email, password, formState, onInputChange } = useForm(initialform);
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  useEffect(()=>{
    focusRef.current.focus()
  },[])
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          ref={focusRef}
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          UserName
        </label>
        <input
          type="text"
          className="form-control"
          name="userName"
          placeholder="Enter your user name"
          value={userName}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
