import Link from "next/link";
import Container from "./Container";
import { Redressed } from "next/font/google";

const redDressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link
              href="/"
              className={`${redDressed.className} font-bold text-2xl`}
            >
              E-Shop
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>Cart count</div>
              <div>User Menu</div>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
