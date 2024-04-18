import recentTransactions from "../../../assets/images/recent-transactions.png";
import CustomTable from "../../../components/CustomTable/CustomTable";
import TableHeader from "../../../components/TableHeader/TableHeader";

import { transactions } from "../../../data/dashboard";

function createData(
  companyLogo: () => React.ReactElement,
  companyName: string,
  timeDay: string,
  department: string,
  amount: number,
  isLoss: boolean
) {
  return { companyLogo, companyName, timeDay, department, amount, isLoss };
}

const rows = transactions.map((transact) =>
  createData(
    transact.companyLogo,
    transact.companyName,
    transact.timeDay,
    transact.department,
    transact.amount,
    transact.isLoss
  )
);

const RecentTransactions = () => {
  return (
    <div className="text-black w-[48%]">
      <TableHeader
        title="Recent Transactions"
        icon={recentTransactions}
        activity="Last 5 activity"
        amountToSee="See All"
      />
      {rows.map((row, index) => (
        <CustomTable key={index} row={row} />
      ))}
    </div>
  );
};

export default RecentTransactions;
