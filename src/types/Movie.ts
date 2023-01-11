export interface Movie {
    adult: boolean
    backdrop_path: string | null
    belongs_to_collection: {} | null
    budget: number
    credits: MovieCredits
    genres: MovieGenres[]
    homepage: string | null
    id: number
    imdb_id: string | null
    original_language: string
    original_title: string
    overview: string | null
    popularity: number
    poster_path: string | null
    production_companies: MovieProductionCompanies[]
    production_countries: MovieProductionCountries[]
    release_date: string
    revenue: string
    runtime: string
    spoken_languages: MovieSpokenLanguages[]
    status: string
    tagline: string | null
    title: string
    video: boolean
    videos: {
        results: MovieVideos[]
    }
    vote_average: number
    vote_count: number
}

interface MovieCredits {
    cast: MovieCast[]
    crew: MovieCrew[]
}

interface MovieCast {
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

interface MovieCrew {
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


interface MovieGenres {
    id: number
    name: string
}

interface MovieProductionCompanies {
    name:  string
    id: number
    logo_path: string | null
    origin_country: string
}

interface MovieProductionCountries {
    iso_3166_1:  string
    name: string
}

interface MovieSpokenLanguages {
    iso_639_1: string
    name: string
}

export interface MovieVideos {
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