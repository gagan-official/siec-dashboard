import { SlPencil } from "react-icons/sl";
import CustomButton from "./CustomButton";
import defaltUserImage from "../assets/user.png";

export default function UserCard() {
  return (
    <div className="profileCard mx-auto md:mx-0 bg-[--bg] p-4 max-w-60 border-image shadow-xl rounded-[--roundedCommon] flex flex-col gap-2 items-center h-fit">
      <div className="userImage relative my-2 w-3/4">
        <div className="absolute text-xs text-gray-500 bg-[--bg] cursor-pointer hover:opacity-85 even-shadow rounded-full top-[5%] right-[5%] p-2 flex">
          <SlPencil />
        </div>
        <img
          className="rounded-full border-4 border-gray-100"
          src={defaltUserImage}
          alt="user-image"
        />
      </div>
      <span className="text-xs font-bold">Taniya IT</span>
      <CustomButton className="flex items-center justify-center w-full !p-2 !rounded-full !bg-[--darkGreen] shadow-lg">
        Manage Profile
      </CustomButton>
    </div>
  );
}
