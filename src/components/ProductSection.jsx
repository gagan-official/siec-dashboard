import { FaArrowRight } from "react-icons/fa";
import CustomButton from "./CustomButton";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <div className="productSection flex flex-col md:flex-row gap-5 relative pb-14 md:pb-11">
      {products.map(({ id, ...data }) => (
        <ProductCard key={id} odd={id % 2} data={data} />
      ))}
      <CustomButton className="absolute right-0 bottom-0 flex justify-center items-center gap-2 !bg-[--darkGreen] w-full md:w-fit">
        About PTE <FaArrowRight />
      </CustomButton>
    </div>
  );
}

const products = [
  {
    id: 1,
    companyImg: "pearson.png",
    company: "PTE Academic",
    title: ["Full Length", "Mock"],
    info: "Get your actual score before the exam with Full Length Mock in just INR 499",
  },
  {
    id: 2,
    companyImg: "pearson.png",
    company: "PTE Academic",
    title: ["Sectional", "Exam"],
    info: "Get your actual score before the exam with Sectional Exam in just INR 499",
  },
  {
    id: 3,
    companyImg: "pearson.png",
    company: "PTE Academic",
    title: ["Question", "Specific Exam"],
    info: "Get your actual score before the exam with Question Specific Exam in just INR 499",
  },
];
