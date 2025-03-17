// import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react';
// import {
//   UserGroupIcon,
//   ChartBarIcon,
//   Bars3Icon,
//   XMarkIcon
// } from '@heroicons/react/24/outline';

// function Sidebar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const location = useLocation();

//   const navItems = [
//     { path: '/', name: 'Customer Management', icon: UserGroupIcon },
//     { path: '/stats', name: 'Customer Stats', icon: ChartBarIcon },
//   ];

//   return (
//     <>
//       <button
//         className="lg:hidden fixed top-4 left-4 z-20 p-2"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? (
//           <XMarkIcon className="h-6 w-6" />
//         ) : (
//           <Bars3Icon className="h-6 w-6" />
//         )}
//       </button>

//       <div className={`
//         fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300
//         ${isSidebarOpen ? 'w-64' : 'w-0 lg:w-64'} lg:sticky
//       `}>
//         <div className="p-4">
//           <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
//           <nav>
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className={`
//                     flex items-center gap-2 p-3 rounded-lg mb-2 transition-colors
//                     ${location.pathname === item.path
//                       ? 'bg-blue-600'
//                       : 'hover:bg-gray-700'}
//                   `}
//                 >
//                   <Icon className="h-6 w-6" />
//                   <span>{item.name}</span>
//                 </Link>
//               );
//             })}
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Sidebar;

// import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react';
// import {
//   UserGroupIcon,
//   ChartBarIcon,
//   Bars3Icon,
//   XMarkIcon
// } from '@heroicons/react/24/outline';

// function Sidebar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const location = useLocation();

//   const navItems = [
//     { path: '/', name: 'Customer Management', icon: UserGroupIcon },
//     { path: '/stats', name: 'Customer Stats', icon: ChartBarIcon },
//   ];

//   return (
//     <>
//       {/* Toggle Button on Top */}
//       <button
//         className="fixed top-4 left-4 z-20 p-2 bg-blue-600 text-white rounded-full shadow-lg"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <Bars3Icon className="h-6 w-6" /> : <XMarkIcon className="h-6 w-6" />}
//       </button>

//       {/* Sidebar */}
//       <div className={`
//         fixed top-0 left-0 h-screen bg-gray-900 text-white transition-all duration-300 shadow-lg
//         ${isSidebarOpen ? 'w-64' : 'w-20'} lg:w-64 lg:sticky flex flex-col items-center`
//       }>
//         <div className="p-4 flex-grow flex flex-col items-center w-full">
//           <h2 className={`text-2xl font-bold mb-8 text-blue-400 ${isSidebarOpen ? 'block' : 'hidden'}`}>Dashboard</h2>
//           <nav className="w-full flex flex-col items-center">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className={`
//                     flex items-center ${isSidebarOpen ? 'gap-3' : 'justify-center'} p-3 w-full rounded-lg mb-2 transition-colors text-lg font-medium
//                     ${location.pathname === item.path
//                       ? 'bg-blue-500 text-white'
//                       : 'hover:bg-gray-700 text-gray-300'}
//                   `}
//                 >
//                   <Icon className="h-6 w-6 text-blue-300" />
//                   <span className={isSidebarOpen ? 'block' : 'hidden'}>{item.name}</span>
//                 </Link>
//               );
//             })}
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Sidebar;

// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import {
//   UserGroupIcon,
//   ChartBarIcon,
//   Bars3Icon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// function Sidebar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const location = useLocation();

//   const navItems = [
//     { path: "/", name: "Customer Management", icon: UserGroupIcon },
//     { path: "/stats", name: "Customer Stats", icon: ChartBarIcon },
//   ];

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <button
//         className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-full shadow-lg"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? (
//           <XMarkIcon className="h-6 w-6" />
//         ) : (
//           <Bars3Icon className="h-6 w-6" />
//         )}
//       </button>

//       {/* Sidebar Container */}
//       <div
//         className={`fixed md:static top-0 left-0 h-screen bg-gray-900 text-white transition-all duration-300 shadow-lg
//     ${
//       isSidebarOpen ? "w-64 md:w-64" : "w-0 md:w-64"
//     } flex flex-col z-40 overflow-hidden`}
//       >
//         <div className="p-4 flex-grow flex flex-col w-full">
//           <h2
//             className={`text-2xl font-bold mb-8 text-blue-400 text-center ${
//               isSidebarOpen ? "block" : "hidden md:block"
//             }`}
//           >
//             Dashboard
//           </h2>

//           <nav className="w-full">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className={`flex items-center gap-4 p-3 w-full rounded-lg transition-colors text-lg font-medium
//                     ${
//                       location.pathname === item.path
//                         ? "bg-blue-500 text-white"
//                         : "hover:bg-gray-700 text-gray-300"
//                     }
//                   `}
//                   onClick={() => setIsSidebarOpen(false)}
//                 >
//                   <Icon className="h-6 w-6 text-blue-300 shrink-0" />
//                   <span
//                     className={`flex-1 ${
//                       isSidebarOpen ? "block" : "hidden md:block"
//                     }`}
//                   >
//                     {item.name}
//                   </span>
//                 </Link>
//               );
//             })}
//           </nav>
//         </div>
//       </div>

//       {/* Overlay on Mobile when Sidebar is Open */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>
//       )}
//     </>
//   );
// }

// export default Sidebar;

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  UserGroupIcon,
  ChartBarIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", name: "Customer Management", icon: UserGroupIcon },
    { path: "/stats", name: "Customer Stats", icon: ChartBarIcon },
  ];

  return (
    <div
      className={`h-screen bg-gray-900 text-white transition-all duration-300 shadow-lg flex flex-col 
      ${isCollapsed ? "w-16" : "w-64"} fixed md:relative`}
    >
      {/* Sidebar Header with Toggle Button */}
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <h2 className="text-xl font-bold text-blue-400">Dashboard</h2>}
        {/* Toggle Button (☰ icon) */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`p-2 rounded-full transition-colors duration-300 ${
            isCollapsed ? "bg-blue-600 mx-auto" : "bg-transparent"
          }`}
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-3 rounded-lg transition-all text-lg font-medium 
                ${
                  location.pathname === item.path
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-700 text-gray-300"
                } ${isCollapsed ? "justify-center" : "gap-3 pl-4"}`}
            >
              <Icon className="h-6 w-6 text-blue-300" />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;


