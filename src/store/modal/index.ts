import { create } from 'zustand';

export interface ModalProps {
  open: boolean;
  handleSetOpen: (open: boolean) => void;
}
  
const initialState = {
  open: false,
};

const useModalStore = create<ModalProps>((set) => ({
  ...initialState,
  handleSetOpen: (open) => set((state) => ({ ...state, open })),
}));

export { useModalStore };
