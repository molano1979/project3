
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";


export default function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API
  });

  return isLoaded ? <Map /> : null;
}
