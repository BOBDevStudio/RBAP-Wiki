---
permalink: /wiki/controller-npc
title: The Controller (NPC)
redirect_from:
  - /Wiki/Controller-NPC
mentioned_game_content:
  last_status_check: "Wiki update for RBAP update [`V5.2`](/wiki/posts/update-log/5-2-0)"
sidebars:
  page_subject_info:
    title: "The Controller"
    color: "#a3a2a5"
    titles_text_color: "#FFFFFF"
    main_image:
      path: "/Assets/Images/The-Controller-NPC.png"
    description: "The Controller NPC doing some typing"
---

The Controller is an NPC in the game whose job it is to type out lines of code into a fake console. Each line of code that he types can actually work in Roblox's Lua implementation, provided you have the correct modules and values set. Most of lines of code are just picked randomly while some happen at certain times. Scroll down for the full list of the all.

<img src="{{- "/Assets/Images/The-Controller-NPC.png" | relative_url -}}" alt="">

# Here's every line of code available currently:

The lists are in no particular order.

## Uncontrolled

All of the uncontrolled lines are used at random and have no control over when they are used.

| Input																														| Output																						| Added In | Other Notes |
|-|-|-|-|
| Players:RemoveAll()																										| Error: Code [Players:RemoveAll()] failed to yeet players										| |  |
| print("Hello world!")																										| Hello world!																					| |  |
| print("Hello world!")																										| !dlrow olleH																					| |  |
| local CommandRan = Commands:Run("Nuke") if not CommandRan then print("OOF!") end											| OOF!																							| |  |
| local Answer = QuestionAnswerer("How much of the game is made by BOB?") print(Answer)										| A lot of it as there are only a few things in this game that are not made by BOB				| |  |
| local Answer = QuestionAnswerer("Why does BOB make me type out fake lines of code into this fake console?") print(Answer)	| Not even he remembers why																		| |  |
| if true == false then print("What is logic?") end																			| What is logic?																				| |  |
| print("Yes")																												| But what if I don't want to?																	| |  |
| local Answer = QuestionAnswerer("Who is BOB?") print(Answer)																| BOB is the creator (and owner) of this game and he has also created most stuff in this game	| |  |
| local Answer = QuestionAnswerer("Did BOB write this question?") print(Answer)												| Maybe :b																						| |  |
| local function Run() print("Hello from a function!") end Run()															| Hello from a function!																		| |  |
| print(math.random(1, 9999999999))																							| 😵																							| | The output is a reference to Google. |
| print(Shrug)																												| `¯\_(ツ)_/¯`																					| |  |
| local Answer = QuestionAnswerer("Does this console have some more RGB?") print(Answer)									| Yes!																							| | (The letters in the word yes from the output are actually colored.) |
| local Answer = QuestionAnswerer("What's BOB's favorite color?") print(Answer)												| This one currently! A previous one was this one in around 2017 to 2018						| | (Some of the words in the output are actually colored.) |
| if SSIntroE then print("Hmm...") end																						| Hmm...																						| | `SSIntroE` is actually a hidden meaning. The only thing BOB discloses is it's hidden meaning has something to do with the game's intro as can be indicated with the word intro being in it. So far BOB has yet to disclose the meaning to **anyone**. |
| print(game.PlaceId)																										| (*Output can vary*)																			| | Legitimately prints the value of `game.PlaceId`. |
| print(game.ClassName)																										| (*Output can vary*)																			| | Legitimately prints the value of `print(game.ClassName)`. |
| print(typeof(game))																										| (*Output can vary*)																			| | Legitimately prints the value of `print(typeof(game))`. |
| print(type(game))																											| (*Output can vary*)																			| | Legitimately prints the value of `print(type(game))`. |

## Controlled

All of the controlled lines are only used under certain circumstances.

| Input											| Output													| Used When																																												| Added In															| Other Notes |
|-|-|-|-|-|
| Night.StreetLights:On()						| Turning on street lights									| When the street lights are to be turned on.																																			| [`V5`]({{- "/wiki/posts/update-log/5-0-0" | relative_url -}})		|  |
| Night.StreetLights:Off()						| Turning off street lights									| When the street lights are to be turned off.																																			| [`V5`]({{- "/wiki/posts/update-log/5-0-0" | relative_url -}})		|  |
| Halloween.SummonDecorations:FestivalGrounds()	| Summoning Halloween festival grounds decorations			| In a certain sequence in a chain of animations related to the placing of [Halloween decorations]({{- "/wiki/timed-changes#halloween-decorations-get-placed" | relative_url -}}).		| [`V5.3`]({{- "/wiki/posts/update-log/5-3-0" | relative_url -}})	|  |
| Halloween.RemoveDecorations:FestivalGrounds()	| Removing Halloween festival grounds decorations			| In a certain sequence in a chain of animations related to the removing of [Halloween decorations]({{- "/wiki/timed-changes#halloween-decorations-get-placed" | relative_url -}}).		| [`V5.3`]({{- "/wiki/posts/update-log/5-3-0" | relative_url -}})	|  |
| Halloween.SummonDecorations:Miscellaneous()	| Summoning miscellaneous Halloween decorations				| In a certain sequence in a chain of animations related to the placing of [Halloween decorations]({{- "/wiki/timed-changes#halloween-decorations-get-placed" | relative_url -}}).		| [`V5.3`]({{- "/wiki/posts/update-log/5-3-0" | relative_url -}})	|  |
| Halloween.RemoveDecorations:Miscellaneous()	| Removing miscellaneous Halloween decorations				| In a certain sequence in a chain of animations related to the removing of [Halloween decorations]({{- "/wiki/timed-changes#halloween-decorations-get-placed" | relative_url -}}). 	| [`V5.3`]({{- "/wiki/posts/update-log/5-3-0" | relative_url -}})	|  |
| EnablePumpkinHead(true)						| You're now one with the pumpkin							| In a certain sequence in a chain of animations related to the placing of [Halloween decorations]({{- "/wiki/timed-changes#halloween-decorations-get-placed" | relative_url -}}).		| [`V5.3`]({{- "/wiki/posts/update-log/5-3-0" | relative_url -}})	|  |
| EnablePumpkinHead(false)						| You're no longer one with the pumpkin						| In a certain sequence in a chain of animations related to the removing of [Halloween decorations]({{- "/wiki/timed-changes#halloween-decorations-get-placed" | relative_url -}}). 	| [`V5.3`]({{- "/wiki/posts/update-log/5-3-0" | relative_url -}})	|  |
| Halloween:SetPlayerConveyorsColor(true)		| Changing color of player conveyors to Halloween colors	| In a certain sequence in a chain of animations related to the placing of [Halloween decorations]({{- "/wiki/timed-changes#halloween-decorations-get-placed" | relative_url -}}).		| [`V5.3`]({{- "/wiki/posts/update-log/5-3-0" | relative_url -}})	|  |
| Halloween:SetPlayerConveyorsColor(false)		| Resetting color of player conveyors						| In a certain sequence in a chain of animations related to the removing of [Halloween decorations]({{- "/wiki/timed-changes#halloween-decorations-get-placed" | relative_url -}}). 	| [`V5.3`]({{- "/wiki/posts/update-log/5-3-0" | relative_url -}})	|  |
