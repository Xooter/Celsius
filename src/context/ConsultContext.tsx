import { createContext, useContext, useState } from "react";
import { Item } from "../models/Item";

const consultContext = createContext<
  | {
      selectedItems: Item[];
      addItem: (item: Item) => void;
      removeItem: (item: Item) => void;
    }
  | undefined
>(undefined);

export const ConsultContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    if (selectedItems.some((i) => i.name === item.name)) return;

    setSelectedItems([...selectedItems, item]);
  };

  const removeItem = (item: Item) => {
    //TODO: cambiar por id en caso de base de datos
    setSelectedItems(selectedItems.filter((i) => i.name !== item.name));
  };

  return (
    <consultContext.Provider value={{ selectedItems, addItem, removeItem }}>
      {children}
    </consultContext.Provider>
  );
};

export const useConsult = () => {
  const context = useContext(consultContext);
  if (!context) {
    throw new Error("useConsult debe ser utilizado dentro de un Provider");
  }

  return context;
};
