import "../../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Validation = ({ viewid }) => {
  const [data, setData] = useState([{}]);
  const [deviationstatus, setDeviationstatus] = useState();
  const [checkbox1, setCheckbox1] = useState("off");
  const cbvalue1 =
    checkbox1 == "on"
      ? "Unit hauling road jarak kurang dari 50 meter terhadap unit di depannya. "
      : "";
  const [checkbox2, setCheckbox2] = useState("off");
  const cbvalue2 =
    checkbox2 == "on"
      ? "Double trailer, jarak aman unit kurang dari 180 meter. "
      : "";
  const [checkbox3, setCheckbox3] = useState("off");
  const cbvalue3 =
    checkbox3 == "on" ? "Jarak aman di area pit kurang dari 40 meter. " : "";
  const [checkbox4, setCheckbox4] = useState("off");
  const cbvalue4 =
    checkbox4 == "on"
      ? "Pekerja/Orang berada di luar unit area pertambangan. "
      : "";
  const [checkbox5, setCheckbox5] = useState("off");
  const cbvalue5 = checkbox5 == "on" ? "Tidak ada deviasi. " : "";
  const [checkbox6, setCheckbox6] = useState("off");
  const [tavalue, setTavalue] = useState("");
  const deviationcomment =
    cbvalue1 +
    "" +
    cbvalue2 +
    "" +
    cbvalue3 +
    "" +
    cbvalue4 +
    "" +
    cbvalue5 +
    "" +
    tavalue;

  useEffect(() => {
    axios
      .get("/deviation/" + viewid)
      .then((res) => {
        console.log("Getting from ::::", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [viewid]);

  function handlerTeaxtarea(data) {
    setTavalue(data.target.value);
  }

  const handleUpdate = () => {
    axios({
      method: "put",
      url: "/deviation/" + viewid,
      data: {
        type_validation: deviationstatus,
        comment: deviationcomment,
        user_id: 7,
      },
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const arr = data.map((data, index) => {
    return (
      <div className="d-flex gap-2 justify-content-end validationbutton-component">
        <button
          type="button"
          className="shadow-all btn btn-success fw-semibold py-2 rounded-3"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => {
            setDeviationstatus("true");
          }}
        >
          Valid
        </button>
        <button
          type="button"
          className="shadow-all btn btn-outline-success fw-semibold py-2 rounded-3"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => {
            setDeviationstatus("false");
          }}
        >
          Tidak Valid
        </button>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h6
                  className="modal-title fw-semibold"
                  id="staticBackdropLabel"
                >
                  Deskripsi Deviasi
                </h6>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form action="">
                  {deviationstatus == "true" ? 
                    <div>
                      <div className="d-flex gap-2 mb-3">
                        <input
                          type="checkbox"
                          onClick={() => {
                            checkbox1 == "off"
                              ? setCheckbox1("on")
                              : setCheckbox1("off");
                          }}
                        />
                        <label htmlFor="">
                          Unit hauling road jarak kurang dari 50 meter terhadap
                          unit di depannya.
                        </label>
                      </div>
                      <div className="d-flex gap-2 mb-3">
                        <input
                          type="checkbox"
                          onClick={() => {
                            checkbox2 == "off"
                              ? setCheckbox2("on")
                              : setCheckbox2("off");
                          }}
                        />
                        <label htmlFor="">
                          Double trailer, jarak aman unit kurang dari 180 meter
                        </label>
                      </div>
                      <div className="d-flex gap-2 mb-3">
                        <input
                          type="checkbox"
                          onClick={() => {
                            checkbox3 == "off"
                              ? setCheckbox3("on")
                              : setCheckbox3("off");
                          }}
                        />
                        <label htmlFor="">
                          Jarak aman di area pit kurang dari 40 meter
                        </label>
                      </div>
                      <div className="d-flex gap-2 mb-3">
                        <input
                          type="checkbox"
                          onClick={() => {
                            checkbox4 == "off"
                              ? setCheckbox4("on")
                              : setCheckbox4("off");
                          }}
                        />
                        <label htmlFor="">
                          Pekerja/Orang berada di luar unit area pertambangan
                        </label>
                      </div>
                    </div>
                   : 
                    ""
                  }
                  {deviationstatus == "false" ? (
                    <div className="d-flex gap-2 mb-3">
                      <input
                        type="checkbox"
                        onClick={() => {
                          checkbox5 == "off"
                            ? setCheckbox5("on")
                            : setCheckbox5("off");
                        }}
                      />
                      <label htmlFor="">Tidak ada deviasi</label>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="d-flex gap-2">
                    <input
                      type="checkbox"
                      onClick={() => {
                        checkbox6 == "off"
                          ? setCheckbox6("on")
                          : setCheckbox6("off");
                      }}
                    />
                    <textarea
                      class={
                        "form-control" +
                        (checkbox6 == "off" ? " disabled-textarea" : "")
                      }
                      id="message-text"
                      placeholder={
                        checkbox6 == "off"
                          ? "Klik checkbox untuk mengaktifkan"
                          : "Masukkan keterangan deviasi"
                      }
                      defaultValue={tavalue}
                      onChange={handlerTeaxtarea}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-success"
                  data-bs-dismiss="modal"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={handleUpdate}
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{arr}</div>;
};

export default Validation;
