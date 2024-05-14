export interface Choice {
  id: number;
  title: string;
  weight: any;
}

export interface Question {
  id: number;
  yearId: number;
  question: string;
  choices: Choice[];
}
