type BaseProductType = {
  id: string;
  type: ProductType;
  name: string;
  price: number;
  photo: string;
  descritpion: string;
  piece: number;
};

type ClothesProductType = {
  size: string;
  color: string;
} & BaseProductType;

type FoodProductType = {
  weight: number;
  brand: string;
} & BaseProductType;

type DrinkProductType = {
  liter: number;
  brand: string;
} & BaseProductType;

enum ProductType {
  CLOTHES,
  FOOD,
  DRINK,
}

export type { BaseProductType, ClothesProductType, FoodProductType, DrinkProductType, ProductType };
