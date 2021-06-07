---
permalink: /Wiki/Dock-Types/Main-Build-Purchases-Closed
title: "Main Build Purchases Closed"
page_subject_info:
  title: "Dock Type: Main Build Purchases Closed"
  color: "#a3a2a5"
  titles_text_color: "#FFFFFF"
  main_image:
    path: "/Assets/Images/Page-Subject-Info/Dock-Types/Main-Build-Purchases-Closed.png"
#  description: ""
  data:
    - title: "Dock Data"
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

This dock type's purpose is to close off a dock that has purchases. The reason for this is because many of the things you can purchase in game (or actually all of them at the time of writing) are uploaded to the main build of the game instead of other special builds of the game like pre-update build. Roblox *theoretically* (or at least logically) allows purchases to be made if the asset behind the purchase is owned by the same thing as the game but in reality BOB has found this functionality to be broken or nonexistent.

This dock type can never be found inside of the main build but can be found in other special builds of the game (with the exception of the dev build (for debugging purposes)). It is currently only being applied to the [donations dock](/RBAP-Wiki/Wiki/Docks/Category/In-Game#donation-dock) for the reasons listed above.

| Value Name           | Value |
|-|-|
| Sign Text            | [`This dock is currently closed due to the fact that purchases do not work in this build of the game`](/RBAP-Wiki/Wiki/Value-Types#string) |
| Is System Dock       | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Bridge Down       | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Is Gate Down         | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 On           | [`True`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 2 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 3 On           | [`False`](/RBAP-Wiki/Wiki/Value-Types#boolean) |
| Light 1 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Light 2 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Yellow.png" alt=""></a> |
| Light 3 Color        | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Green.png" alt=""></a> |
| Gate Color 1         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/Red.png" alt=""></a> |
| Gate Color 2         | <a href="/RBAP-Wiki/Wiki/Value-Types#color"><img class="color-image dock-type-light-color" src="/RBAP-Wiki/Assets/Images/Colors/White.png" alt=""></a> |

<img class="dock-type-image" src="/RBAP-Wiki/Assets/Images/Dock-Types/Main%20Build%20Purchases%20Closed.png" alt="">