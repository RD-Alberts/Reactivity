import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
    activitiy: Activity;
    canelSelectActivity: () => void;
    openForm: (id:string) => void;
    
}

export const ActivityDetails = ({activitiy, canelSelectActivity, openForm}: Props) => {
  return (
    <Card sx={{borderRadius: 3}}>
        <CardMedia 
        component='img'
        src={`/images/categoryImages/${activitiy.category}.jpg`}
        />
        <CardContent>
            <Typography variant="h5">{activitiy.title}</Typography>
            <Typography variant="subtitle1" fontWeight="light">{activitiy.date}</Typography>
            <Typography variant="body1">{activitiy.description}</Typography>
        </CardContent>
        <CardActions>
            <Button onClick={() => openForm(activitiy.id)} color="primary">Edit</Button>
            <Button onClick={canelSelectActivity} color="inherit">Cancel</Button>
        </CardActions>
    </Card>
  )
}
