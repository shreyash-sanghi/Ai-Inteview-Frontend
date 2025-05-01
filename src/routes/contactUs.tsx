import { Container } from "@/components/container";
import { Phone, MessageCircle, Mail, MapPin, Send,Camera } from "lucide-react";

function ContactUs() {
  return (
    <Container>
      <section id="CallMe" className="relative py-14 bg-black">
        <div className="z-10 absolute opacity-90 rounded-full blur-[200px] w-[40%] h-[40%] bg-gray-400 top-[200px] ml-[20%]"></div>
        
        <div
          id="GET IN TOUCH"
          className="flex select-auto mx-auto items-center justify-center gap-3 sm:pb-1 w-[210px] sm:w-[410px] border-b-4 sm:border-b-8 border-[#38B7FF] border-primary font-black"
        >
          <Phone size={50} color="#38B7FF" />
          <h2 className="text-white text-2xl sm:text-[48px]">GET IN TOUCH</h2>
        </div>

        <div className="z-20 relative px-5 mt-16 md:mt-20 flex flex-wrap gap-7 justify-center lg:max-w-[800px] mx-auto">
     
          <div className="w-[100px] hover:scale-[1.1] h-[125px] sm:w-[200px] sm:h-[225px] gap-1 md:gap-4 flex flex-col px-2 py-3 justify-center items-center bg-white bg-opacity-30 rounded-[25px]">
            <Phone size={64} className="sm:w-[100px] sm:h-[100px]" color="white" />
            <p className="text-white font-semibold text-center">Phone</p>
          </div>

          <div className="w-[100px] hover:scale-[1.1] h-[125px] sm:w-[200px] sm:h-[225px] gap-1 md:gap-4 flex flex-col px-2 py-3 justify-center items-center bg-white bg-opacity-30 rounded-[25px]">
            <MessageCircle size={64} className="sm:w-[100px] sm:h-[100px]" color="white" />
            <p className="text-white font-semibold text-center">Chat</p>
          </div>

          <div className="w-[100px] hover:scale-[1.1] h-[125px] sm:w-[200px] sm:h-[225px] gap-1 md:gap-4 flex flex-col px-2 py-3 justify-center items-center bg-white bg-opacity-30 rounded-[25px]">
            <Mail size={64} className="sm:w-[100px] sm:h-[100px]" color="white" />
            <p className="text-white font-semibold text-center">Email</p>
          </div>

          <div className="w-[100px] hover:scale-[1.1] h-[125px] sm:w-[200px] sm:h-[225px] gap-1 md:gap-4 flex flex-col px-2 py-3 justify-center items-center bg-white bg-opacity-30 rounded-[25px]">
            <MapPin size={64} className="sm:w-[100px] sm:h-[100px]" color="white" />
            <p className="text-white font-semibold text-center">Location</p>
          </div>
          <div className="w-[100px] hover:scale-[1.1] h-[125px] sm:w-[200px] sm:h-[225px] gap-1 md:gap-4 flex flex-col px-2 py-3 justify-center items-center bg-white bg-opacity-30 rounded-[25px]">
            <Camera size={64} className="sm:w-[100px] sm:h-[100px]" color="white" />
            <p className="text-white font-semibold text-center">WhatsApp</p>
          </div>
          <div className="w-[100px] hover:scale-[1.1] h-[125px] sm:w-[200px] sm:h-[225px] gap-1 md:gap-4 flex flex-col px-2 py-3 justify-center items-center bg-white bg-opacity-30 rounded-[25px]">
            <Send size={64} className="sm:w-[100px] sm:h-[100px]" color="white" />
            <p className="text-white font-semibold text-center">Send Message</p>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default ContactUs;
