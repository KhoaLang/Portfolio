import { useNavigation } from "../../context/NavigationProvider";
import "./contact.scss";
import { ReactComponent as Gmail } from "../../assets/icons8-gmail.svg";

const Contact = () => {
  const { contactSection } = useNavigation();
  return (
    <section
      ref={contactSection}
      className="contact my-container d-flex flex-column justify-content-center align-items-center"
    >
      <h3>Contact Info</h3>
      <p>Go ahead and contact me if you think I'm the suitable one</p>
      <div className="contact__icon d-flex flex-column justify-content-center align-items-center">
        <Gmail />
        <a href="mailto:tkhoa882@gmail.com">Email me now</a>
      </div>
    </section>
  );
};

export default Contact;
