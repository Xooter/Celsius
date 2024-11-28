import Location01Icon from "./HugeIcons/location-01-stroke-rounded";
import Mail01Icon from "./HugeIcons/mail-01-stroke-rounded";
import Title from "./Title";

export const Header = () => {
  return (
    <div className="flex flex-col mb-5 sm:mb-0 sm:flex-row items-center justify-between py-5 px-8">
      <Title />

      <div className="flex-col space-y-2 mb-auto">
        <div className="flex gap-1">
          <Location01Icon />
          <h2>La Rioja 128 - Cordoba Capital</h2>
        </div>

        <div className="flex gap-1">
          <Mail01Icon />
          <h2>ventas@celsiusargentina.com.ar</h2>
        </div>
      </div>
    </div>
  );
};
