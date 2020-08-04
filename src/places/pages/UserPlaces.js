import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Sigiriya",
    description: "One of the most famous landmarks in Sri Lanka",
    imageUrl:
      "https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/sigiriya/pagePropertiesImage/sigiriya.jpg.jpg",
    address: "Rock Front, Sigiriya 21120",
    location: {
      lat: 7.9535781,
      lng: 80.6763596,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Sigiriya2",
    description: "One of the most famous landmarks in Sri Lanka",
    imageUrl:
      "https://static.asiawebdirect.com/m/kl/portals/srilanka-hotels-ws/homepage/sigiriya/pagePropertiesImage/sigiriya.jpg.jpg",
    address: "Rock Front, Sigiriya 21120",
    location: {
      lat: 7.9535781,
      lng: 80.6763596,
    },
    creator: "u2",
  },
];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
