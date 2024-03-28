import { DestinationDataSourceImpl } from "../infrastructure/destination.datasource.impl";
import { en, Faker } from "@faker-js/faker";
export class Destination {
  private readonly faker: Faker = new Faker({ locale: [en] });
  private readonly destinationDataSource: DestinationDataSourceImpl =
    new DestinationDataSourceImpl(this.faker);
  constructor() {}
  async getDestinations(): Promise<void> {
    const destinations = await this.destinationDataSource.getDestinations();
    console.log("getDestinations Destination => ", destinations);
  }
}
