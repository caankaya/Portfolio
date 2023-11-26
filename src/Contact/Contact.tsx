import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import DOMPurify from "dompurify";

export default function Contact() {
  const [state, handleSubmit] = useForm("mjvqddvw");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sanitizedEmail = DOMPurify.sanitize(e.currentTarget.email.value);
    const sanitizedMessage = DOMPurify.sanitize(e.currentTarget.message.value);

    await handleSubmit({
      email: sanitizedEmail,
      message: sanitizedMessage,
    });
  };

  if (state.succeeded) {
    return <p className="text-center text-sm">Merci pour votre message. Je vous retournerai au plus vite possible.</p>;
  } else if (state.errors) {
    <p className="text-center text-sm">Il y a eu une erreur lors de l'envoie. Veuillez réessayer ultérieurement</p>;
  }

  return (
    <div className="w-full flex flex-col flex-wrap items-center gap-2 mb-10" id="contact">
      <h2 className="mb-8 sm:mb-10 text-4xl text-center font-extrabold">Contact</h2>
      <div className="flex flex-col items-center gap-4 mb-10">
        <p className="text-center text-sm">N'hésitez pas à me contacter par email ou via mes réseaux sociaux.</p>
        <div className="flex flex-wrap gap-2">
          <div className="button-groupe flex gap-2 max-sm:flex max-sm:flex-col max-sm:items-stretch max-sm:gap-y-2">
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
      <div className="w-[60%] max-md:w-[70%]">
        <form onSubmit={handleFormSubmit} className="max-sm:flex max-sm:flex-col">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Votre e-mail
              <input
                type="email"
                id="email"
                name="email"
                className=" text-sm rounded-lg block w-[50%] p-2.5 bg-white text-black max-sm:w-full"
                placeholder="nom@compagnie.com"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Votre message
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block p-2.5 w-full text-sm rounded-lg border bg-white text-black"
                placeholder="Écrivez votre message..."
                required
              ></textarea>
            </label>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
            <button
              type="submit"
              className="btn btn-secondary text-white btn-sm font-semibold rounded-lg text-sm mb-2 block max-sm:w-[65%]"
              disabled={state.submitting}
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
