import overviewLogo from "../../../assets/images/overview.png";
import { overviewData } from "../../../data/dashboard";
import { IAccountOverviewCard } from "../../../interfaces/global.interface";
import AccountOverviewCard from "../AccountOverviewCard/AccountOverviewCard";

const AccountOverview = () => {
  return (
    <div className="mb-[20px]">
      <div className="flex items-center mt-[60px]">
        <img src={overviewLogo} className="w-[30px]" alt="overview" />
        <div className="flex items-end">
          <p className="text-[20px] mx-3">Overview</p>
          <span className="mb-[2px] text-gray-500">Last 30 days</span>
        </div>
      </div>
      <div className="flex justify-between">
        {overviewData.map((overview: IAccountOverviewCard, index: number) => (
          <AccountOverviewCard key={index} overview={overview} />
        ))}
      </div>
    </div>
  );
};

export default AccountOverview;
