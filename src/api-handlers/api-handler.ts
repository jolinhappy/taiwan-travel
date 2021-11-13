import { apiHelper } from '../utils/api-helper';
import {
  IScenicSpotTourismInfo,
  IRestaurantTourismInfo,
  IHotelTourismInfo,
  IActivityTourismInfo
} from '@/types/api-handler';
export default {
  getAllScenicSpots(count: number) {
    return apiHelper.get<IScenicSpotTourismInfo[]>(`ScenicSpot?$top=${count}`);
  },
  getOneCityScenicSpots(city: string) {
    return apiHelper.get<IScenicSpotTourismInfo[]>(`ScenicSpot/${city}`);
  },
  getAllRestaurants() {
    return apiHelper.get<IRestaurantTourismInfo[]>('Restaurant');
  },
  getOneCityRestaurants(city: string) {
    return apiHelper.get<IRestaurantTourismInfo[]>(`Restaurant/${city}`);
  },
  getAllHotels() {
    return apiHelper.get<IHotelTourismInfo[]>('Hotel');
  },
  getOneCityHotels(city: string) {
    return apiHelper.get<IHotelTourismInfo[]>(`Hotel/${city}`);
  },
  getAllActivities() {
    return apiHelper.get<IActivityTourismInfo[]>('Activity');
  },
  getOneCityActivities(city: string) {
    return apiHelper.get<IActivityTourismInfo[]>(`Activity/${city}`);
  },
}