import {  NavLink} from "react-router-dom";

function ActionButton() {
 
  return (
    <div className="space-y-4 max-w-sm mx-4 text-sm">
      <div className="bg-gray-100 shadow-sm p-4 rounded-lg flex justify-between items-center">
        <span className="text-gray-700 font-bold">Redeem Points</span>
        <NavLink to="/redeem">
        <button className="bg-primary-text text-white px-5 py-2 rounded-lg"
       
        >

          Redeem
        </button>
        </NavLink>
      </div>

      <div className="bg-gray-100 shadow-sm p-4 rounded-lg flex justify-between items-center">
        <span className="text-gray-700 font-bold">Referral</span>
        <NavLink to="/invite">
        <button className="bg-primary-text text-white px-5 py-2 rounded-lg">
          Refer
        </button>
        </NavLink>
      </div>

      <div className="bg-gray-100 shadow-sm p-4 rounded-lg flex justify-between items-center">
        <span className="text-gray-400 font-bold">Games</span>
        <button className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed">
          Coming Soon
        </button>
      </div>
    </div>
  );
}

export default ActionButton;
