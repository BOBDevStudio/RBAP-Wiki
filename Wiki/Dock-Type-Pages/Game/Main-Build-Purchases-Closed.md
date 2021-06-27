---
permalink: /Wiki/Dock-Types/Main-Build-Purchases-Closed
title: "Main Build Purchases Closed"
page_subject_info:
  title: "Main Build Purchases Closed"
  color: "#a3a2a5"
  titles_text_color: "#FFFFFF"
  main_image:
    path: "/Assets/Images/Dock-Types/Main-Build-Purchases-Closed.png"
#  description: ""
  data:
    - title: "Dock Type Data"
      data:
        - key: "Sign Text"
          value: "`This dock is currently closed due to the fact that purchases do not work in this build of the game`"
        - key: "Is System Dock"
          value: "`False`"
        - key: "Is Bridge Down"
          value: "`True`"
        - key: "Is Gate Down"
          value: "`False`"
        - key: "Light 1 On"
          value: "`True`"
        - key: "Light 2 On"
          value: "`False`"
        - key: "Light 3 On"
          value: "`False`"
        - key: "Light 1 Color"
          color_image:
            name: "Red"
            dock_type_color: true
        - key: "Light 2 Color"
          color_image:
            name: "Yellow"
            dock_type_color: true
        - key: "Light 3 Color"
          color_image:
            name: "Green"
            dock_type_color: true
        - key: "Gate Color 1"
          color_image:
            name: "Red"
            dock_type_color: true
        - key: "Gate Color 2"
          color_image:
            name: "White"
            dock_type_color: true
---

This dock type's purpose is to close off a dock that has purchases. The reason for this is because many of the things you can purchase in game (or actually all of them at the time of writing) are uploaded to the main build of the game instead of other special builds of the game like pre-update build. Roblox *theoretically* (or at least logically) allows purchases to be made if the asset behind the purchase is owned by the same thing as the game but in reality BOB has found this functionality to be broken or nonexistent.

This dock type can never be found inside of the main build but can be found in other special builds of the game (with the exception of the dev build (for debugging purposes)). It is currently only being applied to the [donations dock](/RBAP-Wiki/Wiki/Docks/Donation-Dock) for the reasons listed above.

| Value Name     | Value |
|-|-|
| Sign Text      | [`This dock is currently closed due to the fact that purchases do not work in this build of the game`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down   | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 On     | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 2 On     | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 3 On     | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 Color  | {%- include color-image fordocktypecolor=true name="Red" alt="" -%} |
| Light 2 Color  | {%- include color-image fordocktypecolor=true name="Yellow" alt="" -%} |
| Light 3 Color  | {%- include color-image fordocktypecolor=true name="Green" alt="" -%} |
| Gate Color 1   | {%- include color-image fordocktypecolor=true name="Red" alt="" -%} |
| Gate Color 2   | {%- include color-image fordocktypecolor=true name="White" alt="" -%} |
{: .psi-panel-alternative}

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Main-Build-Purchases-Closed.png" alt="">