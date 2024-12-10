import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-between p-3 mt-5 hover:bg-black hover:text-yellow-2000">
      {/* Left Section */}
      <div className="w-full md:w-[800px] flex ">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <img
            src="Images/NavLogo.png"
            alt=""
            className="w-[133px] h-[65px] hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-auto mb-4 md:mb-0 md:ml-8">
          <div className="flex">
            <h6 className="font-bold ml-8">INFOS PRATIQUES</h6>
          </div>
          <ul className="flex flex-col items-start mt-2 space-y-1">
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">À propos</li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Livraisons &amp; Reprises</li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Mode d&apos;emploi</li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">F.A.Q</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="w-full md:w-auto mb-4 md:mb-0 md:ml-8">
          <div className="flex">
            <h6 className="font-bold ml-8">LÉGAL</h6>
          </div>
          <ul className="flex flex-col items-start mt-2 space-y-1">
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Mentions légales</li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">CGU</li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">CGV</li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Politique de confidentialité</li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="w-full md:w-auto md:ml-8">
          <div className="flex">
            <h6 className="font-bold ml-8">MON COMPTE</h6>
          </div>
          <ul className="flex flex-col items-start mt-2 space-y-1">
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Accéder à mon compte</li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Ma liste d&apos;envie</li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Créer un compte</li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Mot de passe oublié</li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="w-full md:w-[146px] flex flex-col items-center md:items-end">
        <div>
          <h6 className="font-bold">NOUS SUIVRE</h6>
        </div>
        <div className="flex justify-between mt-2 space-x-3">
          <FaXTwitter className="h-8 w-8 hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
          <FaLinkedin className="h-8 w-8 hover:text-blue-700 transition-colors duration-300 cursor-pointer" />
          <FaSquareInstagram className="h-8 w-8 hover:text-pink-500 transition-colors duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
