export interface Serial {
    backdrop_path: string | null
    created_by: SerialCreatedBy[]
    credits: SerialCredits
    episode_run_time: number[]
    first_air_date: string
    genres: SerialGenres[]
    homepage: string
    id: number
    in_production: boolean
    languages: string[]
    last_air_date: string
    last_episode_to_air: SerialLastEpisodeToAir[]
    name: string
    networks: SerialNetworks[]
    number_of_episodes: number
    number_of_seasons: number
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string | null
    production_companies: SerialProductionCompanies[]
    production_countries: SerialProductionCountries[]
    seasons: SerieDetailSeasons[]
    spoken_languages: SerialSpokenLanguages[]
    status: string
    tagline: string
    title: string
    type: string
    videos: {
        results: SerialVideos[]
    }
    vote_average: number
    vote_count: number
}

interface SerialCredits {
    cast: SerialCast[]
    crew: SerialCrew[]
}

interface SerialCast {
    adult: boolean
    cast_id: number
    character: string
    credit_id: string
    gender: number
    id: number
    known_for_department: string
    name: string
    order: number
    original_name: string
    popularity: number
    profile_path: string
}

interface SerialCrew {
    adult: boolean
    credit_id: number
    department: string
    gender: number
    id: number
    job: string
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
}


interface SerialCreatedBy {
    id: number
    credit_id: string
    name: string
    gender: number
    profile_path: string | null
}

interface SerialGenres {
    id: number
    name: string
}

interface SerialLastEpisodeToAir {
    air_date: string
    episode_number: number
    id: number
    name: string
    overview: string
    production_code: string
    season_number: number
    still_path: string | null
    vote_average: number
    vote_count: number
}

interface SerialNetworks {
    id: number
    name: string
    logo_path: string | null
    origin_country: string
}

interface SerialProductionCompanies {
    name:  string
    id: number
    logo_path: string | null
    origin_country: string
}


interface SerialProductionCountries {
    iso_3166_1:  string
    name: string
}

interface SerieDetailSeasons {
    air_date:  string
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string
    season_number: number
}

interface SerialSpokenLanguages {
    english_name: string
    iso_639_1: string
    name: string
}

export interface SerialVideos {
    id: string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    official: boolean
    published_at: string
    site: string
    size: number
    type: string
}