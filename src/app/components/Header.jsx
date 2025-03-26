import Main from "./Main";

export default function Header() {
  return (
    <>
      <div className="wrap">
        <div className="header">
          <div className="header_into">
            <div className="logo">
              <img src="logo2.jpg" alt="" className="header_img" />
              <span className="nikename">DevNation</span>
            </div>
            <div className="units">
              <button className="sidebarw"><div className="line"></div></button>


              <svg className="contactimg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM208 288l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z" /></svg>
              <button className="enter"><span className="kirish">Kirish</span><img src="enter.png" alt="" className="kirishimg" /></button>
            </div>
          </div>
        </div>
        <Main />
      </div>
    </>
  );
}
