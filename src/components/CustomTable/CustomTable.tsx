import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";

import { ITransactions } from "../../interfaces/global.interface";

import styles from "../../styles/styles.module.css";

interface ICustomTable {
  row: ITransactions;
}

const CustomTable: React.FC<ICustomTable> = ({ row }) => {
  const [isHover, setIsHover] = React.useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  const CompanyLogo = row.companyLogo;
  const amount = row.amount;
  const splitedAmount = amount.toFixed(2).split(".");

  console.log({ isHover });
  return (
    <TableContainer component={Paper}>
      <Table aria-label="custom table">
        <TableBody>
          <TableRow
            onMouseEnter={() => handleMouseOver()}
            onMouseLeave={() => handleMouseOut()}
            className={isHover ? "bg-gray-100" : ""}
          >
            <TableCell
              align="left"
              height={10}
              className={`w-[12px] ${styles.animateTransit} ${
                isHover ? styles.skipRight : styles.returnSkipRightCustom
              }`}
            >
              <CompanyLogo />
            </TableCell>
            <TableCell
              align="left"
              height={10}
              className={`flex flex-col w-[200px] h-[10px] pl-[-22px] ${
                styles.animateTransit
              } ${isHover ? styles.skipRight : styles.returnSkipRightCustom}`}
            >
              <p className="font-medium">{row.companyName}</p>
              <p className="text-gray-400 text-[12px]">
                {moment(row.timeDay).format("ddd, DD MMM, HH:mm")}
              </p>
            </TableCell>
            <TableCell align="left" className="w-[100px]" height={10}>
              <p className="bg-[#F8F9FD] py-[6px] px-[14px] w-[100px]">
                {row.department}
              </p>
            </TableCell>
            <TableCell align="left" className="flex w-[100px]">
              <p
                className={`font-DMMono ${!row.isLoss ? "text-[#307267]" : ""}`}
              >
                {row.isLoss ? (
                  <span>-</span>
                ) : (
                  <span className="text-[#307267]">+</span>
                )}
                $
                {amount.toFixed(2).split(".").length >= 2
                  ? parseInt(amount.toFixed(2).split(".")[0]).toLocaleString()
                  : amount.toLocaleString()}
                .
                <span
                  className={`${
                    !row.isLoss ? "text-[#b1f4ea]" : "text-gray-400"
                  }`}
                >
                  {splitedAmount[1]}
                </span>
              </p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
