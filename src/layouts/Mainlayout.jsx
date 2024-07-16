import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Mainlayout = () => {
  return (
    <section>

      <div className="hidden md:grid grid-cols-12">
        <div className="col-span-2 bg-[#155263] h-screen">
          <Navbar />
        </div>
        <div className="col-span-10">
          <Outlet />
        </div>
      </div>

         {/* // ? navbar for mobile  */}

         <div className="md:hidden">
            mobile navbar

         </div>
    </section>
  );
};

export default Mainlayout;
