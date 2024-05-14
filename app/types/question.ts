export interface Choice {
  id: number;
  title: string;
  department: string;
  weight: number;
}

export interface Question {
  id: number;
  yearId: number;
  question: string;
  choices: Choice[];
}
