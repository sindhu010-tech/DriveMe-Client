import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import car from "../assets/images/car.png";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>
        <div style={styles.container}>
          <img src={car} alt="car" style={styles.car} />

          <h1 style={styles.title}>DrivenBy</h1>

          <p style={styles.tagline}>
            Your Car. Our Driver. One Smooth Journey.
          </p>

          <p style={styles.subTagline}>
            Smart Moves. Smooth Drives.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  // FULL PAGE BACKGROUND
  page: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#e5e5e5", // outer grey like preview apps
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // MOBILE SCREEN FRAME
  mobileFrame: {
    width: "360px",      // mobile width
    height: "720px",     // mobile height
    backgroundColor: "#F7931E",
    borderRadius: "20px",
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // CENTER CONTENT
  container: {
    textAlign: "center",
    padding: "20px",
  },

  car: {
    width: "110px",
    marginBottom: "18px",
  },

  title: {
    fontSize: "30px",
    fontWeight: "700",
    fontFamily: "serif",
    marginBottom: "6px",
  },

  tagline: {
    fontSize: "14px",
    fontStyle: "italic",
    marginBottom: "18px",
  },

  subTagline: {
    fontSize: "14px",
  },
};