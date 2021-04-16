---
title: Dock Types
redirect_from:
  - /Wiki/Dock-types
  - /Wiki/dock-Types
  - /Wiki/dock-types
  - /wiki/Dock-Types
  - /wiki/Dock-types
  - /wiki/dock-Types
  - /wiki/dock-types
  - /Wiki/Dock-Types/
  - /Wiki/Dock-types/
  - /Wiki/dock-Types/
  - /Wiki/dock-types/
  - /wiki/Dock-Types/
  - /wiki/Dock-types/
  - /wiki/dock-Types/
  - /wiki/dock-types/
  - /Dock-Types
  - /Dock-types
  - /dock-Types
  - /dock-types
  - /Dock-Types/
  - /Dock-types/
  - /dock-Types/
  - /dock-types/
---

What is a dock type? A dock type is the status of the dock entrance that a dock is connected to. Usually it isn't something that describes the dock unless it is something like a system dock. Dock types can set many appearance settings of the dock entrance for a dock; the list includes stuff like light colors, lights that are on, the text the text shown on the sign, and more.

What is a system dock? System docks are currently being classified as docks that are not a thing for showcase purposes but rather for informational purposes or something else integrated with the game itself (an example of that is the server system dock). Each system dock gets its own custom dock type which the text of the sign is automatically prefixed with `[System Dock]:`.

### All the dock types currently in Random Buildings And Parts (base/main version) are as follows:
(It includes ones that cannot be seen in the game anywhere but are still listed because the code for them is still running in the game.)

| Dock Type |
|-|
| [Open](https://bobdevstudio.github.io/RBAP/Wiki/Dock-Types#open) |
| [Under Maintenance](https://bobdevstudio.github.io/RBAP/Wiki/Dock-Types#under-maintenance) |
| [Closed](https://bobdevstudio.github.io/RBAP/Wiki/Dock-Types#closed) |
| [On Cooldown](https://bobdevstudio.github.io/RBAP/Wiki/Dock-Types#on-cooldown) |
| [Seasonally Closed](https://bobdevstudio.github.io/RBAP/Wiki/Dock-Types#seasonally-closed) |
| [Temporary Dock Location](https://bobdevstudio.github.io/RBAP/Wiki/Dock-Types#temporary-dock-location) |
| [Dock Preview](https://bobdevstudio.github.io/RBAP/Wiki/Dock-Types#temporary-dock-location) |
| [Server Dock](https://bobdevstudio.github.io/RBAP/Wiki/Dock-Types#server-dock) |
| [Hidden Dock](https://bobdevstudio.github.io/RBAP/Wiki/Dock-Types#hidden-dock) |

## Open

This is the generic open dock type. It is pretty self-explanatory why it is used.

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`True`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Sign Text            | [`This dock is currently open`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`True`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`True`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Lights On            | {`Light3`} |
| `Light1` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light2` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Yellow.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light3` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Green.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 1         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 2         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/White.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |

![](https://bobdevstudio.github.io/RBAP/Assets/Images/Dock-Type-Images/Open.png)

## Under Maintenance

This is the generic under maintenance dock type. This dock type is used when a dock is in need of maintenance In some way; an example of that is when the code running a dock stops working for whatever reason.

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`True`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Sign Text            | [`This dock is currently under maintenance`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Lights On            | {`Light2`} |
| `Light1` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light2` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Yellow.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light3` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Green.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 1         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 2         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/White.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |

![](https://bobdevstudio.github.io/RBAP/Assets/Images/Dock-Type-Images/Under%20Maintenance.png)

## Closed

This is the generic closed dock type. It is pretty self-explanatory why it is used. Also here's a fun fact before the game loads in the docks all docks entrances are set to this dock type.

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`True`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Sign Text            | [`This dock is currently closed`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Lights On            | {`Light1`} |
| `Light1` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light2` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Yellow.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light3` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Green.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 1         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 2         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/White.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |

![](https://bobdevstudio.github.io/RBAP/Assets/Images/Dock-Type-Images/Closed.png)

## On Cooldown

This dock type was originally added for the mine dock but the idea of using it there was later scrapped before the update that it was in came out so this dock type was never actually used. It still has a possibility of being used (that is why it's still in the game) but is unlikely.

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`Falue`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Sign Text            | [`This dock is currently on cooldown`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Lights On            | {`Light1`} |
| `Light1` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light2` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Blue.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light3` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Green.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 1         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 2         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/White.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |

![](https://bobdevstudio.github.io/RBAP/Assets/Images/Dock-Type-Images/Cooldown.png)

## Seasonally Closed

This dock type was used in the winter of 2019 to 2020 due to snow going through covered areas. Since show falling hasn't made a return yet this dock type has yet to be used again.

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`Falue`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Sign Text            | [`This dock is currently closed for the season`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Lights On            | {`Light1`} |
| `Light1` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light2` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Yellow.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light3` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Green.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 1         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 2         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/White.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |

![](https://bobdevstudio.github.io/RBAP/Assets/Images/Dock-Type-Images/Seasonally%20Closed.png)

## Temporary Dock Location

This dock type Indicates that the current location of the dock connected to it is not its permanent location.

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`True`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Sign Text            | [`This dock entrance is currently the temporary location for this dock`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`True`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`True`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Lights On            | {`Light3`} |
| `Light1` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light2` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Yellow.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light3` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Green.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 1         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 2         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/White.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |

![](https://bobdevstudio.github.io/RBAP/Assets/Images/Dock-Type-Images/Temporary%20Location.png)

## Dock Preview

This dock type is used when BOB wants to showcase a dock but it isn't quite finished being worked on.

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Sign Text            | [`This dock is only a preview and is not yet fully in the game yet`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Lights On            | {`Light1`} |
| `Light1` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light2` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Yellow.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light3` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Green.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 1         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 2         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/White.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |

![](https://bobdevstudio.github.io/RBAP/Assets/Images/Dock-Type-Images/Dock%20Preview.png)

## Server Dock

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`True`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Sign Text            | [`[Server Dock]: This dock contains statistics about the server and the game`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#string) |
| Is System Dock       | [`True`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) - [Server And Game Info Dock](https://bobdevstudio.github.io/RBAP/Wiki/Docks#server-and-game-info-dock) |
| Is Bridge Down       | [`True`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`True`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Lights On            | {`Light1`, `Light2`, and `Light3`} |
| `Light1` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/White.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light2` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/White.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light3` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/White.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 1         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 2         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/White.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |

![](https://bobdevstudio.github.io/RBAP/Assets/Images/Dock-Type-Images/Server%20Dock.png)

## Hidden Dock

Hidden docks are docks that are hidden by default unless they are triggered to appear by some in game event. There are currently none in the game as previous ones were removed in [`V3`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#rbap-version) of the game due to limitations of newly-implemented systems (like the dock placing system).

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Sign Text            | [`This dock is currently open`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`True`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`True`](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#boolean) |
| Lights On            | {`Light3`} |
| `Light1` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light2` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Yellow.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| `Light3` Color       | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Purple.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 1         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/Red.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |
| Gate Color 2         | [![](https://bobdevstudio.github.io/RBAP/Assets/Images/Color-Images/White.png)](https://bobdevstudio.github.io/RBAP/Wiki/Value-Types#color) |

![](https://bobdevstudio.github.io/RBAP/Assets/Images/Dock-Type-Images/Hidden%20Dock.png)
