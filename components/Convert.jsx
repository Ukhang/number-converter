import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { MdOutlineFileCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Convert = () => {

    const [inputDropdown, setInputDropdown] = useState(false);
    const [outputDropdown, setOutputDropdown] = useState(false);

    const [inputDropval, setInputDropval] = useState("🪀 Decimal");
    const [outputDropval, setOutputDropval] = useState("🐋 Binary");

    const [number, setNumber] = useState({
        input: "",
        output: ""
    });

    const handleChange = (e) => {
        setNumber(prev=>({...prev, [e.target.name] : e.target.value}));
    }

    // ========= button onlick handle ==============
    const handleSubmit = (e) => {

        e.preventDefault();

        // Check decimal to decimal
        if(inputDropval == "🪀 Decimal" && outputDropval == "🪀 Decimal") {
            let inp = Number(number.input);
            
            // Driver program decimal to decimal function
            let op = decToDecimal(inp);
            setNumber({ output: op });
        }

        // Check decimal to binary
        if(inputDropval == "🪀 Decimal" && outputDropval == "🐋 Binary") {
            let inp = Number(number.input);

            // Driver program decimal to binary function
            let op = decToBinary(inp);
            setNumber({ output: op });
        }

        // Check decimal to hexadecimal
        if(inputDropval == "🪀 Decimal" && outputDropval == "🍝 Hexadecimal") {
            let inp = Number(number.input);

            // Driver program decimal to hexadecimal function
            let op = decToHexadecimal(inp);
            setNumber({ output: op });
        }

        // Check decimal to octal
        if(inputDropval == "🪀 Decimal" && outputDropval == "🐙 Octal") {
            let inp = Number(number.input);

            // Driver program decimal to octal function
            let op = decToOctal(inp);
            setNumber({ output: op });
        }

        // Check binary to decimal
        if(inputDropval == "🐋 Binary" && outputDropval == "🪀 Decimal") {
            let inp = Number(number.input);

            // Driver program binary to decimal function
            let op = binToDecimal(inp);
            setNumber({ output: op });
        }

        // Check binary to binary
        if(inputDropval == "🐋 Binary" && outputDropval == "🐋 Binary") {
            let inp = Number(number.input);

            // Driver program binary to binary function
            let op = binToBinary(inp);
            setNumber({ output: op });
        }

        // Check binary to hexadecimal
        if(inputDropval == "🐋 Binary" && outputDropval == "🍝 Hexadecimal") {
            let inp = Number(number.input);

            // Driver program binary to hexadecimal function
            let op = binToHexadecimal(inp);
            setNumber({ output: op });
        }

        // Check binary to Octal
        if(inputDropval == "🐋 Binary" && outputDropval == "🐙 Octal") {
            let inp = Number(number.input);

            // Driver program binary to octal function
            let op = binToOctal(inp);
            setNumber({ output: op });
        }

        // Check hexadecimal to decimal
        if(inputDropval == "🍝 Hexadecimal" && outputDropval == "🪀 Decimal") {
            let inp = number.input;

            // Driver program hexadecimal to decimal function
            let op = hexToDecimal(inp);
            setNumber({ output: op });
        }

        // Check hexadecimal to binary
        if(inputDropval == "🍝 Hexadecimal" && outputDropval == "🐋 Binary") {
            let inp = number.input;

            // Driver program hexadecimal to decimal function
            let op = hexToBinary(inp);
            setNumber({ output: op });
        }

        // Check hexadecimal to hexadecimal
        if(inputDropval == "🍝 Hexadecimal" && outputDropval == "🍝 Hexadecimal") {
            let inp = number.input;

            // Driver program hexadecimal to hexadecimal function
            let op = hexToHexadecimal(inp);
            setNumber({ output: op });
        }

        // Check hexadecimal to octal
        if(inputDropval == "🍝 Hexadecimal" && outputDropval == "🐙 Octal") {
            let inp = number.input;

            // Driver program hexadecimal to octal function
            let op = hexToOctal(inp);
            setNumber({ output: op });
        }

        // Check octal to decimal
        if(inputDropval == "🐙 Octal" && outputDropval == "🪀 Decimal") {
            let inp = Number(number.input);

            // Driver program octal to decimal function
            let op = octToDecimal(inp);
            setNumber({ output: op });
        }

        // Check octal to binary
        if(inputDropval == "🐙 Octal" && outputDropval == "🐋 Binary") {
            let inp = Number(number.input);

            // Driver program octal to binary function
            let op = octToBinary(inp);
            setNumber({ output: op });
        }

        // Check octal to hexadecimal
        if(inputDropval == "🐙 Octal" && outputDropval == "🍝 Hexadecimal") {
            let inp = Number(number.input);

            // Driver program octal to hexadecimal function
            let op = octToHexadecimal(inp);
            setNumber({ output: op });
        }

        // Check octal to octal
        if(inputDropval == "🐙 Octal" && outputDropval == "🐙 Octal") {
            let inp = Number(number.input);

            // Driver program octal to octal function
            let op = octToOctal(inp);
            setNumber({ output: op });
        }
    }

    return (
        <section className="lg:max-w-3xl md:max-w-2xl mx-auto mt-20 grid md:grid-cols-2 gap-x-14 relative mb-20 md:px-0 px-4">
            {/* ====== Left ======= */}
            <div>
                <div className={`border border-[#D2D5DF] dark:border-[#616465] flex justify-between items-center px-4 py-1.5 rounded-xl cursor-pointer text-[#423E3E] dark:text-[#E2E3E4] hover:bg-gray-100 dark:hover:bg-[#202024] relative text-lg ${inputDropdown == true ? "bg-gray-100 dark:bg-[#202024]" : ""}`} onClick={() => setInputDropdown(!inputDropdown)}>
                    <span> {inputDropval} </span>
                    <span className={`${inputDropdown == true ? "rotate-180" : "rotate-0"} transition`}> 
                        <GoTriangleDown/>
                    </span>
                    {/* ===== Dropdown ======== */}
                    <ul className={`absolute bg-[#F6F8FF] dark:bg-[#26272b] shadow-lg w-full top-11 left-0 z-10 border border-[#d2d5df] dark:border-[#616465] rounded-lg py-3 ${inputDropdown == false ? "hidden" : "" } transition`}>
                        <li 
                            className="flex justify-between py-1.5 px-4 pr-5 hover:bg-gray-100 dark:hover:bg-[#202024]"
                            onClick={() => setInputDropval("🪀 Decimal")}
                        > 
                            <span> {inputDropval == "🪀 Decimal" ? "✔️" : null} Decimal </span>
                            <span> 🪀 </span>
                        </li>
                        <li 
                            className="flex justify-between py-1.5 px-4 pr-5 hover:bg-gray-100 dark:hover:bg-[#202024]"
                            onClick={() => setInputDropval("🐋 Binary")}
                        > 
                            <span> {inputDropval == "🐋 Binary" ? "✔️" : null} Binary </span>
                            <span> 🐋 </span> 
                        </li>
                        <li 
                            className="flex justify-between py-1.5 px-4 pr-5 hover:bg-gray-100 dark:hover:bg-[#202024]"
                            onClick={() => setInputDropval("🍝 Hexadecimal")}
                        > 
                            <span> {inputDropval == "🍝 Hexadecimal" ? "✔️" : null}  Hexadecimal </span>
                            <span> 🍝 </span> 
                        </li>
                        <li 
                            className="flex justify-between py-1.5 px-4 pr-5 hover:bg-gray-100 dark:hover:bg-[#202024]"
                            onClick={() => setInputDropval("🐙 Octal")}
                        > 
                            <span> {inputDropval == "🐙 Octal" ? "✔️" : null} Octal </span>
                            <span> 🐙 </span>
                        </li>
                    </ul>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* ======== Input ======== */}
                    <div className="mt-2.5">
                        <textarea 
                            name="input" 
                            id="input"
                            rows="6" 
                            className="flex flex-grow w-full rounded-xl py-4 px-4 text-xl resize-none bg-[#ffffff] dark:bg-[#393A3F] outline-none focus:outline-[#a8d0e6]"
                            placeholder="Enter Number"
                            onChange={handleChange}
                        />
                    </div>

                    {/* ========== Submit Button ========= */}
                    <button
                        type="submit"
                        className="py-2 px-5 bg-[#BAE6FD] text-lg text-[#423E3E] font-[600] rounded-xl border-b-[6px] border-[#655F5F] mt-4 hover:border-b-4 hover:bg-[#b3dcf3]"
                    >
                        convert
                    </button>
                </form>
            </div>

            {/* ====== Right ======= */}
            <div className="md:mt-0 mt-10">
                <div className={`border border-[#D2D5DF] dark:border-[#616465] flex justify-between items-center px-4 py-1.5 rounded-xl cursor-pointer text-[#423E3E] dark:text-[#E2E3E4] hover:bg-gray-100 dark:hover:bg-[#202024] relative text-lg ${outputDropdown == true ? "bg-gray-100 dark:bg-[#202024]" : ""}`} onClick={() => setOutputDropdown(!outputDropdown)}>
                    <span> {outputDropval} </span>
                    <span className={`${outputDropdown == true ? "rotate-180" : "rotate-0"} transition`}> 
                        <GoTriangleDown/> 
                    </span>

                    {/* ===== Dropdown ======== */}
                    <ul className={`absolute bg-[#F6F8FF] dark:bg-[#26272b] shadow-lg w-full top-11 left-0 z-10 border border-[#d2d5df] dark:border-[#616465] rounded-lg py-3 ${outputDropdown == false ? "hidden" : "" } transition`}>
                        <li 
                            className="flex justify-between py-1.5 px-4 pr-5 hover:bg-gray-100 dark:hover:bg-[#202024]"
                            onClick={() => setOutputDropval("🪀 Decimal")}
                        > 
                            <span> {outputDropval == "🪀 Decimal" ? "✔️" : null} Decimal </span>
                            <span> 🪀 </span>
                        </li>
                        <li
                            className="flex justify-between py-1.5 px-4 pr-5 hover:bg-gray-100 dark:hover:bg-[#202024]"
                            onClick={() => setOutputDropval("🐋 Binary")}
                        > 
                            <span> {outputDropval == "🐋 Binary" ? "✔️" : null} Binary </span>
                            <span> 🐋 </span> 
                        </li>
                        <li 
                            className="flex justify-between py-1.5 px-4 pr-5 hover:bg-gray-100 dark:hover:bg-[#202024]"
                            onClick={() => setOutputDropval("🍝 Hexadecimal")}
                        > 
                            <span> {outputDropval == "🍝 Hexadecimal" ? "✔️" : null} Hexadecimal </span>
                            <span> 🍝 </span> 
                        </li>
                        <li 
                            className="flex justify-between py-1.5 px-4 pr-5 hover:bg-gray-100 dark:hover:bg-[#202024]"
                            onClick={() => setOutputDropval("🐙 Octal")}
                        > 
                            <span> {outputDropval == "🐙 Octal" ? "✔️" : null} Octal </span>
                            <span> 🐙 </span>
                        </li>
                    </ul>
                </div>

                {/* ======== Input ======== */}
                <div className="mt-2.5 relative">
                    <textarea 
                        name="input" 
                        id="input" 
                        rows="6" 
                        className="flex flex-grow w-full rounded-xl py-4 px-4 text-xl resize-none bg-[#F8F9FA] dark:bg-[#313238] outline-none outline-[#D2D5DF] dark:outline-[#616465]"
                        placeholder="Converter"
                        disabled
                        value={number.output}
                        onChange={handleChange}
                    />
                    <CopyToClipboard text={number.output}>
                        <MdOutlineFileCopy className="absolute bottom-3 left-5 text-[#AAADBA] cursor-pointer hover:text-[#423E3E]"/>
                    </CopyToClipboard>
                </div>
            </div>
        </section>
    )
}

// ============ decimal to decimal =================
function decToDecimal(v) {
    return v.toString(10);
}

// ============ decimal to binary =================
function decToBinary(v) {
	return v.toString(2);
}

// ============ decimal to hexadecimal =================
function decToHexadecimal(v) {
    return v.toString(16);
}

// ============ decimal to hexadecimal =================
function decToOctal(v) {
    return v.toString(8);
}

// ============ binary to decimal =================
function binToDecimal(v) {
    return parseInt(v, 2);
}

// ============ binary to binary =================
function binToBinary(v) {
    return parseInt(v, 2).toString(2);
}

// ============ binary to hexadecimal =================
function binToHexadecimal(v) {
    return parseInt(v, 2).toString(16);
}

// ============ binary to octal =================
function binToOctal(v) {
    return parseInt(v, 2).toString(8);
}

// ============ hexadecimal to deciaml =================
function hexToDecimal(v) {
    return parseInt(v, 16);
}

// ============ hexadecimal to binary =================
function hexToBinary(v) {
    return (parseInt(v, 16).toString(2)).padStart(1, '0');
}

// ============ hexadecimal to hexadecimal =================
function hexToHexadecimal(v) {
    return parseInt(v, 16).toString(16);
}

// ============ hexadecimal to octal =================
function hexToOctal(v) {
    return parseInt(v, 16).toString(8);
}

// ============ octal to decimal =================
function octToDecimal(v) {
    return parseInt(v, 8);
}

// ============ octal to binary =================
function octToBinary(v) {
    return parseInt(v, 8).toString(2);
}

// ============ octal to hexadecimal =================
function octToHexadecimal(v) {
    return parseInt(v, 8).toString(16);
}

// ============ octal to octal =================
function octToOctal(v) {
    return parseInt(v, 8).toString(8);
}

export default Convert;