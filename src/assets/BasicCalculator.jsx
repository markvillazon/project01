import { useState } from "react";

function BasicCalculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    function calculate(operation) {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        if (isNaN(number1) || isNaN(number2)) {
            setResult("Invalid input");
            return;
        }
        switch (operation) {
            case "add":
                setResult(number1 + number2);
                break;
            case "subtract":
                setResult(number1 - number2);
                break;
            case "multiply":
                setResult(number1 * number2);
                break;
            case "divide":
                setResult(number2 !== 0 ? number1 / number2 : "Cannot divide by zero");
                break;
            default:
                setResult("Unknown operation");
        }
    }

    function clearFields() {
        setNum1("");
        setNum2("");
        setResult(null);
    }

    return (
        <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
            <h2 className="text-3xl font-extrabold opacity-80 mb-4 font-mono">Basic Calculator</h2>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Enter first number"
                className="w-full p-2 mb-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 opacity-80"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Enter second number"
                className="w-full p-2 mb-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 opacity-80"
            />
            <div className="flex gap-3 mb-4">
                <button onClick={() => calculate("add")} className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition transform hover:scale-105 text-xl font-bold font-mono">+</button>
                <button onClick={() => calculate("subtract")} className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition transform hover:scale-105 text-xl font-bold font-mono">-</button>
                <button onClick={() => calculate("multiply")} className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg transition transform hover:scale-105 text-xl font-bold font-mono">*</button>
                <button onClick={() => calculate("divide")} className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition transform hover:scale-105 text-xl font-bold font-mono">/</button>
            </div>
            <h1 className="text-2xl font-extrabold opacity-90 font-mono">RESULT: {result !== null ? result : ""}</h1>
            <button onClick={clearFields} className="mt-4 px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-full shadow-lg transition transform hover:scale-105 text-lg font-semibold font-mono">Clear</button>
        </div>
    );
}

export default BasicCalculator;
