import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/services/football_pitch.jpeg";
import image2 from "@/assets/services/sportsbar.jpeg";
import image3 from "@/assets/services/squash.jpeg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Football",
    description:
      "6 Spielfelder mit FIFA-zertifiziertem premium Kunstrasen, hier kann gespielt werden wie bei den Profis. Unsere Felder sind 30 x 15 m groß.",
    image: image1,
  },
  {
    name: "Squash",
    description: "6 Squashcourts warten nur darauf bespielt zu werden.",
    image: image2,
  },
  {
    name: "Sportsbar",
    description:
      "Ein kühles Bierchen und ein kleiner Snack zur dritten Halbzeit, daß bieten wir Ihnen in unserer Sportsbar. Auf mehreren Flatscreens und drei Leinwänden sehen Sie bei uns die wichtigsten Fußballspiele, von der Bundesliga  über die Championsleague bishin zu den Länderspielen. ",
    image: image3,
  },

];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-auto whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;