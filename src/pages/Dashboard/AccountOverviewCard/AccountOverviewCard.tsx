import { FC, useState, useEffect, useRef } from "react";

import { RiArrowRightUpFill, RiArrowRightDownFill } from "react-icons/ri";
import { IAccountOverviewCard } from "../../../interfaces/global.interface";
import { BsGraphUp } from "react-icons/bs";
import { gsap } from "gsap";

import styles from "../../../styles/styles.module.css";
import { countDigits } from "../../../utils/helper";

import "./AccountOverviewCard.module.css";

interface IOverviewData {
  overview: IAccountOverviewCard;
}

const AccountOverviewCard: FC<IOverviewData> = ({ overview }) => {
  const [showAmount, setShowAmount] = useState<boolean>(true);
  const boxRef = useRef(null);

  const handleMouseOver = (index: number, icon: string) => {
    setShowAmount(false);
    animateImageChange(icon);
  };

  const handleMouseOut = (index: number, icon: string) => {
    setShowAmount(true);
    animateImageChange(icon);
  };

  useEffect(() => {
    const animation = gsap.to(boxRef.current, {
      //   y: -10,
      //   rotation: 360,
      duration: 2,
      ease: "power2.inOut",
    });

    return () => {
      animation.kill(); // Clean up animation
    };
  }, []);

  const animateImageChange = (newImageSrc: string) => {
    gsap.to(".overview-image", {
      duration: 0.1,
      opacity: 0.8,
      onComplete: () => {
        document
          .querySelector(".overview-image")!
          .setAttribute("src", newImageSrc);
        gsap.to(".overview-image", { duration: 0.1, opacity: 1 });
      },
    });
  };

  const amount =
    countDigits(overview.amount) >= 4
      ? overview.amount.toLocaleString()
      : overview.amount;

  const reworkedAmount = overview.amount.toFixed(2).split(".");
  console.log(reworkedAmount);

  return (
    <div
      className="bg-white shadow-sm text-black w-[341px] h-[187px] px-[20px] py-[23px]"
      onMouseEnter={() => handleMouseOver(overview.id, overview.activeIcon)}
      onMouseLeave={() => handleMouseOut(overview.id, overview.inactiveIcon)}
    >
      <img
        src={showAmount ? overview.inactiveIcon : overview.activeIcon}
        className="h-[53px] overview-image"
        alt={overview.title}
        ref={boxRef}
      />
      <div className="flex mt-[20px]">
        <h1>{overview.title}</h1>
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
        {!showAmount ? (
          <div
            className={`flex mt-5 animate__animated ${styles.fadeInUp} animate__faster`}
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
            className={`flex items-center animate__animated ${styles.fadeInDown} animate__faster`}
          >
            <span className="text-[35px]">$</span>
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
  );
};

export default AccountOverviewCard;
