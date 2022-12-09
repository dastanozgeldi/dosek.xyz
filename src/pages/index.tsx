import { Page } from "../components/Page";
import { Profile } from "../components/Home/Profile";
import { About } from "../components/Home/About";
import { Bio } from "../components/Home/Bio";
import { TechStack } from "../components/Home/TechStack";
import { Contacts } from "../components/Home/Contacts";
import { LastNews } from "../components/Home/LastNews";
import Table from "../components/Table";

const Home = () => {
  return (
    <Page title="Home">
      <p className="bg-gray-200 dark:bg-gray-700 mt-4 mb-8 rounded-xl px-8 py-4">
        Salem! I&apos;m a full-stack developer from Almaty, Kazakhstan.
      </p>
      <audio controls autoPlay className="max-w-[60ch] mx-auto">
        <source src="made-in-ohio.mp3" type="audio/mpeg" />
      </audio>
      <Profile />
      <About />
      <Bio />
      <TechStack />
      <Contacts />
      <LastNews />
      <Table />
    </Page>
  );
};

export default Home;
