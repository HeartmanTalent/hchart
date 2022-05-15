import React, { useEffect, useState, useContext } from "react";
import { ChatContext } from "../contexts/chatContext";
import { ContactContext } from "../contexts/contactContext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import ContactTable from "./ContactTable";
// import { fetchData } from "../util/http";
import PropTypes from 'prop-types';
import ChatTable from "./ChatTable";

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other} >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function App() {
    const chatCtx = useContext(ChatContext);
    const contactCtx = useContext(ContactContext);
    const [value, setValue] = React.useState(0);
    const [errContact, setErrContact] = React.useState('')
    const [errClient, setErrClient] = React.useState('')

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //   useEffect(() => {
    //     async function getClients() {
    //       try {
    //         const clients = await fetchData("/clients/");
    //         chatCtx.setClients(clients);
    //       } catch (error) {
    //         setErrClient(error.message)
    //       }
    //     }
    //     async function getContacts() {
    //       try {
    //         const contacts = await fetchData("/contacts/");
    //         contactCtx.setContacts(contacts);
    //       } catch (error) {
    //         setErrContact("Error While Loading");
    //       }
    //     }

    //     getClients();
    //     getContacts();
    //   }, []);
    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" >
                    <Box sx={{ width: "100%" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                            >
                                <Tab label="Chats" {...a11yProps(0)} />
                                <Tab label="Contacts" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            {errClient ?
                                (errClient) : (
                                    <ChatTable chats={chatCtx.chats} />
                                )
                            }
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            {errContact ?
                                (errContact) : (
                                    <ContactTable contacts={contactCtx.contacts} />
                                )
                            }
                        </TabPanel>
                    </Box>
                </Grid>
            </Grid>
        </Grid>);
}
