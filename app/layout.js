import { Syne} from "next/font/google";
import "./globals.css";

// Custom fonts
const syne = Syne({
  subsets : ["latin"],
  weight : ["400", "600", "700", "800"],

})

export const metadata = {
  title: "OM Portfolio Website",
  description: "Full-Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.className}
          antialiased`}

          suppressContentEditableWarning
      >
        {children}
      </body>
    </html>
  );
}
