import InputAndLabel from "../components/InputAndLabel";
import womanShoppingSrc from "../assets/woman-shopping.svg";
import manWithCartSrc from "../assets/man-with-cart.svg";
import mailboxSrc from "../assets/mailbox.svg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className=" px-4 py-32 text-center ">
      <section className="flex flex-col items-center  mb-32">
        <h1
          className="mc text-2xl md:text-3xl font-bold mb-6"
          data-aos="fade-up"
        >
          Hi, we are SELLERS
        </h1>
        <p className="sc text-lg md:w-2/4" data-aos="fade-up">
          SELLERS began with a simple vision where innovative technology can be
          combined with inspirational design to help our customers buy our
          products online easily and happly.
        </p>
        <img
          src={womanShoppingSrc}
          alt=""
          className="my-8 mx-8 w-3/4 md:w-2/4 "
          data-aos="fade-up"
        />
      </section>
      <section className="flex flex-col items-center my-16">
        <h1
          className="mc text-2xl md:text-3xl font-bold mb-4 "
          data-aos="fade-up"
        >
          SELLERS cart
        </h1>
        <p className="sc text-lg md:w-2/4" data-aos="fade-up">
          using the cart to buy manythings
        </p>

        <img
          src={manWithCartSrc}
          alt=""
          className="my-8 w-3/4 md:w-2/4"
          data-aos="zoom-in-right"
        />
      </section>
      <section className="sc mt-32">
        <h1
          className="mc text-2xl md:text-3xl font-bold mb-4"
          data-aos="fade-up"
        >
          Tell us what's up
        </h1>
        <div className="flex flex-col	md:flex-row">
          <img
            src={mailboxSrc}
            alt=""
            className="my-8  w-32 md:w-64 mx-auto "
            data-aos="fade-right"
          />
          <form
            className="text-left mx-auto	"
            onSubmit={(e) => e.preventDefault()}
            data-aos="fade-left"
          >
            <InputAndLabel
              state={{
                type: "text",
                id: "contact-name",
                label: "Name",
              }}
            />
            <InputAndLabel
              state={{
                type: "email",
                id: "contact-email",
                label: "Email",
              }}
            />
            <div className="flex flex-col my-3">
              <label htmlFor="message" className="mb-2">
                Message
              </label>

              <textarea
                className="h-32 px-2 py-1 border "
                id="message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mx-auto mbc my-2 block  px-10 py-2 "
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
