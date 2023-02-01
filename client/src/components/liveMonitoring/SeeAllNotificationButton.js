import "../../App.css";

const SeeAllNotificationButton = ({ handleClick }) => {
  return (
    <a className="d-grid">
      <button
        type="button"
        className="shadow-all btn btn-success fw-semibold py-2 rounded-3"
        onClick={() => {
          handleClick("validasideviasi");
        }}
      >
        Lihat Detail
      </button>
    </a>
  );
};

export default SeeAllNotificationButton;
