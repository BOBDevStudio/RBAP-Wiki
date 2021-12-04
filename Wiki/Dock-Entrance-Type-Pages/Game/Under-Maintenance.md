---
permalink: /Wiki/Dock-Entrance-Types/Under-Maintenance
title: "Dock Entrance Type: Under Maintenance"
redirect_from:
  - /Wiki/Dock-Entrance-Types/Under-Maintenance
page_categories:
  generic_dock_entrance_type: true
mentioned_game_content:
  last_status_check: "Wiki update for RBAP update [`V5.2`](/Posts/Update-Log/5-2-0)"
sidebars:
  page_subject_info:
    title: "Under Maintenance"
#    color: "#a3a2a5" -- Needs color
#    titles_text_color: "#FFFFFF"
    main_image:
      path: "/Assets/Images/Dock-Entrance-Types/Under-Maintenance.png"
#    description: ""
    data:
    - title: "Dock Entrance Type Data"
      data:
      - key: "Sign Text"
        value: "`This dock is currently under maintenance`"
      - key: "Is System Dock"
        value: "`False`"
      - key: "Is Bridge Down"
        value: "`False`"
      - key: "Is Gate Down"
        value: "`False`"
      - key: "Main Light 1 On"
        value: "`False`"
      - key: "Main Light 1 Color"
        color_image:
          name: "Red"
          dock_entrance_type_color: true
      - key: "Main Light 2 On"
        value: "`True`"
      - key: "Main Light 2 Color"
        color_image:
          name: "Yellow"
          dock_entrance_type_color: true
      - key: "Main Light 3 On"
        value: "`False`"
      - key: "Main Light 3 Color"
        color_image:
          name: "Green"
          dock_entrance_type_color: true
      - key: "Warning Light 1 Light On"
        value: "*Default (unset)*"
      - key: "Warning Light 1 Spinning"
        value: "*Default (unset)*"
      - key: "Warning Light 1 Color"
        value: "*Default (unset)*"
      - key: "Warning Light 1 Speed"
        value: "*Default (unset)*"
      - key: "Warning Light 2 Light On"
        value: "*Default (unset)*"
      - key: "Warning Light 2 Spinning"
        value: "*Default (unset)*"
      - key: "Warning Light 2 Color"
        value: "*Default (unset)*"
      - key: "Warning Light 2 Speed"
        value: "*Default (unset)*"
      - key: "Gate Color 1"
        value: "*Default (unset)*"
      - key: "Gate Color 2"
        value: "*Default (unset)*"
---

This dock entrance type is one of the [generic dock entrance types]({{- "/Pages-Categories/Ease-Of-Access/Generic-Dock-Entrance-Types" | relative_url -}}). This dock entrance type is used when a dock is in need of maintenance in some way. An example of this being used is when the code running a dock stops working for whatever reason. This dock entrance type isn't used too often anymore as it has been largely replaced by a system that can prevent docks from being loaded without having to update the game.

| Value Name               | Value |
|-|-|
| Sign Text                | `This dock is currently under maintenance` |
| Is System Dock           | `False` |
| Is Bridge Down           | `False` |
| Is Gate Down             | `False` |
| Main Light 1 On          | `False` |
| Main Light 1 Color       | {%- include color-image fordockentrancetypecolor=true name="Red" alt="" -%} |
| Main Light 2 On          | `True` |
| Main Light 2 Color       | {%- include color-image fordockentrancetypecolor=true name="Yellow" alt="" -%} |
| Main Light 3 On          | `False` |
| Main Light 3 Color       | {%- include color-image fordockentrancetypecolor=true name="Green" alt="" -%} |
| Warning Light 1 Light On | *Default (unset)* |
| Warning Light 1 Spinning | *Default (unset)* |
| Warning Light 1 Color    | *Default (unset)* |
| Warning Light 1 Speed    | *Default (unset)* |
| Warning Light 2 Light On | *Default (unset)* |
| Warning Light 2 Spinning | *Default (unset)* |
| Warning Light 2 Color    | *Default (unset)* |
| Warning Light 2 Speed    | *Default (unset)* |
| Gate Color 1             | *Default (unset)* |
| Gate Color 2             | *Default (unset)* |
{: .psi-panel-alternative}

<img src="{{- "Assets/Images/Dock-Entrance-Types/Under-Maintenance.png" | relative_url -}}" alt="">