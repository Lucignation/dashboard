import { FC } from "react";
import { INav } from "../../interfaces/global.interface";
import { RiSettingsLine, RiSearch2Line } from "react-icons/ri";
import { useLocation } from "react-router-dom";

const navs: Array<INav> = [
  { name: "Dashboard", path: "/dashboard", active: true },
  { name: "Payments", path: "/payments", active: false },
  { name: "Transaction", path: "/transaction", active: false },
  { name: "Cards", path: "/cards", active: false },
  { name: "Invoices", path: "/invoices", active: false },
  { name: "Insights", path: "/insights", active: false },
];

const Nav: FC = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div>
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block flex justify-center">
              <div className="flex space-x-4">
                {navs.map((nav: INav, index: number) => (
                  <a
                    href={nav.path}
                    className={`${
                      location.pathname === nav.path
                        ? "bg-[#6A35F6] text-gray-300 "
                        : "text-gray-300"
                    } text-white px-3 py-2 text-sm font-medium`}
                    aria-current="page"
                    key={index}
                  >
                    {nav.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="mr-3">
              <RiSearch2Line color="white" size={18} />
            </button>

            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            <p className="text-gray-700 ml-3 mr-3">|</p>

            <button>
              <RiSettingsLine color="white" size={18} />
            </button>

            <div className="relative ml-3">
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
