import { useState } from "react";
import cashFlowIcon from "../../../assets/images/cash-flow.png";
import TableHeader from "../../../components/TableHeader/TableHeader";
import { CashFlowData, moneyData } from "../../../data/dashboard";
import { EMoneyFlow } from "../../../enums/moneyFlow.enum";
import MoneyFlow from "./MoneyFlow/MoneyFlow";
import CashProgress from "./CashProgress/CashProgress";

const CashFlow = () => {
  const [activeTab, setActiveTab] = useState<EMoneyFlow>(EMoneyFlow.MONEY_IN);

  const handleTabSelected = (tabSelected: EMoneyFlow) => {
    setActiveTab(tabSelected);
  };
  return (
    <div className="text-black w-[48%]">
      <TableHeader
        title="Cash Flow"
        icon={cashFlowIcon}
        activity="Last 30 days"
        amountToSee="See All"
      />
      <div className="mt-[16px] flex justify-between">
        {moneyData.map((money) => (
          <MoneyFlow
            key={money.id}
            title={money.title}
            amount={money.amount}
            id={money.id}
            flowType={money.flowType}
            activeTab={activeTab}
            handleTabSelected={handleTabSelected}
          />
        ))}
      </div>
      {CashFlowData.map((flow) => (
        <CashProgress
          key={flow.id}
          title={flow.title}
          amount={flow.amount}
          color={flow.color}
          percentage={flow.percentage}
        />
      ))}
    </div>
  );
};

export default CashFlow;
