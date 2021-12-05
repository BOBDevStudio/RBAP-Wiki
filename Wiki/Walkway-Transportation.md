---
permalink: /wiki/walkway-transportation
title: Walkway Transportation
redirect_from:
  - /Wiki/Walkway-Transportation
notices:
  - type: "warning"
    title: "Unmaintained Page"
    text: "As of RBAP's [`V5`](/Posts/Update-Log/5-0-0) update the content featured on this page is no longer very accurate as The Traveler has gone unused since that update due to multiple reasons."
---

Random Buildings And Parts currently has 2 ways of transportation across the game's map. They are the [Player Conveyors]({{- "/Wiki/Map-Transportation#player-conveyors" | relative_url -}}) and [The Traveler]({{- "/Wiki/Map-Transportation#the-traveler" | relative_url -}}) and only one of them can be present in a server.

Currently The Traveler is the fastest way to get end to end by around 35 seconds compared to the Player Conveyors. Read one of the sentences in each of the methods of travel's section for more info on how that's calculated.

## Player Conveyors

The player conveyors are by far much older than The Traveler. They have been in the game in many different forms since at least around late 2018. Their current form was introduced in [`V3`]({{- "/wiki/posts/update-log/3-0-0" | relative_url -}}) of the game and is of a futuristic looking conveyor belt featuring moving textures and is inspired by RB Battles' Season 2 hub and older versions of the game (we're talking like early fourth quarter 2018).

The speed of the texture moving inside of the conveyor belts and the speed of the conveyor belts is the exact same (pretending like Roblox doesn't add visual glitches to the texture). The speed of both of them is currently around a Roblox character's default walking speed; so if you ride and walk on it at the same time you'll be going about twice the speed you normally would if you were just walking. Fun fact: The speed of each of them remains the same no matter what the length of the conveyor belts is (or in other words the distance from end to end). When tested in [`V4`]({{- "/wiki/posts/update-log/4-0-0" | relative_url -}}) using the Player Conveyors to get end to end without manually moving (starting as soon as the character start getting moved and ending when it stops) took 1 minute and 40 seconds (not counting the time it took to get on to the opposite Player Conveyor).

<img src="{{- "/Assets/Images/Walkway-Transportation/Player%20Conveyors.png" | relative_url -}}" alt="">

## The Traveler

The Traveler is a special replacement of the Player Conveyors. It takes up the same amount of room as the Player Conveyors (if you don't include the guard rails). When it stops at one of its stopping points the gate (aka the guard rails nearby) are/is lowered so players can walk onto and off of it. When tested in [`V4`]({{- "/wiki/posts/update-log/4-0-0" | relative_url -}}) using The Traveler to get end to end (starting at the end of the gate's closing animation and ending at the start of the same gate's opening animation) took 1 minute and 5 seconds.

It was introduced in [`V4`]({{- "/wiki/posts/update-log/4-0-0" | relative_url -}}) of the game and is only available in select servers and in those select servers it replaces the Player Conveyors. It is somewhat inspired by the entrance elevator and was made completely for the fun of making it.

There are no plans to replace the Player Conveyors with The Traveler due to it being affected by physics thus making it very easy to break it if you do something like stand in between the barriers when they get enabled (which will most likely result in it being thrown off its track which (unless you're BOB) is something that can break it for the rest of the session). Also the fact that it only stops at the start and end of the map doesn't help much either.

<img src="{{- "/Assets/Images/Walkway-Transportation/The%20Traveler.png" | relative_url -}}" alt="">

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
