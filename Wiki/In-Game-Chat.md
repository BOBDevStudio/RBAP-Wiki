---
permalink: /Wiki/Chat
title: "Chat"
color_coded_table_boolean_enabled: true
mentioned_game_content:
  last_status_check: "Wiki update for RBAP update [`V5.2`](/RBAP-Wiki/Posts/Update-Log/5-2-0)"
---

As you may know Roblox's default (text) chat is a bit lacking in terms of visuals and features compared to many popular chat apps. Well RBAP's chat is here to fix that! Added in [`V5.2`](/RBAP-Wiki/Posts/Update-Log/5-2-0) it features a visual design overhaul that brings it in line with Roblox's top bar design language among other things.

The purpose of this custom chat by BOB was to the merge the following things together:
* Roblox's design language for the top bar buttons.
* Bubble chats (aka chat bubbles).
* All/most of BOB's custom edits from the never released chat fork intended for [`V5`](/RBAP-Wiki/Posts/Update-Log/5-0-0). (It was removed from the update shortly before release due to its incompleteness in case you're wondering.)
* New ideas that BOB came up with (like the even more improved system messages compared to the aforementioned chat fork).

## Here's a list of feature comparison between each chat:

This list does not include stuff like features that were ported over from the default chat with no frontend changes and backend features that weren't ported over. This list is also not meant to purposely make RBAP's chat look like it is better than Roblox's chat it is just here to show you what's different.

| Feature | Roblox | RBAP | Other Notes |
|-|-|-|-|
| Private messaging																	| ✔️ | ✔️ | Roblox's chat uses a command (like `/w 11MR_BOB Hello`) while RBAP's chat uses a mention placed at the very beginning of the message (like `@11MR_BOB Hello`). |
| @mention support																	| ❌ | ✔️ | Works with usernames, display names, and user ids. |
| Listed time sent																	| ❌ | ✔️ |  |
| Visual design that interlocks with (some of) Roblox's								| ❌ | ✔️ |  |
| Filtered message indicator														| ❌ | ✔️ | When Roblox's filter edits a message there is an indicator that is placed to tell users that that is not what the original message looked like. Note that the filter edits it per user so if one player sees the indicator and another doesn't that's why. |
| Not sending attempts to run invalid commands										| ❌ | ✔️ |  |
| Toggling on or off chat bubbles													| ❌ | ✔️ | Refer to the help command for more info. |
| Rich text support																	| ❌ | ✔️ | Users are not able to use this. |
| Properly adapting to screen size changes											| ❌ | ✔️ |  |
| Better system messages															| ❌ | ✔️ | This includes stuff like indicating an error or success message and indicating what command a system message came from. |
| Joining friend gets notified that they have joined a server with their friends	| ❌ | ✔️ | Not really possible to even add a custom edit for this in Roblox's chat. |
| Mute and unmute commands can run on multiple players								| ❌ | ✔️ |  |
| Automatically compiled help command												| ❌ | ✔️ | Roblox's chat's help command is written out manually meaning if you add a new command you have to directly edit it in order for it to list the command. |
| More/different animations to make everything look more smooth						| ❌ | ✔️ | Examples of this include the automatic scrolling of the chat log (just the animation of it not the automatic scrolling) and the fading of the info text on the chat bar. Note that none of this is easy to pull off with all the moving parts that a chat inherently has. |
| Many other backend related feature improvements									| ❌ | ✔️ |  |
| Easier upgrade support															| ❌ | ✔️ | Since BOB is the one who coded it it is easy for him to add new features to it. Which is unlike Roblox's chat where he would have to do time-consuming research to figure out how to add a feature. |
| Channels																			| ✔️ | ❌ | RBAP's chat dropped support for this as BOB considered it not really needed. Although it doesn't have support for channels it can do equivalent stuff to it. |
| Enter private messaging via clicking on a name in a message						| ✔️ | ❌ | RBAP's chat does not have support for this due to it logistically not being possible. |
| System message translation support												| ✔️ | ❌ | RBAP has no translation support so RBAP's chat also has no translation support. |
| Display names being widely used													| ✔️ | ❌ | This is BOB's personal preference as people chatting with the same display name could get confusing for readers. Stuff like mentions support them though. |
| Chat fading in and out															| ✔️ | ❌ | RBAP's chat doesn't *yet* have support for this but hopefully will in the future. |