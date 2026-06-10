import {
  Container,
  Typography,
  Select,
  MenuItem,
  Box
} from "@mui/material";

import {
  useEffect,
  useState
} from "react";

import NotificationCard from "./components/NotificationCard";

import {
  getNotifications
} from "./services/api";

function App() {
  const [
    notifications,
    setNotifications
  ] = useState([]);

  const [
    filter,
    setFilter
  ] = useState("All");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const data =
      await getNotifications();

    if (
      data.notifications
    ) {
      setNotifications(
        data.notifications
      );
    }
  }

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter(
          item =>
            item.Type ===
            filter
        );

  function markViewed(
    id
  ) {
    const viewed =
      JSON.parse(
        localStorage.getItem(
          "viewed"
        ) || "[]"
      );

    if (
      !viewed.includes(id)
    ) {
      viewed.push(id);

      localStorage.setItem(
        "viewed",
        JSON.stringify(
          viewed
        )
      );
    }
  }

  return (
    <Container
      maxWidth="md"
      sx={{ mt: 4 }}
    >
      <Typography
        variant="h4"
        gutterBottom
      >
        Campus Notification
        Dashboard
      </Typography>

      <Box
        sx={{ mb: 3 }}
      >
        <Select
          value={filter}
          onChange={e =>
            setFilter(
              e.target.value
            )
          }
        >
          <MenuItem value="All">
            All
          </MenuItem>

          <MenuItem value="Event">
            Event
          </MenuItem>

          <MenuItem value="Result">
            Result
          </MenuItem>

          <MenuItem value="Placement">
            Placement
          </MenuItem>
        </Select>
      </Box>

      {filtered.map(
        notification => (
          <NotificationCard
            key={
              notification.ID
            }
            notification={
              notification
            }
            viewed={JSON.parse(
              localStorage.getItem(
                "viewed"
              ) || "[]"
            ).includes(
              notification.ID
            )}
            onClick={() =>
              markViewed(
                notification.ID
              )
            }
          />
        )
      )}
    </Container>
  );
}

export default App;