# CC_WEB_SI4-SI5_Exercise_07
In this task we will create a tool that restaurants could use to track orders and tables. Usually these systems are used by either a waitress/waiter or some other employee of the given restaurant.

This time you are already provided with a starter project, this is what you will need to contnue.

1. Let's get familiar with what we have, let's check the starter repository and explain what you are seeing. Also make sure to change the .env.sample to.env in the backend folder and place your connection string to this document.

2. The database will store two entities: tables and menus, let's create a data model for these two entities:
    Menu:
        -Id = ObjectId
        -Name = String
        -Price = Number
    
    Table:
        -Id = ObjectId
        -Orders = Array of Objects (Menus) or as an [OPTIONAL] task you can store an ObjectId referrence as well for each order
        -TableNumber = Number,
        -Comment = String

3. Let's create a script in the backend to be able to reset our database with these default values:
    Menus:
        [
            {
                "Name": "Premium steak menu",
                "Price": 15000
            },
            {
                "Name": "Normal steak menu",
                "Price": 10000
            },
            {
                "Name": "Dog food mess",
                "Price": 5000
            },
        ]

    Tables: [
        {
            Orders: [],
            TableNumber: 1,
            Comment: "This is a fine table"
        },
                {
            Orders: [],
            TableNumber: 2,
            Comment: "I think I got this table from my grandmom's house"
        },
                {
            Orders: [],
            TableNumber: 3,
            Comment: "Last week some kid vomited in this table, give it to rude quests"
        }
    ]

4. Let's start with the basics, create a new route in the frontend to be able visit a page which displays information about all of our tables