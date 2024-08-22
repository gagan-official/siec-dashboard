import { FaArrowRight } from "react-icons/fa";
import cart from "../assets/cart2.png";
import CommonCard from "./CommonCard";
import CustomButton from "./CustomButton";

export default function ProductCard({ odd, data }) {
  const { companyImg, company, title, info } = data;
  return (
    <CommonCard
      className={`${
        !odd ? "!bg-[--extraLightGreen]" : ""
      } overflow-hidden flex flex-col justify-between md:max-w-[350px] h-fit`}
    >
      <div className="topCont flex items-end justify-between p-3 gap-2">
        <div className="rightCont flex flex-col items-start p-2 gap-2">
          <img
            src={companyImg ?? "pearson.png"}
            alt="company-logo"
            className="h-3"
          />
          <h3 className="text-xs capitalize">{company}</h3>
          <h1 className="text-sm capitalize">
            {title[0]} <div className="text-[--darkGreen]">{title[1]}</div>
          </h1>
          <p>{info}</p>
        </div>
        <div className="cartCont w-32 -mr-9">
          <img
            src={cart}
            alt="company-logo"
            className={`${!odd ? "brightness-200" : ""}`}
          />
        </div>
      </div>
      <CustomButton
        className={`${
          odd ? "!bg-[--extraLightGreen] !text-[--extraDarkGreen]" : "!bg-[--bg] !text-[--color]"
        } !py-3 flex justify-center items-center gap-2 !font-bold uppercase !rounded-none`}
      >
        Explore all products <FaArrowRight />
      </CustomButton>
    </CommonCard>
  );
}
