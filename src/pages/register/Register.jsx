import "./register.scss";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            the text areadkjfkaj fdkahfjaks f sdhfgjkah hsf hdfh sudf fh dshfkas
            fkahsfk a f hfkha
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="username" />
            <input type="email" placeholder="Email" />

            <input type="password" placeholder="password" />

            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
