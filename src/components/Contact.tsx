import { MessageSquare, Mail, Linkedin, Github } from "lucide-react";
import { PixelButton } from "./PixelButton";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card/20">
      <a href="/Harsh25.pdf" className="p-2 bg-orange" download={true}>Download My Resume</a>
    </section>
  );
};
