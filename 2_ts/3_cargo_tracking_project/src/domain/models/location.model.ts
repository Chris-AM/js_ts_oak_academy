export class LocationModel {
  private latitude: number;
  private longitude: number;

  constructor() {
    this.latitude = 0;
    this.longitude = 0;
  }

  public setLongitude(longitude: number): void {
    this.longitude = longitude;
  }
  public getLongitude(): number {
    return this.longitude;
  }
  public setLatitude(latitude: number): void {
    this.latitude = latitude;
  }
  public getLatitude(): number {
    return this.latitude;
  }
}
