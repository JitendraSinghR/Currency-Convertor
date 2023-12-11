import React from "react";

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex ">
      <div className="w-1/2 ">
        <label htmlFor="myAmount" className="text-black mb-2  inline-block ">
          {label}
        </label>

        <input
          id="myAmount"
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="0.00"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-200 cursor-pointer outline-none"
          disabled={currencyDisabled}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {/* always remember the keys when using loop in react. */}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
