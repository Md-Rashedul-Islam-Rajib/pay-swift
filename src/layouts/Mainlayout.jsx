import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";

const Mainlayout = () => {

  const location = useLocation();
  console.log(location)

  const isSignUp = location.pathname.includes('signup')
  const isLogin = location.pathname.includes('login')
  return (
    <section>

      <div className="hidden md:grid grid-cols-12">
        {(isLogin || isSignUp) || <div className="col-span-2 bg-[#155263] h-screen">
          <Navbar />
        </div>}
        <div className="col-span-10">
          <Outlet />
        </div>
      </div>

         {/* // ? navbar for mobile  */}

         <div className="grid md:hidden">
            <NavbarMobile />
            <Outlet />
         </div>
    </section>
  );
};

export default Mainlayout;
