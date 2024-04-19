import { FC } from "react";
import { IoCaretDownCircleSharp } from "react-icons/io5";
import ProgressBar from "../../../../components/ProgressBar/ProgressBar";

interface ICashProgress {
  color: string;
  title: string;
  percentage: number;
  amount: number;
}

const CashProgress: FC<ICashProgress> = ({
  color,
  title,
  percentage,
  amount,
}) => {
  return (
    <div className="mt-[20px]">
      <div className="flex justify-between">
        <div className="flex items-center mb-3 ml-[0px]">
          <IoCaretDownCircleSharp size={25} color={color} />
          <p className="ml-4">
            {title} <span className="ml-4">%{percentage}</span>
          </p>
        </div>
        <p className="font-DMMono">
          ${amount.toLocaleString().split(".")[0]}
          <span className="text-gray-400">
            .{amount.toFixed(2).split(".")[1]}
          </span>
        </p>
      </div>

      <ProgressBar color={color} percentage={percentage} />
    </div>
  );
};

export default CashProgress;
