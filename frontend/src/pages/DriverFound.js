import { useNavigate } from "react-router-dom";
import map2 from "../assets/images/map2.png"; // ✅ adjust path if needed
import human from "../assets/images/human.png"; // ✅ driver image

export default function DriverFound() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    console.log("CLICK WORKING ✅");
    navigate("/rideaccepted");
  };

  const handleRetry = () => {
    navigate("/driversearching");
  };

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>
        <div style={styles.container}>

          {/* MAP IMAGE */}
          <div style={styles.map}>
            <img
              src={map2}
              alt="Map"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* CONTENT */}
          <div style={styles.bottom}>

            {/* DRIVER BAR */}
            <div style={styles.driverBar}>
              <span>Driver Found</span>
              <span>2.5 Kms away</span>
            </div>

            {/* DRIVER CARD */}
            <div style={styles.card}>
              <img src={human} alt="Driver" style={styles.avatar} />

              <div style={styles.info}>
                <p><b>Name:</b> Jenny Winson</p>
                <p><b>Age:</b> 37 years</p>
                <p><b>Location:</b> Bangalore</p>
                <p><b>Rides:</b> 21</p>
              </div>
            </div>

            {/* FARE */}
            <div style={styles.fare}>
              Total Fare: 1550rs
            </div>

            {/* BUTTONS */}
            <div style={styles.row}>
              <button style={styles.confirm} onClick={handleConfirm}>
                Confirm
              </button>

              <button style={styles.retry} onClick={handleRetry}>
                Retry
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#e5e5e5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mobileFrame: {
    width: "360px",
    height: "720px",
    backgroundColor: "#f2f2f2",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
  },

  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  map: {
    width: "100%",
    height: "260px",
    backgroundColor: "#d9d9d9",
    overflow: "hidden",
  },

  bottom: {
    flex: 1,
    padding: "20px",
    position: "relative",
    zIndex: 2,
  },

  driverBar: {
    backgroundColor: "#F7931E",
    padding: "12px 18px",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },

  card: {
    backgroundColor: "#e6e6e6",
    padding: "15px",
    borderRadius: "15px",
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    alignItems: "center",
  },

  avatar: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "10px",
  },

  info: {
    fontSize: "13px",
  },

  fare: {
    backgroundColor: "#F7931E",
    padding: "12px",
    textAlign: "center",
    borderRadius: "5px",
    marginBottom: "25px",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
  },

  confirm: {
    width: "48%",
    backgroundColor: "#F7931E",
    padding: "14px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    position: "relative",
    zIndex: 100,
  },

  retry: {
    width: "48%",
    backgroundColor: "#ddd",
    padding: "14px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
  },
};