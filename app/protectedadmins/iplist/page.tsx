import React from "react";
import Title from "../(components)/Title";

export default function Page() {
  return (
    <div className="w-full justify-center flex-col gap-3">
      <main className="w-full flex-col items-center mt-4 overflow-x-auto p-6 sm:p-3">
        <Title title={"차단IP 관리"}></Title>
      </main>
    </div>
  );
}
