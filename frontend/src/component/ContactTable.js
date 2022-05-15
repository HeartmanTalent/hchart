import * as React from 'react';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemAvatar,
    // Checkbox,
    Avatar,
    Typography
}
    from '@mui/material';

export default function ContactTable(props) {

    const handleToggle = (value) => () => {
    };

    const { contacts } = props;

    return (
        <>
            {(contacts.length >= 1) ? (
                <List dense sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
                    {contacts.map((contact) => {
                        const labelId = `checkbox-list-secondary-label-${contact.id}`;
                        return (
                            <ListItem
                                key={contact.id}
                                // secondaryAction={
                                //     <Checkbox
                                //         edge="start"
                                //         onChange={handleToggle("value")}
                                //         inputProps={{ 'aria-labelledby': labelId }} />
                                // }
                                disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={contact.fname + contact.lname}
                                            src={contact.avatar} />
                                    </ListItemAvatar>
                                    <ListItemText id={labelId} primary={contact.fname + " " + contact.lname + " " + contact.phone} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            ) : (
                <Typography variant="h5" component="h5" sx={{ color: "red" }}>
                    No Chat(s) Found
                </Typography>
            )}
        </>
    );
}
