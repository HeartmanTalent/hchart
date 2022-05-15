import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

export default function ContactTable(props) {

    const handleToggle = (value) => () => {
    };

    const { contacts } = props;
    
    return (
        <List dense sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
            {contacts.map((contact) => {
                const labelId = `checkbox-list-secondary-label-${contact.id}`;
                return (
                    <ListItem
                        key={contact.id}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                onChange={handleToggle("value")}
                                inputProps={{ 'aria-labelledby': labelId }} />
                        }
                        disablePadding>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt={contact.fname + contact.lname}
                                    src={contact.avatar} />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={contact.fname + " " + contact.lname} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}
