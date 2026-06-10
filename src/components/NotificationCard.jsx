import {
  Card,
  CardContent,
  Typography,
  Chip
} from "@mui/material";

function NotificationCard({
  notification,
  viewed,
  onClick
}) {
  return (
    <Card
      sx={{
        mb: 2,
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <CardContent>
        <Typography
          variant="h6"
        >
          {notification.Type}
        </Typography>

        <Typography>
          {notification.Message}
        </Typography>

        <Typography
          variant="body2"
        >
          {
            notification.Timestamp
          }
        </Typography>

        {!viewed && (
          <Chip
            label="NEW"
            color="error"
            size="small"
            sx={{ mt: 1 }}
          />
        )}
      </CardContent>
    </Card>
  );
}

export default NotificationCard;