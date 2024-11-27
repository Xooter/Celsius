import PlusSignIcon from "./HugeIcons/plus-sign-stroke-rounded";
import TaskDaily02Icon from "./HugeIcons/task-daily-02-stroke-rounded";
import WhatsappIcon from "./HugeIcons/whatsapp-stroke-rounded";

const ConsultPanel = () => {
  function onItemClick(
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="fixed bottom-2 right-5 bg-white w-1/5 p-5 border-2 border-dark flex-col justify-between gap-4">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <TaskDaily02Icon />
          <h1>Preguntar sobre:</h1>
        </div>
        <PlusSignIcon />
      </div>
      <button
        className="flex items-center justify-center w-full py-1 border-2 border-dark rounded-sm
        gap-2 px-6  font-medium  text-white transition-all hover:shadow-[0px_3px_0px_black] hover:translate-y-[0px] shadow-none translate-y-[3px]"
        onClick={onItemClick}
      >
        <WhatsappIcon />
        <a>Consultar</a>
      </button>
    </div>
  );
};

export default ConsultPanel;
