import { Box, Slide, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { usePersonalStatisticsComponent } from "./usePersonalStatisticsComponent";
import { AutoStories, EmojiEvents, Laptop, SportsEsports } from "@mui/icons-material";
import {
  CampaignStatisticsComponent,
  GeneralStatisticsComponent,
  PersonalOnlineStatisticsComponent,
  RecordsStatisticsComponent,
} from "./components";

const PersonalStatisticsComponent = () => {
  const { activeTab, previousTab, handleTabChange } = usePersonalStatisticsComponent();
  return (
    <TabContext value={activeTab.toString()} {...props}>
      <TabList onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
        <Tab label="General Statistics" value="0" icon={<Laptop />} iconPosition="start" />
        <Tab label="Campaign Statistics" value="1" icon={<AutoStories />} iconPosition="start" />
        <Tab label="Online Statistics" value="2" icon={<SportsEsports />} iconPosition="start" />
        <Tab label="Records Statistics" value="3" icon={<EmojiEvents />} iconPosition="start" />
      </TabList>
      <Box overflow="hidden">
        <Slide
          in={activeTab === 0}
          direction={previousTab.current <= activeTab ? "right" : "left"}
          timeout={500}
        >
          <TabPanel value="0">
            <GeneralStatisticsComponent />
          </TabPanel>
        </Slide>
        <Slide
          in={activeTab === 1}
          direction={previousTab.current <= activeTab ? "right" : "left"}
          timeout={500}
        >
          <TabPanel value="1">
            <CampaignStatisticsComponent />
          </TabPanel>
        </Slide>
        <Slide
          in={activeTab === 2}
          direction={previousTab.current <= activeTab ? "right" : "left"}
          timeout={500}
        >
          <TabPanel value="2">
            <PersonalOnlineStatisticsComponent />
          </TabPanel>
        </Slide>
        <Slide
          in={activeTab === 3}
          direction={previousTab.current <= activeTab ? "right" : "left"}
          timeout={500}
        >
          <TabPanel value="3">
            <RecordsStatisticsComponent />
          </TabPanel>
        </Slide>
      </Box>
    </TabContext>
  );
};

export default PersonalStatisticsComponent;
