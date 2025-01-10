export type Option = {
  text: string;
  value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  userHelper?: UserHelper;
};
export type UserHelper = {
  title: string;
  description: string;
};

export type Question = {
  text: string;
  Options: Option[];
  userHelper?: UserHelper;
};
