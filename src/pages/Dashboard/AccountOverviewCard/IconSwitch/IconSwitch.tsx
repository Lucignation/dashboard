import { FC, ReactElement } from "react";
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
        <AdditionalIcon />
      </span>
      {showAmount || (selectedCard && selectedCard === id) ? (
        <ActiveIcon />
      ) : (
        <InactiveIcon />
      )}
    </div>
  );
};

export default IconSwitch;
