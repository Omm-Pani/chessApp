import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <div>
      <div className="login">
        <div className="login_header">CHESSLABS</div>
        <div className="login_wrap">
          <div className="login_form">
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <div className="input_wrap">
                <input
                  type="text"
                  name="firstName"
                  {...register("firstName", {
                    required: "*This field is required",
                    maxLength: { value: 20, message: "*maximum 20 letters" },
                  })}
                  placeholder="First Name"
                />
                <p className="error-message">{errors.firstName?.message}</p>
                <input
                  type="text"
                  name="lastName"
                  {...register("lastName", {
                    required: "*This field is required",
                    maxLength: { value: 20, message: "*maximum 20 letters" },
                  })}
                  placeholder="Last Name"
                />
                <p className="error-message">{errors.lastName?.message}</p>

                <input
                  type="text"
                  name="userName"
                  {...register("userName", {
                    required: "*This field is required",
                  })}
                  placeholder="UserName"
                />
                <p className="error-message">{errors.userName?.message}</p>

                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  {...register("password", {
                    required: "*This field is required",
                    minLength: { value: 6, message: "*minimum 6 characters" },
                    maxLength: { value: 16, message: "*maximum 20 characters" },
                  })}
                />
                <p className="error-message">{errors.password?.message}</p>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
