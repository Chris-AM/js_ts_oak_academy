import { Faker } from "@faker-js/faker";
import { DestinationDataSource } from "../domain/datasource/destination.datasource";
import { DestinationModel } from "../domain/models/destination.model";
import { LocationModel } from "../domain/models/location.model";

export class DestinationDataSourceImpl extends DestinationDataSource {
  public destinationModel: DestinationModel[];
  constructor(private readonly faker: Faker) {
    super();
    this.destinationModel = [new DestinationModel()];
  }

  private getLocation(): LocationModel {
    const location = new LocationModel();
    location.setLatitude(this.faker.location.latitude());
    location.setLongitude(this.faker.location.longitude());
    return location;
  }

  public async setDestinations(
    destinations: DestinationModel[]
  ): Promise<DestinationModel[]> {
    const returnedDestinations = destinations.map((destination) => {
      destination.setDestinationId(this.faker.string.uuid());
      destination.setReceiverName(this.faker.person.firstName());
      destination.setReceiverAddress(this.faker.location.streetAddress());
      destination.setLocation(this.getLocation());
      return destination;
    });
    return returnedDestinations;
  }

  public getDestinations(): Promise<DestinationModel[]> {
    return this.setDestinations(this.destinationModel);
  }
}
