import { useNavigate } from "react-router-dom";
import taxiMan from "../assets/images/driver.png";
import carLogo from "../assets/images/car.png";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>

        {/* HEADER */}
        <div style={styles.header}>
          <img src={carLogo} alt="logo" style={styles.logoIcon} />
          <span style={styles.logoText}>DrivenBy</span>
        </div>

        {/* IMAGE SECTION */}
        <div style={styles.imageContainer}>
          <img src={taxiMan} alt="taxi" style={styles.image} />
        </div>

        {/* CONTENT */}
        <div style={styles.content}>
          <h2 style={styles.title}>
            Welcome to Your <br /> Ultimate Travel Solution
          </h2>

          <p style={styles.description}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt.
          </p>

          <button
            style={styles.button}
            onClick={() => navigate("/signup")}
          >
            Let’s Get Started
          </button>

          <p style={styles.signin}>
            Already have an account?{" "}
            <span
              style={styles.link}
              onClick={() => navigate("/signin")}
            >
              Sign In
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  // OUTER BACKGROUND
  page: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#e5e5e5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // MOBILE FRAME
  mobileFrame: {
    width: "360px",
    height: "720px",
    backgroundColor: "#ffffff", // ✅ FULL WHITE
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
  },

  // HEADER
  header: {
  height: "70px",
  backgroundColor: "#F7931E",
  display: "flex",
  alignItems: "center",
  paddingLeft: "16px",
},

  logoIcon: {
  width: "40px",        // increased size
  height: "40px",       // keep aspect ratio clean
  objectFit: "contain", // prevents distortion
  marginRight: "10px",
},

  logoText: {
  fontSize: "22px",
  fontWeight: "700",
  fontFamily: "serif",
  color: "#000",
},

  // IMAGE SECTION (NOW WHITE)
  imageContainer: {
    height: "240px",
    backgroundColor: "#ffffff", // ✅ FIXED (no grey)
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "90%",
    objectFit: "contain",
  },

  // CONTENT
  content: {
    flex: 1,
    textAlign: "center",
    padding: "20px",
  },

  title: {
    fontSize: "22px",
    fontWeight: "700",
    lineHeight: "30px",
    marginBottom: "15px",
    color: "#000",
  },

  description: {
    fontSize: "14px",
    color: "#333",
    lineHeight: "20px",
    marginBottom: "25px",
  },

  button: {
    backgroundColor: "#F7931E",
    border: "none",
    padding: "14px 30px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    marginBottom: "20px",
  },

  signin: {
    fontSize: "14px",
    color: "#333",
  },

  link: {
    fontWeight: "600",
    cursor: "pointer",
  },
};