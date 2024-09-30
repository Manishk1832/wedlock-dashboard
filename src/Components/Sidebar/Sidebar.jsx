import React, { useState } from 'react';
import { menuItems } from '../../Utils/menuItems';
import { FaChevronUp,FaChevronDown } from "react-icons/fa";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null); 

  const toggleSubmenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div className="border border-gray-300 p-5 h-[87vh]">
      <ul className="flex flex-col gap-8 text-md">
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <li
              onClick={() => toggleSubmenu(index)}
              className="flex items-center justify-between gap-3 p-2 text-black hover:bg-[#F9FAFB] hover:border hover:text[#007EAF] hover:border-gray-300 hover:rounded-full font-medium cursor-pointer transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <item.icon className='text-2xl' />
                {item.name}
              </div>
              {item.submenu && (
                <span>{activeMenu === index ? <FaChevronDown />  : <FaChevronUp />}</span> // Toggle icon for submenu visibility
              )}
            </li>
            
            {/* Submenu logic */}
            {item.submenu && activeMenu === index && (
              <ul className="ml-5 flex flex-col gap-1">
                {item.submenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    onClick={() => console.log(subItem.name)}
                    className="flex items-center gap-3  text-[#007EAF] hover:cursor-pointer"
                  >
                    {subItem.name}
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
