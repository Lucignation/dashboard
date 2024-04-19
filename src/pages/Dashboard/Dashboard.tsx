
import { RiArrowRightUpFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import AccountOverview from "./AccountOverview/AccountOverview";
import RecentTransactions from "./RecentTransactions/RecentTransactions";
import CashFlow from "./CashFlow/CashFlow";

const Dashboard = () => {
  return (
    <div className="overflow-hidden pb-[80px]">
      <div className="text-white mx-auto max-w-6xl mt-[62px] text-[13px] h-full ">
        <h2>TOTAL BALANCE</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-end">
            <h1 className="text-[36px] font-Lato">$36,254</h1>
            <div className="flex items-center ml-6 mb-[12px]">
              <div className="bg-[#AEF600] px-2 py-[2px] text-black rounded-md text-center mr-2">
                <RiArrowRightUpFill />
              </div>
              <p>$328.32 Today, Feb 15</p>
            </div>
          </div>
          <div className="flex items-center h-[20px]">
            <div className="flex items-center ml-2 cursor-pointer">
              <IoMdEye />
              <p className="ml-2">View Analytics</p>
            </div>
            <p className="ml-2">
              <RxDividerVertical size={30} color="#424242" />
            </p>
            <div className="flex items-center ml-3 bg-[#6A35F6] px-2 py-2 cursor-pointer">
              <MdArrowOutward />
              <p className="ml-2">Send Money</p>
            </div>
            <div className="flex items-center ml-3 bg-[#7d7d7d30] px-2 py-2 cursor-pointer">
              <FaPlus />
              <p className="ml-2">Add Money</p>
            </div>
            <div className="ml-3 bg-[#7d7d7d30] rounded-[50px] px-3 py-3 cursor-pointer">
              <IoEllipsisHorizontalSharp />
            </div>
          </div>
        </div>

        <AccountOverview />
        <div className="flex justify-between mt-[63px] ">
          <RecentTransactions />
          <CashFlow />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
