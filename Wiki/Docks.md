---
title: Docks
listed_page_category: "docks_category_page"
#page_categories:
#  dock_page: true
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

In the current version of the Random Buildings And Parts most docks are automatically placed by a system that was introduced in [`V3`](/RBAP-Wiki/Posts/Update-Log/3-0-0) of the game. Most docks don't have any set positions on where they will be placed so for docks like that the system will place them in alphabetical order. So that means most docks are placed completely randomly and can be moved anytime.

### Here's a list of each of the dock data values:

| Value                  | Type                                                                                            | Description |
|-|-|-|
| Reserved Dock Entrance | [`Number`](/RBAP-Wiki/Wiki/Value-Types#number)/[`Blank`](/RBAP-Wiki/Wiki/Value-Types#blank)     | This is the predetermined id of the dock entrance where the dock will be placed at. If this value is blank the system will pick the next available dock entrance on the side specified by the `Side Placed On` value. |
| Entrances Used         | [`Number`](/RBAP-Wiki/Wiki/Value-Types#number)                                                  | This specifies the amount of dock entrances that need to be reserved to a dock because of its size. |
| Entrances Centered On  | [`Array`](/RBAP-Wiki/Wiki/Value-Types#array) of [`Numbers`](/RBAP-Wiki/Wiki/Value-Types#number) | Without going into the very technical details about this this specifies what dock entrances (of the `Dock Entrances Used Up` value) the dock is to be centered on. |
| Dock Types Used        | [`Table`](/RBAP-Wiki/Wiki/Value-Types#table) of [`Dock Types`](/RBAP-Wiki/Wiki/Dock-Types)      | For each dock entrance that is taken up by a dock this value specifies what the dock type of each of those dock entrances is. |
| Side Placed On         | [`Number`](/RBAP-Wiki/Wiki/Value-Types#number)                                                  | The side of the map the dock is to be placed on. Currently supported: `1` = `Side 1`, `2` = `Side 2`, `0.1` = `Side 1 of the middle`, and `0.2` = `Side 2 of the middle` |

## Here's the list of categories of docks:
