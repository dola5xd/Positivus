function Form() {
  return (
    <form className="py-4 w-full Laptops:w-1/2 flex flex-col gap-7 ">
      <div className="flex gap-1 flex-col [&>input]:px-3 [&>input]:py-2 [&>input]:rounded-md [&>input]:border [&>input]:border-brand_2">
        <label htmlFor="name" className="text-[1.2rem]">
          Name
        </label>
        <input required type="text" id="name" placeholder="Name" />
      </div>
      <div className="flex gap-1 flex-col [&>input]:px-3 [&>input]:py-2 [&>input]:rounded-md [&>input]:border [&>input]:border-brand_2">
        <label htmlFor="Email" className="text-[1.2rem]">
          Email
        </label>
        <input required type="email" id="Email" placeholder="Email" />
      </div>
      <div className="flex gap-1 flex-col [&>textarea]:px-3 [&>textarea]:py-2 [&>textarea]:rounded-md [&>textarea]:border [&>textarea]:border-brand_2">
        <label htmlFor="Message" className="text-[1.2rem]">
          Message
        </label>
        <textarea
          required
          name="message"
          id="Message"
          className="resize-none h-[200px]"
          placeholder="Message"
        ></textarea>
      </div>
      <button className="btn-primary">Send Message</button>
    </form>
  );
}

export default Form;
