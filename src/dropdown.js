import React, { useEffect } from "react";
import { useState } from "react";
import { Alltimezone } from "./timezonedata";

function Dropdown({ onChange, value }) {
  const [timezone, setTimezone] = React.useState(Alltimezone);
  const [selected_timezone, setSelectedTimezone] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [showList ,setShowlist] = useState(false)

  const searchTimezone = (value) => {
    setShowlist(true)
    setInputValue(value);
    let filterData = Alltimezone.filter(
      (item) =>
        item.text.toLowerCase().includes(value.toLowerCase()) ||
        item.value.toLowerCase().includes(value.toLowerCase())
    );
    // console.log(filterData)
    setTimezone(filterData);
    // onChange()
  };

  const selectTimezone = (item) => {
    onChange(item);
    setInputValue(`${item.text} ${item.value}`);
    setShowlist(false)

  };
  useEffect(() => {
    if (value && value != "") {
      // alert("wo")
      let filter = Alltimezone.filter((item) => item.utc.includes(value));
      // console.log("hhh", filter);
      setTimezone(filter);
      setInputValue(`${filter[0].text} ${filter[0].value}`);
    }
  }, [value]);
  return (
    <>
    <div className="outside" onClick={()=>setShowlist(false)}/>
    <div className="dropdown">
      <div id="myDropdown" className="dropdown-content">
        <input
        // style={{width:"auto"}}
          type="text"
          value={inputValue}
          placeholder="Search timezone.."
          id="myInput"
          onChange={(val) => searchTimezone(val.target.value)}
        />
            <div className="arrow" onClick={()=>setShowlist(!showList)}></div>

            {showList&&(   <div className="dropdownList">
         {timezone.map((item, index) => (
            <a
              href="#"
              key={index}
              onClick={() => selectTimezone(item)}
            >{`${item.text} ${item.value}`}</a>
          ))}
        </div>)}
      </div>
    </div>
    </>
  );
}

export default Dropdown;
