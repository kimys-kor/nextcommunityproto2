import Avatar from "@/app/components/Avatar";
import { LuUserCircle2 } from "react-icons/lu";

function Profile() {
  const userInfo = {
    nickname: "커뮤관리자",
    Level: 1,
    point: 104200,
    joinDate: "2024-08-25",
  };

  return (
    <div>
      <section className="px-6 py-10 flex flex-col gap-5 items-center justify-center">
        <Avatar />
        <h1 className="text-xl font-medium">{userInfo.nickname}</h1>
        <div className="flex justify-center items-center gap-2">
          <div className="text-sm text-subtext2">
            레벨
            <span className="text-base text-blue font-medium">
              {" "}
              {userInfo.Level}
            </span>
          </div>
          <div className={`h-4 w-[1px] bg-gray-300`} />
          <div className="text-sm text-subtext2">
            포인트
            <span className="text-base text-blue font-medium">
              {" "}
              {userInfo.point}
            </span>
          </div>
        </div>
        <div>
          가입일
          <span className="text-base text-black font-medium">
            {" "}
            {userInfo.joinDate}
          </span>
        </div>
      </section>
    </div>
  );
}

export default Profile;