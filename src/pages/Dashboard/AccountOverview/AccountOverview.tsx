import { useState } from "react";
import overviewLogo from "../../../assets/images/overview.png";
import { overviewData } from "../../../data/dashboard";
import { IAccountOverviewCard } from "../../../interfaces/global.interface";
import AccountOverviewCard from "../AccountOverviewCard/AccountOverviewCard";
import styles from "../../../styles/styles.module.css";

const AccountOverview = () => {
  const [showGraph, setShowGraph] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<number>(0);

  const showGraphHandler = (id: number) => {
    // setSelectedCard(id);
    if (id === 1) {
      setShowGraph(true);
      return setSelectedCard(id); //Due to deadline, I will only make the first time to show
    } else {
      setSelectedCard(0);
    }
  };

  const hideGraphHandler = () => {
    setShowGraph(false);
    setSelectedCard(0);
  };

  return (
    <div className="mb-[20px] ">
      <div className="flex items-center mt-[60px] mb-[20px]">
        <img src={overviewLogo} className="w-[30px]" alt="overview" />
        <div className="flex items-end">
          <p className="text-[20px] mx-3">Overview</p>
          <span className="mb-[2px] text-gray-500">Last 30 days</span>
        </div>
      </div>
      <div className={`flex justify-between mr-2 `}>
        {overviewData.map((overview: IAccountOverviewCard, index: number) => (
          <div
            key={overview.id}
            className={`${styles.animateSlideTransit} ${
              showGraph && selectedCard !== overview.id && selectedCard === 1
                ? styles.slideRight
                : styles.returnSlideRight
            }`}
          >
            <AccountOverviewCard
              overview={overview}
              showGraphHandler={showGraphHandler}
              hideGraphHandler={hideGraphHandler}
              showGraph={showGraph}
              selectedCard={selectedCard}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountOverview;
