---
permalink: /Wiki/Dock-Types/Hidden-Dock
title: "Dock Type: Hidden Dock"
page_subject_info:
  title: "Hidden Dock"
  color: "#a3a2a5"
  titles_text_color: "#FFFFFF"
  main_image:
    path: "/Assets/Images/Dock-Types/Hidden-Dock.png"
#  description: ""
  data:
    - title: "Dock Type Data"
      data:
        - key: "Sign Text"
          value: "`This dock is currently open`"
        - key: "Is System Dock"
          value: "`False`"
        - key: "Is Bridge Down"
          value: "`True`"
        - key: "Is Gate Down"
          value: "`True`"
        - key: "Main Light 1 On"
          value: "`False`"
        - key: "Main Light 2 On"
          value: "`False`"
        - key: "Main Light 3 On"
          value: "`True`"
        - key: "Main Light 1 Color"
          color_image:
            name: "Red"
            dock_type_color: true
        - key: "Main Light 2 Color"
          color_image:
            name: "Yellow"
            dock_type_color: true
        - key: "Main Light 3 Color"
          color_image:
            name: "Purple"
            dock_type_color: true
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

Hidden docks are docks that are hidden by default unless they are triggered to appear by some in-game event. There are currently none in the game that use this dock type as previous ones were removed in [`V3`](/RBAP-Wiki/Posts/Update-Log/3-0-0) of the game due to limitations of newly-implemented systems (like the dock placing system). Some of the limitations still have yet to be lifted as of [`V4`](/RBAP-Wiki/Posts/Update-Log/4-0-0) the most notable being the dock placing system.

| Value Name               | Value |
|-|-|
| Sign Text                | [`This dock is currently open`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock           | `False` |
| Is Bridge Down           | `True` |
| Is Gate Down             | `True` |
| Main Light 1 On          | `False` |
| Main Light 2 On          | `False` |
| Main Light 3 On          | `True` |
| Main Light 1 Color       | {%- include color-image fordocktypecolor=true name="Red" alt="" -%} |
| Main Light 2 Color       | {%- include color-image fordocktypecolor=true name="Yellow" alt="" -%} |
| Main Light 3 Color       | {%- include color-image fordocktypecolor=true name="Purple" alt="" -%} |
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

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Hidden-Dock.png" alt="">