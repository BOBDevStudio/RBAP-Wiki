---
permalink: /Wiki/Dock-Types/Under-Maintenance
title: "Under Maintenance"
page_subject_info:
  title: "Under Maintenance"
  color: "#a3a2a5"
  titles_text_color: "#FFFFFF"
  main_image:
    path: "/Assets/Images/Page-Subject-Info/Dock-Types/Under-Maintenance.png"
#  description: ""
  data:
    - title: "Dock Data"
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
          value: "{%- include color-image fordocktypelight=true path="Red.png" alt="" -%}"
        - key: "Light 2 Color"
          value: "{%- include color-image fordocktypelight=true path="Yellow.png" alt="" -%}"
        - key: "Light 3 Color"
          value: "{%- include color-image fordocktypelight=true path="Green.png" alt="" -%}"
        - key: "Gate Color 1"
          value: "{%- include color-image path="Red.png" alt="" -%}"
        - key: "Gate Color 2"
          value: "{%- include color-image path="White.png" alt="" -%}"
---

This is the generic under maintenance dock type. This dock type is used when a dock is in need of maintenance in some way. An example of this being used is when the code running a dock stops working for whatever reason. This dock type isn't used too often anymore as it has been largely replaced by a system that can prevent docks from being loaded without having to update the game.

| Value Name           | Value |
|-|-|
| Sign Text            | [`This dock is currently under maintenance`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 2 On           | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 3 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Light 2 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Yellow.png" alt=""></a> |
| Light 3 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Green.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Under%20Maintenance.png" alt="">