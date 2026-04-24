import { create } from 'zustand'
import { persist } from 'zustand/middleware' // Ta linia jest kluczowa!

export const useStore = create(
  persist(
    (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: 'bear-storage', // Unikalna nazwa klucza w LocalStorage
    }
  )
)