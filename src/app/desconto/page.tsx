import type { Metadata } from "next";

import { Header } from "@/components/common/Header";
import { Warning } from "@/components/common/Warning";
import { Discount } from "@/components/Discount";
import { PRICE_DEFAULT } from "@/config";

export const metadata: Metadata = {
  title: "PubliMoney - Desconto",
  description: "Avalie anúncios e ganhe dinheiro!",
};

function Desconto() {
  return (
    <div className="container">
      <Header price={PRICE_DEFAULT} />
      <Warning alert />
      <Discount />
    </div>
  );
}

export default Desconto;
