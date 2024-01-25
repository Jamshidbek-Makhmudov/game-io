import { ReactNode } from "react";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game { 
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  // rating_top: number;
}
export interface FetchRespone { 
	count: number
	results:Game[]
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface GameQuery { 
	genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
export interface GameCardContainerProps { 
	children:ReactNode
	
}

export interface GameCardProps {
  game: Game
}
export interface PlatformIconListProps {
  platforms: Platform[];
}
export interface CriticScoreProps {
  score: number;
}
