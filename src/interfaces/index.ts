import { ReactNode } from 'react';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}
export interface Game {
	id: number;
	name: string;
	slug: string;
	genres: Genre[];
	// publishers: Publisher[];
	description_raw: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}
export interface FetchRespone<T> {
	count: number;
	next?: string|null
	results: T[];
}

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

export interface GameQuery {
	
	genreId?: number; //genre: number | undefined; bu bilan bir xil
	platformId?: number;
	sortOrder?: string;
	searchText?: string;
}
export interface GameCardContainerProps {
	children: ReactNode;
}

export interface GameCardProps {
	game: Game;
}
export interface PlatformIconListProps {
	platforms: Platform[];
}
export interface CriticScoreProps {
	score: number;
}
export interface GenreListProps {
	onSelectedGenre: (genre: Genre) => void;
	selectedGenreId?: number; //| undefined ga teng ? optional
}
export interface GameGridProps {
gameQuery:GameQuery
}
export interface PlatformSelectorPros {
	selectedPlatformId?: number;
	onSelectedPlatform: (platform: Platform) => void;
}

export interface SortSelectorProps {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
export interface SearchInputProps {
  onSearch: (searchText: string) => void;
}
export interface NavBarProps {
  onSearch: (searchText: string) => void;
}
export interface EmojiProps {
  rating: number;
}