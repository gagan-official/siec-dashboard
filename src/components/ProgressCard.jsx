import CommonCard from "./CommonCard";
import CustomButton from "./CustomButton";

export default function ProgressCard({ data }) {
  const { name, total, completed, lightColor, darkColor } = data;
  const width = `${(completed / total) * 100}%`;

  return (
    <CommonCard className="even-shadow-more p-4">
      <div className="topCont flex justify-between">
        <div className="rightCont flex flex-col items-start gap-2">
          <img className="h-5" src="pearson.png" alt="company-logo" />
          <h5 className="text-xs">{name}</h5>
          <div className="chip -mt-2 text-xs font-semibold rounded-full bg-[--translucentGreen] px-2 py-1 text-[--darkGreen]">
            {completed}/{total}
          </div>
        </div>
        <CustomButton className="h-fit">View All</CustomButton>
      </div>
      <div className="progressBg mt-2 rounded-[3px] bg-gray-200 h-4 w-full overflow-hidden">
        <div
          style={{
            width,
            "--width": width,
            "--lightColor": lightColor,
            "--darkColor": darkColor,
          }}
          className="bar h-full bg-red-200"
        />
      </div>
    </CommonCard>
  );
}
