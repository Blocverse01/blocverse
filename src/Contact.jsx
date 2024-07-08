export default function Contact() {
  return (
    <section className="px-5 py-8 md:py-12 lg:py-16 md:px-6 lg:px-8">
      <div>
        <h3 className="headline">Contact Us 👋</h3>
        <form
        name="contact"
        method="POST" 
        className="grid grid-cols-1 gap-[28px] mt-[23px] lg:gap-[56px] lg:mt-[48px]">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <input
              placeholder="Full Name"
              type="text"
              className="contact-input"
            />
          </div>
          <div>
            <input
              placeholder="E-mail"
              type="email"
              className="contact-input"
            />
          </div>
          <div>
            <select className="contact-input capitalize bg-transparent">
              <option disabled="disabled" selected="selected">
                How did you hear about us?
              </option>
              <option>Events 🎉</option>
              <option>Social Media 📱</option>
              <option>Word of mouth 👊</option>
            </select>
          </div>
          <div>
            <select className="contact-input capitalize bg-transparent">
              <option disabled="disabled" selected="selected">
                Nature of Enquiry
              </option>
              <option>Product Discovery 🔍</option>
              <option>Product Development 🛠️</option>
              <option>Partnership 🤝</option>
              <option>Event Appearance 🎉</option>
              <option>Other 👀</option>
            </select>
          </div>
          <div className="mt-6 mb-16 lg:mb-24">
            <button type="submit">
              <h3 className="lg:text-[48px] text-brand-blue text-[24px] underline leading-[31.25px] font-bold lg:leading-[62.5px]">
                Send 🚀
              </h3>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
