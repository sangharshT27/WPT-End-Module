import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const Update = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const params = useLocation();
  console.log(params.state.user);
  let user = params.state.user;
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setName(user.name);
    setAge(user.age);
    setMobile(user.mobile);
    setEmail(user.email);
  }, []);

  function updateUser() {
    // axios is api/lib to use ajax in react
    // ajax is Asynchronous Javascript and XML

    axios
      .post("http://127.0.0.1:4000/update", {
        id: user.id,name, age, mobile, email,
      })
      .then((response) => {
        if (response.data) {
          setFailed(response.data);
          setTimeout(() => {
            navigate("/welcome");
          }, 2000);
        } else {
          setFailed(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
      <h3>{failed ? "Update failed" : "Update Success"}</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
        placeholder="Enter age"
      />
      <input
        type="tel"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Enter mobile"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <button onClick={updateUser}>Update</button>
    </>
  );
};