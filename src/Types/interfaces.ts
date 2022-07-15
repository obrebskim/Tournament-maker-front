export interface newsTumbnailType {
    id: string,
    title: string,
    img: string,
    date: string,
    path: string,
    feed: string,
}

export interface TournamentTumbnailType {
    id: string,
    image: string | null,
    name: string,
    city: string,
    pool: number,
    currency_code: string,
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