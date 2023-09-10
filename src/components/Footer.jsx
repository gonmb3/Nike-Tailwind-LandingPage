import footerLogo from "../assets/footer-logo.svg";
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import instagram from "../assets/instagram.svg"


//social icons
export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

//footer links
export const footerLinks = [
  {
      title: "Productos",
      links: [
          { name: "Air Force 1", link: "/" },
          { name: "Air Max 1", link: "/" },
          { name: "Air Jordan 1", link: "/" },
          { name: "Air Force 2", link: "/" },
          { name: "Nike Waffle Racer", link: "/" },
          { name: "Nike Cortez", link: "/" },
      ],
  },
  {
      title: "Ayuda",
      links: [
          { name: "Sobre Nosotros", link: "/" },
          { name: "FAQs", link: "/" },
          { name: "Como Funciona", link: "/" },
          { name: "Politica de Privacidad", link: "/" },
          { name: "Politica de Pago", link: "/" },
      ],
  },
  {
      title: "Ponte en Contacto",
      links: [
          { name: "cliente@nike.com", link: "mailto:cliente@nike.com" },
          { name: "+099 888 777", link: "tel:+2 313 80 48" },
      ],
  },
];


const Footer = () => {
  return (
    <footer className='max-container'>
        <div className="flex justifu-bewteen items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <img src={footerLogo} alt="nike-logo" width={150}  height={46}/>
            </a>
            <p className="mt-5 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Lorem, ipsum dolor sit amet consectetur hil possimus aliquam a fuga ducimus reprehenderit</p>

          <div className="flex items-center gap-5 mt-8">
              {
                  socialMedia.map((icon, index) => (
                    <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full" key={index}>
                      <img src={icon.src} alt={icon.alt} width={24} height={24} />
                    </div>
                  ))
              }
          </div>
          </div>

          <div className="flex flex-1 justify-between lg:gpa-10 gap-20 flex-wrap">
                {
                  footerLinks.map((section, index) => (
                    <div className="" key={index}>
                        <h4 className="text-white font-montserrat text-2xl  leading-normal font-medium mb-6">{section.title}</h4>
                        <ul>
                          {
                            section.links.map((link) => (
                              <li key={link.name} className="mt-3 text-white cursor-pointer font-montserrat text-base leading-normal hover:text-slate-400">{link.name} </li>
                            ))
                          }
                        </ul>
                    </div>
                  ))
                }
          </div>
        </div>
        <div className="flex justify-between text-white mt-24 max-sm:flex-col max:sm:items-center">
                    <div className="flex flex-1 justify-start gap-2 items-center font-montserrat cursor-pointer text-white">
                   <span className="text-2xl"> ©</span>
                   <p>Copyright. Todos los derechos reservados.</p>
                    </div>

                    <p className="font-montserrat cursor-pointer">Terminos & Condiciones</p>
        </div>
    </footer>
  )
}

export default Footer