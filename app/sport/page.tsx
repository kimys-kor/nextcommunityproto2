import ThreeBanner from "@/app/components/ThreeBanner";
import sportMain from "/public/images/sportMain.png";
import Image from "next/image";
import Breadcrumb from "@/app/components/BreadCrumb";

import SubMenu from "./(component)/SubMenu";
import BoardContainer from "../components/boards/BoardContainer";

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
      <BoardContainer typ={2} page={1} size={15} />
    </div>
  );
}
