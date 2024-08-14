import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";
import Board from "@/app/components/boards/Board";
import Breadcrumb from "@/app/components/BreadCrumb";

function page() {
  const breadcrumbItems = {
    title: "고객센터",
    subMenu: "공지사항",
  };

  return (
    <div className="flex flex-col max-w-[1300px] gap-6">
      <ProgressSliderPage></ProgressSliderPage>
      <ThreeBanner></ThreeBanner>
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
      <Board />
    </div>
  );
}

export default page;
