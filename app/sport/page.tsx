import Board from "@/app/components/boards/Board";
import ThreeBanner from "@/app/components/ThreeBanner";
import sportMain from "/public/images/sportMain.png";
import Image from "next/image";
import Breadcrumb from "@/app/components/BreadCrumb";

import SocIcon from "/public/images/icon/Msoccer.png";
import BaseIcon from "/public/images/icon/Mbase.png";
import BaskIcon from "/public/images/icon/Mbasketball.png";
import VolleyIcon from "/public/images/icon/Mvolleyball.png";
import Link from "next/link";
import SubMenu from "./(component)/SubMenu";

export default function Page() {
  const breadcrumbItems = {
    title: "스포츠분석",
    subMenu: "해외축구분석",
  };

  return (
    <div className="flex flex-col gap-3 max-w-[1300px]">
      <SubMenu />
      <ThreeBanner />
      <Image
        className=""
        src={sportMain}
        width={1024}
        height={177}
        alt={"스포츠분석"}
      />

      <Breadcrumb breadcrumbData={breadcrumbItems} />
      <Board />
    </div>
  );
}
