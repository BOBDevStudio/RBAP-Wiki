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
| [Open](/RBAP-Wiki/Wiki/Dock-Types#open) |
| [Under Maintenance](/RBAP-Wiki/Wiki/Dock-Types#under-maintenance) |
| [Closed](/RBAP-Wiki/Wiki/Dock-Types#closed) |
| [On Cooldown](/RBAP-Wiki/Wiki/Dock-Types#on-cooldown) |
| [Seasonally Closed](/RBAP-Wiki/Wiki/Dock-Types#seasonally-closed) |
| [Temporary Dock Location](/RBAP-Wiki/Wiki/Dock-Types#temporary-dock-location) |
| [Dock Preview](/RBAP-Wiki/Wiki/Dock-Types#temporary-dock-location) |
| [Server Dock](/RBAP-Wiki/Wiki/Dock-Types#server-dock) |
| [Hidden Dock](/RBAP-Wiki/Wiki/Dock-Types#hidden-dock) |

## Open

This is the generic open dock type. It is pretty self-explanatory why it is used.

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Sign Text            | [`This dock is currently open`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Lights On            | {`Light3`} |
| `Light1` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| `Light2` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Yellow.png" alt=""></a> |
| `Light3` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Green.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

![](/RBAP-Wiki/Assets/Images/Dock-Types/Open.png)

## Under Maintenance

This is the generic under maintenance dock type. This dock type is used when a dock is in need of maintenance In some way; an example of that is when the code running a dock stops working for whatever reason.

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Sign Text            | [`This dock is currently under maintenance`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Lights On            | {`Light2`} |
| `Light1` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| `Light2` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Yellow.png" alt=""></a> |
| `Light3` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Green.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

![](/RBAP-Wiki/Assets/Images/Dock-Types/Under%20Maintenance.png)

## Closed

This is the generic closed dock type. It is pretty self-explanatory why it is used. Also here's a fun fact before the game loads in the docks all docks entrances are set to this dock type.

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Sign Text            | [`This dock is currently closed`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Lights On            | {`Light1`} |
| `Light1` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| `Light2` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Yellow.png" alt=""></a> |
| `Light3` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Green.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

![](/RBAP-Wiki/Assets/Images/Dock-Types/Closed.png)

## On Cooldown

This dock type was originally added for the mine dock but the idea of using it there was later scrapped before the update that it was in came out so this dock type was never actually used. It still has a possibility of being used (that is why it's still in the game) but is unlikely.

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`Falue`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Sign Text            | [`This dock is currently on cooldown`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Lights On            | {`Light1`} |
| `Light1` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| `Light2` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Blue.png" alt=""></a> |
| `Light3` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Green.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

![](/RBAP-Wiki/Assets/Images/Dock-Types/Cooldown.png)

## Seasonally Closed

This dock type was used in the winter of 2019 to 2020 due to snow going through covered areas. Since show falling hasn't made a return yet this dock type has yet to be used again.

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`Falue`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Sign Text            | [`This dock is currently closed for the season`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Lights On            | {`Light1`} |
| `Light1` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| `Light2` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Yellow.png" alt=""></a> |
| `Light3` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Green.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

![](/RBAP-Wiki/Assets/Images/Dock-Types/Seasonally%20Closed.png)

## Server Dock

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Sign Text            | [`[Server Dock]: This dock contains statistics about the server and the game`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) - [Server And Game Info Dock](/RBAP-Wiki/Wiki/Docks#server-and-game-info-dock) |
| Is Bridge Down       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Lights On            | {`Light1`, `Light2`, and `Light3`} |
| `Light1` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |
| `Light2` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |
| `Light3` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

![](/RBAP-Wiki/Assets/Images/Dock-Types/Server%20Dock.png)

## Hidden Dock

Hidden docks are docks that are hidden by default unless they are triggered to appear by some in game event. There are currently none in the game as previous ones were removed in [`V3`](/RBAP-Wiki/Wiki/Value-Types#rbap-version) of the game due to limitations of newly-implemented systems (like the dock placing system).

| Value Name           | Value |
|-|-|
| Can Be Found In Game | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Sign Text            | [`This dock is currently open`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Lights On            | {`Light3`} |
| `Light1` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| `Light2` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Yellow.png" alt=""></a> |
| `Light3` Color       | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Purple.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

![](/RBAP-Wiki/Assets/Images/Dock-Types/Hidden%20Dock.png)
