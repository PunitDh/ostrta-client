import { Box, Grid, Typography } from "@mui/material";
import Convert from "./Convert";
import { useSelector } from "react-redux";
import PageContainer from "../../../components/container/PageContainer";

export default function VideoConverter() {
  const { videoConverter } = useSelector((state) => state.site.siteSettings);
  return (
    <PageContainer title="Video Subtitle Generator">
      {videoConverter ? (
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Convert />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Typography variant="h3">
          This feature is currently unavailable
        </Typography>
      )}
    </PageContainer>
  );
}
