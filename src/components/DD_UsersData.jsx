import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const DD_UsersData = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option) => {
    closeDropdown();
    // Conditionally navigate based on the selected option
    switch (option) {
      case "Cafe Owner":
        navigate("/usersdata/cafe");
        break;
      case "Ekupon":
        navigate("/usersdata/ekupon");
        break;
      case "Paynet":
        navigate("/usersdata/paynet");
        break;
      case "Maidam":
        navigate("/usersdata/maidam");
        break;
      default:
        // Handle other options or provide a default behavior
        break;
    }
  };

  // Add an event listener to handle clicks outside the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    }

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="items-center justify-center gap-2 px-4 py-3 text-sm text-gray-700 align-middle transition-all bg-white hs-dropdown-toggle hover:font-bold"
      >
        <div>
          <span className="mr-2">Users Data</span>
          <svg
            className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 inline" // Add the "inline" class
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <button>
          <ul className="absolute left-0 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-md top-full">
            {options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                <span className="block px-4 py-2 pl-2 pr-2 text-sm text-gray-700 align-middle transition-all bg-white shadow-sm hs-dropdown-toggle hover:bg-gray-50 hover:font-bold">
                  {option}
                </span>
              </li>
            ))}
          </ul>
        </button>
      )}
    </div>
  );
};

DD_UsersData.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DD_UsersData;
