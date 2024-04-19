import { FC, ReactElement } from "react";
import { MdCircle, MdJoinLeft, MdOutlineJoinRight } from "react-icons/md";
import styles from "../../../../styles/styles.module.css";

interface IIconSwitch {
  selectedCard: number;
  id: number;
  showAmount: boolean;
  ActiveIcon: () => ReactElement;
  AdditionalIcon: () => ReactElement;
  InactiveIcon: () => ReactElement;
}

const IconSwitch: FC<IIconSwitch> = ({
  selectedCard,
  id,
  showAmount,
  ActiveIcon,
  InactiveIcon,
  AdditionalIcon,
}) => {
  return (
    <div className="relative">
      <span
        className={`absolute z-2 mt-[0px] left-[11px] ${
          styles.animateSlideTransit
        } ${
          selectedCard && selectedCard === id
            ? styles.returnSkipUp
            : styles.skipUp
        }`}
      >
        {/* <MdCircle color="#6937F5" size={10} /> */}
        <AdditionalIcon />
      </span>
      {showAmount || (selectedCard && selectedCard === id) ? (
        // <MdJoinLeft color="#6937F5" size={35} />
        <ActiveIcon />
      ) : (
        // <MdOutlineJoinRight size={35} />
        <InactiveIcon />
      )}
    </div>
  );
};

export default IconSwitch;
