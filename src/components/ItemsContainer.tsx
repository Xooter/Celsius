import { useState } from "react";
import { items } from "../helpers/itemList";
import { Item } from "../models/Item";
import { SearchInput } from "./SearchInput";
import { ItemCard } from "./ItemCard";

export const ItemsContainer = () => {
  const [data, setData] = useState(items);

  function onSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    const query = event.target.value.toLowerCase();
    const filtered = items.filter((item: Item) =>
      item.name.toLowerCase().includes(query),
    );
    setData(filtered);
  }
  return (
    <div className="flex-col items-center justify-center w-full px-5">
      <SearchInput
        className="mx-auto mb-5"
        onChange={onSearch}
        placeholder="Buscar..."
      />
      <div className="flex flex-wrap gap-4 items-center justify-center mx-auto">
        {data.length === 0 ? (
          <h1>No data</h1>
        ) : (
          data.map((item: Item, i: number) => <ItemCard item={item} key={i} />)
        )}
      </div>
    </div>
  );
};
