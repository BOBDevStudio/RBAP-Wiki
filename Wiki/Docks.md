---
title: Docks
redirect_from:
  - /Wiki/docks
  - /wiki/Docks
  - /wiki/docks
  - /Wiki/docks/
  - /wiki/Docks/
  - /wiki/docks/
  - /Wiki/Dock
  - /Wiki/dock
  - /wiki/Dock
  - /wiki/dock
  - /Wiki/dock/
  - /wiki/Dock/
  - /wiki/dock/
  - /Docks
  - /docks
  - /Docks/
  - /docks/
  - /Dock
  - /dock
  - /Dock/
  - /dock/
---

What is a dock? Docks are where BOB showcases his building skills and sometimes his scripting skills.

In the current version of the Random Buildings And Parts most docks are automatically placed by a system that was introduced in [`V3`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#rbap-version) of the game. So that means most docks are placed completely randomly and can be moved anytime. Some of the values that are on display are actually values from the dock placing system (but are made so you the reader can understand them).

### Here's a list of each of the values and what type of data they hold and a description of them:

| Value                      | Type                                                                                                                                                                            | Description |
|-|-|-|
| Reserved Dock Entrance     | [`Number`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)/[`Blank`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#blank)     | This is the predetermined id of the dock entrance where the dock will be placed at. If this value is blank the system will pick the next available dock entrance on the side specified by the `Side Placed On` value. |
| Dock Entrances Used Up     | [`Number`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)                                                                                          | This specifies the amount of dock entrances that need to be reserved to a dock because of its size. |
| Dock Entrances Centered On | [`Array`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#array) of [`Numbers`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) | Without going into the very technical details about this this specifies what dock entrances (of the `Dock Entrances Used Up` value) the dock is to be centered on. |
| Dock Types                 | [`Table`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#table) of [`Dock Types`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types)      | For each dock entrance that is taken up by a dock this value specifies what the dock type of each of those dock entrances is. |
| Side Placed On             | [`Number`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)                                                                                          | The side of the map the dock is to be placed on. Currently supported: `1` = `Side 1`, `2` = `Side 2`, `0.1` = `Side 1 of the middle`, and `0.2` = `Side 2 of the middle` |

### All of the docks that are (or were) in Random Buildings And Parts (base/main version) are as follows:

| Dock |
|-|
| [Bloxy Statue Remade Dock](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#bloxy-statue-remade-dock) |
| [Bob The Mob Dock](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#bob-the-mob-dock) |
| [Camp Fire Dock](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#camp-fire-dock) |
| [Construction Barrier Dock](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#construction-barrier-dock) |
| [Donation Dock](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#donation-dock) |
| [Ice Cube Tray Dock](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#ice-cube-tray-dock) |
| [Industrial Light Dock](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#industrial-light-dock) |
| [Lighthouse Dock](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#lighthouse-dock) |
| [Mine Dock](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#mine-dock) |
| [No Standing Joke Dock](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#no-standing-joke-dock) |
| [NPCs Key Dock](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#npcs-key-dock) |
| [Server And Game Info Dock](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#server-and-game-info-dock) |
| [Showcase Dock](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#showcase-dock) |
| [Showcase Remastered Dock](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#showcase-remastered-dock) |
| [The Stage](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#the-stage) |
| [Weird Hills Dock](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Docks#weird-hills-dock) |

## Bloxy Statue Remade Dock

This is BOB's re-creation of Roblox Bloxy Statue. It was made sometime after the 2018 Bloxy Awards.

| Value Name | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean) |
| Reserved Dock Entrance     |  |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Open`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#open)} |
| Side Placed On             | [`1`](RBAP/https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Bloxy%20Statue%20Remade%20Dock.png)

## Bob The Mob Dock

BOB was inspired to make this dock was made after a reply to a post that BOB made on Twitter. [Click here to see what remains of the post and it's replies](https://twitter.com/ThisBeBOB_/status/1114734536397451265).

| Value Name                 | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean) |
| Reserved Dock Entrance     |  |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Open`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#open)} |
| Side Placed On             | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

###### (For now pretend like there's an image here. BOB hasn't really had time and commitment to make a image of this dock for this dock.)

## Camp Fire Dock

| Value Name                 | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean)|
| Reserved Dock Entrance     |  |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)|
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Open`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#open)} |
| Side Placed On             | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Camp%20Fire%20Dock.png)

## Construction Barrier Dock

This construction barrier was originally made for/in a secret project made by BOB. The project that this is referring to has yet to make it very far in terms of progress.

| Value Name                 | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean) |
| Reserved Dock Entrance     |  |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Open`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#open)} |
| Side Placed On             | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Construction%20Barrier%20Dock.png)

## Donation Dock

After a lot of the UI in the game was removed this dock was added to replace the donation screen.

| Value Name                 | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean) |
| Reserved Dock Entrance     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Open`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#open)} |
| Side Placed On             | [`2`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Donation%20Dock.png)

## Ice Cube Tray Dock

###### Read the text on the dock for description on this dock. It's pretty in-depth so didn't feel need to put it here.

| Value Name                 | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean) |
| Reserved Dock Entrance     |  |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Open`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#open)} |
| Side Placed On             | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Ice%20Cube%20Tray%20Dock.png)

## Industrial Light Dock

BOB created this light just for the fun of it. He uses it (or edited versions of it) in his projects when he needs an industrial looking light.

| Value Name                 | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean) |
| Reserved Dock Entrance     |  |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Open`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#open)} |
| Side Placed On             | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Industrial%20Light%20Dock.png)

## Lighthouse Dock

BOB originally created this dock when he was trying to make cylinders out of multiple parts instead of just the cylinder object in Roblox; he considers it successful.

| Value Name                 | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean) |
| Reserved Dock Entrance     |  |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Open`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#open)} |
| Side Placed On             | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Lighthouse%20Dock.png)

## Mine Dock

This dock was created just for the fun of it and partly because it was because BOB was testing out new stuff that he just found out how to use. This dock is one of the oldest in the game.

| Value Name | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean) |
| Reserved Dock Entrance     |  |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Open`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#open)} |
| Side Placed On             | [`2`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Mine%20Dock.png)

## No Standing Joke Dock

This was created sometime after BOB was thinking about road signs and then realized what the no standing sign says could be used literally in a joke.

| Value Name                 | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean) |
| Reserved Dock Entrance     |  |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Open`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#open)} |
| Side Placed On             | [`2`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/No%20Standing%20Joke%20Dock.png)

## NPCs Key Dock

This dock is used to help people figure out what the NPCs in the game represent. This dock was originally considered a system dock but that status was later removed when what defines a system dock was redefined.

| Value Name                 | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean) |
| Reserved Dock Entrance     | [`12`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Open`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#open)} |
| Side Placed On             | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/NPCs%20Key%20Dock.png)

## Server And Game Info Dock

This dock shows all sorts of information about the server and the game. It was originally made before [`V3`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#rbap-version) of the game but for reasons unknown was not added until [`V3`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#rbap-version). This dock has always been a system dock.

| Value Name                 | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean) |
| Reserved Dock Entrance     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Server Dock`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#server-dock)} |
| Side Placed On             | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Server%20And%20Game%20Info%20Dock.png)

## Showcase Dock

This was created when BOB wanted to make a window with sunlight coming through it like he saw in other showcases (because the lighting system back then was pretty minimalistic compared to how it is now). This **is** the oldest part of the game, the second oldest being the stage (more or less). This was created in the now no longer existent Roblox Legacy lighting technology and that is why it does not look as good as it did when it was made. It is very unlikely that this dock will ever be removed.

| Value Name                 | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean) |
| Reserved Dock Entrance     |  |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Open`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#open)} |
| Side Placed On             | [`2`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Showcase%20Dock.png)

## Showcase Remastered Dock

This is recreation of the old window showcase. This one was made in the late beta of the newest Roblox lighting technology. BOB decided to make this dock just for the fun of it seeing as the old one doesn't look as good as it did when it was made.

| Value Name                 | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean) |
| Reserved Dock Entrance     |  |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Open`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#open)} |
| Side Placed On             | [`2`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Showcase%20Remastered%20Dock.png)

## The Stage

The stage is one of the oldest docks in the game. It is not as old as the original window showcase but it is older than anything besides that still in the game. 

This dock has a long history of not actually being in the game. Although nowadays BOB can barely remember the reasons for this, he assumed that the dock was removed temporarily because he probably wanted to remake it at the time (which he did eventually end up doing in [`V3`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#rbap-version) of the game). The reason also could have been because of lag or some code of it needing to be updated when BOB didn't feel like it.

The design of the stage has changed a little bit over the years. Here's a list of those changes or at least the ones BOB can remember:

**Note:** The list below is not really in any order and is just based off what BOB remembers so it could very well be inaccurate to an extent.
{: .notice--warning}

| Change |
|-|
| The three rings on the wall above and around the center area were removed. |
| A theater-like sign was added to the wall above the center area. |
| A thing that was originally going to shoot out confetti (for unknown reasons) was added to the ceiling of the stage right above the end of the walkway nearest to the entrance. |
| The thing described in the last change was removed and replaced with a disco ball. |
| Music waves or whatever you want to call them were added. |
| The three rings were added back and merged with the theater-like sign when the stage got revamped. |
| The disco ball was removed. |

| Value Name                 | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean) |
| Reserved Dock Entrance     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) - This is set to 1 due to it causing technical issues if it is bigger but the stage does take up more than 1 dock entrance. |
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Open`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#open)} |
| Side Placed On             | [`0.1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Stage%20Dock.png)

## Weird Hills Dock

BOB can never be sure why exactly he made this dock as he doesn't remember why and he can't think of any reason.

| Value Name                 | Value |
|-|-|
| Can Be Found In Game       | [`True`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#boolean) |
| Reserved Dock Entrance     |  |
| Dock Entrances Used Up     | [`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |
| Dock Entrances Centered On | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number)} |
| Dock Types                 | {[`1`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) = [`Open`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Dock-Types#open)} |
| Side Placed On             | [`2`](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Wiki/Value-Types#number) |

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Weird%20Hills%20Dock.png)

# Joke Docks

**Warning! If you are on BOB's Roblox friends list the following contains spoilers** to stuff you may accidentally come across.
{: .notice--danger}

Docks that are considered joke docks only appear in a special server in RBAP and completely don't exist on any other server. Each joke currently has its own dock type that also will only appear in that server and completely doesn't exist in any other servers. The special server is only accessible to people on BOB's Roblox friends list.

## 404 Dock Not Found Dock

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Joke%20Docks/404%20Dock%20Not%20Found%20Dock.png)

## Default Roblox Base Plate Dock

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Joke%20Docks/Default%20Roblox%20Base%20Plate%20Dock.png)

## Lazy Dock

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Joke%20Docks/Lazy%20Dock.png)

## Other No Standing Joke Dock

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Joke%20Docks/Other%20No%20Standing%20Joke%20Dock.png)

## Statue Of BOB Dock

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Joke%20Docks/Statue%20Of%20BOB%20Dock.png)

## Weird Character Physics Dock

![](https://bobdevstudio.github.io/_New-RBAP-Wiki-Test/Assets/Images/Dock-Images/Joke%20Docks/Weird%20Character%20Physics%20Dock.png)
