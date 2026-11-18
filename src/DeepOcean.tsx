import React from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from "remotion";

type SceneData = {
  time: string;
  title: string;
  text: string;
  narration: string;
  symbol: string;
  background: string;
  accent: string;
};

const scenes: SceneData[] = [
  {
    time: "۰۰:۰۰ — ۰۰:۱۰",
    title: "به دنیای تاریکی خوش آمدی",
    text: "جایی که نور خورشید هرگز نمی‌رسد",
    narration: "در اعماق اقیانوس، جهانی پنهان وجود دارد؛ جایی که نور خورشید کم‌کم ناپدید می‌شود و تاریکی، فرمانروای مطلق است.",
    symbol: "🌊",
    background: "linear-gradient(180deg,#12617a 0%,#07324f 55%,#020b1b 100%)",
    accent: "#7ee7f2",
  },
  {
    time: "۰۰:۱۰ — ۰۰:۲۵",
    title: "نور، در چند صد متری محو می‌شود",
    text: "هرچه پایین‌تر برویم، تاریکی عمیق‌تر می‌شود",
    narration: "بخش زیادی از نور در لایه‌های بالایی آب جذب و پراکنده می‌شود. در عمق حدود هزار متر، دیگر نور خورشید برای روشن کردن محیط وجود ندارد؛ اینجا منطقه نیمه‌شب اقیانوس است.",
    symbol: "🌑",
    background: "linear-gradient(180deg,#07324f 0%,#041b32 45%,#010611 100%)",
    accent: "#8ccfff",
  },
  {
    time: "۰۰:۲۵ — ۰۰:۴۰",
    title: "چراغ‌هایی در دل تاریکی",
    text: "بسیاری از موجودات، نور خودشان را می‌سازند",
    narration: "در این تاریکی، بعضی جانوران با پدیده‌ای به نام زیست‌تابی می‌درخشند. واکنش‌های شیمیایی در بدنشان نور تولید می‌کند؛ نوری برای ارتباط، دفاع یا فریب دادن شکار.",
    symbol: "🪼",
    background: "radial-gradient(circle at 50% 45%,#164c68 0%,#071c36 48%,#010611 100%)",
    accent: "#76f4e8",
  },
  {
    time: "۰۰:۴۰ — ۰۰:۵۵",
    title: "شکارچی با چراغی بر سر",
    text: "ماهی فانوس‌دار؛ کمین در تاریکی",
    narration: "ماهی‌های فانوس‌دار از مشهورترین ساکنان اعماق‌اند. در برخی گونه‌ها، زائده‌ای نورانی جلوی دهان قرار دارد و می‌تواند به نزدیک شدن طعمه کمک کند. اینجا هر نور کوچکی ممکن است سرنوشت‌ساز باشد.",
    symbol: "🐟",
    background: "linear-gradient(155deg,#07192d 0%,#102f4b 50%,#020711 100%)",
    accent: "#ffc86b",
  },
  {
    time: "۰۰:۵۵ — ۰۱:۱۰",
    title: "کوه‌هایی که از دل زمین می‌جوشند",
    text: "چشمه‌های گرمابی در کف اقیانوس",
    narration: "در کف دریا، آب داغ و سرشار از مواد معدنی از شکاف‌های پوسته زمین بیرون می‌زند. پیرامون این چشمه‌های گرمابی، جوامعی از موجودات زنده شکل می‌گیرند؛ حتی بدون نور خورشید و با تکیه بر انرژی شیمیایی.",
    symbol: "♨️",
    background: "linear-gradient(180deg,#07172b 0%,#122b43 55%,#351d22 100%)",
    accent: "#ff986b",
  },
  {
    time: "۰۱:۱۰ — ۰۱:۲۵",
    title: "زندگی، راه خودش را پیدا می‌کند",
    text: "زیست‌بوم‌هایی مستقل در تاریکی",
    narration: "این اکوسیستم‌ها نشان می‌دهند زندگی همیشه به نور مستقیم خورشید وابسته نیست. میکروب‌ها انرژی مواد شیمیایی را به کار می‌گیرند و پایه زنجیره غذایی را می‌سازند.",
    symbol: "🦐",
    background: "linear-gradient(145deg,#061a2c 0%,#17404c 55%,#0a1725 100%)",
    accent: "#8de2b7",
  },
  {
    time: "۰۱:۲۵ — ۰۱:۳۰",
    title: "اقیانوس هنوز رازهای زیادی دارد",
    text: "بخش بزرگی از اعماق، همچنان ناشناخته است",
    narration: "ما هنوز همه رازهای اعماق اقیانوس را نمی‌دانیم. شاید شگفت‌انگیزترین کشفیات، هنوز در تاریکی منتظر ما باشند.",
    symbol: "🌌",
    background: "radial-gradient(circle at 50% 40%,#163d5a 0%,#07172b 55%,#010611 100%)",
    accent: "#b8c9ff",
  },
];

const OceanScene: React.FC<{ data: SceneData; index: number }> = ({ data, index }) => {
  const frame = useCurrentFrame();
  const fade = interpolate(frame, [0, 20, 410, 450], [0, 1, 1, 0], { extrapolateRight: "clamp" });
  const drift = Math.sin(frame / 24) * 18;
  const zoom = interpolate(frame, [0, 450], [0.82, 1.12], { extrapolateRight: "clamp" });
  const progress = interpolate(frame, [0, 450], [0, 100], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: data.background, color: "white", fontFamily: "sans-serif", direction: "rtl", opacity: fade, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.16, backgroundImage: "radial-gradient(#b7eaff 1.5px, transparent 1.5px)", backgroundSize: "72px 72px", transform: `translateY(${drift}px)` }} />
      <div style={{ position: "absolute", top: 82, right: 68, left: 68, display: "flex", justifyContent: "space-between", fontSize: 27, color: data.accent, fontWeight: 800 }}>
        <span>مستند کوتاه | اعماق اقیانوس</span><span>{data.time}</span>
      </div>
      <div style={{ position: "absolute", top: 300, width: "100%", textAlign: "center", fontSize: 270, transform: `translateY(${drift}px) scale(${zoom})`, filter: "drop-shadow(0 20px 35px #0009)" }}>{data.symbol}</div>
      <div style={{ position: "absolute", top: 850, left: 65, right: 65, textAlign: "center", fontSize: 73, lineHeight: 1.35, fontWeight: 900, textShadow: "0 8px 25px #0009" }}>{data.title}</div>
      <div style={{ position: "absolute", top: 1110, left: 95, right: 95, padding: "30px 34px", border: `2px solid ${data.accent}88`, borderRadius: 26, background: "#020b1bbd", textAlign: "center", fontSize: 42, lineHeight: 1.55, color: "#e9f8ff" }}>{data.text}</div>
      <div style={{ position: "absolute", bottom: 185, left: 70, right: 70, fontSize: 31, lineHeight: 1.8, color: "#e4f4ff", textAlign: "center" }}>{data.narration}</div>
      <div style={{ position: "absolute", bottom: 92, left: 70, right: 70, height: 7, borderRadius: 20, background: "#ffffff30" }}>
        <div style={{ height: "100%", width: `${progress}%`, borderRadius: 20, background: data.accent }} />
      </div>
      <div style={{ position: "absolute", bottom: 35, width: "100%", textAlign: "center", color: "#ffffff80", fontSize: 21 }}>فصل {index + 1} از {scenes.length}</div>
    </AbsoluteFill>
  );
};

export const DeepOceanDocumentary: React.FC = () => (
  <AbsoluteFill>
    {scenes.map((scene, index) => (
      <Sequence key={scene.time} from={index * 450} durationInFrames={450}>
        <OceanScene data={scene} index={index} />
      </Sequence>
    ))}
  </AbsoluteFill>
);
