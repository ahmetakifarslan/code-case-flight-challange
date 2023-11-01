export enum FareCategoryStatusEnum {
  avialable = "AVAILABLE",
  error = "ERROR",
}

export enum FareCategoriesEnum {
  economy = "ECONOMY",
  business = "BUSINESS",
}

export type FareCategoryStatus =
  | FareCategoryStatusEnum.avialable
  | FareCategoryStatusEnum.error;

export type FareCategories =
  | FareCategoriesEnum.economy
  | FareCategoriesEnum.business;
