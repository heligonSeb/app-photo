
import { defineStore } from 'pinia';
import type { Program } from '~/types';

export const useProgramsStore = defineStore('programs', {
  state: () => ({
    programs: [] as Program[]
  }),
  actions: {
    setPrograms(newPrograms: Program[]) {
      this.programs = newPrograms;
    }
  }
});
