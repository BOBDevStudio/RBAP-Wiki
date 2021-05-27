---
title: Walkway Transportation
redirect_from:
  - /Wiki/Map-Transportation
  - /Wiki/map-Transportation
  - /Wiki/Map-transportation
  - /Wiki/map-transportation
  - /Wiki/Map-Transportation/
  - /Wiki/map-Transportation/
  - /Wiki/Map-transportation/
  - /Wiki/map-transportation/
#  - /Wiki/Walkway-Transportation
  - /Wiki/walkway-Transportation
  - /Wiki/Walkway-transportation
  - /Wiki/walkway-transportation
  - /Wiki/Walkway-Transportation/
  - /Wiki/walkway-Transportation/
  - /Wiki/Walkway-transportation/
  - /Wiki/walkway-transportation/
  - /Map-Transportation
  - /map-Transportation
  - /Map-transportation
  - /map-transportation
  - /Map-Transportation/
  - /map-Transportation/
  - /Map-transportation/
  - /map-transportation/
  - /Walkway-Transportation
  - /walkway-Transportation
  - /Walkway-transportation
  - /walkway-transportation
  - /Walkway-Transportation/
  - /walkway-Transportation/
  - /Walkway-transportation/
  - /walkway-transportation/
---

Random Buildings And Parts currently has 2 ways of transportation across the game's map. They are the [Player Conveyors](/RBAP-Wiki/Wiki/Map-Transportation#player-conveyors) and [The Traveler](/RBAP-Wiki/Wiki/Map-Transportation#the-traveler) and only one of them can be present in a server.

## Player Conveyors

The player conveyors are by far much older than The Traveler. They have been in the game in many different forms since at least around late 2018. Their current form was introduced in [`V3`](/RBAP-Wiki/Wiki/Value-Types#rbap-version) of the game and is of a futuristic looking conveyor belt featuring moving textures and is inspired by RB Battles' Season 2 hub.

![](/RBAP-Wiki/Assets/Images/Walkway-Transportation/Player%20Conveyors.png)

## The Traveler

The Traveler is a special replacement of the Player Conveyors. It takes up the same amount of room as the Player Conveyors (if you don't include the guard rails). When it stops at one of its stopping points the gate (aka the guard rails nearby) are/is lowered so players can walk onto and off of it. It was introduced in [`V4`](/RBAP-Wiki/Wiki/Value-Types#rbap-version) of the game and is only available in select servers and in those select servers it replaces the Player Conveyors. It is somewhat inspired by the entrance elevator and was made completely for the fun of making it.

There are no plans to replace the Player Conveyors with The Traveler due to it being affected by physics thus making it very easy to break it if you do something like standing in between the barriers when they get enabled (which will most likely result in it being thrown off its track which (unless you're BOB) is something that can break it for the rest of the session). Also the fact that it only stops at the start and end of the map doesn't help much either.

![](/RBAP-Wiki/Assets/Images/Walkway-Transportation/The%20Traveler.png)

### Here's its schedule:

| Task | Length of Task |
|-|-|
| Opening gate 1 (nearest to the entrance elevator) | 2 seconds |
| Giving time for players to get onto and off it | 12-13 seconds |
| Closing gate 1 | 2 seconds |
| Leaving delay | 2 seconds |
| Traveling to gate 2 (farthest from the entrance elevator) | 20 seconds |
| Arriving delay | 2 seconds |
| Opening gate 2 | 2 seconds |
| Giving time for players to get onto and off it | 12-13 seconds |
| Closing gate 2 | 2 seconds |
| Leaving delay | 2 seconds |
| Traveling to gate 1 | 20 seconds |
| Arriving delay | 2 seconds |
| Repeat this list |  |
