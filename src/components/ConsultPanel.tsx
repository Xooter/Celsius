import { useState } from "react";
import { useConsult } from "../context/ConsultContext";
import Delete02Icon from "./HugeIcons/delete-02-stroke-rounded";
import PlusSignIcon from "./HugeIcons/plus-sign-stroke-rounded";
import TaskDaily02Icon from "./HugeIcons/task-daily-02-stroke-rounded";
import WhatsappIcon from "./HugeIcons/whatsapp-stroke-rounded";
import Remove01Icon from "./HugeIcons/remove-01-stroke-rounded";

const ConsultPanel = () => {
  const { removeItem, selectedItems } = useConsult();
  const [isHide, setIsHide] = useState<boolean>(false);

  function onItemClick(): void {
    if (!selectedItems || selectedItems.length === 0) {
      return;
    }

    const itemNames = selectedItems.map((item) => item.name).join("\n -");
    const message = `Hola! Me podrian dar mas informacion sobre: \n -${itemNames} \n Muchas gracias!`;

    window.open(
      `https://wa.me/543513780769?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  }

  function hidePanel(): void {
    setIsHide(!isHide);
  }

  return (
    selectedItems.length > 0 && (
      <div className="fixed bottom-2 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-5 bg-white w-[90%] lg:w-1/5 p-5 border-2 border-dark flex-col justify-between gap-4">
        <div className="flex justify-between mb-5">
          <div className="flex gap-2">
            <TaskDaily02Icon />
            <h1>Preguntar sobre:</h1>
          </div>
          {selectedItems.length > 0 ? (
            !isHide ? (
              <Remove01Icon onClick={hidePanel} />
            ) : (
              <PlusSignIcon onClick={hidePanel} />
            )
          ) : undefined}
        </div>
        {isHide ? (
          <p className="text-center">
            {selectedItems.length} productos seleccionados
          </p>
        ) : (
          <div className="flex-col space-y-2">
            {selectedItems.map((item, i: number) => {
              return i <= 10 ? (
                <div key={item.name} className="flex gap-2 justify-between">
                  <p>{item.name}</p>
                  <Delete02Icon
                    className="cursor-pointer hover:text-red-500"
                    onClick={() => removeItem(item)}
                  />
                </div>
              ) : i == 11 ? (
                <h1>...</h1>
              ) : undefined;
            })}
          </div>
        )}
        <button
          className="flex items-center justify-center w-full py-1 border-2 border-dark rounded-sm mt-5
        gap-2 px-6  font-medium  text-white transition-all hover:shadow-[0px_3px_0px_black] hover:translate-y-[0px] shadow-none translate-y-[3px]"
          onClick={onItemClick}
        >
          <WhatsappIcon />
          <a>Consultar</a>
        </button>
      </div>
    )
  );
};

export default ConsultPanel;
