// import React from "react";
// import { Link } from "react-router-dom";
// const Login = () => {
//   return (
//     <div
//       className="h-screen w-screen backdrop-blur-md flex  justify-center"
//       style={{
//         backgroundImage: `url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//       }}>
//       <div className="flex flex-col items-center mt-10 space-y-32">
//         <h1 className="text-3xl font-semibold bg-black text-white w-full text-center py-4 bg-opacity-75 rounded-2xl">
//         Vidyalankar Institute of technology
//         </h1>
//         <div className="grid grid-cols-2 gap-28">
//           <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#5a51d6] bg-opacity-60 rounded-xl">
//             <h1 className="text-4xl font-extrabold">Faculty</h1>

//             <Link
//               type="button"
//               to="/login/facultylogin"
//               className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
//               Login
//             </Link>
//           </div>
//           <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#d65158] bg-opacity-60 rounded-xl">
//             <h1 className="text-4xl font-extrabold">Student</h1>
//             <Link
//               type="button"
//               to="/login/studentlogin"
//               className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="h-screen w-screen backdrop-blur-lg flex justify-center items-center"
      style={{
        backgroundImage: `url("https://image-static.collegedunia.com/public/college_data/images/appImage/45849_VITT_APP.jpg?h=260&w=360&mode=crop")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center space-y-20">
        <h1 className="text-4xl font-bold bg-black text-white w-full text-center py-5 bg-opacity-75 rounded-xl shadow-lg">
          Vidyalankar Institute of Technology
        </h1>
        <div className="grid grid-cols-2 gap-20">
          {/* Faculty Login */}
          <div className="h-96 w-80 p-8 shadow-2xl flex flex-col justify-center items-center bg-gradient-to-b from-purple-600 via-indigo-600 to-blue-500 bg-opacity-80 rounded-2xl transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-4xl font-extrabold text-white">Faculty</h1>
            <Link
              to="/login/facultylogin"
              className="flex items-center justify-center bg-white text-blue-600 font-semibold h-12 w-40 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Login
            </Link>
          </div>

          {/* Student Login */}
          <div className="h-96 w-80 p-8 shadow-2xl flex flex-col justify-center items-center bg-gradient-to-b from-red-500 via-pink-500 to-purple-500 bg-opacity-80 rounded-2xl transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-4xl font-extrabold text-white">Student</h1>
            <Link
              to="/login/studentlogin"
              className="flex items-center justify-center bg-white text-pink-600 font-semibold h-12 w-40 rounded-full shadow-md hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
