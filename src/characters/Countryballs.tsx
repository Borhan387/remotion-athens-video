import React from "react";

const eyeStyle: React.CSSProperties = {
  width: 42,
  height: 55,
  background: "white",
  border: "4px solid black",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Ball = ({
  color,
  symbol,
  name,
}: {
  color: string;
  symbol: string;
  name: string;
}) => {
  return (
    <div
      style={{
        width: 260,
        height: 260,
        borderRadius: "50%",
        background: color,
        border: "9px solid black",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 12px 20px #0006",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 65,
          display: "flex",
          gap: 30,
        }}
      >
        <div style={eyeStyle}>●</div>
        <div style={eyeStyle}>●</div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 45,
          fontSize: 43,
        }}
      >
        {symbol}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: -45,
          fontSize: 28,
          fontWeight: "bold",
          color: "white",
          textShadow: "2px 3px 4px black",
        }}
      >
        {name}
      </div>
    </div>
  );
};

export const IranBall = () => (
  <Ball
    color="#A66B42"
    symbol="𓂀"
    name="ایران هخامنشی"
  />
);

export const XerxesBall = () => (
  <Ball
    color="#6E2435"
    symbol="👑"
    name="خشایارشا"
  />
);


export const AthensBall =(
  <Ball
    color="#D8C49A"
    symbol="🦉"
    name="آتن"
  />
);

export const SpartaBall = () => (
  <Ball
    color="#A65B42"
    symbol="🛡️"
    name="اسپارت"
  />
);
