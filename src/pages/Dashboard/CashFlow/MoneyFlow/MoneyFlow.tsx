import { FC, useState } from "react";

import { HalfCircle } from "../../../../Icons";
import styles from "../../../../styles/styles.module.css";
import halfCircle from "../../../../assets/images/half-circle.png";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { EMoneyFlow } from "../../../../enums/moneyFlow.enum";
import { countDigits } from "../../../../utils/helper";

interface IMoneyFlow {
  id: number;
  title: string;
  amount: number;
  flowType: EMoneyFlow;
  activeTab: EMoneyFlow;
  handleTabSelected: (item: EMoneyFlow) => void;
}

const MoneyFlow: FC<IMoneyFlow> = ({
  title,
  amount,
  flowType,
  activeTab,
  handleTabSelected,
}) => {
  const [showAmount, setShowAmount] = useState<boolean>(false);

  const handleMouseOver = () => {
    setShowAmount(true);
  };

  const handleMouseOut = () => {
    setShowAmount(false);
  };

  const amountWithoutDecimal = amount.toFixed(2).split(".")[0];

  return (
    <>
      <div
        className={`text-black relative flex items-center w-[48%] pb-[10px] ${
          activeTab !== flowType && !showAmount ? "opacity-50" : ""
        }`}
        onMouseEnter={() => handleMouseOver()}
        onMouseLeave={() => handleMouseOut()}
        onClick={() => handleTabSelected(flowType)}
      >
        <div>
          <div
            className={`absolute left-[11px] top-[12px] ${
              showAmount
                ? styles.fadeInUp2
                : "animate__animated animate__fadeInUp animate__faster"
            }`}
          >
            {EMoneyFlow.MONEY_IN === flowType ? (
              <ImArrowDown color="white" />
            ) : (
              <ImArrowUp color="white" />
            )}
          </div>
          <div className={`bg-black rounded-[50px] h-[35px] w-[35px] pt-[4px]`}>
            <img src={halfCircle} className="w-[40px]" alt="half cirle icon" />
            {/* <HalfCircle /> */}
          </div>
        </div>
        <div className="ml-3">
          <p className="capitalize">{title}</p>
          <p className="text-[22px]">
            ${amount.toLocaleString().split(".")[0]}
            {countDigits(+amountWithoutDecimal) <= 3 && (
              <span className="text-gray-400 text-[16px]">
                .{amount.toFixed(2).split(".")[1]}
              </span>
            )}
          </p>
        </div>
        <div
          className={`h-[12px] absolute bottom-0 left-0  ${
            activeTab === flowType
              ? " w-[108%] animate__animated animate__pulse border-b-2 border-gray-900"
              : "w-[98%] border-b border-gray-200"
          } ${
            showAmount ? "border-b border-gray-500" : "border-b border-gray-200"
          }`}
        ></div>
      </div>
    </>
  );
};

export default MoneyFlow;
