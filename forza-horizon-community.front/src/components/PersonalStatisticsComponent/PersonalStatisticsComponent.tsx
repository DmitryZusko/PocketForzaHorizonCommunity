import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { usePersonalStatisticsComponent } from "./usePersonalStatisticsComponent";
import { AutoStories, EmojiEvents, Laptop, SportsEsports } from "@mui/icons-material";
import { CampaignStatisticsComponent, GeneralStatisticsComponent } from "./components";

const PersonalStatisticsComponent = () => {
  const { activeTab, handleTabChange } = usePersonalStatisticsComponent();
  return (
    <TabContext value={activeTab}>
      <TabList onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
        <Tab label="General Statistics" value="0" icon={<Laptop />} iconPosition="start" />
        <Tab label="Campaign Statistics" value="1" icon={<AutoStories />} iconPosition="start" />
        <Tab label="Online Statistics" value="2" icon={<SportsEsports />} iconPosition="start" />
        <Tab label="Records Statistics" value="3" icon={<EmojiEvents />} iconPosition="start" />
      </TabList>
      <TabPanel value="0">
        <GeneralStatisticsComponent />
      </TabPanel>
      <TabPanel value="1">
        <CampaignStatisticsComponent />
      </TabPanel>
      <TabPanel value="2"></TabPanel>
      <TabPanel value="3"></TabPanel>
    </TabContext>
  );
};

export default PersonalStatisticsComponent;
