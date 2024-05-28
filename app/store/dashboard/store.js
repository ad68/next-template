import { create } from "zustand";
import { devtools } from "zustand/middleware";
export const useStore = create(
  devtools((set) => ({
    /* rowData: null,
    updateRowData: (rowData) => set({ rowData: rowData }),
    clearRowData: () => set({ rowData: null }), */
  }))
);

/* import { devtools,persist } from "zustand/middleware";
export const usePersistStore = create(
  persist(
    devtools((set) => ({})),
    {
      name: "store-storage",
    }
  )
);
 */
