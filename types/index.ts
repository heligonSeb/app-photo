export interface Competition {
    id: number;
    name: string;
    location: string;
    date_start: string;
    date_end?: string;
    image: string;
}

export interface PhotoFile {
    file: string;
    datetime: string;
    url: string;
}

export interface Program {
    product_uuid: string;
    product_names: string[];
    id_tags: string[];
    group_tags: string[];
    subgroup_tags: string[];
    period_tags: string[];
    category_tags: string[];
    subcategory_tags: string[];
    subject_tags: string[];
    location_tags: string[];
    source_tags: string[];
    color_tags: string[];
    size_tags: string[];
    description: string;
    img_cover: string;
    price: number;
    files: PhotoFile[];
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