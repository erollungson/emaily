import { Typography, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const Title = withStyles({
    root: {
      color: "#616161"
    }
  })(Typography);
  
  
 export const StyledPaper = withStyles((theme) => ({
    root: {
      padding: 30,
      
    }
  }))(Paper);