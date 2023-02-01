import "../App.css";
import { Icon } from "@iconify/react";
import LiveMonitoring from "./liveMonitoring/LiveMonitoring";
import ValidasiDeviasi from "./validasiDeviasi/ValidasiDeviasi";
import DataTervalidasi from "./dataTervalidasi/DataTervalidasi";
import { useState } from "react";

const Parent = () => {
  const [current, setCurrent] = useState("livemonitoring");
  const [viewidpass, setViewidpass] = useState();
  const [viewstatuspass, setViewstatuspass] = useState();
  const [viewobjectpass, setViewobjectpass] = useState();
  const [viewcctvnamepass, setViewcctvnamepass] = useState();
  const [viewcctvlocationpass, setViewcctvlocationpass] = useState();
  const [viewtimepass, setViewtimepass] = useState();
  const [viewuserpass, setViewuserpass] = useState();
  const [viewcommentpass, setViewcommentpass] = useState();
  const [viewimagepass, setViewimagepass] = useState();

  const handleRoute = (value) => {
    setCurrent(value);
  };

  const handleViewidpass = (value) => {
    setViewidpass(value);
  };

  const handleViewstatuspass = (value) => {
    setViewstatuspass(value);
  };

  const handleViewobjectpass = (value) => {
    setViewobjectpass(value);
  };

  const handleViewcctvnamepass = (value) => {
    setViewcctvnamepass(value);
  };

  const handleViewcctvlocationpass = (value) => {
    setViewcctvlocationpass(value);
  };

  const handleViewtimepass = (value) => {
    setViewtimepass(value);
  };

  const handleViewuserpass = (value) => {
    setViewuserpass(value);
  };

  const handleViewcommentpass = (value) => {
    setViewcommentpass(value);
  };

  const handleViewimagepass = (value) => {
    setViewimagepass(value);
  };

  return (
    <div>
      <div className="navbar-component">
        <div className="nav-border">
          <div className="container">
            <nav className="navbar navbar-expand-md">
              <div className="container-fluid">
                <div className="navbar-brand disabled">
                  <img
                    className="logo"
                    src={require("../assets/logo.png")}
                    alt=""
                  />
                </div>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav gap-2">
                    <li className="nav-item">
                      <a
                        className={
                          "nav-link fw-semibold" +
                          (current == "livemonitoring" ? " page-current" : "")
                        }
                        onClick={() => {
                          setCurrent("livemonitoring");
                        }}
                      >
                        Live Monitoring
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={
                          "nav-link fw-semibold" +
                          (current == "validasideviasi" ? " page-current" : "")
                        }
                        onClick={() => {
                          setCurrent("validasideviasi");
                        }}
                      >
                        Validasi Deviasi
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={
                          "nav-link fw-semibold" +
                          (current == "datatervalidasi" ? " page-current" : "")
                        }
                        onClick={() => {
                          setCurrent("datatervalidasi");
                        }}
                      >
                        Data Tervalidasi
                      </a>
                    </li>
                    <div className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle fw-semibold"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <Icon
                          className="account-icon"
                          icon="bi:person-circle"
                        />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item disabled" href="#">
                            Admin
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Log Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {current == "livemonitoring" ? (
        <LiveMonitoring
          handleRoute={handleRoute}
          handleViewidpass={handleViewidpass}
          handleViewstatuspass={handleViewstatuspass}
          handleViewobjectpass={handleViewobjectpass}
          handleViewcctvnamepass={handleViewcctvnamepass}
          handleViewcctvlocationpass={handleViewcctvlocationpass}
          handleViewtimepass={handleViewtimepass}
          handleViewuserpass={handleViewuserpass}
          handleViewcommentpass={handleViewcommentpass}
          handleViewimagepass={handleViewimagepass}
        />
      ) : current == "validasideviasi" ? (
        <ValidasiDeviasi
          viewidpass={viewidpass}
          viewstatuspass={viewstatuspass}
          viewobjectpass={viewobjectpass}
          viewcctvnamepass={viewcctvnamepass}
          viewcctvlocationpass={viewcctvlocationpass}
          viewtimepass={viewtimepass}
          viewuserpass={viewuserpass}
          viewcommentpass={viewcommentpass}
          viewimagepass={viewimagepass}
        />
      ) : current == "datatervalidasi" ? (
        <DataTervalidasi />
      ) : (
        ""
      )}
    </div>
  );
};

export default Parent;
