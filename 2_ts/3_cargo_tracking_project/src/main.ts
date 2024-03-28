// import { addGoogleMapKey } from "./config/environment";
import { Cargo } from "./presentation/cargo";
import { Destination } from "./presentation/destination";

const cargo: Cargo = new Cargo();
await cargo.getCargos();

const destination: Destination = new Destination();
destination.getDestinations();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <h1>Parcelamento de Cargas</h1>
`;
// const addGoogleKey =  (): string => {
//   const src = document.querySelector<HTMLScriptElement>("#googleMaps")!.src;
//   const key = src + '?key=' +  addGoogleMapKey();
//   const replace = document.querySelector<HTMLScriptElement>("#googleMaps")!.src = key;
//   console.log("replace =>", replace);
//   return replace;
// };

// addGoogleKey();

new google.maps.Map(document.querySelector<HTMLDivElement>("#app")!, {
  zoom: 1.6,
  center: {
    lat: 0,
    lng: 20,
  }
});
