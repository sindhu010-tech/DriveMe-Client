import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import map1 from "../assets/images/map3.png"; // ✅ adjust path if needed

export default function SearchingDriver() {
  const navigate = useNavigate();
  const [startSearch, setStartSearch] = useState(false);

  // AUTO GO TO NOT FOUND IF USER DOESN'T CLICK
  useEffect(() => {
    if (startSearch) return;

    const timer = setTimeout(() => {
      navigate("/drivernotfound");
    }, 10000); // 10 sec

    return () => clearTimeout(timer);
  }, [startSearch, navigate]);

  // AFTER CLICK → GO TO DRIVER FOUND
  useEffect(() => {
    let timer;

    if (!startSearch) {
      // If user does NOT click → go to Not Found
      timer = setTimeout(() => {
        navigate("/drivernotfound");
      }, 10000);
    } else {
      // If user clicks → go to Found
      timer = setTimeout(() => {
        navigate("/driverfound");
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [startSearch, navigate]);

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>
        <div style={styles.container}>

          {/* TOP */}
          <div style={styles.topSection}>
            <div style={styles.icon}>👨‍✈️</div>

            <h2 style={styles.title}>Searching For Drivers</h2>

            <p style={styles.subtitle}>
              {startSearch
                ? "Finding nearby drivers..."
                : "This may take a few seconds..."}
            </p>
          </div>

          {/* MAP IMAGE */}
          <div style={styles.map}>
            <img
              src={map1}
              alt="Map"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
            />
          </div>

          {/* BUTTON */}
          <button
            style={{
              ...styles.button,
              opacity: startSearch ? 0.6 : 1,
              cursor: startSearch ? "not-allowed" : "pointer",
            }}
            disabled={startSearch}
            onClick={() => setStartSearch(true)}
          >
            {startSearch ? "Searching..." : "Book Driver"}
          </button>

        </div>
      </div>
    </div>
  );
}

// SAME STYLES (UNCHANGED)
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
    padding: "0 20px",
    boxSizing: "border-box",
  },

  topSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "30px",
    paddingBottom: "20px",
    textAlign: "center",
  },

  icon: {
    fontSize: "50px",
    marginBottom: "10px",
  },

  title: {
    fontSize: "20px",
    fontWeight: "600",
    margin: 0,
  },

  subtitle: {
    fontSize: "13px",
    color: "#777",
    marginTop: "5px",
  },

  map: {
    flex: 1,
    width: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#d9d9d9",
  },

  button: {
    width: "80%",
    alignSelf: "center",
    marginBottom: "25px",
    backgroundColor: "#F7931E",
    padding: "15px",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
  },
};