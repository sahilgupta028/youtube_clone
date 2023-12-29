import React, {useEffect, useState} from 'react'
import { Box, Stack, Typography } from "@mui/material";
// import Sidebar from './Sidebar';
// import Videos from './Videos';
import {Sidebar, Videos} from '../components';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState(null);
  
    useEffect(() => {
      setVideos(null);
  
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
      }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2024 JSM Media
        </Typography>
        </Box>

        <Box p={2} flexDirection="row" flexWrap="wrap">
        <Typography variant="h4" fontWeight="bold" mb={10} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
      </Box>

      <Box paddingTop={20} sx={{ overflowY: "auto" }}>
      <Videos videos={videos} />
      </Box>

    </Stack>
  )
}

export default Feed