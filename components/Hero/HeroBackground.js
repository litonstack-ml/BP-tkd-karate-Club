import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero.webp"
          alt="BP Taekwondo & Karate Club"
          fill
          priority
          className="object-cover brightness-50 transition-transform duration-[10000ms] hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/50 to-black/80" />
    </>
  );
}
