import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";

import Breadcrumb from "@/app/components/BreadCrumb";
import SubMenu from "../(component)/SubMenu";
import BoardContainer from "@/app/components/boards/BoardContainer";

function page() {
  const breadcrumbItems = {
    title: "커뮤니티",
    subMenu: "자유게시판",
  };

  return (
    <div className="flex flex-col gap-3 max-w-[1300px]">
      <SubMenu />
      <ProgressSliderPage></ProgressSliderPage>
      <ThreeBanner></ThreeBanner>
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
      <BoardContainer typ={12} page={1} size={15} />
    </div>
  );
}

export default page;
