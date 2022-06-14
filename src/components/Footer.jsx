function Footer() {
  return (
    <footer className="mbc text-white pt-4 flex flex-col items-center">
      <ul className="flex ">
        <li className="mx-2">
          <a
            href="https://www.linkedin.com/in/abdalla-ayman-0252891b5/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="mx-2">
          <a href="https://twitter.com/_abdalla_ayman" target="_blank">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li className="mx-2">
          <a href="mailto:abdallaaymanshandi3@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </li>
      </ul>
      <p className="text-sm mt-2 mb-1">
        created by{" "}
        <a
          href="http://abdalla-ayman.herokuapp.com"
          target="_blank"
          className="text-blue-300"
        >
          @abdallaayman
        </a>
      </p>
    </footer>
  );
}

export default Footer;
