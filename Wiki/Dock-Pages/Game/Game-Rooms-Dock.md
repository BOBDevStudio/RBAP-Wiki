---
permalink: /wiki/docks/game-rooms-dock
title: "Dock: Game Rooms Dock"
redirect_from:
  - /Wiki/Docks/Game-Rooms-Dock
easy_links:
  list:
    - link_name: "Game Rooms Dock"
      search:
        name: "Game Rooms Dock"
    - link_name: "Game Room 1"
      added_url_info: "#game-rooms-1-and-2"
      search:
        name: "Game Rooms Dock / Game Room 1"
    - link_name: "Game Room 2"
      added_url_info: "#game-rooms-1-and-2"
      search:
        name: "Game Rooms Dock / Game Room 2"
    - link_name: "Game Room 3"
      added_url_info: "#game-room-3"
      search:
        name: "Game Rooms Dock / Game Room 3"
    - link_name: "Four Corners"
      added_url_info: "#four-corners"
      search:
        name: "Game Rooms Dock / Four Corners"
    - link_name: "Four Corners: Elimination"
      added_url_info: "#four-corners-elimination"
      search:
        name: "Game Rooms Dock / Four Corners Elimination"
    - link_name: "Four Corners: Reversed"
      added_url_info: "#four-corners-reversed"
      search:
        name: "Game Rooms Dock / Four Corners Reversed"
    - link_name: "Game Says"
      added_url_info: "#game-says"
      search:
        name: "Game Rooms Dock / Game Says"
    - link_name: "Light Chaser"
      added_url_info: "#light-chaser"
      search:
        name: "Game Rooms Dock / Light Chaser"
    - link_name: "Door Master"
      added_url_info: "#door-master"
      search:
        name: "Game Rooms Dock / Door Master"
    - link_name: "Path Finder"
      added_url_info: "#path-finder"
      search:
        name: "Game Rooms Dock / Path Finder"
    - link_name: "Path Finder: Minefield"
      added_url_info: "#path-finder-minefield"
      search:
        name: "Game Rooms Dock / Path Finder Minefield"
mentioned_game_content:
  last_status_check: "Wiki update for RBAP update <code>RBAP Update / V5.2.0</code>"
sidebars:
  page_subject_info:
    title: "Game Rooms Dock"
    color: "#a3a2a5"
    titles_text_color: "#FFFFFF"
    main_image:
      path: "/Assets/Images/Docks/Game-Rooms-Dock.png"
#    description: ""
    data:
    - title: "Dock Data"
      data:
      - key: "Reserved Dock Entrance"
        value: "`1`"
      - key: "Entrances Used"
        value: "`1`"
      - key: "Dock Entrance Types Used"
        value: "`1` = <code>Dock Entrance Type / Open</code>"
      - key: "Side Placed On"
        value: "`Middle Side 2`"
history:
  - time: "<code>RBAP Update / V3.0.0</code>"
    changes:
      - "Added this dock although it was inoperable."
  - time: "<code>RBAP Update / V3.1.0</code>"
    changes:
      - "Removed this dock."
  - time: "<code>RBAP Update / V4.0.0</code>"
    changes:
      - "Added back this dock and made it operational."
      - "Added a replacement for the Find The Right Color game from the <code>Dock / Old Game Rooms Dock</code> called Game Says."
      - "Added some fixes to the system that handles the teleporting of your character when you fall down into the black abyss (or whatever it’s called)."
      - "Fixed the system that runs this dock not using the barriers on this dock."
  - time: "<code>RBAP Update / V5.0.0</code>"
    changes:
      - "Changed the coloring of all the platforms in the game rooms."
      - "The Game Says game now has 7 rounds instead of 10."
      - "Recoded the entire system that runs this dock."
      - "Added an easter egg that can only be found on the 24th of any month or when Unbitterness is in the server when the Game Says game starts."
      - "When one of the colored platforms is being lowered the text on top of them is no longer abruptly removed in the Four Corners and Four Corners: Reversed games."
      - "Added the Light Chaser game."
      - "Made it so you’re no longer able to walk under the game rooms’ barriers."
  - time: "<code>RBAP Update / V5.1.2</code>"
    changes:
      - "Fixed a rare bug that when encountered causes a game room to stop working."
  - time: "<code>RBAP Update / V5.2.0</code>"
    changes:
      - "Added Game Room 3 which as a side effect also added 3 new games."
      - "Games are now chosen using a most recently played based system."
      - "The timings of the light movement in the Light Chaser game are now distance based."
      - "Added even more random stuff to be used in instructions in the Game Says game."
  - time: "<code>RBAP Update / V6.0.0</code>"
    changes:
      - "Added the Four Corners: Elimination game."
      - "There is now 3 rounds instead of 5 rounds in the Four Corners and Four Corners: Reversed games."
      - "The text on the dock's signs is now bold by default."
      - "Most previous uses of bold text on the dock's signs have been converted to underlined text instead. The remaining bold text uses have been removed."
      - "Which barrier is missing in a row of barriers in the Path Finder game is now different for each player."
      - "The timer in the Path Finder and Path Finder: Minefield games can now be stopped by all players reaching the end."
      - "All games now track and list who has won (if they didn’t previously)."
      - "The checkered pattern used on the platforms in Game Room 1 and Game Room 2 will now adapt to the color of the platform."
      - "Players must now get to the end area in the Path Finder and Path Finder: Minefield games to be counted as a winner. Previously players just had to be nearby."
      - "Each platform in Game Room 1 and Game Room 2 can now tell who’s on them. (This is used for tracking who has survived each round.)"
      - "Players that reach the end in the Path Finder and Path Finder: Minefield games after the timer has expired will no longer be processed."
      - "Fixed an oversight that made it so the dialogue in the Light Chaser game that indicates that it’s the final round wouldn't have been replaced with the original game instructions shortly after being typed."
      - "Typing animations can now be overridden by another typing animation."
      - "fixed the technical issue of sub games (like the Four Corners: Reversed game) sharing the chance of being selected with their normal counterpart (like the Four Corners game)."
  - time: "<code>RBAP Update / V6.0.2</code>"
    changes:
      - "Fixed a bug that caused the light to be on the wrong platform in the Light Chaser game while it was being played in Game Room 1."
---

The Game Rooms Dock is an interactive dock that contains many games a player can play. The original ideas for this dock were originally taken from the <code>Dock / Old Game Rooms Dock</code> but then later edited to fit into the game better. BOB considers this dock as good if not better than the <code>Dock / Old Game Rooms Dock</code> as (in his opinion) this dock is much more polished compared to that dock. Differences between this dock and the <code>Dock / Old Game Rooms Dock</code> include stuff like new animations for text and other stuff and a much more robust and unified backend. This dock hadn't really been changed much since it got enabled in <code>RBAP Update / V4.0.0</code> until <code>RBAP Update / V5.2.0</code> rolled around and added an entirely new game room that is pretty much nothing like the 2 other game rooms.

# Games on the dock currently:

## Game Rooms 1 and 2

<p class="image-group-2-images">
{% include clickable-image image="/Assets/Images/Docks/Game-Rooms/1.png" %}
{% include clickable-image image="/Assets/Images/Docks/Game-Rooms/2.png" %}
</p>

### Four Corners

Four Corners is a classic game where there are four corners and only one of them will (in this case) be sunk. The four colors to choose from are red, green, blue, and Unbitterness' favorite color. This game used to only have 1 round due to how the dock was originally envisioned but in <code>RBAP Update / V5.0.0</code> it was increased to 5. This game was made to be a port of the Four Corners game of the <code>Dock / Old Game Rooms Dock</code>.

{% include clickable-image image="Assets/Images/Docks/Game-Rooms/Games/Four-Corners.png" %}

### Four Corners: Elimination

This game is the classic game of Four Corners but with the difference of when a color gets selected it also gets eliminated. The game starts with 4 colors but is then lowered down to 2 colors in the final round. This game is forever locked at 3 rounds due to the fact that each round a color gets removed and there's only 4 colors available. This game was added <code>RBAP Update / V6.0.0</code>.

And as a fun fact all colors that are still around after one has been eliminated were originally going to be moved around so that they were all close to each other instead of possibly being on the complete opposite position on the grid. But BOB later decided it didn't really look as good (as some colors would no longer be in the corners of the grid) so he decided against it. When he decided against it he had already coded the entire game meaning he had to remake the entire game from scratch again (in order to remove the core functionality that was the color moving). So this means the game was actually made twice before it even got released.

{% include clickable-image image="Assets/Images/Docks/Game-Rooms/Games/Four-Corners-Elimination.png" %}

### Four Corners: Reversed

This game is the exact same game as the Four Corners game but only one color is safe instead of three being safe. Like the normal Four Corners, this game was made to be a port of the Four Corners: Reversed game of the <code>Dock / Old Game Rooms Dock</code>.

{% include clickable-image image="Assets/Images/Docks/Game-Rooms/Games/Four-Corners-Reversed.png" %}

### Game Says

This game is basically the equivalent to a commonly played game called Simon Says. How this game works is the main sign will give some instruction along with who said the instruction and if the game is one who said it you should do what it says but if it isn't you should do the **opposite** of what it says. It purposely does not give you much time to think about the instructions before the barriers are enabled and platforms start sinking. Each instruction that is given is **heavily** randomized and the colors that are used are also pretty randomized.

This game used to have 10 rounds but was lowered down to 5 rounds in <code>RBAP Update / V4.1.0</code> and then up to 7 in <code>RBAP Update / V5.0.0</code>. Unlike the Four Corners games this one is **not** a port of a previous game from the <code>Dock / Old Game Rooms Dock</code>. Rather it is a replacement for the game from the <code>Dock / Old Game Rooms Dock</code> called Find The Right Color and (for the time being at least) the harder variant of it called Find The Right Color: Harder And Harder.

{% include clickable-image image="/Assets/Images/Docks/Game-Rooms/Games/Game-Says.png" %}

### Light Chaser

This game was added in <code>RBAP Update / V5.0.0</code>. How this game works is players must chase around a constantly moving light until it eventually stops. When it stops all platforms that it is not on will be lowered. The point at which it stops is randomly determined every time the light moves.

{% include clickable-image image="/Assets/Images/Docks/Game-Rooms/Games/Light-Chaser.png" %}

## Game Room 3

Added in <code>RBAP Update / V5.2.0</code> this game room features games that load their own custom map that is specific to each game. Each game is single player compatible and has its own music that is played while players are playing the game.

Now you may be wondering where did BOB get the idea for this game room. Well the interesting thing about it is this game room is actually a merge of RBAP and BOB's longtime secret project that never got completed. See the issue with that secret project was that BOB had to build an entirely new game which to put it simply is not easy and every time he tried to finish it he eventually got bored of it. He then left and then eventually came back and decided to recode the entire backend to it which obviously never really worked out well. Plus to add onto that destined-to-fail plan the getting bored of it happened multiple times.

The games that are crossover from that abandoned project don't actually contain the same maps. The maps may still be heavily inspired by previous ones in the abandoned project. And a fun fact is the maps in the game room have the same exact X and Z dimensions as in the abandoned project.

In case you're wondering this abandoned project is the same as the one talked about in [this Tweet](https://twitter.com/ThisBeBOB_/status/1369425968931176448) and on the page for the <code>Dock / Construction Barrier Dock</code> (and on the dock itself).

{% include clickable-image image="/Assets/Images/Docks/Game-Rooms/3.png" %}

### Door Master

This game along with Game Room 3 waz added in <code>RBAP Update / V5.2.0</code>. It features a field of 50 numbered doors to which you have 108 seconds to find the randomly selected door. Each door can be opened by standing on the center of it. This game is entirely possible to do while in single player and it is a port of a game from the abandoned project.

{% include clickable-image image="/Assets/Images/Docks/Game-Rooms/Games/Door-Master.png" %}

### Path Finder

This game along with Game Room 3 was added in <code>RBAP Update / V5.2.0</code>. It features a field full of many rows of invisible barriers with one barrier in each row missing. In order to win you have to find your way through each of the rows of barriers to the end platform before the time of 50 seconds runs out. This game is entirely possible to do while in single player and it is a port of a game from the abandoned project.

The map that is used by this game is also **heavily** inspired by the original map which was what the construction barrier model on the <code>Dock / Construction Barrier Dock</code> was made for before it ever came to RBAP. In fact both uses of the construction barrier in either of the maps are the same.

{% include clickable-image image="/Assets/Images/Docks/Game-Rooms/Games/Path-Finder.png" %}

### Path Finder: Minefield

This game along with Game Room 3 was added in <code>RBAP Update / V5.2.0</code>. It features a field full of many hidden randomly placed mines to which you have to navigate your way through to the end platform in order to win. This game is entirely possible to do while in single player.

{% include clickable-image image="/Assets/Images/Docks/Game-Rooms/Games/Path-Finder-Minefield.png" %}

# History

{% include history %}