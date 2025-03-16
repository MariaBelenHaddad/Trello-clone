const mockData = {
    lists: {
        "01list":{
            id: "01list",
            title: "To do", 
            cards: [{
                id: "101card",
                title: "Go to the bakery"
            }, {
                id: "102card",
                title: "Send meeting invitations"
            }, {
                id: "103card",
                title: "Check emails"
            },]
        },
        "02list":{
            id: "02list",
            title: "In progress",
            cards: [{
                id: "201card",
                title: "Finish work presentation"
            }]
        }
    }, 
    listIds: ["01list", "02list"]
}

export default mockData;