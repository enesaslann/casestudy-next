import "../styles/global.css";
import Logo from "../asset/logo.jpg";
import { UserDataProvider } from "<prefix>/context/UserData";
import Image from "next/image";
 

export default function RootLayout({ children }) {
  return (
    
    <UserDataProvider>
      <html lang="en">
        <body>
          <main>
            <div className="container">
              <div className="logoArea">
                <div>
                  <Image src={Logo} height="80" alt="aa"></Image>
                </div>
                <div>
                  <span className="logoTitle">Çalışan</span>
                </div>
              </div>
              {children}
            </div>
          </main>
        </body>
      </html>
    </UserDataProvider>
  );
}
