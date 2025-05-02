import { Box, Paper, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { ProfilePhotos } from "./ProfilePhotos";

export const ProfileContent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabContent = [
    { lablel: "About", content: <div>About</div> },
    { lablel: "Photos", content: <ProfilePhotos /> },
    { lablel: "Events", content: <div>Events</div> },
    { lablel: "Followers", content: <div>Followers</div> },
    { lablel: "Following", content: <div>Following</div> },
  ];

  return (
    <Box
      component={Paper}
      mt={2}
      p={3}
      elevation={3}
      height={500}
      sx={{ display: "flex", alignItems: "flex-start", borderRadius: 3 }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, height: 450, minWidth: 200 }}
      >
        {tabContent.map((tab, index) => (
          <Tab key={index} label={tab.lablel} sx={{ mr: 3 }} />
        ))}
      </Tabs>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {tabContent[value].content}
      </Box>
    </Box>
  );
};
