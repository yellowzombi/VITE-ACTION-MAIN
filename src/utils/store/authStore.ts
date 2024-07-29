import { create } from "zustand";

type AuthState = {
  token: string | null;
  setToken: (token: string) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  // token: null,
  token: "token",
  setToken: (token) => set({ token }),
}));
