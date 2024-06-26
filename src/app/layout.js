import "./globals.scss";
import Navbar from "./components/Navbar";
export const metadata = {
  title: "Next App Template : Sahin",
  description: "Generated by create next app by Sahin Alam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Navbar/>
      {children }</body>
    </html>
  );
}
