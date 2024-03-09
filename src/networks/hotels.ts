import { IAddress, IHotel, IServices } from "@/interfaces";
import { AxiosResponse } from "axios";

const services: IServices = {
  isBathRoom: true,
  isDinningRoom: true,
  isFitness: true,
  isParking: true,
  isWifi: true,
};

const address: IAddress = {
  district: "Mobor",
  city: "Cavelossim",
  country: "Goa",
};

const imageDes: string[] = [
  "/images/bed-room.png",
  "/images/living-room.png",
  "/images/swimming-pool.png",
  "/images/building.png",
];

function createHotel(id: string, name: string, price: number, reviews: number, cover: string): IHotel {
  return {
    id,
    name,
    price,
    reviews,
    services,
    address,
    images: {
      cover,
      desc: imageDes,
    },
  };
}

const mockRecommended: IHotel[] = [
  createHotel("7", "Trip to Thailand & Get 30% off on flight booking", 56000, 1366, "/images/trips/thailand.png"),
  createHotel("8", "Get additional 25% off on Bhutan tour fare", 1000, 1366, "/images/trips/bhutan.png"),
  createHotel("9", "Trip to Thailand & Get 30% off on flight booking", 1000, 1366, "/images/trips/china.png"),
  createHotel("10", "Flat 40% off on hotel bookings in Agra", 1000, 1366, "/images/trips/agra.png"),
  createHotel("11", "Flat 40% off on hotel bookings in Agra", 1000, 1366, "/images/trips/lao.png"),
];

const mock: IHotel[] = [
  createHotel("1", "Hotel JW Marriott", 1000, 1366, "/images/jw-marriott.png"),
  createHotel("2", "Nobu Hotel Chicago", 3000, 1366, "/images/nobu-hotel-chicago.png"),
  createHotel("3", "The Langham, Chicago", 1800, 1366, "/images/the-langham-chicago.png"),
  createHotel("4", "The Guesthouse Hotel", 1000, 1366, "/images/the-guesthouse.png"),
  createHotel("5", "Villa D Citta", 2000, 1366, "/images/villa-citta.png"),
  createHotel("6", "Loews Chicago Hotel", 1500, 1366, "/images/loews-chicago.png"),
  ...mockRecommended,
];

export const hotelAPI = {
  getById: async (id: string): Promise<AxiosResponse<IHotel>> => {
    return {
      data: mock.find((item) => item.id === id),
    } as AxiosResponse;
  },

  getAll: async (query?: string): Promise<AxiosResponse<IHotel[]>> => {
    let hotelsToReturn = mock;
    if (query) {
      const searchQuery = query.toLowerCase().trim();
      hotelsToReturn = mock.filter(
        (hotel) =>
          hotel.name.toLocaleLowerCase().includes(searchQuery) ||
          hotel.address.city.toLowerCase().includes(searchQuery) ||
          hotel.address.country.toLowerCase().includes(searchQuery)
      );
    }
    return {
      data: hotelsToReturn,
    } as AxiosResponse;
  },

  getRecommended: async (): Promise<AxiosResponse<IHotel[]>> => {
    return {
      data: mockRecommended,
    } as AxiosResponse;
  },
};
