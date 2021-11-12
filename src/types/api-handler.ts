export interface IScenicSpotTourismInfo {
  ID: string;
  Name: string;
  DescriptionDetail?: string;
  Description?: string;
  Phone?: string;
  Address?: string;
  ZipCode?: string;
  TravelInfo?: string;
  OpenTime?: string;
  Picture?: ITourismPicture;
  MapUrl?: string;
  Position?: IPointType;
  Class1?: string;
  Class2?: string;
  Class3?: string;
  Level?: string;
  WebsiteUrl?: string;
  ParkingInfo?: string;
  ParkingPosition?: IPointType;
  TicketInfo?: string;
  Remarks?: string;
  Keyword?: string;
  City?: string;
  SrcUpdateTime: Date | string;
  UpdateTime: Date | string;
}

export interface ITourismPicture  {
  PictureUrl1?: string;
  PictureDescription1?: string;
  PictureUrl2?: string;
  PictureDescription2?: string;
  PictureUrl3?: string;
  PictureDescription3?: string;
}

export interface IPointType {
  PositionLon: number;
  PositionLat: number;
  GeoHash: string;
}

export interface IRestaurantTourismInfo {
  ID: string;
  Name: string;
  Description?: string;
  Address?: string;
  ZipCode?: string;
  Phone?: string;
  OpenTime?: string;
  WebsiteUrl?: string;
  Picture?: ITourismPicture;
  Position?: IPointType;
  Class?: string;
  MapUrl?: string;
  ParkingInfo?: string;
  City?: string;
  SrcUpdateTime: Date | string;
  UpdateTime: Date | string;
}

export interface IHotelTourismInfo {
  ID: string;
  Name: string;
  Description?: string;
  Grade?: string;
  Address?: string;
  ZipCode?: string;
  Phone?: string;
  Fax?: string;
  WebsiteUrl?: string;
  Picture?: ITourismPicture;
  Position?: IPointType;
  Class?: string;
  MapUrl?: string;
  Spec?: string;
  ServiceInfo?: string;
  ParkingInfo?: string;
  City?: string;
  SrcUpdateTime: Date | string;
  UpdateTime: Date | string;
}

export interface IActivityTourismInfo {
  ID: string;
  Name: string;
  Description?: string;
  Particpation?: string;
  Location?: string;
  Address?: string;
  Phone?: string;
  Organizer?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Cycle?: string;
  NonCycle?: string;
  WebsiteUrl?: string;
  Picture?: ITourismPicture;
  Position?: IPointType;
  Class1?: string;
  Class2?: string;
  MapUrl?: string;
  TravelInfo?: string;
  ParkingInfo ?: string;
  Charge?: string;
  Remarks?: string;
  City?: string;
  SrcUpdateTime: Date | string;
  UpdateTime: Date | string;
}
