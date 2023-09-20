import { CHECKOUT, CHECKOUT_DISCOUNT } from "@/config";
import { ButtonProps } from "./types";

export const useButtonController = ({type}: ButtonProps) => {
    const handleBuyLink = () => {
        window.location.href = type === "default" ? CHECKOUT : CHECKOUT_DISCOUNT;
    }

    return {
        handleBuyLink
    }
}

export default useButtonController;