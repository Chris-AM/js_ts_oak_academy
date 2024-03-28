import { Faker, en } from "@faker-js/faker";
import { CargoDataSourceImpl } from "../infrastructure/cargo.datasource.impl";

export class Cargo {
  private readonly faker: Faker = new Faker({ locale: [en] });
  private readonly cargoDataSource: CargoDataSourceImpl =
    new CargoDataSourceImpl(this.faker);
  constructor() {}
  async getCargos(): Promise<void> {
    const cargos = await this.cargoDataSource.getCargos();
    console.log("getCargos Cargo => ", cargos);
  }
}
