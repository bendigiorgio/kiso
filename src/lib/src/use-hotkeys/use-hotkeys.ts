import { useEffect, KeyboardEvent as ReactKeyboardEvent } from "react";

const protectedModifiers = ["alt", "ctrl", "meta", "mod", "shift"] as const;

type Modifier = (typeof protectedModifiers)[number];
export type KeyboardModifiers = Record<Modifier, boolean>;
export type Hotkey = KeyboardModifiers & { key?: string };

type HotkeyItem = [
  string,
  (event: ReactKeyboardEvent<HTMLElement> | KeyboardEvent) => void,
  HotkeyItemOptions?
];

export interface HotkeyItemOptions {
  preventDefault?: boolean;
}

function parseHotkey(hotkeyStr: string): Hotkey {
  const parts = hotkeyStr.split("+");
  const key = parts.pop() || "";
  const modifiers = parts.map((part) => part.toLowerCase());

  const hotkey: Hotkey = protectedModifiers.reduce((acc, modifier) => {
    return { ...acc, [modifier]: modifiers.includes(modifier) };
  }, {} as KeyboardModifiers);

  hotkey.key = key;
  return hotkey;
}

function isExactHotkey(hotkey: Hotkey, event: KeyboardEvent): boolean {
  const keysPressed: KeyboardModifiers = protectedModifiers.reduce(
    (acc, modifier) => {
      if (modifier === "mod") {
        return { ...acc, [modifier]: event.ctrlKey || event.metaKey };
      }
      return { ...acc, [modifier]: event.getModifierState(modifier) };
    },
    {} as KeyboardModifiers
  );

  for (const modifier of protectedModifiers) {
    if (hotkey[modifier] !== keysPressed[modifier]) {
      return false;
    }
  }

  if (
    hotkey.key &&
    (event.key.toLowerCase() === hotkey.key.toLowerCase() ||
      event.code.replace("Key", "").toLowerCase() === hotkey.key.toLowerCase())
  ) {
    return true;
  }

  return false;
}

export function getHotkeyMatcher(hotkey: string) {
  return (event: KeyboardEvent) => isExactHotkey(parseHotkey(hotkey), event);
}

function shouldFireEvent(
  event: KeyboardEvent,
  tagsToIgnore: string[],
  triggerOnContentEditable = false
) {
  if (event.target instanceof HTMLElement) {
    if (triggerOnContentEditable) {
      return !tagsToIgnore.includes(event.target.tagName);
    }

    return (
      !event.target.isContentEditable &&
      !tagsToIgnore.includes(event.target.tagName)
    );
  }

  return true;
}

export function useHotkeys(
  hotkeys: HotkeyItem[],
  tagsToIgnore: string[] = ["INPUT", "TEXTAREA", "SELECT"],
  triggerOnContentEditable = false
) {
  useEffect(() => {
    const keydownListener = (event: KeyboardEvent) => {
      for (const [
        hotkey,
        handler,
        options = { preventDefault: true },
      ] of hotkeys) {
        if (
          getHotkeyMatcher(hotkey)(event) &&
          shouldFireEvent(event, tagsToIgnore, triggerOnContentEditable)
        ) {
          if (options.preventDefault) {
            event.preventDefault();
          }

          handler(event);
        }
      }
    };

    document.documentElement.addEventListener("keydown", keydownListener);
    return () =>
      document.documentElement.removeEventListener("keydown", keydownListener);
  }, [hotkeys, tagsToIgnore, triggerOnContentEditable]);
}
