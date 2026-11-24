https://docs.google.com/document/d/1mXl8M0MTw8agD3PbDZvJOGalqqSIu2zdyWpHRrXbj48/edit?tab=t.0

Pod Name: Capstone Plan

Our pod: No Team
Name Donald Ross
GitHub handle
App name Ross Gallery Wall

a single pod building my own apps (delete one)

Our answers

Name:
The sentence
A **\_\_** needs **\_\_** because **\_\_**. My app will \_all people who are interested in art painting video to watch and recieve inspiration how to create art paintings**\_**.
Persona
Name and situation

ross art gallery

Frustration a little styling and filtering

Goal Allow visitors and account users to view or upload info of art using name and email

When they'd open the app

It will be the home page the consist of the option to submit email and art video selection from bob ross

Scope
In this version
Left out, and why

1. Ex: A visitor sees the list of meals.
   Ex: Users can create potluck events.
2. Ex: A visitor adds a meal row.

3. Ex: A visitor can delete a row.

The table
Table name:
Column
Type
Example value

The tables (Supabase)
bob_ross_paintings
100 rows, one per episode, from FiveThirtyEight's Bob Ross "elements by episode" dataset. The page loads the first 20, sorted by id.

Column Type Example
id int8, primary key 1
EPISODE text S01E01
TITLE text A WALK IN THE WOODS

inquiries
Column Type Example
id int8, primary key 1
created_at timestamptz 2026-11-23 00:00
email text fan@example.com
painting_id int8, links to bob_ross_paintings.id

System explanation

The visitor

The app

The visitor sees: the home, about and contact page

While loading: runs loadPaintings once, as soon as the page opens

If nothing matches: visitor has to select an option from drop down

If it fails try again

Wireframe
Insert > Image: a photo of your drawing, or an Excalidraw export.

Pod review
For a pod where each of you builds your own app. Each of you reads one pod-mate's answers and fills in their row.
Plan by Donald Ross
Read by Donald Ross
One thing that is clear: art page
One question
Plan check
