---
permalink: /Wiki/Docks
title: Docks
redirect_from:
  - /Wiki/Docks
listed_page_category: "docks_category_page"
#page_categories:
#  dock_page: true
mentioned_game_content:
  last_status_check: "Wiki update for RBAP update [`V5.2`](/Posts/Update-Log/5-2-0)"
---

What is a dock? Docks are where BOB showcases his building skills and sometimes his scripting skills. There are many docks in the game and some are years old while others are only months old. Some docks can even be interacted with and those are called Interactive Docks (which you usually see mentioned somewhere in the first paragraph of a dock's page).

Starting [`V3`]({{- "/Posts/Update-Log/3-0-0" | relative_url -}}) *most* docks started getting automatically placed by the newly added Dock Placing System. And with [`V3.1.1`]({{- "/Posts/Update-Log/3-1-1" | relative_url -}}) *all* docks started getting automatically placed. And then [`V5`]({{- "/Posts/Update-Log/5-0-0" | relative_url -}}) docks could be live removed and added due to the old Dock Placing System being officially retired and replaced with the Dock System (which is still in active use to this day).

Most docks don't have any set positions on where they will be placed so for docks like that the system will place them in alphabetical order. So that means most docks are placed completely randomly and can be moved at any time.

### Here's a list of each of the dock data values:

| Name | Value Type | Description |
|-|-|-|
| Reserved Dock Entrance	| Number or none																		| This is the predetermined id of the dock entrance where the dock will be placed at. If this value is blank the system will pick the next available dock entrance on the side specified by the `Side Placed On` value. |
| Entrances Used			| Number																				| This specifies the amount of dock entrances that need to be reserved to a dock because of its size. |
| Dock Entrance Types Used	| List of [`Dock Entrance Types`]({{- "/Wiki/Dock-Entrance-Types" | relative_url -}})	| For each dock entrance that is taken up by a dock this value specifies what the dock entrance type of each of those dock entrances is. |
| Side Placed On			| Side name																				| The side of the map the dock is to be placed on. |

## Here's the list of categories of docks:
