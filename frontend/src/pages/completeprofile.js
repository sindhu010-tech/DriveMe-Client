import { useNavigate } from "react-router-dom";

export default function CompleteProfile() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>
        <div style={styles.container}>

          {/* HEADER */}
          <div style={styles.header}>
            <span style={styles.back} onClick={() => navigate(-1)}>
              ←
            </span>
          </div>

          {/* TITLE */}
          <h1 style={styles.title}>Complete Your Profile</h1>

          <p style={styles.subtitle}>
            Don’t worry! Only you can see your personal data.
            No one else will be able to see it
          </p>

          {/* AVATAR */}
          <div style={styles.avatarWrapper}>
            <div style={styles.avatar}>
              <div style={styles.head}></div>
              <div style={styles.body}></div>
            </div>
          </div>

          {/* FORM */}
          <div style={styles.form}>

            {/* NAME */}
            <label style={styles.label}>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              style={styles.input}
            />

            {/* DOB */}
            <label style={styles.label}>Date of Birth</label>
            <div style={styles.inputWithIcon}>
              <input
                type="text"
                placeholder="DD/MM/YYYY"
                style={styles.inputFlex}
              />
              <span style={styles.icon}>📅</span>
            </div>

            {/* GENDER */}
            <label style={styles.label}>Gender</label>
            <div style={styles.inputWithIcon}>
              <input
                type="text"
                placeholder="Select gender"
                style={styles.inputFlex}
              />
              <span style={styles.icon}>▼</span>
            </div>

            {/* PHONE */}
            <label style={styles.label}>Mobile Number</label>
            <input
              type="text"
              placeholder="+91xxxxxxxxxx"
              style={styles.input}
            />

          </div>

          {/* BUTTON */}
          <button
            style={styles.button}
            onClick={() => navigate("/location-permission")}
          >
            Complete Profile
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
    padding: "0 20px", // 🔥 PERFECT LEFT-RIGHT
    boxSizing: "border-box",
  },

  header: {
    height: "50px",
    display: "flex",
    alignItems: "center",
  },

  back: {
    fontSize: "22px",
    fontWeight: "600",
    cursor: "pointer",
  },

  title: {
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "700",
    marginTop: "5px",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "13px",
    color: "#666",
    marginTop: "8px",
    marginBottom: "20px",
    lineHeight: "18px",
  },

  avatarWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },

  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#d9d9d9",
    position: "relative",
  },

  head: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#bfbfbf",
    position: "absolute",
    top: "22px",
    left: "50%",
    transform: "translateX(-50%)",
  },

  body: {
    width: "55px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#bfbfbf",
    position: "absolute",
    bottom: "18px",
    left: "50%",
    transform: "translateX(-50%)",
  },

  form: {
    flex: 1,
  },

  label: {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "6px",
    display: "block",
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#e9e4e4",
    marginBottom: "16px",
    outline: "none",
    fontSize: "14px",
    boxSizing: "border-box", // 🔥 FIX
  },

  inputWithIcon: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#e9e4e4",
    borderRadius: "10px",
    marginBottom: "16px",
    paddingRight: "10px",
    width: "100%",
    boxSizing: "border-box", // 🔥 FIX
  },

  inputFlex: {
    flex: 1,
    padding: "14px",
    border: "none",
    backgroundColor: "#e9e4e4",
    outline: "none",
    fontSize: "14px",
    boxSizing: "border-box", // 🔥 FIX
  },

  icon: {
    fontSize: "14px",
    color: "#555",
  },

  button: {
    width: "100%",
    backgroundColor: "#F7931E",
    padding: "15px",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "20px",
    boxSizing: "border-box", // 🔥 FIX
  },
};