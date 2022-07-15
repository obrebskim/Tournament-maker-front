export interface newsTumbnailType {
    id: string,
    title: string,
    img: string,
    date: string,
    path: string,
    feed: string,
}

export interface TournamentTileType {
    id: string,
    image: string,
    name: string,
    location: string,
    pool: number,
    currency: string,
    description: string,
    date: string,
    time: string,
    price: number,
}

export interface OptionType {
    label: string,
    value: string | number,
}

export interface FilterItemType {
    name: string,
    checked: boolean,
}

export interface TournamentType {
    id: string,
    name: string,
    city: string,
    address: string,
    date: string,
    time: string,
    price: number | null,
    pool: number | null,
    description: string,
    image: string | null,
    url: string | null,
    currency: string,
    country: string,
    owner: string,
    type: number,
}