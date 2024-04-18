import { FC } from "react";

interface ITableHeader {
  icon: string;
  title: string;
  activity: string;
  amountToSee: string;
}

const TableHeader: FC<ITableHeader> = ({
  icon,
  title,
  activity,
  amountToSee,
}) => {
  return (
    <div className="flex justify-between items-center mb-[1px] border-b border-gray-200 pb-[15px]">
      <div className="flex items-end">
        <img src={icon} className="h-[22px]" alt="recent transactions" />
        <h1 className="text-[18px] ml-2">{title}</h1>
        <p className="text-gray-500 ml-3 mb-[2px]">{activity}</p>
      </div>
      <p className="text-[#6a35f6]">{amountToSee}</p>
    </div>
  );
};

export default TableHeader;
