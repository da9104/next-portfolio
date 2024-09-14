import "./globals.css";
import Header from '../components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``} >
           <Header />
           {children}
      </body>
    </html>
  );
}
