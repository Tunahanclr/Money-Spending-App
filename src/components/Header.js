import React from "react";
import { moneyFormat } from "../Helpers";
export default function Header({ total, money }) {
  return (
    <>
      <div className="   fixed top-0 left-0 right-0 z-50  flex justify-center mt-4 bg-gradient-to-br h-16   w-full  from-green-500 to-green-800">
        {total > 0 && money - total !== 0 && (
          <div className="header">
            {" "}
            <p className="  items-center flex text-white font-bold text-4xl">
              You have {moneyFormat(money - total)} left to spend
            </p>
          </div>
        )}
        {total === 0 && (
          <div className="header">
            {" "}
            <p className="statick items-center flex text-white font-bold text-4xl">
              You Have Money ${moneyFormat(money)} to spend
            </p>
          </div>
        )}
        {money - total === 0 && (
          <div className="text-red-500 font-semibold text-3xl">
            You're Out of Money Congratulations
          </div>
        )}
      </div>
    </>
  );
}
