import { Item } from "../models/Item";

export const ItemCard = ({ item }: { item: Item }) => {
  const defaultImg =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEiGSE5R1u2oeM6EFz2minm_W4Lx4EfjVewWJBOPiS6VrDCXojwQmZkW2XyaOZY2Iwln5g_QJkSxAtpB88Ag-0QJKNbS6bwAQQ1VTOmRY_TTHc0SpJWc43qUTaHiJjR72-BqIqdjJGfvDWPc5Ro4FLmN5jKD-TMT-q-8x0xcOrIJrGb3jlqro2qxEVfH%2Fs442%2FTransistor%2520MOSFET.png&f=1&nofb=1&ipt=e0f3fc62eeb64de4b2af93652e18f603536eaf123359a8e493b81c127f50d4d8&ipo=images";

  return (
    <div className="flex-col ring-0 ring-dark rounded-lg p-2 w-60 h-full ">
      <img
        className="w-full max-h-40 object-contain mx-auto rounded-lg ring-2 ring-black mb-2  aspect-square"
        src={item.img || defaultImg}
      />
      <h1 className="text-center">{item.name}</h1>
    </div>
  );
};
