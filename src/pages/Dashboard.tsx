import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>
        Welcome to 99Dresses 👋
      </h1>

      <p style={{ color: "#555", marginBottom: "24px" }}>
        Manage your wardrobe, exchanges, and try outfits in AR.
      </p>

      {/* QUICK ACTIONS */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        {/* EXISTING ACTION EXAMPLE */}
        <button style={buttonStyle} onClick={() => alert("List Item clicked")}>
          ➕ List an Item
        </button>

        {/* 🔥 NEW AR TRY-ON BUTTON */}
        <button
          style={{
            ...buttonStyle,
            backgroundColor: "#4CAF50",
            color: "white",
          }}
          onClick={() => {
            window.open("/ar/index.html", "_blank");
          }}
        >
          👗 Try AR Outfit
        </button>
      </div>
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  padding: "12px 18px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#eee",
  cursor: "pointer",
  fontSize: "16px",
};

export default Dashboard;
