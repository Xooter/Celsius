import Search01Icon from "./HugeIcons/search-01-stroke-rounded";

interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const SearchInput: React.FC<SearchInputProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={`flex relative ${className} w-fit`}>
      <Search01Icon className="absolute ml-2 top-1/2 -translate-y-1/2" />
      <input
        className="bg-light-100 rounded-lg py-1 px-2 pl-10 outline-none ring-1 ring-dark caret-dark"
        {...props}
      />
    </div>
  );
};
