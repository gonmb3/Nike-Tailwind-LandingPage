import {SiNike} from "react-icons/si"
import {AiOutlineMenu} from "react-icons/ai"


const Nav = () => {

   const navLinks = [
    { href: "#inicio", text: "Inicio" },
    { href: "#nosotros", text: "Nosotros" },
    { href: "#productos", text: "Productos" },
    { href: "#contacto", text: "Contacto" },
];

  return (
    <header className="padding-x px-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* logo */}
        <a href="/" className="flex items-center gap-x-2 text-pink-500/50 font-bold">
        <SiNike size={49} /> <span className="text-[22px]">Nike</span>
        </a>
  {/* nav links */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {
          navLinks.map((link, index) => (

            <li key={index}>
                <a href={link.href} className="hover:text-pink-500/50 duration-300 font-semibold">{link.text} </a>
            </li>
          ))
        }
        </ul>
            {/* burger */}
        <div className="hidden max-lg:block">
          <AiOutlineMenu size={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav