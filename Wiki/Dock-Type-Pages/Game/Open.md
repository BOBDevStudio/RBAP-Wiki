---
permalink: /Wiki/Dock-Types/Open
title: "Open"
page_subject_info:
  title: "Open"
  color: "#a3a2a5"
  titles_text_color: "#FFFFFF"
  main_image:
    path: "/Assets/Images/Dock-Types/Open.png"
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
        - key: "Light 1 On"
          value: "`False`"
        - key: "Light 2 On"
          value: "`False`"
        - key: "Light 3 On"
          value: "`True`"
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

This is the generic open dock type. It is pretty self-explanatory why it is used.

| Value Name           | Value |
|-|-|
| Sign Text            | [`This dock is currently open`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 2 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 3 On           | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 Color        | {%- include color-image fordocktypecolor=true name="Red" alt="" -%} |
| Light 2 Color        | {%- include color-image fordocktypecolor=true name="Yellow" alt="" -%} |
| Light 3 Color        | {%- include color-image fordocktypecolor=true name="Green" alt="" -%} |
| Gate Color 1         | {%- include color-image fordocktypecolor=true name="Red" alt="" -%} |
| Gate Color 2         | {%- include color-image fordocktypecolor=true name="White" alt="" -%} |
{% comment %}{: .psi-panel-alternative}{% endcomment %}

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Open.png" alt="">