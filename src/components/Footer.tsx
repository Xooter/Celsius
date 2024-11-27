import Location01Icon from "./HugeIcons/location-01-stroke-rounded";
import Mail01Icon from "./HugeIcons/mail-01-stroke-rounded";
import TelephoneIcon from "./HugeIcons/telephone-stroke-rounded";
import WhatsappIcon from "./HugeIcons/whatsapp-stroke-rounded";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-5 px-8">
      <div className="flex-col space-y-1">
        <h1>Contact</h1>
        <div className="flex gap-1">
          <TelephoneIcon />
          <h2>351-4229209 / 351-4264748</h2>
        </div>
        <div className="flex gap-1">
          <WhatsappIcon />
          <h2>351-3780769</h2>
        </div>
        <div className="flex gap-1">
          <Mail01Icon />
          <h2>ventas@celsiusargentina.com.ar</h2>
        </div>
      </div>

      <div className="flex-row space-y-1">
        <h1 className="ml-auto w-fit">Celsius Argentina © 2024</h1>
        <div className="h-0.5 bg-dark rounded-xl" />
        <div className="flex gap-1">
          <Location01Icon />
          <h2>La Rioja 128 - Cordoba Capital</h2>
        </div>
      </div>
    </footer>
  );
};
