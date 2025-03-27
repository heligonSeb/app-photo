import { ref } from 'vue';
import type { Program } from '~/types';

export const useCompetitionState = () => {
    const programs = ref<Program[] | null>(null);

    const setPrograms = (newPrograms: Program[]) => {
        programs.value = newPrograms;
    };

    return {
        programs,
        setPrograms
    };
};
