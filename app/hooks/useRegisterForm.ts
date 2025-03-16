import { create } from "zustand";

interface RegisterFormStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterForm = create<RegisterFormStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterForm;
