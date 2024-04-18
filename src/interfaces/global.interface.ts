export interface INav {
  name: string;
  path: string;
  active: boolean;
}

export interface IAccountOverviewCard {
  id: number;
  inactiveIcon: string;
  activeIcon: string;
  title: string;
  percentage: string;
  isLoss: boolean;
  amount: number;
  btnText: string;
}

export interface ITransactions {
  companyLogo: () => React.ReactElement;
  companyName: string;
  timeDay: string;
  department: string;
  amount: number;
  isLoss: boolean;
}
