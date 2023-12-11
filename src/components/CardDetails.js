import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})
(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

export default function CardDetails({user,deleteButton,editButton}){
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return(        
        <div className="card-containers" >
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {user.name.substring(0, 1)}
                    </Avatar>
                }
                title=<b>{user.name}</b>
                subheader={user.email}
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {user.address.street}
                    {user.address.suite}
                    {user.address.city}
                    {user.address.zipcode}
                    {user.address.geo.lat}  {user.address.geo.lng}
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                {editButton}
                {deleteButton}
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                    Phone : {user.phone}
                    </Typography>
                    <Typography paragraph>
                    Website : {user.website}
                    </Typography>
                    <Typography paragraph>
                    Company Details : {user.company.name} {user.company.catchPhrase}              
                    </Typography>
                    <Typography>
                    {user.company.bs}
                    </Typography>
                </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}


