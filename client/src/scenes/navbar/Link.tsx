import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean
};

const Link = ({ isTopOfPage, page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const isHome = page === "Home"
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ?  !isTopOfPage ? "text-white":"text-primary-100" : ""}
            transition duration-500 ${!isTopOfPage && "hover:text-white"}`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
