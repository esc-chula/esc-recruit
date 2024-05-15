export interface Choice {
  title: string;
  weight: any;
}

export interface Question {
  id: number;
  yearId: number;
  question: string;
  choices: Choice[];
}
