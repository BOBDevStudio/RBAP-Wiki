---
permalink: /Wiki/Dock-Types/Hidden Dock
title: "Hidden Dock"
page_subject_info:
  title: "Dock Type: Hidden Dock"
  color: "#a3a2a5"
  titles_text_color: "#FFFFFF"
  main_image:
    path: "/Assets/Images/Page-Subject-Info/Dock-Types/Hidden-Dock.png"
#  description: ""
  data:
    - title: "Dock Data"
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
          value: "{%- include color-image fordocktypelight=true path="Red.png" alt="" -%}"
        - key: "Light 2 Color"
          value: "{%- include color-image fordocktypelight=true path="Yellow.png" alt="" -%}"
        - key: "Light 3 Color"
          value: "{%- include color-image fordocktypelight=true path="Purple.png" alt="" -%}"
        - key: "Gate Color 1"
          value: "{%- include color-image path="Red.png" alt="" -%}"
        - key: "Gate Color 2"
          value: "{%- include color-image path="White.png" alt="" -%}"
---

Hidden docks are docks that are hidden by default unless they are triggered to appear by some in-game event. There are currently none in the game that use this dock type as previous ones were removed in [`V3`](/RBAP-Wiki/Wiki/Value-Types#rbap-version) of the game due to limitations of newly-implemented systems (like the dock placing system). Some of the limitations still have yet to be lifted as of [`V4`](/RBAP-Wiki/Wiki/Value-Types#rbap-version) the most notable being the dock placing system.

| Value Name           | Value |
|-|-|
| Sign Text            | [`This dock is currently open`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 2 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 3 On           | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Light 2 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Yellow.png" alt=""></a> |
| Light 3 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Purple.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Hidden%20Dock.png" alt="">