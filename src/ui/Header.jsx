import MobileNav from "./MobileNav";
import Nav from "./Nav";
import logo from "/assets/Logo.svg";

function Header() {
  return (
    <header className="flex items-center justify-between py-[25px] Laptops:py-[50px] px-[20px] Laptops:px-[50px] ">
      <a href="#Home" className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="animate-Logo_Spin" />
        <div className=" pt-[5px] pl-[10px] overflow-hidden">
          <h3 className="text-brand_2 font-bold text-[2rem] animate-Logo overflow-hidden">
            Positivus
          </h3>
        </div>
      </a>
      <Nav />

      <span className="block Laptops:hidden">
        <MobileNav />
      </span>
    </header>
  );
}

export default Header;
