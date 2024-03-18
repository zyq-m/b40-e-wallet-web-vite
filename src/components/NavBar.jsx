import { logo } from "../assets";
import { useNavigate } from "react-router-dom";
import DD_Registrations from "./DD_Registrations";
import DD_UsersData from "./DD_UsersData";
import DD_Transactions from "./DD_Transactions";
import { logout, downloadQR } from "../api/auth";

const NavBar = () => {
  const navigate = useNavigate();

  const dropdownOptions1 = ["Cafe Owner", "Student"];
  const dropdownOptions2 = ["Cafe Owner", "Ekupon", "Paynet", "Maidam"];
  const dropdownOptions3 = ["All-Cafe", "Cafe Owners", "Ekupon", "Paynet"];

  const onLogout = async () => {
    try {
      await logout();
      localStorage.clear();
      navigate("/admin-page/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="flex items-center justify-between px-4 bg-white border-b justify-self-stretch">
      <img src={logo} alt="" className="w-[8rem]" />

      <div>
        <button
          type="button"
          onClick={() => navigate("/admin-page")}
          className="items-center justify-center gap-2 px-4 py-3 text-sm text-gray-700 align-middle transition-all bg-white hs-dropdown-toggle hover:font-bold"
        >
          Home
        </button>

        <DD_Registrations options={dropdownOptions1} />

        <DD_UsersData options={dropdownOptions2} />

        <button
          type="button"
          onClick={() => navigate("/admin-page/addWallet")}
          className="items-center justify-center gap-2 px-4 py-3 text-sm text-gray-700 align-middle transition-all bg-white hs-dropdown-toggle hover:font-bold"
        >
          E-Wallet Point
        </button>

        <DD_Transactions options={dropdownOptions3} />

        <button
          type="button"
          onClick={() => navigate("/admin-page/spendLimit")}
          className="items-center justify-center gap-2 px-4 py-3 text-sm text-gray-700 align-middle transition-all bg-white hs-dropdown-toggle hover:font-bold"
        >
          Spend Limit
        </button>

        <button
          type="button"
          onClick={async () => downloadQR()}
          className="items-center justify-center gap-2 px-4 py-3 text-sm text-gray-700 align-middle transition-all bg-white hs-dropdown-toggle hover:font-bold"
        >
          Download Cafe's QR
        </button>
      </div>

      <div>
        <button
          type="button"
          onClick={onLogout}
          className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#Ffd035] text-black hover:bg-[#E4be3c] focus:outline-none focus:ring-2 focus:ring-[#Ffd035] focus:ring-offset-2 transition-all text-sm"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
