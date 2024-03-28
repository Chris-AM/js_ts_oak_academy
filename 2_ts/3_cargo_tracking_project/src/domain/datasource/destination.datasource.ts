import { DestinationModel } from "../models/destination.model";

export abstract class DestinationDataSource {
  abstract setDestinations(destinations: DestinationModel[]): Promise<DestinationModel[]>;
  abstract getDestinations(): Promise<DestinationModel[]>;
}
