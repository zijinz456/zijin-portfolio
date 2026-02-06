import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Zijin Zhang — AI Product Builder & Banking Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#fef9f3",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 80,
            height: 80,
            background: "#ffe135",
            borderRadius: 16,
            border: "3px solid #1a1a1a",
            transform: "rotate(-12deg)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 50,
            right: 60,
            width: 60,
            height: 60,
            background: "#ff6b9d",
            borderRadius: "50%",
            border: "3px solid #1a1a1a",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 100,
            width: 50,
            height: 50,
            background: "#87ceeb",
            borderRadius: 12,
            border: "3px solid #1a1a1a",
            transform: "rotate(8deg)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 80,
            width: 40,
            height: 40,
            background: "#98d4bb",
            borderRadius: 10,
            border: "3px solid #1a1a1a",
            transform: "rotate(-6deg)",
            display: "flex",
          }}
        />

        {/* Main card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "48px 64px",
            background: "white",
            border: "3px solid #1a1a1a",
            borderRadius: 24,
            boxShadow: "6px 6px 0px #1a1a1a",
            maxWidth: 800,
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#1a1a1a",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>Hi, I&apos;m </span>
            <span
              style={{
                background: "#ff6b9d",
                padding: "2px 16px",
                borderRadius: 8,
                color: "white",
              }}
            >
              Zijin
            </span>
          </div>

          <div
            style={{
              fontSize: 24,
              color: "#555",
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                background: "#ffe135",
                padding: "4px 14px",
                borderRadius: 6,
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            >
              AI Product Builder
            </span>
            <span style={{ color: "#999" }}>×</span>
            <span
              style={{
                background: "#87ceeb",
                padding: "4px 14px",
                borderRadius: 6,
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            >
              Banking Specialist
            </span>
          </div>

          <div
            style={{
              fontSize: 18,
              color: "#888",
              marginTop: 24,
              display: "flex",
            }}
          >
            zijinzhangprofile.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
