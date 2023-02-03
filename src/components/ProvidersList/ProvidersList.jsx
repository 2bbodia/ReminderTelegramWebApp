import {Box, List, ListItemButton, ListItemText} from "@mui/material";
import {useEffect} from "react";

export default function ProvidersList() {
    const getItems = async () => {
        const call = () => fetch('https://e9a2-109-229-29-226.eu.ngrok.io/' + 'providers', {
            method: "get",
            // headers: new Headers({
            //     'Content-Type': 'application/json',
            // }),
        });

        let res = await call();
        return res;
    }

    let items = [];

    useEffect(async () => {
        items = await getItems();
    }, [])

    const listItems = items.map((provider) =>
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