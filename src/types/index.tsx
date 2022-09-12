export enum RoutesEnum {
  HOME = '/',
  ABOUT_ME = '/about-me',
  CONTACT = '/contact',
  PROJECTS = '/projects',
  SOLITAIRE = '/solitaire',
}

export interface Card {
  number: number;
  suit: string;
  color: string;
  text: string;
}