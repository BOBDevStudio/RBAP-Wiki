---
permalink: /Wiki/Dock-Entrance-Types
title: Dock Entrance Types
redirect_from:
  - /Wiki/Dock-Entrance-Types
listed_page_category: "dockentrancetypes_category_page"
#page_categories:
#  dockentrancetype_page: true
mentioned_game_content:
  last_status_check: "Wiki update for RBAP update [`V5.2`](/wiki/posts/update-log/5-2-0)"
---

What is a dock entrance type? A dock entrance type is the status of the dock entrance that a dock is connected to. Usually it isn't something that describes the dock unless it is something like a system dock. Dock types can set many appearance settings of the dock entrance for a dock. The list includes stuff like light colors, lights that are on, the text shown on the sign, and more. Currently the text of the sign on each dock entrance is automatically made entirely uppercase.

What is a system dock? System docks are currently being classified as docks that are not a thing for showcase purposes but rather for informational purposes or something else integrated with the game itself (an example of that is the [server system dock]({{- "/Wiki/Docks/Category/In-Game#server-and-game-info-dock" | relative_url -}})). Each system dock gets its own custom dock entrance type which the text of the sign is automatically prefixed with `[System Dock]:`.

## Dock Entrance Type Data Default Values:

The following list is a list of the default values for dock entrance type data values. When a dock entrance type data value on a dock entrance type page says "*Default (unset)*" it means the value from this list will be used. If a dock entrance type does not specify a value for a dock entrance type data value then the value from this list will be used hence the word unset being used to describe the default value as mentioned earlier. (If a value on this list is blank then that means no default exists for that dock entrance type data value.)

| Value Name               | Value |
|-|-|
| Sign Text                |  |
| Is System Dock           |  |
| Is Bridge Down           |  |
| Is Gate Down             |  |
| Main Light 1 On          | `False` |
| Main Light 1 Color       | {%- include color-image fordockentrancetypecolor=true name="Red" alt="" -%} |
| Main Light 2 On          | `False` |
| Main Light 2 Color       | {%- include color-image fordockentrancetypecolor=true name="Yellow" alt="" -%} |
| Main Light 3 On          | `False` |
| Main Light 3 Color       | {%- include color-image fordockentrancetypecolor=true name="Green" alt="" -%} |
| Warning Light 1 Light On | `False` |
| Warning Light 1 Spinning | `False` |
| Warning Light 1 Color    | {%- include color-image fordockentrancetypecolor=true name="White" alt="" -%} |
| Warning Light 1 Speed    | `100%` |
| Warning Light 2 Light On | `False` |
| Warning Light 2 Spinning | `False` |
| Warning Light 2 Color    | {%- include color-image fordockentrancetypecolor=true name="White" alt="" -%} |
| Warning Light 2 Speed    | `100%` |
| Gate Color 1             | {%- include color-image fordockentrancetypecolor=true name="Red" alt="" -%} |
| Gate Color 2             | {%- include color-image fordockentrancetypecolor=true name="White" alt="" -%} |

### Here's the list of categories of dock entrance types:
