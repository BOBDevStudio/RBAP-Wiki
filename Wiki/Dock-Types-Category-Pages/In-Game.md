---
permalink: /Wiki/Dock-Types/Category/In-Game
title: "Dock Types: In-Game"
sidebar:
  nav: "Wiki_DockTypesCategory_InGame"
---

### Dock types in this category:

| Dock Type |
|-|
| [Open](/RBAP-Wiki/Wiki/Dock-Types/Category/In-Game#open) |
| [Under Maintenance](/RBAP-Wiki/Wiki/Dock-Types/Category/In-Game#under-maintenance) |
| [Closed](/RBAP-Wiki/Wiki/Dock-Types/Category/In-Game#closed) |
| [Server Dock](/RBAP-Wiki/Wiki/Dock-Types/Category/In-Game#server-dock) |

## Open

This is the generic open dock type. It is pretty self-explanatory why it is used.

| Value Name           | Value |
|-|-|
| Sign Text            | [`This dock is currently open`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Lights On            | {`Light 3`} |
| `Light 1` Color      | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| `Light 2` Color      | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Yellow.png" alt=""></a> |
| `Light 3` Color      | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Green.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Open" alt="">

## Under Maintenance

This is the generic under maintenance dock type. This dock type is used when a dock is in need of maintenance In some way; an example of that is when the code running a dock stops working for whatever reason.

| Value Name           | Value |
|-|-|
| Sign Text            | [`This dock is currently under maintenance`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Lights On            | {`Light 2`} |
| `Light 1` Color      | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| `Light 2` Color      | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Yellow.png" alt=""></a> |
| `Light 3` Color      | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Green.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Under%20Maintenance" alt="">

## Closed

This is the generic closed dock type. It is pretty self-explanatory why it is used. Also here's a fun fact before the game loads in the docks all docks entrances are set to this dock type.

| Value Name           | Value |
|-|-|
| Sign Text            | [`This dock is currently closed`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Lights On            | {`Light 1`} |
| `Light 1` Color      | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| `Light 2` Color      | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Yellow.png" alt=""></a> |
| `Light 3` Color      | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Green.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Closed" alt="">

## Server Dock

| Value Name           | Value |
|-|-|
| Sign Text            | [`[Server Dock]: This dock contains statistics about the server and the game`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) - [Server And Game Info Dock](/RBAP-Wiki/Wiki/Docks#server-and-game-info-dock) |
| Is Bridge Down       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Lights On            | {`Light 1`, `Light 2`, and `Light 3`} |
| `Light 1` Color      | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |
| `Light 2` Color      | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |
| `Light 3` Color      | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Server%20Dock" alt="">
