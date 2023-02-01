import "../../App.css";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useState, useEffect } from "react";

const Login = () => {
  const [data, setData] = useState([{}]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordtype, setPasswordtype] = useState("password");
  const [incorrect, setIncorrect] = useState("");
  const incorrectAlert = "*Incorrect username or password";

  useEffect(() => {
    axios
      .get("/user/" + username)
      .then((res) => {
        console.log("Getting from ::::", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [username]);

  function handlerUsername(data) {
    setUsername(data.target.value);
  }

  function handlerPassword(data) {
    setPassword(data.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIncorrect(
        (data.status == "Success") & (password == username) ? "" : "Incorrect"
      );
      if ((data.status == "Success") & (password == username)) {
        window.location.replace("http://localhost:3000/mining-eyes-analytics");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="bg-img">
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div className="card bg-light rounded-3">
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <div className="card-col-left">
                  <div className="mb-5">
                    <img
                      className="logo"
                      src={require("../../assets/logo.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="fw-semibold">Log in</h3>
                    <p className="mb-4">
                      Selamat datang kembali! Silahkan isi beberapa detail
                      dibawah ini.
                    </p>
                  </div>
                  <div className="mb-2">
                    <h6 className="fw-semibold">Username/SID</h6>
                    <div className="d-flex">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Masukkan Username atau SID"
                        defaultValue={username}
                        onChange={handlerUsername}
                        onKeyDown={handleKeyDown}
                      />
                      <div className="d-flex align-items-center checker-container">
                        <Icon
                          className={
                            "checker" +
                            (username == ""
                              ? " text-white"
                              : data.status == "Success"
                              ? " text-success"
                              : " text-danger")
                          }
                          icon={
                            data.status == "Success"
                              ? "akar-icons:circle-check"
                              : "akar-icons:circle-x"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h6 className="fw-semibold">Password</h6>
                    <div className="d-flex">
                      <input
                        className="form-control"
                        type={passwordtype}
                        placeholder="Masukkan Password"
                        defaultValue={password}
                        onChange={handlerPassword}
                        onKeyDown={handleKeyDown}
                      />
                      <div className="view-container">
                        {passwordtype == "password" ? (
                          <div
                            onClick={() => {
                              setPasswordtype("text");
                            }}
                          >
                            <Icon
                              className="view text-black-50"
                              icon="clarity:eye-line"
                            />
                          </div>
                        ) : (
                          <div
                            onClick={() => {
                              setPasswordtype("password");
                            }}
                          >
                            <Icon
                              className="view text-black-50"
                              icon="clarity:eye-hide-line"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      className="d-grid text-decoration-none"
                      href={
                        (data.status == "Success") & (password == username)
                          ? "/mining-eyes-analytics"
                          : "#"
                      }
                    >
                      <button
                        className="btn btn-success"
                        type="button"
                        onClick={() => {
                          setIncorrect(
                            (data.status == "Success") & (password == username)
                              ? ""
                              : "Incorrect"
                          );
                        }}
                      >
                        Masuk
                      </button>
                    </a>
                  </div>
                  <div className="mt-3">
                    <p className="p-small text-danger">
                      {incorrect == "Incorrect" ? incorrectAlert : ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  id="carouselExampleDark"
                  className="carousel carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div
                      className="carousel-item active"
                      data-bs-interval="3000"
                    >
                      <img
                        src={require("../../assets/login-slider-png/slider_live_monitoring.png")}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                      <img
                        src={require("../../assets/login-slider-png/slider_validasi_deviasi.png")}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={require("../../assets/login-slider-png/slider_data_tervalidasi.png")}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
