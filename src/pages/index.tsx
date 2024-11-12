import localFont from "next/font/local";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url("/1.jpg")` }} 
    >
      
      <h1 className={`${geistSans.variable} text-white text-4xl`}>Welcome to our Website</h1>

      <h1 className={`${geistSans.variable} text-white text-4xl`}>By: Power Puff Girls</h1>
    </section>
  );
}
