import { useEffect, useState } from "react";
import Input from "./components/Input";
import useCurrencyInfo from "./customHook/currencyInfo";
function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);

    // setAmount(0);
    // setConvertedAmount(0);
  };

  useEffect(() => {
    convert();
  }, [currencyInfo, amount]);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-[100vw] h-[100vh] flex flex-col flex-wrap justify-around  items-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600)`,
        }}
      >
        <h1 className="text-green-900 bg-[#ccc] text-6xl justify-between font-bold">
          Currency Convertor
        </h1>

        <div className="w-full mb-[150px] max-w-[40%] mx-auto border border-gray-50 rounded-xl p-6 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1 ">
              <Input
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-1">
              <button
                className="absolute left-1/2 transform -translate-x-1/2 top-[-13px] rounded-lg bg-blue-600 text-white px-3 py-1 font-semibold text-lg"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mb-1 ">
              <Input
                label="To"
                amount={convertedAmount}
                amountDisabled
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
