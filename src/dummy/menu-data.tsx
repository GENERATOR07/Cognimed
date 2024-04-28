export interface User {
    id: number;
    name: string;
    lastMessage: string;
  }
  
 export  const userList: User[] = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hey, how's it going?",
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "Can you send me the report?",
    },
    {
      id: 3,
      name: "Alex Johnson",
      lastMessage: "Let's meet tomorrow at 10am.",
    },
    {
      id: 4,
      name: "Emily Brown",
      lastMessage: "What's the plan for tonight?",
    },
    {
      id: 5,
      name: "Michael Lee",
      lastMessage: "Did you watch the game last night?",
    },
  ];
  
  
  export interface ResearchTopic {
    id: number;
    topic: string;
    dateOfSearch: string;
  }
  
 export  const researchTopicList: ResearchTopic[] = [
    {
      id: 1,
      topic: "Artificial Intelligence",
      dateOfSearch: "2024-04-28",
    },
    {
      id: 2,
      topic: "Renewable Energy",
      dateOfSearch: "2024-04-27",
    },
    {
      id: 3,
      topic: "Climate Change",
      dateOfSearch: "2024-04-26",
    },
    {
      id: 4,
      topic: "Space Exploration",
      dateOfSearch: "2024-04-25",
    },
    {
      id: 5,
      topic: "Biotechnology",
      dateOfSearch: "2024-04-24",
    },
  ];
  
  
  