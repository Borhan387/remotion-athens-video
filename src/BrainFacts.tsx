import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
} from "remotion";

type Fact = {
  number: string;
  icon: string;
  kicker: string;
  title: string;
  detail: string;
  narration: string;
  accent: string;
  background: string;
};

const facts: Fact[] = [
  {
    number: "۰۱",
    icon: "🧠",
    kicker: "حقیقت اول",
    title: "مغز خودش درد را حس نمی‌کند!",
    detail: "بافت مغز گیرندهٔ درد ندارد؛ اما پرده‌ها، رگ‌ها و عصب‌های اطرافش می‌توانند درد را منتقل کنند.",
    narration: "شاید عجیب باشد، اما خودِ بافت مغز گیرندهٔ درد ندارد. برای همین بعضی جراحی‌های مغز می‌توانند با بیمارِ بیدار انجام شوند. البته این به معنی بی‌درد بودن سردرد نیست؛ ساختارهای اطراف مغز، مثل پرده‌ها و رگ‌ها، می‌توانند درد ایجاد کنند.",
    accent: "#ff647c",
    background: "linear-gradient(145deg, #170d2e 0%, #40204e 55%, #8d3154 100%)",
  },
  {
    number: "۰۲",
    icon: "⚡",
    kicker: "حقیقت دوم",
    title: "مغز انرژی زیادی مصرف می‌کند!",
    detail: "با اینکه حدود ۲ درصد وزن بدن است، در حالت استراحت نزدیک به ۲۰ درصد انرژی بدن را مصرف می‌کند.",
    narration: "مغز از نظر اندازه عضو کوچکی به نظر می‌رسد؛ اما در بزرگسالان، با وجود اینکه حدود دو درصد وزن بدن را دارد، در حالت استراحت نزدیک به بیست درصد انرژی مصرفی بدن را به خودش اختصاص می‌دهد. فکر کردن واقعاً بی‌هزینه نیست!",
    accent: "#ffd166",
    background: "linear-gradient(145deg, #101b35 0%, #174b67 55%, #1c8b8a 100%)",
  },
  {
    number: "۰۳",
    icon: "🧩",
    kicker: "حقیقت سوم",
    title: "خاطره‌ها مثل فیلم ضبط نمی‌شوند!",
    detail: "هنگام یادآوری، مغز خاطره را بازسازی می‌کند؛ بنابراین جزئیات ممکن است تغییر کنند.",
    narration: "حافظه مثل دوربین فیلم‌برداری نیست که یک فایل کامل را بی‌کم‌وکاست پخش کند. وقتی چیزی را به یاد می‌آوریم، مغز بخش‌هایی از تجربه را دوباره کنار هم می‌چیند. به همین دلیل ممکن است با گذشت زمان، جزئیات یک خاطره تغییر کنند.",
    accent: "#8be0ff",
    background: "linear-gradient(145deg, #101b35 0%, #263c72 55%, #5b4c9b 100%)",
  },
  {
    number: "۰۴",
    icon: "🌙",
    kicker: "حقیقت چهارم",
    title: "مغز هنگام خواب هم مشغول است!",
    detail: "خواب به تثبیت و سازمان‌دهی بخشی از آموخته‌ها و خاطرات کمک می‌کند.",
    narration: "وقتی می‌خوابیم، مغز خاموش نمی‌شود. در خواب، شبکه‌های مغزی به پردازش تجربه‌های روز و تثبیت بعضی آموخته‌ها کمک می‌کنند. برای همین خواب کافی فقط استراحت نیست؛ بخشی از فرایند یادگیری است.",
    accent: "#b8a1ff",
    background: "linear-gradient(145deg, #080f2b 0%, #1a2860 55%, #51418c 100%)",
  },
  {
    number: "۰۵",
    icon: "👁️",
    kicker: "حقیقت پنجم",
    title: "مغز فقط دنیا را تماشا نمی‌کند!",
    detail: "مغز با استفاده از تجربه‌های قبلی، دربارهٔ ورودی‌های حسی پیش‌بینی می‌سازد.",
    narration: "تصور می‌کنیم چشم‌ها تصویر را می‌فرستند و مغز فقط آن را نمایش می‌دهد؛ اما ماجرا پیچیده‌تر است. مغز از تجربه‌های قبلی برای پیش‌بینی آنچه می‌بینیم و می‌شنویم استفاده می‌کند و اطلاعات تازه را با این پیش‌بینی‌ها مقایسه می‌کند.",
    accent: "#7ef0c5",
    background: "linear-gradient(145deg, #092b2b 0%, #12605b 55%, #3c9a77 100%)",
  },
  {
    number: "۰۶",
    icon: "🔀",
    kicker: "حقیقت ششم",
    title: "چندکارگی همیشه واقعی نیست!",
    detail: "برای بسیاری از کارهای ذهنی، مغز سریع بین وظایف جابه‌جا می‌شود؛ این تغییر تمرکز هزینه دارد.",
    narration: "وقتی هم‌زمان پیام می‌دهیم، درس می‌خوانیم و ویدیو می‌بینیم، معمولاً مغز همهٔ این کارها را با تمرکز کامل و هم‌زمان انجام نمی‌دهد. بیشتر وقت‌ها سریع بین آن‌ها جابه‌جا می‌شود؛ و هر بار تغییر تمرکز می‌تواند زمان و دقت ما را کم کند.",
    accent: "#ffbd69",
    background: "linear-gradient(145deg, #30162b 0%, #71304c 55%, #b65b4c 100%)",
  },
  {
    number: "۰۷",
    icon: "👃",
    kicker: "حقیقت هفتم",
    title: "یک بو می‌تواند خاطره‌ای قدیمی را زنده کند!",
    detail: "مسیرهای بویایی ارتباط نزدیکی با بخش‌های مرتبط با حافظه و احساسات دارند.",
    narration: "تا به حال شده بویی را حس کنی و ناگهان به سال‌ها قبل برگردی؟ مسیر بویایی ارتباط نزدیکی با بخش‌هایی از مغز دارد که در حافظه و احساسات نقش دارند. برای همین بعضی بوها می‌توانند خاطره‌ها و حس‌های قدیمی را خیلی زنده کنند.",
    accent: "#ff9dbe",
    background: "linear-gradient(145deg, #2b1232 0%, #71315c 55%, #bd6b82 100%)",
  },
];

const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 28, 90, 180], [0.72, 1.08, 1, 1.04], {
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(frame, [0, 15, 220, 240], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at 50% 38%, #4d347e 0%, #17122f 48%, #070914 100%)",
        color: "white",
        fontFamily: "sans-serif",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        direction: "rtl",
        opacity,
        padding: 72,
      }}
    >
      <div style={{ fontSize: 210, transform: `scale(${scale})`, marginBottom: 50 }}>🧠</div>
      <div style={{ color: "#ffd166", fontSize: 38, fontWeight: 800, letterSpacing: 2 }}>۷ حقیقت علمی در ۳ دقیقه</div>
      <div style={{ fontSize: 82, lineHeight: 1.35, fontWeight: 900, marginTop: 28 }}>
        مغزت خیلی عجیب‌تر از چیزیه که فکر می‌کنی!
      </div>
      <div style={{ fontSize: 38, color: "#d8d2ef", marginTop: 55 }}>
        حقیقت آخر را از دست نده...
      </div>
    </AbsoluteFill>
  );
};

const FactScene: React.FC<{ fact: Fact }> = ({ fact }) => {
  const frame = useCurrentFrame();
  const enter = interpolate(frame, [0, 22], [70, 0], { extrapolateRight: "clamp" });
  const opacity = interpolate(frame, [0, 16, 625, 660], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });
  const pulse = 1 + Math.sin(frame / 13) * 0.035;
  const barWidth = interpolate(frame, [0, 660], [0, 100], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: fact.background,
        color: "white",
        fontFamily: "sans-serif",
        direction: "rtl",
        opacity,
        padding: "76px 64px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ color: fact.accent, fontSize: 34, fontWeight: 900 }}>{fact.kicker}</div>
        <div style={{ fontSize: 34, fontWeight: 800, color: "#ffffffbb" }}>{fact.number} / ۰۷</div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 300,
          left: 0,
          width: "100%",
          textAlign: "center",
          fontSize: 250,
          transform: `translateY(${enter}px) scale(${pulse})`,
          filter: "drop-shadow(0 22px 30px #0006)",
        }}
      >
        {fact.icon}
      </div>
      <div
        style={{
          position: "absolute",
          top: 700,
          left: 65,
          width: 950,
          textAlign: "center",
          fontSize: 68,
          lineHeight: 1.42,
          fontWeight: 900,
          transform: `translateY(${enter * 0.55}px)`,
        }}
      >
        {fact.title}
      </div>
      <div
        style={{
          position: "absolute",
          top: 1040,
          left: 85,
          width: 910,
          minHeight: 230,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07101d99",
          border: `3px solid ${fact.accent}`,
          borderRadius: 34,
          padding: "35px 42px",
          boxSizing: "border-box",
          textAlign: "center",
          fontSize: 43,
          lineHeight: 1.65,
          fontWeight: 650,
        }}
      >
        {fact.detail}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 205,
          left: 85,
          width: 910,
          color: "#ffffffd9",
          textAlign: "center",
          fontSize: 30,
          lineHeight: 1.7,
        }}
      >
        {fact.narration}
      </div>
      <div style={{ position: "absolute", bottom: 100, left: 64, right: 64, height: 9, background: "#ffffff30", borderRadius: 20 }}>
        <div style={{ width: `${barWidth}%`, height: "100%", background: fact.accent, borderRadius: 20 }} />
      </div>
    </AbsoluteFill>
  );
};

const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 18, 520, 540], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(145deg, #10152f, #42245f 58%, #9a3f69)",
        color: "white",
        fontFamily: "sans-serif",
        direction: "rtl",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
        opacity,
      }}
    >
      <div style={{ fontSize: 150 }}>🤯</div>
      <div style={{ fontSize: 76, lineHeight: 1.4, fontWeight: 900, marginTop: 35 }}>
        کدام حقیقت بیشتر غافلگیرت کرد؟
      </div>
      <div style={{ fontSize: 44, color: "#ffe08a", marginTop: 55 }}>
        شماره‌اش را در نظرات بنویس!
      </div>
      <div style={{ fontSize: 34, color: "#ffffffbb", marginTop: 100 }}>
        برای دانستنی‌های بیشتر، دنبال کن
      </div>
    </AbsoluteFill>
  );
};

export const BrainFactsVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={240}>
        <Intro />
      </Sequence>
      {facts.map((fact, index) => (
        <Sequence key={fact.number} from={240 + index * 660} durationInFrames={660}>
          <FactScene fact={fact} />
        </Sequence>
      ))}
      <Sequence from={4860} durationInFrames={540}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
