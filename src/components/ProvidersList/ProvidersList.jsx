import {Box, List, ListItemButton, ListItemText} from "@mui/material";
import {useEffect, useState} from "react";

export default function ProvidersList() {
    const [providers, setProviders] = useState([]);
    const getItemsAsync = async () => {
        const call = () => fetch('https://e9a2-109-229-29-226.eu.ngrok.io/providers', {
            method: "get",
            // headers: new Headers({
            //     'Content-Type': 'application/json',
            // }),
        });

        let res = await call();
        return res;
    }

    useEffect( () => {
        async function fetchMyAPI() {
            let response = await getItemsAsync()
            response = await response.json()
            setProviders(response)
        }
        fetchMyAPI()
    }, [])

    const listItems = providers.map((provider) =>
        <ListItemButton key={provider.id}>
            <ListItemText primary={provider.name}/>
        </ListItemButton>
    );
    return (
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <List component="nav" aria-label="secondary mailbox folder">
                {listItems}
            </List>
        </Box>
    );
}