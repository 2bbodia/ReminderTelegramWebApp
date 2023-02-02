import {Box, List, ListItemButton, ListItemText} from "@mui/material";

export default function ProvidersList() {
    const getItems = () => {
        return [
            {id: 1, name: 'Chernivtsioblenergo'},
            {id: 2, name: 'Prykarpatiaoblenergo'},
            {id:3, name:'Ternopil'}
        ]
    }

    const items = getItems();

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