import { create } from 'zustand'

// To jest nasz globalny "magazyn" danych
export const useStore = create((set) => ({
  bears: 0,
  // Akcja: dodawanie
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // Akcja: resetowanie
  removeAllBears: () => set({ bears: 0 }),
}))