import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mjvqddvw");
  if (state.succeeded) {
    return <p>Merci pour votre message</p>;
  }
  return (
    <div className="w-full flex flex-col flex-wrap items-center gap-2" id="contact">
      <h2 className="mb-8 sm:mb-10 text-4xl text-center font-extrabold">Contact</h2>
      <div className="flex flex-col items-center gap-4 mb-10">
        <p className="text-center text-sm">N'hésitez pas à me contacter par email ou via mes réseaux sociaux.</p>
        <div className="flex flex-wrap gap-2">
          <div className="button-groupe flex gap-2 max-sm:flex max-sm:flex-col max-sm:gap-y-2">
            <Link
              to="https://github.com/canoral"
              target="_blank"
              className="bg-secondary px-2 py-1 font-semibold rounded-md text-center text-sm text-white"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" style={{ marginRight: "5px" }} />
              Github
            </Link>

            <Link
              to="https://linkedin.com/in/canoral74"
              target="_blank"
              className="bg-secondary px-2 py-1 font-semibold rounded-md text-center text-sm text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ marginRight: "5px" }} />
              LinkedIn
            </Link>

            <Link
              to="https://www.instagram.com/dogancan__kaya/"
              target="_blank"
              className="bg-secondary px-2 py-1 font-semibold rounded-md text-center text-sm text-white"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" style={{ marginRight: "5px" }} />
              Instagram
            </Link>

            <Link
              to="mailto:info.canoral@gmail.com"
              className="bg-secondary px-2 py-1 font-semibold rounded-md text-center text-sm text-white"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ marginRight: "5px" }} />
              info.canoral@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Votre e-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className=" text-sm rounded-lg block w-full p-2.5 bg-white text-black"
              placeholder="nom@compagnie.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block p-2.5 w-full text-sm rounded-lg border bg-white text-black"
              placeholder="Écrivez votre message..."
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button
            type="submit"
            className="btn btn-secondary text-white btn-sm font-medium rounded-lg text-sm mb-2 block"
            disabled={state.submitting}
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

{
  /* <form onSubmit={handleSubmit}>
  <label htmlFor="email" className="text-white">
    Email Address
    <input
      id="email"
      type="email"
      name="email"
      className="input input-bordered input-secondary w-full max-w-xs"
      placeholder="Votre e-mail"
      required
    />
  </label>

  <textarea id="message" name="message" className="textarea textarea-secondary" />

  <button type="submit" className="btn btn-secondary text-white btn-sm" disabled={state.submitting}>
    Submit
  </button>
</form> */
}
