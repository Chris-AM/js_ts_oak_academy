import { LocationModel } from "./location.model";

export class DestinationModel {
  private destinationId: string;
  private receiverName: string;
  private receiverAddress: string;
  private location: LocationModel;

  constructor() {
    this.destinationId = "";
    this.receiverName = "";
    this.receiverAddress = "";
    this.location = new LocationModel();
  }

  public setDestinationId(destinationId: string): void {
    this.destinationId = destinationId;
  }
  public getDestinationId(): string {
    return this.destinationId;
  }
  public setReceiverName(receiverName: string): void {
    this.receiverName = receiverName;
  }
  public getReceiverName(): string {
    return this.receiverName;
  }
  public setReceiverAddress(receiverAddress: string): void {
    this.receiverAddress = receiverAddress;
  }
  public getReceiverAddress(): string {
    return this.receiverAddress;
  }
  public getLocation(): LocationModel {
    return this.location;
  }
  public setLocation(location: LocationModel): void {
    this.location = location;
  }
}
