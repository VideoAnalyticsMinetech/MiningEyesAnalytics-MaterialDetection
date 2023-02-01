import "../../App.css";
import TableData from "./TableData";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Calendar from "react-calendar";
import Export from "./Export";

const DataTervalidasi = () => {
  const [filtercctv, setFiltercctv] = useState("All/All");
  const [filterobject, setFilterobject] = useState("All");
  const [filterdate, setFilterdate] = useState(new Date());
  const year = filterdate.toString().substring(11, 15);
  const month =
    filterdate.toString().substring(4, 7) == "Jan"
      ? "01"
      : filterdate.toString().substring(4, 7) == "Feb"
      ? "02"
      : filterdate.toString().substring(4, 7) == "Mar"
      ? "03"
      : filterdate.toString().substring(4, 7) == "Apr"
      ? "04"
      : filterdate.toString().substring(4, 7) == "May"
      ? "05"
      : filterdate.toString().substring(4, 7) == "Jun"
      ? "06"
      : filterdate.toString().substring(4, 7) == "Jul"
      ? "07"
      : filterdate.toString().substring(4, 7) == "Aug"
      ? "08"
      : filterdate.toString().substring(4, 7) == "Sep"
      ? "09"
      : filterdate.toString().substring(4, 7) == "Oct"
      ? "10"
      : filterdate.toString().substring(4, 7) == "Nov"
      ? "11"
      : "12";
  const day = filterdate.toString().substring(8, 10);
  const date = year + "-" + month + "-" + day;
  const dateflip = day + "-" + month + "-" + year;

  function handlerFiltercctv(data) {
    setFiltercctv(data.target.value);
  }

  function handlerFilterobject(data) {
    setFilterobject(data.target.value);
  }

  return (
    <div className="datatervalidasi-body">
      <div className="body-bg">
        <div className="container pt-3 pb-3">
          <div className="shadow-all mb-3 bg-body rounded-top px-3 py-2">
            <div className="mb-3">
              <h6 className="fw-semibold">Data Deviasi Tervalidasi</h6>
            </div>
            <div className="row mb-2 p-medium">
              <div className="col-3">
                <p>CCTV</p>
                <div className="input-group">
                  <label className="input-group-text" for="inputGroupSelect03">
                    <Icon className="filter-icon" icon="bi:camera-fill" />
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    defaultValue={filtercctv}
                    onChange={handlerFiltercctv}
                  >
                    <option selected value="All/All">
                      Semua
                    </option>
                    <option value="CCTV BMO2/E Camera 3">
                      CCTV BMO2 - E Camera 3
                    </option>
                    <option value="CCTV BMO2/E Camera 2">
                      CCTV BMO2 - E Camera 2
                    </option>
                    <option value="CCTV BMO2/7West Camera 1">
                      CCTV BMO2 - 7West Camera 1
                    </option>
                    <option value="CCTV BMO2/PIT E1 [disabled]">
                      CCTV BMO2 - PIT E1 [disabled]
                    </option>
                    <option value="CCTV BMO2/Low Wall Pit E">
                      CCTV BMO2 - Low Wall Pit E
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-3">
                <p>Objek</p>
                <div className="input-group">
                  <label className="input-group-text" for="inputGroupSelect03">
                    <Icon
                      className="filter-icon"
                      icon="ic:round-filter-center-focus"
                    />
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect02"
                    defaultValue={filterobject}
                    onChange={handlerFilterobject}
                  >
                    <option selected value="All">
                      Semua
                    </option>
                    <option value="Person">Person</option>
                    <option value="LV">LV</option>
                    <option value="HD">HD</option>
                  </select>
                </div>
              </div>
              <div className="col-1">
                <p>Periode</p>
                <div className="input-group">
                  <button
                    type="button"
                    className="input-group-text btn btn-success d-flex justify-content-center"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <div className="d-flex gap-3">
                      <Icon className="filter-icon" icon="bi:calendar-week" />
                      <div>{day + "-" + month + "-" + year}</div>
                    </div>
                  </button>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered date-modal">
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="app">
                          <div className="calendar-container d-flex justify-content-center">
                            <Calendar
                              onChange={setFilterdate}
                              value={filterdate}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5 d-flex align-items-end justify-content-end">
                <div className="d-flex gap-3">
                  <Export
                    filterobject={filterobject}
                    filtercctv={filtercctv}
                    date={date}
                    dateflip={dateflip}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-all bg-body rounded-bottom px-3 py-3">
            <TableData
              filterobject={filterobject}
              filtercctv={filtercctv}
              date={date}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTervalidasi;
