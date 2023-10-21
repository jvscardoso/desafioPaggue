import { Box, IconButton } from '@mui/material'
import { Link } from "react-router-dom";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Topbar = () => {
  return (
    <Box sx={{display:"flex", width: "100%",justifyContent:"flex-end", p:"2"}}>
      {/* botoes */}
      <Box display="flex">

        <Link to="/">
          <IconButton>
            <HomeOutlinedIcon />
          </IconButton>
        </Link>

        <Link to="/profile">
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
        </Link>

      </Box>
    </Box>
  )
}

export default Topbar