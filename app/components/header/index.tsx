import Image from "next/image";
import Input from "./input";
import { BiSolidBellRing } from "react-icons/bi";
import pp from "@/assets/images/pp.png";

const Header = () => {
  return (
    <div className="border p-3 flex justify-between">
      <Input />

      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer" />

        <div className="flex gap-3">
          <Image
            width={40}
            height={40}
            className="object-contain"
            src={pp}
            alt="pp"
          />

          <div>
            <p className="font-semibold">İrem Sandıkçı</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
