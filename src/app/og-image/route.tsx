import { ImageResponse } from "next/og";

export const runtime = "edge";
export const revalidate = false;

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #D0F4F0 0%, #FAFAF9 50%, #EAE4FF 100%)",
          fontFamily: "Georgia, serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "4px",
            backgroundColor: "#1A8A7E",
            marginBottom: "40px",
            borderRadius: "2px",
          }}
        />
        <p
          style={{
            fontSize: "22px",
            color: "#1A8A7E",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Psicóloga · Sexóloga Clínica · Montevideo
        </p>
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "700",
            color: "#2d2d2d",
            textAlign: "center",
            lineHeight: "1.1",
            marginBottom: "30px",
          }}
        >
          Camila Jurfest
        </h1>
        <p
          style={{
            fontSize: "28px",
            color: "#6B6570",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: "1.4",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Terapia individual, de pareja, sexual y perinatal.
          <br />
          Presencial en Pocitos · Online para todo Uruguay.
        </p>
        <div
          style={{
            marginTop: "50px",
            padding: "16px 40px",
            backgroundColor: "#1A8A7E",
            borderRadius: "50px",
            color: "white",
            fontSize: "22px",
            fontFamily: "Arial, sans-serif",
            fontWeight: "600",
          }}
        >
          camilajurfest.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
