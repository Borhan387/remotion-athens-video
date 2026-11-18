import React from "react";
import { BrainFactsVideo } from "./BrainFacts";
import {
  AbsoluteFill,
  Composition,
  Sequence,
  useCurrentFrame,
  interpolate,
} from "remotion";

type BallProps = {
  color: string;
  label: string;
  x: number;
  y: number;
  size?: number;
};

type SceneProps = {
  title: string;
  caption: string;
  speech?: string;
  background: string;
  characters: BallProps[];
};

const Ball = ({ color, label, x, y, size = 280 }: BallProps) => {
  const frame = useCurrentFrame();

  const move = interpolate(
    frame,
    [0, 20, 40],
    [100, 0, 0],
    { extrapolateRight: "clamp" }
  );

  return (
    <div style={{
      position: "absolute",
      left: x,
      top: y + move,
      width: size,
      height: size,
      borderRadius: "50%",
      background: color,
      border: "9px solid black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      boxShadow: "0 15px 25px #0008",
    }}>
      <div style={{ display: "flex", gap: 35 }}>
        <span style={eye}>●</span>
        <span style={eye}>●</span>
      </div>
      <div style={{
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        marginTop: 15,
      }}>{label}</div>
    </div>
  );
};

const eye = {
  background: "white",
  border: "5px solid black",
  borderRadius: "50%",
  width: 55,
  height: 65,
  textAlign: "center" as const,
  fontSize: 42,
};

const Scene = ({
  title,
  caption,
  speech,
  background,
  characters,
}: SceneProps) => {
  return (
    <AbsoluteFill style={{
      background,
      fontFamily: "sans-serif",
    }}>
      <div style={{
        position: "absolute",
        top: 100,
        width: "100%",
        textAlign: "center",
        fontSize: 65,
        color: "white",
        fontWeight: 900,
        textShadow: "4px 4px black",
        direction: "rtl",
      }}>{title}</div>

      {characters.map((c, i: number) => (
        <Ball key={i} {...c} />
      ))}

      {speech && (
        <div style={{
          position: "absolute",
          top: 470,
          left: "10%",
          width: "80%",
          background: "white",
          border: "6px solid black",
          borderRadius: 30,
          padding: 25,
          fontSize: 43,
          fontWeight: "bold",
          textAlign: "center",
          direction: "rtl",
        }}>{speech}</div>
      )}

      <div style={{
        position: "absolute",
        bottom: 150,
        left: "5%",
        width: "90%",
        padding: 25,
        background: "#000b",
        borderRadius: 25,
        color: "white",
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center",
        direction: "rtl",
      }}>{caption}</div>
    </AbsoluteFill>
  );
};

const AthensVideo = () => {
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={150}>
        <Scene
          title="آتن در آتش"
          caption="۴۸۰ پیش از میلاد؛ آتن خبر بدی شنید!"
          speech="صبر کن! من هنوز آماده نیستم!"
          background="linear-gradient(#3388bb,#e1a65c)"
          characters={[
            { color: "white", label: "آتن", x: 380, y: 780 }
          ]}
        />
      </Sequence>

      <Sequence from={150} durationInFrames={300}>
        <Scene
          title="تهدید بزرگ"
          caption="ترموپیل سقوط کرد و راه آتن باز شد."
          speech="ارتش ایران از هلسپونت گذشت!"
          background="linear-gradient(#a66a3c,#503522)"
          characters={[
            { color: "#16834c", label: "ایران", x: 100, y: 800 },
            { color: "white", label: "اسپارت", x: 650, y: 800 }
          ]}
        />
      </Sequence>

      <Sequence from={450} durationInFrames={300}>
        <Scene
          title="تخلیه آتن"
          caption="آتنی‌ها شهر را خالی کردند."
          speech="همه سوار کشتی بشید!"
          background="linear-gradient(#58a5c8,#164d78)"
          characters={[
            { color: "white", label: "آتن", x: 380, y: 800 }
          ]}
        />
      </Sequence>

      <Sequence from={750} durationInFrames={300}>
        <Scene
          title="ورود ارتش ایران"
          caption="شهر خالی بود؛ آکروپولیس بالای تپه قرار داشت."
          speech="کسی خونه نیست؟"
          background="linear-gradient(#b98b58,#65452d)"
          characters={[
            { color: "#16834c", label: "ایران", x: 380, y: 800 }
          ]}
        />
      </Sequence>

      <Sequence from={1050} durationInFrames={300}>
        <Scene
          title="آکروپولیس در آتش"
          caption="آتن سوخت، ولی مردمش زنده ماندند."
          speech="مردمم زنده موندن!"
          background="linear-gradient(#241513,#d34c18)"
          characters={[
            { color: "white", label: "آتن", x: 380, y: 850 }
          ]}
        />
        <div style={{
          position: "absolute",
          top: 600,
          left: 300,
          fontSize: 150,
        }}>🔥🔥🔥</div>
      </Sequence>

      <Sequence from={1350} durationInFrames={450}>
        <Scene
          title="نبرد سالامیس"
          caption="ولی این پایان ماجرا نبود..."
          speech="من هنوز کشتی دارم!"
          background="linear-gradient(#164d78,#061c36)"
          characters={[
            { color: "white", label: "آتن", x: 100, y: 800 },
            { color: "#16834c", label: "ایران", x: 650, y: 800 }
          ]}
        />
        <div style={{
          position: "absolute",
          top: 1300,
          width: "100%",
          textAlign: "center",
          fontSize: 110,
        }}>🚢 🚢 🚢 🚢</div>
      </Sequence>
    </AbsoluteFill>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AthensOnFire"
        component={AthensVideo}
        durationInFrames={1800}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="BrainFactsPersian"
        component={BrainFactsVideo}
        durationInFrames={5400}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
