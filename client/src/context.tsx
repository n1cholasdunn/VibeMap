import {
  GeolibLatitudeInputValue,
  GeolibLongitudeInputValue,
} from 'geolib/es/types';
import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

export interface Coords {
  end?:
    | undefined
    | {
        formatted_address: string | number | readonly string[] | undefined;
        lat: GeolibLatitudeInputValue;
        lng: GeolibLongitudeInputValue;
      };
  midpoint?:
    | undefined
    | {
        formatted_address: string | number | readonly string[] | undefined;
        lat: GeolibLatitudeInputValue;
        lng: GeolibLongitudeInputValue;
      };
  start?:
    | undefined
    | {
        formatted_address: string | number | readonly string[] | undefined;
        lat: GeolibLatitudeInputValue;
        lng: GeolibLongitudeInputValue;
      };
}

export interface Points {
  formatted_address: string | number | readonly string[] | undefined;
}

export interface Destination {
  id: string | null;
  user: string | number | null;
  type: string | null;
  coords: Coords;
  categories: any[] | null; // TODOYou can replace any with a specific type
  points: any; // TODOYou can replace any with a specific type
  description: string | null;
}

export interface DestinationContextType {
  destination: Destination;
  setDestination: React.Dispatch<React.SetStateAction<Destination>>;
  clearDestination: () => void;
}

export const DestinationContext = createContext<DestinationContextType>(
  {} as DestinationContextType
);

type DestinationProviderProps = {
  children: ReactNode;
};

export const DestinationProvider = ({ children }: DestinationProviderProps) => {
  const [destination, setDestination] = useState<Destination>({
    id: null,
    user: null,
    type: null,
    coords: {
      start: undefined,
      midpoint: undefined,
      end: undefined,
    },

    categories: null, // tags will be an array of objects
    points: [],
    description: null,
  });

  const clearDestination = () => {
    setDestination({
      id: null,
      user: null,
      type: null,
      coords: {
        start: undefined,
        midpoint: undefined,
        end: undefined,
      },
      categories: null,
      points: [],
      description: null,
    });
  };

  return (
    <DestinationContext.Provider
      value={{ destination, setDestination, clearDestination }}
    >
      {children}
    </DestinationContext.Provider>
  );
};

// export default DestinationProvider;
