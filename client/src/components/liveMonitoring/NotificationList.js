import "../../App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const NotificationList = ({
  cctvname,
  cctvlocation,
  handleClick,
  handleViewid,
  handleViewstatus,
  handleViewobject,
  handleViewcctvname,
  handleViewcctvlocation,
  handleViewtime,
  handleViewuser,
  handleViewcomment,
  handleViewimage,
}) => {
  const [data, setData] = useState([{}]);
  const [viewid, setViewid] = useState();
  const [object, setObject] = useState("AllObject");
  const [datalimit, setDatalimit] = useState(10);
  const array = data.map((data, index) => {
    return data.id;
  });

  useEffect(() => {
    axios
      .get(
        "/viewtable/" +
          cctvname +
          "/" +
          cctvlocation +
          "/" +
          object +
          "/All/Allvalidation/" +
          datalimit
      )
      .then((res) => {
        console.log("Getting from ::::", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [cctvname, cctvlocation, object, datalimit /*array,*/]);

  const arr = data.slice(0, [datalimit]).map((data, index) => {
    return (
      <button
        type="button"
        className="shadow-all btn btn-success fw-semibold py-2 rounded-3 text-start"
        key={data.id}
        onClick={() => {
          setViewid(data.id);
          handleClick("validasideviasi");
          handleViewid(data.id);
          handleViewstatus(data.type_validation);
          handleViewobject(data.type_object);
          handleViewcctvname(data.name);
          handleViewcctvlocation(data.location);
          handleViewtime(data.created_at);
          handleViewuser(data.user_name);
          handleViewcomment(data.comment);
          handleViewimage(data.image);
        }}
      >
        <div className="d-flex">
          <p className="col d-flex gap-1">Deviasi {data.type_object}</p>
          <p
            className={
              "rounded-2 px-2 fw-bolder" +
              (data.type_validation == "not_yet"
                ? " text-primary notification-tag"
                : data.type_validation == "true"
                ? " text-success notification-tag-true"
                : " text-danger notification-tag-false")
            }
          >
            {data.type_validation == "not_yet"
              ? "Perlu Validasi"
              : data.type_validation == "true"
              ? "Valid"
              : "Tidak Valid"}
          </p>
        </div>
        <div>
          <div className="d-flex gap-2 details">
            <div>
              <Icon className="notification-icon" icon="bi:camera-fill" />
            </div>
            <p>
              {data.name} - {data.location}
            </p>
          </div>
          <div className="d-flex gap-2 details">
            <div>
              <Icon className="notification-icon" icon="akar-icons:clock" />
            </div>
            <div className="d-flex">{data.created_at}</div>
          </div>
        </div>
      </button>
    );
  });

  return (
    <div>
      <div className="d-grid px-2 py-2 border-bottom border-2 notificationfilter-component">
        <div className="d-flex gap-2">
          <button
            type="button"
            className={
              "shadow-all btn fw-semibold rounded-5 text-start" +
              (object == "AllObject" ? " btn-outline-success" : " btn-success")
            }
            onClick={() => {
              setObject("AllObject");
              setDatalimit(10);
            }}
          >
            Semua
          </button>
          <button
            type="button"
            className={
              "shadow-all btn fw-semibold rounded-5 text-start" +
              (object == "Person" ? " btn-outline-success" : " btn-success")
            }
            onClick={() => {
              setObject("Person");
              setDatalimit(10);
            }}
          >
            Person
          </button>
          <button
            type="button"
            className={
              "shadow-all btn fw-semibold rounded-5 text-start" +
              (object == "LV" ? " btn-outline-success" : " btn-success")
            }
            onClick={() => {
              setObject("LV");
              setDatalimit(10);
            }}
          >
            LV
          </button>
          <button
            type="button"
            className={
              "shadow-all btn fw-semibold rounded-5 text-start" +
              (object == "HD" ? " btn-outline-success" : " btn-success")
            }
            onClick={() => {
              setObject("HD");
              setDatalimit(10);
            }}
          >
            HD
          </button>
        </div>
      </div>
      <div className="px-2 py-2 overflow-auto notification-list mt-2">
        <div className="notificationlistbutton-component d-grid gap-2">
          {arr}
        </div>
        <div className="load-more d-flex justify-content-center mt-3">
          <a
            className={
              "p-medium" +
              (data.length < datalimit ? " disabled text-secondary" : "")
            }
            onClick={() => {
              setDatalimit(datalimit + 10);
            }}
          >
            {data.length < datalimit ? "No More Data" : "Load More"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotificationList;
