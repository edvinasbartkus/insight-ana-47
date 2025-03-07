
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 " style={{
      borderBottomLeftRadius: '30px',
      borderBottomRightRadius: '30px',
      backgroundImage: 'url(/images/footer_bg.png)',
      backgroundRepeat: 'repeat-x',
      backgroundSize: 'contain'
    }}>
      <div className="container mx-auto pt-12">
        <div className="relative flex flex-row">
          <div className="max-w-2xl mx-auto">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 editorial-font text-ana-yellow">Finally, something really useful for the ad agencies.</h2>

              <div className="flex">
                <Link to="/free-trial">
                  <Button className="bg-ana-yellow hover:bg-yellow-400 text-ana-dark font-bold rounded-full px-8 py-6 transition-all">
                    Start your free trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <img src="/images/tennis.png" alt="Ana Tennis" className="hidden md:block" style={{maxHeight: '300px'}} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
