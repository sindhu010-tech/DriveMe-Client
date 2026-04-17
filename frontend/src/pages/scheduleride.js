import { useNavigate } from "react-router-dom";
import map1 from "../assets/images/map2.png"; // ✅ adjust path if needed

export default function ScheduleRide() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>

        {/* MAP IMAGE */}
        <div style={styles.mapSection}>
          <img
            src={map1}
            alt="Map"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* SCROLLABLE PANEL */}
        <div style={styles.panel}>

          {/* SCHEDULE BUTTON */}
          <div style={styles.scheduleBtn}>
            Schedule Ride
          </div>

          {/* NOW */}
          <div style={styles.option}>
            <span>Now</span>
            <span>›</span>
          </div>

          {/* HOURLY */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>⏳ Hourly</div>
            <div style={styles.row}>
              <div>Choose Date: <span style={styles.light}>dd-mm-yyyy</span></div>
              <div>Choose Time: <span style={styles.light}>hh:mm</span></div>
            </div>
          </div>

          {/* DAILY */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>⏳ Daily</div>

            <div style={styles.row}>
              <div>Start Date: <span style={styles.light}>dd-mm-yyyy</span></div>
              <div>Choose Time: <span style={styles.light}>hh:mm</span></div>
            </div>

            <div style={styles.row}>
              <div>End Date: <span style={styles.light}>dd-mm-yyyy</span></div>
            </div>
          </div>

          {/* OUTSTATION */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>⏳ Out Station</div>
            <div style={styles.row}>
              <div>Choose Date: <span style={styles.light}>dd-mm-yyyy</span></div>
              <div>Choose Time: <span style={styles.light}>hh:mm</span></div>
            </div>
          </div>

          {/* RADIO OPTIONS */}
          <div style={styles.radioContainer}>
            <div style={styles.radioItem}>
              <div style={styles.radioActive}></div>
              <span>One way Trip</span>
            </div>

            <div style={styles.radioItem}>
              <div style={styles.radio}></div>
              <span>Two way Trip</span>
            </div>
          </div>

        </div>

        {/* BOTTOM BUTTON */}
        <div style={styles.bottomBar}>
          <button
            style={styles.confirmBtn}
            onClick={() => navigate("/passengerdetail")}
          >
            Confirm
          </button>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mobileFrame: {
    width: "360px",
    height: "720px",
    borderRadius: "20px",
    overflow: "hidden",
    backgroundColor: "#f2f2f2",
    position: "relative",
  },

  mapSection: {
    height: "300px",
  },

  /* SCROLLABLE */
  panel: {
    padding: "15px",
    height: "320px",
    overflowY: "auto",
  },

  scheduleBtn: {
    backgroundColor: "#F7931E",
    padding: "15px",
    borderRadius: "30px",
    textAlign: "center",
    fontWeight: "600",
    marginBottom: "15px",
  },

  option: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "15px",
    marginBottom: "15px",
  },

  cardHeader: {
    fontWeight: "600",
    marginBottom: "10px",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    marginBottom: "5px",
  },

  light: {
    color: "#999",
  },

  radioContainer: {
    marginTop: "10px",
  },

  radioItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },

  radioActive: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "#F7931E",
  },

  radio: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    border: "2px solid #aaa",
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "90px",
    backgroundColor: "#f2f2f2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  confirmBtn: {
    width: "80%",
    padding: "15px",
    backgroundColor: "#F7931E",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};