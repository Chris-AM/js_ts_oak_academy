import { Faker, en } from "@faker-js/faker";
import { CargoDataSourceImpl } from "../infrastructure/cargo.datasource.impl";
import { CargoModel } from "../domain/models/cargo.model";

export class Cargo {
  private readonly faker: Faker = new Faker({ locale: [en] });
  private readonly cargoDataSource: CargoDataSourceImpl =
    new CargoDataSourceImpl(this.faker);
  private cargos: CargoModel[] = [];
  constructor() {}

  async getCargos(): Promise<CargoModel[]> {
    this.cargos = await this.cargoDataSource.getCargos();
    return this.cargos;
  }
}
