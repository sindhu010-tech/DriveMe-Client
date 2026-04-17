import { useNavigate } from "react-router-dom";
import human from "../assets/images/human.png"; // ✅ adjust path if needed

export default function RateDriver() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>
        <div style={styles.container}>

          {/* HEADER */}
          <div style={styles.header}>
            <h1 style={styles.headerTitle}>Driver-app</h1>
          </div>

          {/* TITLE */}
          <h2 style={styles.title}>Rate Driver</h2>

          {/* AVATAR + NAME */}
          <div style={styles.avatarWrapper}>
            <img src={human} alt="Driver" style={styles.avatar} />
          </div>
          <h3 style={styles.name}>Jenny Wilson</h3>

          {/* SUBTITLE */}
          <p style={styles.subtitle}>
            How was your trip with Jenny Wilson
          </p>

          {/* RATING SECTION */}
          <div style={styles.ratingSection}>
            <p style={styles.ratingLabel}>Your overall rating</p>
            <div style={styles.stars}>
              <span style={styles.star}>★</span>
              <span style={styles.star}>★</span>
              <span style={styles.star}>★</span>
              <span style={styles.star}>★</span>
              <span style={styles.star}>★</span>
            </div>
          </div>

          {/* REVIEW BOX */}
          <div style={styles.reviewBox}>
            <label style={styles.reviewLabel}>Add Detailed Review</label>
            <textarea
              placeholder="Enter here"
              style={styles.textarea}
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            style={styles.button}
            onClick={() => navigate("/home")}
          >
            Submit
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
  },

  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "0 20px",
    boxSizing: "border-box",
  },

  header: {
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    fontSize: "20px",
    fontWeight: "700",
  },

  title: {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "700",
    marginTop: "10px",
    marginBottom: "10px",
  },

  avatarWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  },

  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  name: {
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "8px",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "13px",
    color: "#666",
    marginBottom: "20px",
  },

  ratingSection: {
    textAlign: "center",
    marginBottom: "20px",
  },

  ratingLabel: {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "8px",
  },

  stars: {
    fontSize: "22px",
    color: "#F7931E",
  },

  star: {
    margin: "0 2px",
  },

  reviewBox: {
    marginBottom: "20px",
  },

  reviewLabel: {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "6px",
    display: "block",
  },

  textarea: {
    width: "100%",
    height: "80px",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#e9e4e4",
    outline: "none",
    fontSize: "14px",
    boxSizing: "border-box",
    resize: "none",
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
    marginTop: "auto",
    marginBottom: "20px",
    boxSizing: "border-box",
  },
};