import React from "react";
import { useNavigate } from "react-router-dom";
import map2 from "../assets/images/map2.png"; // ✅ adjust path if needed
import human from "../assets/images/human.png"; // ✅ driver image

export default function DriverArriving() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>

        {/* MAP IMAGE */}
        <div style={styles.mapContainer}>
          <img
            src={map2}
            alt="map"
            style={styles.map}
          />
        </div>

        {/* CONTENT */}
        <div style={styles.content}>

          {/* HEADER */}
          <div style={styles.header}>
            <span>Driver Arriving</span>
            <span>1.3Kms</span>
          </div>

          {/* DRIVER INFO */}
          <div style={styles.driverRow}>
            <img src={human} alt="Driver" style={styles.avatar} />

            <div style={styles.driverText}>
              <p style={styles.name}>Name: Jenny Wilson</p>
              <p style={styles.location}>Location: Bangalore</p>
            </div>

            <div style={styles.callIcon}>📞</div>
          </div>

          {/* FARE BOX */}
          <div style={styles.fareBox}>
            <div style={styles.fareItem}>
              <p>Rate per Km</p>
              <b>Rs. 25</b>
            </div>

            <div style={styles.divider}></div>

            <div style={styles.fareItem}>
              <p>Total Kms</p>
              <b>60Kms</b>
            </div>

            <div style={styles.divider}></div>

            <div style={styles.fareItem}>
              <p>Total Fare</p>
              <b>Rs. 1500</b>
            </div>
          </div>

          {/* BUTTON */}
          <button
            style={styles.cancelBtn}
            onClick={() => navigate("/cancelride")}
          >
            Cancel Ride
          </button>

        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#f5f5f5",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mobileFrame: {
    width: "360px",
    height: "720px",
    backgroundColor: "#fff",
    borderRadius: "28px",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
  },

  mapContainer: {
    width: "100%",
    height: "260px",
  },

  map: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    padding: "18px",
  },

  header: {
    backgroundColor: "#f7931e",
    borderRadius: "30px",
    padding: "14px 18px",
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  driverRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },

  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "12px",
  },

  driverText: {
    flex: 1,
  },

  name: {
    fontWeight: "bold",
    marginBottom: "4px",
  },

  location: {
    fontSize: "13px",
    color: "#555",
  },

  callIcon: {
    fontSize: "22px",
  },

  fareBox: {
    display: "flex",
    backgroundColor: "#eaeaea",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "30px",
  },

  fareItem: {
    flex: 1,
    textAlign: "center",
    padding: "12px 6px",
    fontSize: "13px",
  },

  divider: {
    width: "1px",
    backgroundColor: "#ccc",
  },

  cancelBtn: {
    display: "block",
    margin: "0 auto",
    backgroundColor: "#f7931e",
    border: "none",
    padding: "14px 40px",
    borderRadius: "30px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
  },
};