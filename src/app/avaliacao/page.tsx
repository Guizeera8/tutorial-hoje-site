import type { Metadata } from "next";

import { Avaliation } from "@/components/Avaliation";
import { Header } from "@/components/common/Header";
import { PRICE_DEFAULT } from "@/config";

export const metadata: Metadata = {
  title: "PubliMoney - Avaliação",
  description: "Avalie anúncios e ganhe dinheiro!",
};

function Avaliacao() {
  return (
    <div className="container">
      <Header price={PRICE_DEFAULT} />
      <Avaliation />
    </div>
  );
}

export default Avaliacao;
