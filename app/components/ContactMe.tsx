import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

const ContactMe = () => {
  return (
    <section
      id="contact-me"
      className="mt-20 mb-10  w-full flex flex-col items-center  px-4 md:px-16  xl:px-44  "
    >
      <div>
        <p className="text-3xl text-white  mb-10">Contact Me</p>
      </div>
      <div className="  bg-gradient-to-r  from-[#00023a] via-primary  to-[#00023a]  border border-third  text-white w-full h-max justify-center flex items-center flex-col space-y-8 md:space-y-4 font-light py-8 rounded-2xl  ">
        <div className=" flex  flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-8 ">
          <div className=" flex space-x-2">
            <IconPhone />
            <div>+251916115888</div>
          </div>

          <div className="flex space-x-2">
            <IconMail />
            <div>AbubekerCorax@gmail.com</div>
          </div>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/corax58"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub />
          </a>
          <a
            href="https://t.me/Ccoraxx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandTelegram />
          </a>
          <a
            href="https://www.linkedin.com/in/abubeker-abduljelil-85795b315/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin />
          </a>
          <a
            href="https://www.instagram.com/corax5888/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
