"use client";

import { Announcement } from "@/components/Announcement";
import { Header } from "@/components/common/Header";
import { Warning } from "@/components/common/Warning";
import { Modal } from "@/components/common/Modal";
import { useModalStore } from "@/store/modal";
import { PRICE_DEFAULT } from "@/config";

function Home() {
  const { open } = useModalStore();

  return (
    <div className="container">
      <Header price={open ? PRICE_DEFAULT : 0} />
      <Warning />
      <Announcement />
      {open && <Modal />}
    </div>
  );
}

export default Home;
