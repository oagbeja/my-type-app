import { NavLink, Outlet } from "react-router-dom";
import "../App.css";
const Layout = () => {
  let arr = [
    { lnk: "video1", title: "Video 1" },
    { lnk: "video2", title: "Video 2" },
    { lnk: "video3", title: "Video 3" },
    { lnk: "video4", title: "Video 4" },
    { lnk: "video5", title: "Video 5" },
    { lnk: "video6", title: "Video 6" },
    { lnk: "video7", title: "Video 7" },
  ];

  let arrR = [
    { lnk: "record1", title: "Record 1" },
    { lnk: "record2", title: "Record 2" },
    { lnk: "record3", title: "Record 3" },
    { lnk: "record4", title: "Record 4" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            // alignItems: "space-between",
            width: "80vw",
            display: "flex",
            border: "1px solid",
          }}
        >
          {arr.map((item, index) => (
            <NavLink
              to={item?.lnk}
              style={({ isActive }) =>
                isActive ? { color: "blue" } : undefined
              }
              key={index}
            >
              {item?.title}
            </NavLink>
          ))}
        </div>
        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            // alignItems: "space-between",
            width: "50vw",
            display: "flex",
            border: "1px solid",
          }}
        >
          {arrR.map((item, index) => (
            <NavLink
              to={item?.lnk}
              style={({ isActive }) =>
                isActive ? { color: "blue" } : undefined
              }
              key={index}
            >
              {item?.title}
            </NavLink>
          ))}
        </div>
        <Outlet />
      </header>
    </div>
  );
};

export default Layout;
