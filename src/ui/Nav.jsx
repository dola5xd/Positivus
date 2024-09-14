function Nav() {
  return (
    <ul className="hidden items-center gap-7 text-brand_2 font-medium text-xl Laptops:flex">
      <li className="duration-500 hover:opacity-50">
        <a href="#About">About us</a>
      </li>
      <li className="duration-500 hover:opacity-50">
        <a href="#Services">Services</a>
      </li>
      <li className="duration-500 hover:opacity-50">
        {" "}
        <a href="#Uses">Use Cases</a>
      </li>
      <li className="duration-500 hover:opacity-50">
        {" "}
        <a href="#Pricing">Pricing</a>
      </li>
      <li className="duration-500 hover:opacity-50">
        {" "}
        <a href="#Blog">Blog</a>
      </li>
      <li className="duration-500 hover:opacity-50">
        <button className="border-2 border-brand_2 py-3 px-5 rounded-lg">
          {" "}
          <a href="#Request" className="outline-0">
            Request a quote
          </a>
        </button>
      </li>
    </ul>
  );
}

export default Nav;
