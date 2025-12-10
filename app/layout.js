import { Syne} from "next/font/google";
import "./globals.css";
import { Sora } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { Inter } from "next/font/google";

// Custom fonts
// const syne = Syne({
//   subsets : ["latin"],
//   weight : ["400", "600", "700", "800"],

// })

// const sora = Sora({
//   subsets: ["latin"],
//   weight: ["300", "400", "600", "700", "800"],
// });


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata = {
  title: "OM Portfolio Website",
  description: "Full-Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className}
          antialiased`}

          suppressContentEditableWarning
      >
        {children}
      </body>
    </html>
  );
}
