import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

export interface Coords {
  start: number[] | null;
  midpoint: number[] | null;
  end: number[] | null;
}

export interface Destination {
  id: string | null;
  user: string | null;
  type: string | null;
  coords: Coords;
  categories: any[] | null; // You can replace `any` with a specific type
  points: any[]; // You can replace `any` with a specific type
  description: string | null;
}

export interface DestinationContextType {
  destination: Destination;
  setDestination: React.Dispatch<React.SetStateAction<Destination>>;
  clearDestination: () => void;
}

export const DestinationContext = createContext<DestinationContextType | null>(
  null
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
      start: null,
      midpoint: null,
      end: null,
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
        start: null,
        midpoint: null,
        end: null,
      },
      categories: null,
      points: [],
      description: null,
    });
  };

  return (
    <DestinationContext.Provider
      value={{ destination, setDestination, clearDestination }}>
      {children}
    </DestinationContext.Provider>
  );
};

// export default DestinationProvider;
