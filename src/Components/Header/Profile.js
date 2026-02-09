// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase";
// import { useAuth } from "../context/AuthContext";

// const HeaderAuth = () => {
//   const { user } = useAuth();
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   // 🔹 Guest mode
//   if (!user) {
//     return (
//       <button
//         onClick={() => navigate("/login")}
//         className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
//       >
//         Sign In
//       </button>
//     );
//   }

//   // 🔹 Logged-in user
//   return (
//     <div className="relative ml-3">
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex rounded-full focus-visible:outline-2
//                    focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//       >
//         <span className="sr-only">Open user menu</span>
//         <img
//           src={user.photoURL || "https://ui-avatars.com/api/?name=User"}
//           alt="Profile"
//           className="h-8 w-8 rounded-full"
//         />
//       </button>

//       {open && (
//         <div className="absolute right-0 z-20 mt-2 w-40 rounded-md bg-white shadow-lg">
//           <button
//             onClick={() => {
//               setOpen(false);
//               navigate("/profile");
//             }}
//             className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
//           >
//             My Profile
//           </button>

//           <button
//             onClick={async () => {
//               await signOut(auth);
//               setOpen(false);
//             }}
//             className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeaderAuth;
