import {create} from "zustand"
export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme); // ✅ correct method
    document.documentElement.setAttribute("data-theme", theme); // ✅ updates the <html>
    set({ theme });
  },
}));
