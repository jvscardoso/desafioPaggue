import { Box, IconButton} from '@mui/material'
import { Link } from "react-router-dom";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Topbar = () => {
  return (
    <Box display = "flex" justifyContent = "right"  p = {2}>
      {/* botoes */}
      <Box display = "flex">
        
        <Link to="/">
          <IconButton>
            <HomeOutlinedIcon />
          </IconButton>
        </Link>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar