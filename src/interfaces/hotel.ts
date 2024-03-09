export interface IServices {
  isParking: boolean;
  isBathRoom: boolean;
  isDinningRoom: boolean;
  isWifi: boolean;
  isFitness: boolean;
}

export interface IAddress {
  city: string;
  district: string;
  country: string;
}

export interface IHotel {
  id: string;
  name: string;
  price: number;
  reviews: number;
  services: IServices;
  address: IAddress;
  images: {
    cover: string;
    desc: string[];
  };
}
