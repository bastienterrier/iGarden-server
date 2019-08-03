interface GardenSummary {
  action: string;
  type: string;
  value: any;
  comment: string;
}

export interface GardenCollect {
  user: string;
  date: Date;
  summary: GardenSummary[];
}
