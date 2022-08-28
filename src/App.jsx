import { useState } from "react";
import ClipboardIcon from "./components/ClipboardIcon";
import "./App.css";

function App() {
  const charset = {
    numbers: "1234567890",
    symbols: "~!@#$%^&*())_+=-/<>?",
    uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
    lowercase: "qwertyuiopasdfghjklzxcvbnm",
  };
  const [passwordOptions, setPasswordOptions] = useState({
    length: 4,
    include: {
      numbers: false,
      symbols: false,
      uppercase: false,
      lowercase: false,
    },
  });
  const [passwordResult, setPasswordResult] = useState("");

  const generatePassword = () => {
    let keys = "";
    let result = "";

    if (passwordOptions.include.numbers) keys += charset.numbers;
    if (passwordOptions.include.symbols) keys += charset.symbols;
    if (passwordOptions.include.uppercase) keys += charset.uppercase;
    if (passwordOptions.include.lowercase) keys += charset.lowercase;

    if (Object.values(passwordOptions.include).every((x) => x === false)) {
      alert("You must select at least option!");
    } else {
      for (let i = 0; i < passwordOptions.length; i++) {
        console.log(keys[Math.floor(Math.random() * keys.length)]);
        result += keys[Math.floor(Math.random() * keys.length)];
      }
      setPasswordResult(result);
    }
  };

  const copyPassword = () => {
    if (passwordResult === "") {
      return alert("You should create password before copy password!");
    }
    return (
      navigator.clipboard.writeText(passwordResult),
      alert("Password copyied succesful!")
    );
  };

  return (
    <div className="flex justify-center min-h-screen bg-slate-900">
      <div className="flex flex-col justify-center items-center container mx-auto gap-2.5">
        <div className="flex flex-col	max-w-md w-full relative">
          <label className="py-2 font-semibold text-sm text-slate-400">
            Result
          </label>
          <input
            value={passwordResult}
            onChange={(e) => setPasswordResult(e.target.value)}
            disabled
            type="text"
            placeholder="Press generate password for result!"
            className="placeholder:text-center placeholder:text-xs placeholder:text-teal-300 font-mono px-3 py-2 bg-slate-800 rounded-md outline-0 text-white font-normal text-xl w-full"
          />
          {passwordResult !== "" && (
            <ClipboardIcon
              styles="cursor-pointer fill-slate-400 hover:fill-teal-300 absolute bottom-2.5 right-2"
              onClick={() => copyPassword()}
            />
          )}
        </div>
        <div className="flex flex-col max-w-md w-full">
          <label className="py-2 font-normal text-sm text-slate-400">
            Length:{" "}
            <strong className="font-semibold text-teal-300">
              {passwordOptions.length}
            </strong>
          </label>
          <div className="flex items-center font-mono px-3 py-2 bg-slate-800 rounded-md outline-0 text-white font-normal text-xl w-full">
            <span className="px-3">4</span>
            <input
              value={passwordOptions.length}
              onChange={(e) =>
                setPasswordOptions({
                  ...passwordOptions,
                  length: e.target.value,
                })
              }
              min="4"
              max="32"
              type="range"
              className="accent-teal-300 w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <span className="px-3">32</span>
          </div>
        </div>
        <div className="flex flex-col max-w-md w-full">
          <label className="py-1 font-semibold text-sm text-slate-400">
            Options
          </label>
          <div className="flex flex-col	max-w-md w-full bg-slate-800 p-5 rounded-md">
            <ul className="text-white">
              <li className="flex items-center justify-between py-2">
                Include Numbers
                <label
                  htmlFor="include-number"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="include-number"
                    className="sr-only peer"
                    onChange={(e) =>
                      setPasswordOptions({
                        ...passwordOptions,
                        include: {
                          ...passwordOptions.include,
                          numbers: e.target.checked,
                        },
                      })
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-300"></div>
                </label>
              </li>
              <li className="flex items-center justify-between py-2">
                Include Symbols
                <label
                  htmlFor="include-symbols"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="include-symbols"
                    className="sr-only peer"
                    onChange={(e) =>
                      setPasswordOptions({
                        ...passwordOptions,
                        include: {
                          ...passwordOptions.include,
                          symbols: e.target.checked,
                        },
                      })
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-300"></div>
                </label>
              </li>
              <li className="flex items-center justify-between py-2">
                Include Uppercase
                <label
                  htmlFor="include-uppercase"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="include-uppercase"
                    className="sr-only peer"
                    onChange={(e) =>
                      setPasswordOptions({
                        ...passwordOptions,
                        include: {
                          ...passwordOptions.include,
                          uppercase: e.target.checked,
                        },
                      })
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-300"></div>
                </label>
              </li>
              <li className="flex items-center justify-between py-2">
                Include Lowercase
                <label
                  htmlFor="include-lowercase"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="include-lowercase"
                    className="sr-only peer"
                    onChange={(e) =>
                      setPasswordOptions({
                        ...passwordOptions,
                        include: {
                          ...passwordOptions.include,
                          lowercase: e.target.checked,
                        },
                      })
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-300"></div>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-2 flex flex-col max-w-md w-full">
          <button
            className="apperance-none font-semibold text-teal-300 w-full bg-slate-800 rounded-md p-2 hover:bg-teal-300 hover:text-slate-800"
            onClick={() => {
              console.log(passwordOptions);
              generatePassword();
            }}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
