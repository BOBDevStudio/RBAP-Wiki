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
| [Main Build Purchases Closed](/RBAP-Wiki/Wiki/Dock-Types/Category/In-Game#main-build-purchases-closed) |
| [Server Dock](/RBAP-Wiki/Wiki/Dock-Types/Category/In-Game#server-dock) |
| [Update Logs Dock](/RBAP-Wiki/Wiki/Dock-Types/Category/In-Game#update-logs-dock) |

## Open

This is the generic open dock type. It is pretty self-explanatory why it is used.

| Value Name           | Value |
|-|-|
| Sign Text            | [`This dock is currently open`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 2 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 3 On           | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Light 2 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Yellow.png" alt=""></a> |
| Light 3 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Green.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Open.png" alt="">

## Under Maintenance

This is the generic under maintenance dock type. This dock type is used when a dock is in need of maintenance in some way. An example of this being used is when the code running a dock stops working for whatever reason. This dock type isn't used too often anymore as it has been largely replaced by a system that can prevent docks from being loaded without having to update the game.

| Value Name           | Value |
|-|-|
| Sign Text            | [`This dock is currently under maintenance`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 2 On           | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 3 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Light 2 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Yellow.png" alt=""></a> |
| Light 3 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Green.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Under%20Maintenance.png" alt="">

## Closed

This is the generic closed dock type. It is pretty self-explanatory why it is used. Also here's a fun fact before the game loads in the docks all docks entrances are set to this dock type.

| Value Name           | Value |
|-|-|
| Sign Text            | [`This dock is currently closed`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 On           | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 2 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 3 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Light 2 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Yellow.png" alt=""></a> |
| Light 3 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Green.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Closed.png" alt="">

## Main Build Purchases Closed

This dock type's purpose is to close off a dock that has purchases. The reason for this is because many of the things you can purchase in game (or actually all of them at the time of writing) are uploaded to the main build of the game instead of other special builds of the game like pre-update build. Roblox *theoretically* (or at least logically) allows purchases to be made if the asset behind the purchase is owned by the same thing as the game but in reality BOB has found this functionality to be broken or nonexistent.

This dock type can never be found inside of the main build but can be found in other special builds of the game (with the exception of the dev build (for debugging purposes)). It is currently only being applied to the [donations dock](/RBAP-Wiki/Wiki/Docks/Category/In-Game#donation-dock) for the reasons listed above.

| Value Name           | Value |
|-|-|
| Sign Text            | [`This dock is currently closed due to the fact that purchases do not work in this build of the game`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 On           | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 2 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 3 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Light 2 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Yellow.png" alt=""></a> |
| Light 3 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Green.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Main%20Build%20Purchases%20Closed.png" alt="">

## Server Dock

| Value Name           | Value |
|-|-|
| Sign Text            | [`[Server Dock]: This dock contains statistics about the server and the game`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) - [Server And Game Info Dock](/RBAP-Wiki/Wiki/Docks/Category/In-Game#server-and-game-info-dock) |
| Is Bridge Down       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 On           | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 2 On           | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 3 On           | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |
| Light 2 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |
| Light 3 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Server%20Dock.png" alt="">

## Update Logs Dock

| Value Name           | Value |
|-|-|
| Sign Text            | [`[Update Logs Dock]: This dock contains Random Buildings And Parts update logs`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) - [Update Logs Dock](/RBAP-Wiki/Wiki/Docks/Category/In-Game#update-logs-dock) |
| Is Bridge Down       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 On           | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 2 On           | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 3 On           | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Orange.png" alt=""></a> |
| Light 2 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |
| Light 3 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Orange.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Update%20Logs%20Dock.png" alt="">
