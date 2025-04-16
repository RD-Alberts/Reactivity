import { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { NavBar } from "./app/layout/NavBar";
import { ActivityDashboard } from "./features/activities/Dashboard/ActivityDashboard";

export const App = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  //use effect is used to make the api calls
  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data));

    return () => {};
  }, []);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find((x) => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?:string) => {
    if(id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  } 

  const handleFormClose = () => {
    setEditMode(false);
  }

  const handleSubmitForm = (activity:Activity) => {
    if(activity.id) {
      setActivities(activities.map(x => x.id === activity.id ? activity : x));
    } else {
      const newActivity = {...activity,  id:activities.length.toString()};
      setSelectedActivity(newActivity);
      setActivities([...activities, newActivity]);
    }

    setEditMode(false);
  }

  const handleDelete = (id:string) => {
    setActivities(activities.filter(x=> x.id !== id));
  }

  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      {/* Material icon command that makes it so the navbar is snugly against the top */}
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl">
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          canelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleFormClose}
          submitForm={handleSubmitForm}
          deleteActivity={handleDelete}
        />
      </Container>
    </Box>
  );
};
