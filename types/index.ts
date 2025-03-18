export interface Competition {
    id: number;
    name: string;
    location: string;
    date_start: string;
    date_end?: string;
    image: string;
}

export interface Skater {
    id: number;
    name: string;
    niveau?: string;
    category?: string;
    discipline?: string;
    programme?: string;
}

export interface Photo {
    id: number;
    url: string;
    description: string;
}

export interface Filters {
    niveaux: string[];
    categories: string[];
    disciplines: string[];
    programmes: string[];
}

export interface SelectedFilters {
    [key: string]: string[];
}