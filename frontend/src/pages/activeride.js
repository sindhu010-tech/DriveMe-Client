import { useNavigate } from "react-router-dom";
import map1 from "../assets/images/map1.png"; // ✅ adjust path if needed

export default function ActiveRide() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>
        <div style={styles.container}>

          {/* MAP SECTION */}
          <div style={styles.mapWrapper}>
            <div style={styles.map}>
              <img
                src={map1}
                alt="Map"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />

              {/* Labels */}
              <span style={styles.labelTopRed}>9 min Heavy traffic</span>
              <span style={styles.labelBottomBlue}>40 min</span>

              {/* Markers */}
              <div style={styles.markerBlue}>●</div>
              <div style={styles.markerRed}>●</div>
            </div>
          </div>

          {/* RIDE INFO CARD */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Active Ride</h2>
            <p style={styles.cardSubtitle}>40 mins away from Destination</p>

            <p style={styles.cardText}><b>Name:</b> Jenny Wilson</p>
            <p style={styles.cardText}><b>Location:</b> Bangalore</p>
            <p style={styles.cardText}><b>Rs. 25/Km</b></p>

            <p style={styles.cardText}><b>Total No of Passengers:</b> 4</p>
            <p style={styles.cardText}>Adults: 2 Children: 1 Elderly Person: 1</p>
          </div>

          {/* CONTINUE BUTTON */}
          <button
            style={styles.button}
            onClick={() => navigate("/ratedriver")}
          >
            Continue
          </button>

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
    display: "flex",
    flexDirection: "column",
  },

  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "0 20px",
    boxSizing: "border-box",
    justifyContent: "flex-start",
  },

  mapWrapper: {
    width: "100%",
    height: "300px",
    marginBottom: "20px",
  },

  map: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    position: "relative",
    overflow: "hidden",
  },

  labelTopRed: {
    position: "absolute",
    top: "10px",
    left: "10px",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "600",
  },

  labelBottomBlue: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    backgroundColor: "#4da6ff",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "600",
  },

  markerBlue: {
    position: "absolute",
    bottom: "40px",
    left: "50px",
    color: "#4da6ff",
    fontSize: "20px",
  },

  markerRed: {
    position: "absolute",
    top: "40px",
    right: "50px",
    color: "#ff4d4d",
    fontSize: "20px",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "15px",
    marginBottom: "25px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  cardTitle: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "4px",
  },

  cardSubtitle: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "12px",
  },

  cardText: {
    fontSize: "14px",
    marginBottom: "6px",
  },

  button: {
    width: "100%",
    backgroundColor: "#F7931E",
    color: "#000",
    padding: "15px",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "15px",
    boxSizing: "border-box",
  },
};