---
permalink: /Wiki/Dock-Types/Cooldown
title: "Cooldown"
page_subject_info:
  title: "Cooldown"
  color: "#a3a2a5"
  titles_text_color: "#FFFFFF"
  main_image:
    path: "/Assets/Images/Dock-Types/Cooldown.png"
#  description: ""
  data:
    - title: "Dock Type Data"
      data:
        - key: "Sign Text"
          value: "`This dock is currently on cooldown`"
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
            name: "Blue"
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

This dock type was originally added for the mine dock but the idea of using it there was later scrapped before the update that it was in came out. So this dock type was never actually used. It still has a possibility of being used but is unlikely.

| Value Name     | Value |
|-|-|
| Sign Text      | [`This dock is currently on cooldown`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down   | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 On     | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 2 On     | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 3 On     | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 Color  | {%- include color-image fordocktypecolor=true name="Red" alt="" -%} |
| Light 2 Color  | {%- include color-image fordocktypecolor=true name="Blue" alt="" -%} |
| Light 3 Color  | {%- include color-image fordocktypecolor=true name="Green" alt="" -%} |
| Gate Color 1   | {%- include color-image fordocktypecolor=true name="Red" alt="" -%} |
| Gate Color 2   | {%- include color-image fordocktypecolor=true name="White" alt="" -%} |
{: .psi-panel-alternative}

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Cooldown.png" alt="">