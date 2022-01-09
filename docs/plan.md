# User stories

1. As a user, I should be able to create goals and add a point value to it.
2. As a user, I should be able to complete a goal and have the point value of the goal be contributed to my daily point total.
3. As a user, I should be able to view a historical data in the form of graphs on the goals that I am completing.
4. As a user, I should be able to buy graphics with points from my total to decorate my splash screen.
5. As a user, I am only allowed to add goals daily within the allowed time interval.

# Backend Architecture

- We will utilize cloud functions for interacting with a firestore DB.
- We will utilize cloud functions for various event driven actions based on firestore transactions.

# Front end Architecture

- There will a local store that keeps track of all user transactions and CRUD of goals. This local store will be synced with DB when ever there is network availability.
- The store will consist of a react context API and React Reducers.
- We will be using live updates from firestore documents to keep the web app real time.
