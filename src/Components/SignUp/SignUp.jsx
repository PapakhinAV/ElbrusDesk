import './index.css';

const SignUp = () => {
  return (
    <div className="blockMain">
      <form className="mainFormBlock">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="firstname" className="form-label">FirstName</label>
          <input type="text" className="form-control" id="firstname" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="surname" className="form-label">Second Name</label>
          <input type="text" className="form-control" id="surname" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="tel" className="form-label">Phone number</label>
          <input type="tel" className="form-control" id="tel" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="submBut">
          <button type="submit" className="btn btn-primary button">Submit</button>
        </div>
      </form>
    </div>

  );
}

export default SignUp;
