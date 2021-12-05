---
permalink: /wiki/dock-entrance-types/main-build-purchases-closed
title: "Dock Entrance Type: Main Build Purchases Closed"
redirect_from:
  - /Wiki/Dock-Entrance-Types/Main-Build-Purchases-Closed
mentioned_game_content:
  last_status_check: "Wiki update for RBAP update [`V5.2`](/wiki/posts/update-log/5-2-0)"
sidebars:
  page_subject_info:
    title: "Main Build Purchases Closed"
#    color: "#a3a2a5" -- Needs color
#    titles_text_color: "#FFFFFF"
    main_image:
      path: "/Assets/Images/Dock-Entrance-Types/Main-Build-Purchases-Closed.png"
#    description: ""
    data:
    - title: "Dock Entrance Type Data"
      data:
      - key: "Sign Text"
        value: "`This dock is currently closed due to the fact that purchases do not work in this build of the game`"
      - key: "Is System Dock"
        value: "`False`"
      - key: "Is Bridge Down"
        value: "`True`"
      - key: "Is Gate Down"
        value: "`False`"
      - key: "Main Light 1 On"
        value: "`True`"
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

This dock entrance type's purpose is to close off a dock that has purchases. The reason for this is because many of the things you can purchase in game (or actually all of them currently) are uploaded to the main build of the game instead of other special builds of the game like pre-update build. Roblox *theoretically* (or at least logically) allows purchases to be made if the asset behind the purchase is owned by the same thing as the game but in reality BOB has found this functionality to be broken or nonexistent.

This dock entrance type can never be found inside of the main build but can be found in other special builds of the game (with the exception of the dev build (for debugging purposes)). It is currently only being applied to the [Donations Dock]({{- "/Wiki/Docks/Donations-Dock" | relative_url -}}) for the reasons listed above.

| Value Name               | Value |
|-|-|
| Sign Text                | `This dock is currently closed due to the fact that purchases do not work in this build of the game` |
| Is System Dock           | `False` |
| Is Bridge Down           | `True` |
| Is Gate Down             | `False` |
| Main Light 1 On          | `True` |
| Main Light 1 Color       | {%- include color-image fordockentrancetypecolor=true name="Red" alt="" -%} |
| Main Light 2 On          | `False` |
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

<img src="{{- "Assets/Images/Dock-Entrance-Types/Main-Build-Purchases-Closed.png" | relative_url -}}" alt="">