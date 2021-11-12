---
permalink: /Wiki/Dock-Entrance-Types/Open
title: "Dock Entrance Type: Open"
page_subject_info:
  title: "Open"
#  color: "#a3a2a5" -- Needs color
#  titles_text_color: "#FFFFFF"
  main_image:
    path: "/Assets/Images/Dock-Entrance-Types/Open.png"
#  description: ""
  data:
    - title: "Dock Entrance Type Data"
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
        - key: "Main Light 1 Color"
          color_image:
            name: "Red"
            dock_entrance_type_color: true
        - key: "Main Light 2 On"
          value: "`False`"
        - key: "Main Light 2 Color"
          color_image:
            name: "Yellow"
            dock_entrance_type_color: true
        - key: "Main Light 3 On"
          value: "`True`"
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

This is the generic open dock entrance type. It is pretty self-explanatory why it is used.

| Value Name               | Value |
|-|-|
| Sign Text                | `This dock is currently open` |
| Is System Dock           | `False` |
| Is Bridge Down           | `True` |
| Is Gate Down             | `True` |
| Main Light 1 On          | `False` |
| Main Light 1 Color       | {%- include color-image fordockentrancetypecolor=true name="Red" alt="" -%} |
| Main Light 2 On          | `False` |
| Main Light 2 Color       | {%- include color-image fordockentrancetypecolor=true name="Yellow" alt="" -%} |
| Main Light 3 On          | `True` |
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

<img class="dock-entrance-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Entrance-Types/Open.png" alt="">