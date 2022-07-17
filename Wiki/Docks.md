---
permalink: /wiki/docks
title: "Docks"
redirect_from:
  - /Wiki/Docks
  - /Pages-Categories/Ease-Of-Access/Docks
  - /wiki/pages-categories/ease-of-access/docks
easy_links:
  list:
    - link_name: "Docks"
      search:
        name: "Docks"
listed_page_category: "DockPage"
mentioned_game_content:
  last_status_check: "Wiki update for RBAP update <code>RBAP Update / V5.2.0</code>"
history:
  - time: "<code>RBAP Update / V3.0.0</code>"
    changes:
      - "Added the Dock Placing System which automatically handles the placing of all docks except for the middle docks."
  - time: "<code>RBAP Update / V3.1.1</code>"
    changes:
      - "Fixed a mistake that would have messed up how the docks are placed and which ones are placed at which dock entrance."
      - "The Dock Placing System now handles the placing of *all* docks."
      - "Changed the way that docks with no reserved dock entrance get placed to be alphabetical (to a certain degree at least)."
  - time: "<code>RBAP Update / V3.1.2</code>"
    changes:
      - "The Dock Placing System now handles the rotation of docks."
  - time: "<code>RBAP Update / V4.0.0</code>"
    changes:
      - "Added support to the Dock Placing System for stand-alone docks that only appear with a set chance."
      - "Added support to the Dock Placing System for the ability to have different versions of docks replace their counterpart with a set chance of it happening."
      - "Added support to the Dock Placing System for the ability to have dock entrances be considered reserved even if no dock actually uses said dock entrance(s)."
      - "Secretly added (likely) 2 docks that take advantage of the new functionality of the Dock Placing System."
      - "Unless explicitly disabled on a per-dock basis any parts in a dock that are affected by physics will now have their physics forced to be rendered by the server."
      - "Fixed a major bug with the reserved docks system of the Dock Placing System."
  - time: "??? (likely <code>RBAP Update / V5.0.0</code>)"
    changes:
      - "Removed the secret docks added in <code>RBAP Update / V4.0.0</code> (which were the only ones that existed)."
  - time: "<code>RBAP Update / V4.1.1</code>"
    changes:
      - "Added some minor unused functionality to the Dock Placing System."
  - time: "<code>RBAP Update / V5.0.0</code>"
    changes:
      - "Removed the Dock Placing System."
      - "Added the Dock System (to take over control of docks)."
      - "Dock entrances 1, 2, and 3 on the map’s main sides 1 and 2 are now reserved for docks with reserved dock entrances."
      - "New docks will now temporarily be placed near the entrance elevator."
---

What is a dock? Docks are where BOB showcases his building skills and sometimes his scripting skills. There are many docks in the game and some are years old while others are only months old. Some docks can even be interacted with and those are called Interactive Docks (which you usually see mentioned somewhere in the first paragraph of a dock's page).

Starting <code>RBAP Update / V3.0.0</code> *most* docks started getting automatically placed by the newly added Dock Placing System. And with <code>RBAP Update / V3.1.1</code> *all* docks started getting automatically placed. And then <code>RBAP Update / V5.0.0</code> docks could be live removed and added due to the old Dock Placing System being officially retired and replaced with the Dock System (which is still in active use to this day).

Most docks don't have any set positions on where they will be placed so for docks like that the system will place them in alphabetical order. So that means most docks are placed completely randomly and can be moved at any time.

# Here's the list of each of the dock data values:

| Name | Value Type | Description |
|-|-|-|
| Reserved Dock Entrance	| Number or none										| This is the predetermined id of the dock entrance where the dock will be placed at. If this value is blank the system will pick the next available dock entrance on the side specified by the `Side Placed On` value. |
| Entrances Used			| Number												| This specifies the amount of dock entrances that need to be reserved to a dock because of its size. |
| Dock Entrance Types Used	| List of <code>Global / Docks Entrance Types</code>	| For each dock entrance that is taken up by a dock this value specifies what the dock entrance type of each of those dock entrances is. |
| Side Placed On			| Side name												| The side of the map the dock is to be placed on. |

# History

{% include history %}

# Sorted docks list pages

For your convenience some pages exist on the wiki that further sort the list of docks. The list includes:

* <code>Global / Docks / Game</code>
* <code>Global / Docks / Removed</code>

# Here's the list of docks:
{: .pages-in-page-category-lists-header}