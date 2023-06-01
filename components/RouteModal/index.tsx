import { Modal } from "components/Modal";
import { TableContext } from "contexts/TableContext";
import GoogleMapReact from "google-map-react";
import { useContext, useEffect, useState } from "react";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAz9696wAQQr4mV_9x_Oz1sLblZDd-L0Nk");

declare var google: any;

interface RouteCoordinates {
  lng: number
  lat: number
}

export const RouteModal = () => {
  const { selectedRoute, setSelectedRoute } = useContext(TableContext)
  const [isOpen, setIsOpen] = useState(false)
  const [origin, setOrigin] = useState<RouteCoordinates | null>(null)
  const [destination, setDestination] = useState<RouteCoordinates | null>(null)

  // Uses google api to convert address to lat/lng
  const addressToCoordinates = async (address: string, callback: (coordinates: RouteCoordinates) => void) => {
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        callback({ lat, lng })
      },
      (error) => {
        console.error(error);
      }
    );
  }

  useEffect(() => {
    if(selectedRoute){
      addressToCoordinates(selectedRoute.origin_address, setOrigin)
      addressToCoordinates(selectedRoute.shipping_address, setDestination)
    }
  }, [selectedRoute])

  const handleClose = () => {
    setIsOpen(false)
    setSelectedRoute(null)
  }

  useEffect(() => {
    setIsOpen(selectedRoute !== null)
  }, [selectedRoute])

  if(!selectedRoute){
    return <></>
  }

  // Generates route using google maps
  const apiIsLoaded = (map: any, maps: any) => {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result: any, status: any) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  return(
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
    >
      <div className="w-full h-80">
        <GoogleMapReact
          key={origin?.lat}
          bootstrapURLKeys={{
            key: "AIzaSyAz9696wAQQr4mV_9x_Oz1sLblZDd-L0Nk"
          }}
          defaultZoom={10}
          center={{ 
            lat: origin?.lat || 0, 
            lng: origin?.lng || 0
          }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <div className="flex items-center gap-2 text-sm text-zinc-100">
          <div className="h-5 w-5 rounded-full bg-red-500 text-white font-bold text-xs flex items-center justify-center">A</div>
          {selectedRoute.origin_address} 
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-100">
          <div className="h-5 w-5 rounded-full bg-red-500 text-white font-bold text-xs flex items-center justify-center">B</div>
          {selectedRoute.shipping_address}
        </div>
      </div>
    </Modal>
  )
}