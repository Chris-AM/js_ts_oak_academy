import { Faker } from "@faker-js/faker";
import { CargoDataSource } from "../domain/datasource/cargo.datasource";
import { CargoModel } from "../domain/models/cargo.model";
import { LocationModel } from "../domain/models/location.model";

export class CargoDataSourceImpl extends CargoDataSource {
  private cargoModel: CargoModel[];
  constructor(private readonly faker: Faker) {
    super();
    this.cargoModel = [new CargoModel()];
  }

  private getLocation(): LocationModel {
    const location = new LocationModel();
    location.setLatitude(this.faker.location.latitude());
    location.setLongitude(this.faker.location.longitude());
    return location;
  }

  public async setCargos(cargos: CargoModel[]): Promise<CargoModel[]> {
    const returnedCargos = cargos.map((cargo) => {
      cargo.setCargoId(this.faker.string.uuid());
      cargo.setLocation(this.getLocation());
      cargo.setWeight(this.faker.number.int());
      return cargo;
    });
    return returnedCargos;
  }

  public async getCargos(): Promise<CargoModel[]> {
    return this.setCargos(this.cargoModel);
  }
}
