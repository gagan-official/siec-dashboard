import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import LabelChips from "./LabelChips";

function TabBar() {
  const [active, setActive] = useState(1);
  return (
    <div className="flex gap-2 flex-wrap p-2 max-w-[1330px] mx-auto">
      {tabData.map(({ id, name }) => (
        <LabelChips
          style={
            active === id
              ? { backgroundColor: "var(--lightGreen)", color: "#fff" }
              : {}
          }
          className={name === "Logout" ? "flex items-center gap-2" : ""}
          key={id}
          onClick={() => setActive(id)}
        >
          {name} {name === "Logout" && <FiLogOut />}
        </LabelChips>
      ))}
    </div>
  );
}

export default TabBar;

const tabData = [
  { id: 1, name: "Dashboard" },
  { id: 2, name: "My Exam" },
  { id: 3, name: "My Progress Bar" },
  { id: 4, name: "View Products" },
  { id: 5, name: "Change Preference" },
  { id: 6, name: "Success Stories" },
  { id: 7, name: "Billing Details" },
  { id: 8, name: "Logout" },
];
