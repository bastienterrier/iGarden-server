interface GardenSummary {
  action: string;
  type: string;
  value: any;
  unit: string;
}

export interface GardenCollect {
  user: string;
  date: Date;
  summary: GardenSummary[];
}
