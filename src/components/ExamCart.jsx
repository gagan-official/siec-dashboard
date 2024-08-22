import { FaShoppingCart } from "react-icons/fa";
import ProgressCard from "./ProgressCard";

export default function ExamCart() {
  return (
    <div className="myExamCart rounded-lg overflow-hidden even-shadow-more bg-[--bg] mt-4 md:mt-0">
      <h1 className="text-xs text-[--bg] bg-[--darkGreen] p-3 uppercase flex items-center gap-2">
        My Exam Cart <FaShoppingCart />
      </h1>
      <div className="gridCont px-3 py-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {examCartData.map(({ id, ...item }) => (
          <ProgressCard data={item} key={id} />
        ))}
      </div>
    </div>
  );
}

const examCartData = [
  { id: 1, name: "Mock Exam", total: 9, completed: 3, lightColor: "var(--lightGreen)", darkColor: "var(--darkGreen)" },
  { id: 2, name: "Listening Exam", total: 9, completed: 1, lightColor: "#36afc1", darkColor: "#1d9eb4" },
  { id: 3, name: "Reading Exam", total: 6, completed: 0, lightColor: "#36afc1", darkColor: "#1d9eb4" },
  { id: 4, name: "Writing Exam", total: 6, completed: 1, lightColor: "#838c93", darkColor: "#6b747b" },
  { id: 5, name: "Speaking Exam", total: 6, completed: 1, lightColor: "#4e5357", darkColor: "#353b40" },
  { id: 6, name: "Question Specific Listening Exam", total: 24, completed: 0, lightColor: "#36afc1", darkColor: "#1d9eb4" },
  { id: 7, name: "Question Specific Reading Exam", total: 15, completed: 0, lightColor: "#36afc1", darkColor: "#1d9eb4" },
  { id: 8, name: "Question Specific Writing Exam", total: 6, completed: 0, lightColor: "#36afc1", darkColor: "#1d9eb4" },
];
