---
permalink: /Wiki/Dock-Types/Under-Maintenance
title: "Dock Type: Under Maintenance"
page_subject_info:
  title: "Under Maintenance"
  color: "#a3a2a5"
  titles_text_color: "#FFFFFF"
  main_image:
    path: "/Assets/Images/Dock-Types/Under-Maintenance.png"
#  description: ""
  data:
    - title: "Dock Type Data"
      data:
        - key: "Sign Text"
          value: "`This dock is currently under maintenance`"
        - key: "Is System Dock"
          value: "`False`"
        - key: "Is Bridge Down"
          value: "`False`"
        - key: "Is Gate Down"
          value: "`False`"
        - key: "Light 1 On"
          value: "`False`"
        - key: "Light 2 On"
          value: "`True`"
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

This is the generic under maintenance dock type. This dock type is used when a dock is in need of maintenance in some way. An example of this being used is when the code running a dock stops working for whatever reason. This dock type isn't used too often anymore as it has been largely replaced by a system that can prevent docks from being loaded without having to update the game.

| Value Name     | Value |
|-|-|
| Sign Text      | [`This dock is currently under maintenance`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down   | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 On     | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 2 On     | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 3 On     | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 Color  | {%- include color-image fordocktypecolor=true name="Red" alt="" -%} |
| Light 2 Color  | {%- include color-image fordocktypecolor=true name="Yellow" alt="" -%} |
| Light 3 Color  | {%- include color-image fordocktypecolor=true name="Green" alt="" -%} |
| Gate Color 1   | {%- include color-image fordocktypecolor=true name="Red" alt="" -%} |
| Gate Color 2   | {%- include color-image fordocktypecolor=true name="White" alt="" -%} |
{: .psi-panel-alternative}

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Under-Maintenance.png" alt="">