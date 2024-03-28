import { LocationModel } from "./location.model";

export class CargoModel {
  private cargoId: string;
  private location: LocationModel;
  private weight: number;

  constructor() {
    this.cargoId = "";
    this.location = new LocationModel();
    this.weight = 0;
  }

  public setCargoId(cargoId: string): void {
    this.cargoId = cargoId;
  }
  public getCargoId(): string {
    return this.cargoId;
  }
  public getLocation(): LocationModel {
    return this.location;
  }
  public setLocation(location: LocationModel): void {
    this.location = location;
  }
  public setWeight(weight: number): void {
    this.weight = weight;
  }
  public getWeight(): number {
    return this.weight;
  }
}
