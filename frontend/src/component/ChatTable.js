import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemAvatar,
    Checkbox,
    Avatar,
    Typography
}
    from '@mui/material';

export default function ContactTable(props) {
    const navigate = useNavigate();

    const handleToggle = (event, id) => {
        console.log(id);
    };
    const handleOnClick = useCallback((id) => navigate('/chat', { state: { id: id } }));
    const { chats } = props;

    return (
        <>
            {(chats.length >= 1) ? (
                <List dense sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
                    {chats.map((chat) => {
                        const labelId = `checkbox-list-secondary-label-${chat.id}`;
                        return (
                            <ListItem
                                key={chat.id}
                                // secondaryAction={
                                //     <Checkbox
                                //         edge="end"
                                //         onChange={handleToggle("value")}
                                //         inputProps={{ 'aria-labelledby': labelId }} />
                                // }
                                disablePadding>
                                <ListItemButton onClick={() => handleOnClick(chat.id)}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={chat.fname + chat.lname}
                                            src={chat.avatar} />
                                        <Typography variant="caption" sx={{ color: "red" }}>
                                            {chat.message}
                                        </Typography>
                                    </ListItemAvatar>
                                    <ListItemText id={labelId} primary={chat.fname + " " + chat.lname} />
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
