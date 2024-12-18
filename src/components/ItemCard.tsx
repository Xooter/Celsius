import { useMemo } from "react";
import { useConsult } from "../context/ConsultContext";
import { Item } from "../models/Item";

export const ItemCard = ({ item }: { item: Item }) => {
  const defaultImg =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEiGSE5R1u2oeM6EFz2minm_W4Lx4EfjVewWJBOPiS6VrDCXojwQmZkW2XyaOZY2Iwln5g_QJkSxAtpB88Ag-0QJKNbS6bwAQQ1VTOmRY_TTHc0SpJWc43qUTaHiJjR72-BqIqdjJGfvDWPc5Ro4FLmN5jKD-TMT-q-8x0xcOrIJrGb3jlqro2qxEVfH%2Fs442%2FTransistor%2520MOSFET.png&f=1&nofb=1&ipt=e0f3fc62eeb64de4b2af93652e18f603536eaf123359a8e493b81c127f50d4d8&ipo=images";

  const { selectedItems, addItem, removeItem } = useConsult();
  const isItemSelected = useMemo(
    () => selectedItems.includes(item),
    [item, selectedItems],
  );

  function onItemClick(): void {
    if (isItemSelected) {
      removeItem(item);
    } else {
      addItem(item);
    }
  }

  return (
    <div className="flex-col ring-0 ring-dark rounded-sm p-2 w-60 h-full ">
      <img
        className="w-full max-h-40 object-contain mx-auto rounded-lg ring-0 ring-black mb-2  aspect-square"
        src={item.img || defaultImg}
      />
      <h1 className="text-center mb-2">{item.name}</h1>
      <button
        style={{
          backgroundColor: isItemSelected ? "#e15050" : "transparent",
        }}
        className="flex items-center justify-center w-full py-1 border-2 border-dark rounded-sm 
        gap-2 px-6 transition-all 
        hover:shadow-[0px_3px_0px_black] hover:translate-y-[0px]
        shadow-none translate-y-[3px]"
        onClick={onItemClick}
      >
        <a>{isItemSelected ? "Quitar" : "Añadir"}</a>
      </button>
    </div>
  );
};
