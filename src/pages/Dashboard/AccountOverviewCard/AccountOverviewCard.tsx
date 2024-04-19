import { FC, useState } from "react";

import { RiArrowRightUpFill, RiArrowRightDownFill } from "react-icons/ri";
import {
  MdArrowBackIosNew,
  MdCircle,
  MdOutlineJoinRight,
  MdJoinLeft,
} from "react-icons/md";
import { SiTaxbuzz } from "react-icons/si";

import { IAccountOverviewCard } from "../../../interfaces/global.interface";
import { BsGraphUp } from "react-icons/bs";

import styles from "../../../styles/styles.module.css";
import { countDigits } from "../../../utils/helper";

import "./AccountOverviewCard.module.css";
import CustomChart from "../../../components/CustomChart/CustomChart";
import IconSwitch from "./IconSwitch/IconSwitch";

interface IOverviewData {
  overview: IAccountOverviewCard;
  hideGraphHandler: () => void;
  showGraphHandler: (id: number) => void;
  showGraph: boolean;
  selectedCard: number;
}

const AccountOverviewCard: FC<IOverviewData> = ({
  overview,
  hideGraphHandler,
  showGraphHandler,
  showGraph,
  selectedCard,
}) => {
  const [showAmount, setShowAmount] = useState<boolean>(false);

  const handleMouseOver = () => {
    setShowAmount(true);
  };

  const handleMouseOut = () => {
    setShowAmount(false);
  };

  const amount =
    countDigits(overview.amount) >= 4
      ? overview.amount.toLocaleString()
      : overview.amount;

  const reworkedAmount = overview.amount.toFixed(2).split(".");
  console.log(showGraph, selectedCard);

  return (
    <div className={`relative bg-[#aaa000]`}>
      <div
        className={`bg-white w-[341px] z-5 shadow-sm text-black h-[187px] px-[20px] py-[23px] absolute`}
        onMouseEnter={() => handleMouseOver()}
        onMouseLeave={() => handleMouseOut()}
      >
        <IconSwitch
          id={overview.id}
          selectedCard={selectedCard}
          showAmount={showAmount}
          ActiveIcon={overview.activeIcon}
          InactiveIcon={overview.inactiveIcon}
          AdditionalIcon={overview.additionalIcon}
        />

        <div className="flex mt-[20px]">
          <h1 className="text-[12px]">{overview.title}</h1>
          <div className="flex items-center ml-3">
            {overview.isLoss && overview.isLoss ? (
              <div className="bg-[#d20000] px-[6px] py-[1px] rounded-md">
                <RiArrowRightDownFill color="white" />{" "}
              </div>
            ) : (
              <div className="bg-[#aef600] px-[6px] py-[1px] rounded-md">
                <RiArrowRightUpFill />{" "}
              </div>
            )}
            <p className="ml-2">{overview.percentage}</p>
          </div>
        </div>
        <div>
          {(showAmount && !showGraph) || showAmount ? (
            <div
              className={`flex mt-5 animate__animated ${styles.fadeInUp} animate__faster cursor-pointer`}
              onClick={() => showGraphHandler(overview.id)}
            >
              <button className="border border-gray-300 px-[55px] mr-3">
                {overview.btnText}
              </button>
              <div className="bg-[#6a35f6] px-[12px] py-[12px] rounded-[50px]">
                <BsGraphUp color="white" />
              </div>
            </div>
          ) : (
            <div
              className={`flex items-center animate__animated font-DMMono tracking-[0px] ${styles.fadeInDown} animate__faster`}
            >
              <span
                className={
                  selectedCard && selectedCard === overview.id
                    ? "text-[20px]"
                    : "text-[35px]"
                }
              >
                $
              </span>
              <p className="text-[35px]">{amount}</p>{" "}
              {countDigits(overview.amount) < 4 && (
                <span className="text-[20px] text-gray-400 pt-[10px]">
                  .{reworkedAmount[1]}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <div
        className={`bg-white text-black z-1 top-0 h-[187px] w-[341px]  ${
          showGraph && selectedCard === overview.id
            ? styles.slideRight
            : showGraph
        } ${styles.animateSlideTransit}`}
      >
        {showGraph && selectedCard === overview.id && (
          <div>
            <div className="text-gray-400">
              <p className="pt-[78px] ml-[-80px] text-[12px]">VS LAST WEEK</p>
              <div className="mt-[-90px] ml-[-29px]">
                <CustomChart />
              </div>
            </div>
            <div
              className="pt-[45px] mt-[-155px] h-[107px] right-[0px] absolute bg-gray-200"
              onClick={() => hideGraphHandler()}
            >
              <MdArrowBackIosNew color="black" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountOverviewCard;
