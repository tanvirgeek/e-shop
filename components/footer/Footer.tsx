import Link from "next/link";
import Container from "../Container";
import Footerlist from "./Footerlist";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className="bg-slate-700 text-slate-200
  text-sm mt-16"
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <Footerlist>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">TVs</Link>
            <Link href="#">Accesories</Link>
          </Footerlist>
          <Footerlist>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Service</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns $ Exchange</Link>
            <Link href="#">FAQ</Link>
          </Footerlist>
          <Footerlist>
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p>We sell all type of gadgets</p>
            <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved</p>
          </Footerlist>
          <Footerlist>
            <h3 className="text-base font-bold mb-2">Follow us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <AiFillFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </Footerlist>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
