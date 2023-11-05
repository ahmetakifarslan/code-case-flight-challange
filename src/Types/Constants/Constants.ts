export enum FareCategoryStatusEnum {
  avialable = "AVAILABLE",
  error = "ERROR",
}

export enum FareCategoriesEnum {
  ECONOMY = "ECONOMY",
  BUSINESS = "BUSINESS",
}

export type FareCategoryStatus =
  | FareCategoryStatusEnum.avialable
  | FareCategoryStatusEnum.error;

export type FareCategories =
  | FareCategoriesEnum.ECONOMY
  | FareCategoriesEnum.BUSINESS;
