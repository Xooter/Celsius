const Title = () => {
  const title = ["C", "e", "l", "s", "i", "u", "s"];

  return (
    <div className="flex">
      <div className="flex-col uppercase">
        <div className="flex justify-between">
          {title.map((letter: string) => {
            return <h1 className="text-4xl">{letter}</h1>;
          })}
        </div>
        <h2 className="text-2xl">
          Componentes <br />
          Electronicos
        </h2>
      </div>
    </div>
  );
};
export default Title;
