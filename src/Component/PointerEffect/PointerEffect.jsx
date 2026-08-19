// import React, { useEffect } from "react";

// const PointerEffect = () => {
//     useEffect(() => {
//         const handlePointerMove = (e) => {
//             document.documentElement.style.setProperty(
//                 "--mouse-x",
//                 `${e.clientX}px`
//             );

//             document.documentElement.style.setProperty(
//                 "--mouse-y",
//                 `${e.clientY}px`
//             );
//         };

//         window.addEventListener("pointermove", handlePointerMove);

//         return () => {
//             window.removeEventListener("pointermove", handlePointerMove);
//         };
//     }, []);

//     return <div className="pointer-effect"></div>;
// };

// export default PointerEffect;