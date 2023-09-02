interface TourInfo {
  date: string;
  where: string;
  info: string;
  amount: string;
  place?: string;
}
interface TourDates {
  startDate: Date;
  endDate: Date;
}
interface TourDetails {
  days: number;
  plan: TourPlan[];
}
interface TourPlan {
  day: number;
  todo: string;
}
interface Tour {
  tourInfo: TourInfo;
  tourDates: TourDates;
  tourDetails: TourDetails;
}
