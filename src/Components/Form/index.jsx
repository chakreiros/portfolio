//#region

import { useState } from "react";

import chakreirosLogo from "@/assets/images/chakreiros.png";

//#region icons
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
//#endregion
//#endregion

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="flex p-10 justify-around bg-[#dbe1c8]">
      <div className="flex flex-col items-center text-center gap-10">
        <img
          src={chakreirosLogo}
          alt="Chakreiros"
          className="h-auto w-[25rem]"
        />

        <h3 className="text-[#36802d]">Mais do que lugares... Experiências!</h3>

        <div className="flex justify-around gap-10">
          <IoLogoWhatsapp size="3em" className="text-[#36802d]" />
          <AiFillInstagram size="3em" className="text-[#36802d]" />
          <FaFacebook size="3em" className="text-[#36802d]" />
        </div>
      </div>
      <div id="mc_embed_shell">
        <div id="mc_embed_signup">
          <form
            action="https://chakreiros.us15.list-manage.com/subscribe/post?u=a24e6ffbf8c4e00d5bbc47274&amp;id=016c7ea8c6&amp;f_id=00b7b7e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_self"
            noValidate=""
          >
            <div id="mc_embed_signup_scroll">
              <h2>Quero Fazer Parte!</h2>
            </div>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Endereço de e-mail <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required=""
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">Nome </label>
              <input
                type="text"
                name="FNAME"
                className=" text"
                id="mce-FNAME"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-PHONE">Telefone </label>
              <input
                type="text"
                name="PHONE"
                className="REQ_CSS"
                id="mce-PHONE"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <input
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
              value="Enviar"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
