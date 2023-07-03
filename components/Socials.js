import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiLinkedinBoxLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-8 text-xl md:text-2xl xl:text-3xl">
      <Link
        href={"https://www.linkedin.com/in/rojan-rana-magar-835580231/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/roz3n.magar.0911/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookBoxLine />
      </Link>
      <Link
        href={"https://github.com/rojanmagar2001"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
