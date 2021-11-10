---
title: Docks
listed_page_category: "docks_category_page"
#page_categories:
#  dock_page: true
---

What is a dock? Docks are where BOB showcases his building skills and sometimes his scripting skills.

In the current version of the Random Buildings And Parts most docks are automatically placed by a system that was introduced in [`V3`](/RBAP-Wiki/Posts/Update-Log/3-0-0) of the game. Most docks don't have any set positions on where they will be placed so for docks like that the system will place them in alphabetical order. So that means most docks are placed completely randomly and can be moved anytime.

### Here's a list of each of the dock data values:

| Name                   | Value Type                                          | Description |
|-|-|-|
| Reserved Dock Entrance | Number or none                                      | This is the predetermined id of the dock entrance where the dock will be placed at. If this value is blank the system will pick the next available dock entrance on the side specified by the `Side Placed On` value. |
| Entrances Used         | Number                                              | This specifies the amount of dock entrances that need to be reserved to a dock because of its size. |
| Dock Entrance Types Used        | Table of [`Dock Entrance Types`](/RBAP-Wiki/Wiki/Dock-Entrance-Types) | For each dock entrance that is taken up by a dock this value specifies what the dock entrance type of each of those dock entrances is. |
| Side Placed On         | Side name                                           | The side of the map the dock is to be placed on. |

## Here's the list of categories of docks:
