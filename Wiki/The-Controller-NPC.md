---
permalink: /wiki/controller-npc
title: "The Controller (NPC)"
redirect_from:
  - /Wiki/Controller-NPC
easy_links:
  list:
    - link_name: "Controller (NPC)"
      search:
        name: "Controller NPC"
mentioned_game_content:
  last_status_check: "Wiki update for RBAP update <code>RBAP Update / V5.3.0</code>"
sidebars:
  page_subject_info:
    title: "The Controller"
    color: "#a3a2a5"
    titles_text_color: "#FFFFFF"
    main_image:
      path: "/Assets/Images/The-Controller-NPC.png"
    description: "The Controller NPC doing some typing"
history:
  - time: "<code>RBAP Update / V3.0.0</code>"
    changes:
      - "Added 6 lines of code to what can be typed."
  - time: "<code>RBAP Update / V3.1.0</code>"
    changes:
      - "Increased the resolution of the computer screen from 70 pixels per stud to 150 pixels per stud which allows for more readability."
      - "The same line (input + output) will no longer be used twice in a row."
      - "Changed the input of 1 line of code."
      - "Changed the output of 2 lines of code."
      - "Removed 4 lines of code from what can be typed."
  - time: "<code>RBAP Update / V4.0.0</code>"
    changes:
      - "A line of code will no longer be used if that line of code's output is currently visible."
      - "Added 10 lines of code to what can be typed."
      - "The lines of code available is now being controlled by a new philosophy on how it should operate. (Read the update log for the full info.)"
  - time: "<code>RBAP Update / V4.1.0</code>"
    changes:
      - "Animations have been added to some of the keys on the keyboard. Among those keys are letter keys, number keys, shift keys, the space key, and the enter key."
      - "The corners of the desk are now rounded."
  - time: "<code>RBAP Update / V5.3.0</code>"
    changes:
      - "Added 8 lines of code to what can be typed."
      - "Changed the input of 2 lines of code."
---

The Controller is an NPC in the game whose job it is to type out lines of code into a fake console. Each line of code that he types can actually work in Roblox's Lua implementation, provided you have the correct modules and values set. Most of lines of code are just picked [randomly](#uncontrolled) while some happen at [certain times](#controlled). Scroll down for the full list of the all.

# Here's every line of code available currently:

The lists are in no particular order.

## Uncontrolled

All of the uncontrolled lines are used at random and have no control over when they are used.

| Input | Output | Added In | Other Notes |
|-|-|-|-|
| Players:RemoveAll()																										| Error: Code [Players:RemoveAll()] failed to yeet players																				| 									|  |
| print("Hello world!")																										| Hello world!																															| 									|  |
| print("Hello world!")																										| !dlrow olleH																															| 									|  |
| local CommandRan = Commands:Run("Nuke") if not CommandRan then print("OOF!") end											| OOF!																																	| 									|  |
| local Answer = QuestionAnswerer("How much of the game is made by BOB?") print(Answer)										| A lot of it as there are only a few things in this game that are not made by BOB														| 									|  |
| local Answer = QuestionAnswerer("Why does BOB make me type out fake lines of code into this fake console?") print(Answer)	| Not even he remembers why																												| <code>RBAP Update / V3.0.0</code>	|  |
| if true == false then print("What is logic?") end																			| What is logic?																														| <code>RBAP Update / V3.0.0</code>	|  |
| print("Yes")																												| But what if I don't want to?																											| <code>RBAP Update / V3.0.0</code>	|  |
| local Answer = QuestionAnswerer("Who is BOB?") print(Answer)																| BOB is the creator (and owner) of this game and he has also created most stuff in this game											| <code>RBAP Update / V3.0.0</code>	|  |
| local Answer = QuestionAnswerer("Did BOB write this question?") print(Answer)												| Maybe :b																																| <code>RBAP Update / V3.0.0</code>	|  |
| local function Run() print("Hello from a function!") end Run()															| Hello from a function!																												| <code>RBAP Update / V4.0.0</code>	|  |
| print(math.random(1, 9999999999))																							| 😵																																		| <code>RBAP Update / V4.0.0</code>	|  |
| print(Shrug)																												| `¯\_(ツ)_/¯`																															| <code>RBAP Update / V4.0.0</code>	|  |
| local Answer = QuestionAnswerer("Does this console have some more RGB?") print(Answer)									| <b class="color c-FF0000">Y</b><b class="color c-00FF00">e</b><b class="color c-0000FF">s</b>!										| <code>RBAP Update / V4.0.0</code>	|  |
| local Answer = QuestionAnswerer("What's BOB's favorite color?") print(Answer)												| <b class="color c-00FFFF">This one currently!</b> A previous one was <b class="color c-0000FF">this one</b> in around 2017 to 2018	| <code>RBAP Update / V4.0.0</code>	|  |
| if SSIntroE then print("Hmm...") end																						| Hmm...																																| <code>RBAP Update / V4.0.0</code>	| `SSIntroE` is actually a hidden meaning. The only thing BOB discloses is it's hidden meaning has something to do with the game's intro as can be indicated with the word intro being in it. So far BOB has yet to disclose the meaning to **anyone**. |
| print(game.PlaceId)																										| (*Output can vary*)																													| <code>RBAP Update / V4.0.0</code>	| Legitimately prints the value of `game.PlaceId`. |
| print(game.ClassName)																										| (*Output can vary*)																													| <code>RBAP Update / V4.0.0</code>	| Legitimately prints the value of `print(game.ClassName)`. |
| print(typeof(game))																										| (*Output can vary*)																													| <code>RBAP Update / V4.0.0</code>	| Legitimately prints the value of `print(typeof(game))`. |
| print(type(game))																											| (*Output can vary*)																													| <code>RBAP Update / V4.0.0</code>	| Legitimately prints the value of `print(type(game))`. |
{: .controller-npc-lines-list}

## Controlled

All of the controlled lines are only used under certain circumstances.

| Input | Output | Used When | Added In | Other Notes |
|-|-|-|-|-|
| Night.StreetLights:On()						| Turning on street lights									| When the street lights are to be turned on.																																		| <code>RBAP Update / V5.0.0</code>	|  |
| Night.StreetLights:Off()						| Turning off street lights									| When the street lights are to be turned off.																																		| <code>RBAP Update / V5.0.0</code>	|  |
| Halloween.SummonDecorations:FestivalGrounds()	| Summoning Halloween festival grounds decorations			| In a certain sequence in a chain of animations related to the placing of <code text="Halloween decorations">Global / Timed Change / Halloween decorations get placed</code>.		| <code>RBAP Update / V5.3.0</code>	|  |
| Halloween.RemoveDecorations:FestivalGrounds()	| Removing Halloween festival grounds decorations			| In a certain sequence in a chain of animations related to the removing of <code text="Halloween decorations">Global / Timed Change / Halloween decorations get placed</code>.		| <code>RBAP Update / V5.3.0</code>	|  |
| Halloween.SummonDecorations:Miscellaneous()	| Summoning miscellaneous Halloween decorations				| In a certain sequence in a chain of animations related to the placing of <code text="Halloween decorations">Global / Timed Change / Halloween decorations get placed</code>.		| <code>RBAP Update / V5.3.0</code>	|  |
| Halloween.RemoveDecorations:Miscellaneous()	| Removing miscellaneous Halloween decorations				| In a certain sequence in a chain of animations related to the removing of <code text="Halloween decorations">Global / Timed Change / Halloween decorations get placed</code>. 	| <code>RBAP Update / V5.3.0</code>	|  |
| EnablePumpkinHead(true)						| You're now one with the pumpkin							| In a certain sequence in a chain of animations related to the placing of <code text="Halloween decorations">Global / Timed Change / Halloween decorations get placed</code>.		| <code>RBAP Update / V5.3.0</code>	|  |
| EnablePumpkinHead(false)						| You're no longer one with the pumpkin						| In a certain sequence in a chain of animations related to the removing of <code text="Halloween decorations">Global / Timed Change / Halloween decorations get placed</code>. 	| <code>RBAP Update / V5.3.0</code>	|  |
| Halloween:SetPlayerConveyorsColor(true)		| Changing color of player conveyors to Halloween colors	| In a certain sequence in a chain of animations related to the placing of <code text="Halloween decorations">Global / Timed Change / Halloween decorations get placed</code>.		| <code>RBAP Update / V5.3.0</code>	|  |
| Halloween:SetPlayerConveyorsColor(false)		| Resetting color of player conveyors						| In a certain sequence in a chain of animations related to the removing of <code text="Halloween decorations">Global / Timed Change / Halloween decorations get placed</code>. 	| <code>RBAP Update / V5.3.0</code>	|  |
{: .controller-npc-lines-list}

# History

{% include history %}