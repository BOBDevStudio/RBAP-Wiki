---
permalink: /wiki/chat
title: "Chat"
redirect_from:
  - /Wiki/Chat
easy_links:
  list:
    - link_name: "(Text) Chat"
      search:
        name: "Text Chat"
mentioned_game_content:
  last_status_check: "Wiki update for RBAP update <code>RBAP Update / V5.3.0</code>"
color_coded_table_boolean_enabled: true
history:
  - time: "<code>RBAP Update / V3.0.0</code>"
    changes:
      - "Forked the default Roblox chat and made the mute and unmute commands are now a lot more lenient and removed default team channels and team change notifications."
  - time: "??? (likely <code>RBAP Update / V5.2.0</code>)"
    changes:
      - "Removed the forked default Roblox chat."
  - time: "<code>RBAP Update / V5.2.0</code>"
    changes:
      - "Added a completely custom chat."
  - time: "<code>RBAP Update / V5.3.0</code>"
    changes:
      - "Added support for [Roblox's Avatar Context Menu](https://developer.roblox.com/en-us/articles/Avatar-Context-Menu) when clicking on a message sent from a player (*that is not yourself*)."
      - "Added three custom chat related buttons to [Roblox's Avatar Context Menu](https://developer.roblox.com/en-us/articles/Avatar-Context-Menu) that help with muting/unmuting a player and private messaging a player."
      - "Now when you click on certain messages (mostly system ones) the text in the chat bar gets changed (typically back to the text that was there before a message was sent)."
      - "Added support for the mute commands only searching player usernames instead usernames, display names, and user IDs when there is a @ character before the username. Note that this wasn't originally intended for manual use."
      - "Instead of just checking the sending and receiving players' chat privacy settings alone it will now check the sending and receiving players' settings together. Note that it applies to everything, not just private messaging."
      - "Uppercase characters are now regulated so you can no longer have some amount of uppercase characters in a message at a time."
      - "Fixed some message regulation issues involving Unicode characters."
  - time: "<code>RBAP Update / V6.0.0</code>"
    changes:
      - "The display name of a player is now included in the name of a player shown in a message if that player has a display name set."
      - "Added an autocomplete menu that can help with running commands."
      - "Command parameters are split up by a space character. In order to avoid that, simply put “ around a parameter’s value. And in order to avoid the “ character being recognized, put a \ in front of it."
      - "Remade the system that handles the running of commands."
      - "Putting either a tab character or new line character in a message will no longer return a message regulation error. In the case of tab characters they will be replaced with a single space character (which inherently goes through further space character regulation) and as for new line characters they will just be removed."
      - "The too many uppercase characters message regulation has been turned off."
      - "The no characters or numbers message regulation has been turned off."
      - "The chat scrolling animation is now more likely to play when a new message is added while the viewport is at the bottom."
  - time: "<code>RBAP Update / V6.0.1</code>"
    changes:
      - "The main parameter of the command `/bubblechat` now accepts the word `yes` instead of the misspelling of `yee`."
---

As you may know Roblox's default (text) chat is a bit lacking in terms of visuals and features compared to many popular chat apps. Well RBAP's chat is here to fix that! Added in <code>RBAP Update / V5.2.0</code> it features a visual design overhaul that brings it in line with Roblox's top bar design language among other things.

The purpose of this custom chat by BOB was to the merge the following things together:
* Roblox's design language for the top bar buttons.
* Bubble chats (aka chat bubbles).
* The already existing design of Roblox's chat.
* All/most of BOB's custom edits from the never released chat fork intended for <code>RBAP Update / V5.0.0</code>. (It was removed from the update shortly before release due to its incompleteness in case you're wondering.)
* New ideas that BOB came up with (like the even more improved system messages compared to the aforementioned chat fork).
* "[Cmdr](https://eryn.io/Cmdr/)".

## Here's a list of feature comparison between each chat:

This list does not include stuff like features that were ported over from the default chat with no frontend changes and backend features that weren't ported over.

| Feature																													| Roblox | RBAP | Other Notes |
|-|-|-|-|
| Private messaging																											| ✔️ | ✔️ | Roblox's chat uses a command (like `/w 11MR_BOB Hello`) while RBAP's chat uses a mention placed at the very beginning of the message (like `@11MR_BOB Hello`). |
| @mention support																											| ❌ | ✔️ | Works with usernames, display names, and user ids. |
| Listed time sent																											| ❌ | ✔️ |  |
| Visual design that interlocks with (some of) Roblox's																		| ❌ | ✔️ |  |
| Filtered message indicator																								| ❌ | ✔️ | When Roblox's filter edits a message there is an indicator that is placed to tell users that that is not what the original message looked like. Note that the filter edits it per user so if one player sees the indicator and another doesn't that's why. |
| Not sending attempts to run invalid commands																				| ❌ | ✔️ |  |
| Toggling on or off chat bubbles																							| ❌ | ✔️ | Refer to the help command for more info. |
| Properly adapting to screen size changes																					| ❌ | ✔️ |  |
| Better system messages																									| ❌ | ✔️ | This includes stuff like indicating an error or success message and indicating what command a system message came from. |
| Joining friend gets notified that they have joined a server with their friend(s)											| ❌ | ✔️ | Not really possible to even add a custom edit for this in Roblox's chat. |
| Mute and unmute commands can run on multiple players at a time															| ❌ | ✔️ |  |
| A command autocomplete menu																								| ❌ | ✔️ | With the command autocomplete menu it's super easy to find out information about a certain perimeter in a command and maybe even get the possible inputs for whatever you're typing. There's more to it than just those things but they're the highlights. |
| Direct integration with [Roblox's Avatar Context Menu](https://developer.roblox.com/en-us/articles/Avatar-Context-Menu)	| ❌ | ✔️ |  |
| You see your own message when running commands																			| ❌ | ✔️ | The command has to directly support it in order for it to work but all or most commands do. |
| Clicking on certain (system or self sent) messages will revive the text that was sent										| ❌ | ✔️ |  |
| Automatically compiled help command																						| ❌ | ✔️ | Roblox's chat's help command is written out manually meaning if you add a new command you have to directly edit it in order for it to list the command. |
| More/different animations to make everything look more smooth																| ❌ | ✔️ | Examples of this include the automatic scrolling of the chat log (just the animation of it not the automatic scrolling) and the fading of the info text on the chat bar. Note that none of this is easy to pull off with all the moving parts that a chat inherently has. |
| Rich text support																											| ❌ | ✔️ | Users are not able to use this. |
| Many other backend related feature improvements																			| ❌ | ✔️ |  |
| Easier upgrade support																									| ❌ | ✔️ | Since BOB is the one who coded it it is easy for him to add new features to it. Which is unlike Roblox's chat where he would have to do time-consuming research to figure out how to add a feature. |
| Visual text clipping bug																									| ✔️ | ❌ | Due to how Roblox's chat does automatic scaling there's a chance that some word at the end of a row of words gets removed visually. Since RBAP's chat uses a different method for automatic scaling this will not occur in RBAP's chat. |
| Channels																													| ✔️ | ❌ | RBAP's chat dropped support for this as BOB considered it not really needed. Although it doesn't have support for channels it can do equivalent stuff to it. |
| Enter private messaging via clicking on a name in a message																| ✔️ | ❌ | RBAP's chat does not have support for this due to it logistically not being possible. It would be nice but it doesn't play it nicely with automatic scaling. Although an alternative was added in <code>RBAP Update / V5.3.0</code> which uses [Roblox's Avatar Context Menu](https://developer.roblox.com/en-us/articles/Avatar-Context-Menu) and new ability (from that update) for it to pop up when clicking on a message. |
| System message translation support																						| ✔️ | ❌ | RBAP has no translation support so RBAP's chat also has no translation support. |
| Display names being widely used																							| ✔️ | ❌ | This is BOB's personal preference as people chatting with the same display name could get confusing for readers. Things like mentions support them though. |
| Chat fading in and out																									| ✔️ | ❌ | RBAP's chat doesn't *yet* have support for this but hopefully will in the future. |

# History

{% include history %}