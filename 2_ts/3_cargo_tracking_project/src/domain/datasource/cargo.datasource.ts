import { CargoModel } from "../models/cargo.model";

export abstract class CargoDataSource {
    abstract setCargos(cargos: CargoModel[]): Promise<CargoModel[]>;
    abstract getCargos(): Promise<CargoModel[]>;
}