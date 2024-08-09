// import React, { useState, useEffect } from "react";
// import Skeleton from "react-loading-skeleton";
// import { useNavigate } from "react-router-dom";
// import left from "../assets/leftImg.svg";
// import right from "../assets/rightImg.svg";
// function HomeHeader() {
//   const [d6, setD6] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://api.spotify.com/v1/browse/featured-playlists",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();

//         setD6(data.playlists.items.slice(0, 6));
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [token]);

//   const pagesNavigate = useNavigate();

//   function handleLikes() {
//     pagesNavigate("/likes");
//   }
//   function handleMusicsCard() {
//     pagesNavigate("/playlist/37i9dQZF1DWZ7eJRBxKzdO");
//   }
//   return (
//     <div className=" gap-x-[31px] gap-y-4 w-full justify-center bg-gradient-to-b from-[#3333A3] from-2% via-[#3333A3] mt-0 via-50% to-[#121212] to-100% bg-100%">
//       <div className="mb-[29px] pt-[20px] px-[15px]">
//         <div className="flex items-center gap-[22px] ">
//           <img
//             onClick={handleLikes}
//             className="cursor-pointer w-[40px] h-[40px]"
//             src={right}
//             alt=""
//           />
//           <img
//             onClick={handleMusicsCard}
//             className="cursor-pointer w-[40px] h-[40px]"
//             src={left}
//             alt=""
//           />
//         </div>
//         <h2 className="text-white text-[39px] mt-[33px] font-[700]">
//           Good afternoon
//         </h2>
//       </div>
//       <div className="flex flex-wrap  justify-center gap-x-[31px] gap-y-4 w-[765px] bg-gradient-to-b">
//         {loading
//           ? new Array(6).fill(0).map((_, index) => (
//               <div
//                 key={index}
//                 className="w-[300px] h-[82px] bg-[#ffffff1c] flex items-center gap-4"
//               >
//                 <Skeleton
//                   className="w-[50px] h-[82px] m-0"
//                   baseColor="#ffffff1c"
//                 />
//                 <Skeleton
//                   className="w-52 h-[20px] m-0"
//                   baseColor="#ffffff1c"
//                   borderRadius="5px"
//                 />
//               </div>
//             ))
//           : d6 &&
//             d6.map((playlist) => (
//               <div
//                 key={playlist.id}
//                 onClick={() => navigate("/playlist/" + playlist.id)}
//                 className="rounded-lg w-[350px] bg-[#ffffff1c] h-[82px] flex items-center gap-[21px] cursor-pointer"
//               >
//                 <img
//                   src={playlist.images[0].url}
//                   className="flex h-full rounded-l-lg"
//                   alt={playlist.name}
//                 />
//                 <h3 className="name text-white">{playlist.name}</h3>
//               </div>
//             ))}
//       </div>
//     </div>
//   );
// }

// export default HomeHeader;




import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import left from "../assets/leftImg.svg";
import right from "../assets/rightImg.svg";

function HomeHeader() {
  const [d6, setD6] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/browse/featured-playlists",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setD6(data.playlists.items.slice(0, 6));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const pagesNavigate = useNavigate();

  function handleLikes() {
    pagesNavigate("/likes");
  }
  function handleMusicsCard() {
    pagesNavigate("/playlist/37i9dQZF1DWZ7eJRBxKzdO");
  }

  return (
    <div className="gap-x-[15px] md:gap-x-[31px] gap-y-4 w-full justify-center bg-gradient-to-b from-[#3333A3] via-[#3333A3] to-[#121212]">
      <div className="mb-[29px] pt-[20px] px-[10px] md:px-[15px]">
        <div className="flex items-center gap-[10px] md:gap-[22px]">
          <img
            onClick={handleLikes}
            className="cursor-pointer w-[30px] md:w-[40px] h-[30px] md:h-[40px]"
            src={right}
            alt=""
          />
          <img
            onClick={handleMusicsCard}
            className="cursor-pointer w-[30px] md:w-[40px] h-[30px] md:h-[40px]"
            src={left}
            alt=""
          />
        </div>
        <h2 className="text-white text-[30px] md:text-[39px] mt-[20px] md:mt-[33px] font-[700]">
          Good afternoon
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-x-[15px] md:gap-x-[31px] gap-y-4 w-full md:w-[765px]">
        {loading
          ? new Array(6).fill(0).map((_, index) => (
              <div
                key={index}
                className="w-[200px] md:w-[300px] h-[72px] md:h-[82px] bg-[#ffffff1c] flex items-center gap-4"
              >
                <Skeleton
                  className="w-[40px] md:w-[50px] h-[72px] md:h-[82px] m-0"
                  baseColor="#ffffff1c"
                />
                <Skeleton
                  className="w-[130px] md:w-52 h-[16px] md:h-[20px] m-0"
                  baseColor="#ffffff1c"
                  borderRadius="5px"
                />
              </div>
            ))
          : d6 &&
            d6.map((playlist) => (
              <div
                key={playlist.id}
                onClick={() => navigate("/playlist/" + playlist.id)}
                className="rounded-lg w-[200px] md:w-[350px] bg-[#ffffff1c] h-[72px] md:h-[82px] flex items-center gap-[15px] md:gap-[22px] cursor-pointer hover:bg-[#ffffff38]"
              >
                <img
                  src={playlist.images[0]?.url}
                  className="w-[55px] md:w-[65px] h-[55px] md:h-[65px] object-cover"
                  alt={playlist.name}
                />
                <p className="text-white font-medium text-[16px] md:text-[20px]">
                  {playlist.name}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default HomeHeader;