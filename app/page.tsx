"use client";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { currentUser } = useSelector((state: any) => state.users);
  console.log("===>User", currentUser);
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-24 text-5xl text-red-600 font-semibold ">
      <h1>Ket Dev Ban Ban ເກດ ພັດທະນາເວບແບບບ້ານບ້ານ</h1>
    </main>
  );
}
