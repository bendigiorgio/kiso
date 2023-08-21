import React from "react";
import { cn } from "@lib/utils";
import { File, Folder, LucideIcon } from "lucide-react";

interface TreeProps extends React.HTMLAttributes<HTMLUListElement> {
  type?: "multiple" | "single";
}

interface TreeItemProps extends React.HTMLAttributes<HTMLLIElement> {
  icon?: React.ReactNode;
  label: string;
  open?: boolean;
  parentKey?: string;
  disabled?: boolean;
  variant?: "file" | "folder" | "default";
  iconSize?: number | string;
  showBorder?: boolean;
}

interface TreeContextProps {
  setSelectedKeys: React.Dispatch<React.SetStateAction<string[]>>;
  selectedKeys: string[];
  setExpandedKeys: React.Dispatch<React.SetStateAction<string[]>>;
  expandedKeys: string[];
  type: "multiple" | "single";
}

const TreeContext = React.createContext<TreeContextProps | undefined>(
  undefined
);

const Tree = React.forwardRef<HTMLUListElement, TreeProps>(
  ({ className, type = "multiple", children, ...props }, ref) => {
    const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<string[]>([]);

    return (
      <TreeContext.Provider
        value={{
          setSelectedKeys,
          selectedKeys,
          setExpandedKeys,
          expandedKeys,
          type,
        }}
      >
        <ul
          role="tree"
          className={cn("space-y-2 w-fit", className)}
          ref={ref}
          {...props}
        >
          {children}
        </ul>
      </TreeContext.Provider>
    );
  }
);
Tree.displayName = "Tree";

const TreeItem = React.forwardRef<HTMLLIElement, TreeItemProps>(
  (
    {
      className,
      icon,
      variant,
      label,
      children,
      parentKey,
      disabled = false,
      iconSize = 5, //? This is stored in tailwindcss variables but you can pass an arbitrary value in as a string, i.e. 20px,
      showBorder = true,
      ...props
    },
    ref
  ) => {
    const context = React.useContext(TreeContext);
    if (!context) {
      throw new Error("TreeItem must be used within a Tree component");
    }
    const {
      setSelectedKeys,
      selectedKeys,
      setExpandedKeys,
      expandedKeys,
      type,
    } = context;
    const contentRef = React.useRef<HTMLDivElement>(null);

    const keyName = parentKey ? `${parentKey}-${label}` : label;

    const open = expandedKeys.includes(keyName);
    const selected = selectedKeys.includes(keyName);

    const [contentHeight, setContentHeight] = React.useState(
      open ? "auto" : "0"
    );

    React.useLayoutEffect(() => {
      if (contentRef.current) {
        if (open && children) {
          setContentHeight(contentRef.current.scrollHeight + "px");
        } else {
          setContentHeight(contentRef.current.clientHeight + "px");
          setTimeout(() => {
            setContentHeight("0");
          });
        }
      }
    }, [open, children]);

    const handleTransitionEnd = () => {
      if (open && contentRef.current) {
        setContentHeight("auto");
      }
    };

    const handleClick = (event: React.SyntheticEvent) => {
      event.stopPropagation(); // Prevent the event from bubbling up to parent
      if (type === "single") {
        setSelectedKeys((prevKeys) =>
          prevKeys.includes(keyName)
            ? prevKeys.filter((key) => key !== keyName)
            : [keyName]
        );
        if (children) {
          setExpandedKeys((prevKeys) => {
            if (prevKeys.includes(keyName)) {
              return prevKeys.filter((key) => !key.startsWith(keyName));
            } else {
              const ancestorKeys = keyName.split("-");
              const newExpandedKeys = [];
              let currentKey = "";
              for (const key of ancestorKeys) {
                if (currentKey) {
                  currentKey += `-${key}`;
                } else {
                  currentKey = key;
                }
                newExpandedKeys.push(currentKey);
              }
              return newExpandedKeys;
            }
          });
        }
      } else {
        setSelectedKeys((prevKeys) =>
          prevKeys.includes(keyName)
            ? prevKeys.filter((key) => key !== keyName)
            : [...prevKeys, keyName]
        );
        if (children) {
          setExpandedKeys((prevKeys) =>
            prevKeys.includes(keyName)
              ? prevKeys.filter((key) => !key.startsWith(keyName))
              : [...prevKeys, keyName]
          );
        }
      }
      if (children && contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight + "px");
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        handleClick(event);
        event.preventDefault();
      }
    };

    let listIcon: React.ReactNode | LucideIcon;

    if (icon) {
      listIcon = icon;
    } else {
      switch (variant) {
        case "file":
          listIcon = (
            <File className={`h-${iconSize} w-${iconSize} stroke-1`} />
          );
          break;
        case "folder":
          listIcon = (
            <Folder className={`h-${iconSize} w-${iconSize} stroke-1`} />
          );
          break;
        default:
          listIcon = (
            <Folder className={`h-${iconSize} w-${iconSize} stroke-1`} />
          );
          break;
      }
    }

    const childrenWithKey = React.Children.map(children, (child) => {
      if (React.isValidElement<TreeItemProps>(child)) {
        return React.cloneElement(child, {
          parentKey: keyName,
        });
      }
      return child;
    });

    const handleBorderOffest = (size: string) => {
      const string = size.split(/(\d+)/);
      const number = parseInt(string[1]) / 2;
      return `${number}${string[0]}`;
    };

    return (
      <li
        tabIndex={keyName.split("-").length ?? 0}
        key={keyName}
        data-state={open ? "open" : "closed"}
        data-disabled={disabled}
        aria-disabled={disabled}
        role="treeitem"
        aria-selected={selected}
        aria-expanded={open}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        ref={ref}
        className={cn(` select-none relative`, className)}
        {...props}
      >
        <div
          className={`flex flex-row space-x-2 col-span-2 items-center ${
            children && "hover:cursor-pointer hover:text-muted-foreground"
          }`}
        >
          {listIcon}
          <span>{label}</span>
        </div>
        <div
          className="relative"
          ref={contentRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            height: contentHeight,
            overflow: "hidden",
            transition: "height 0.3s ease",
          }}
        >
          <TreeContext.Provider value={context}>
            <ul
              role="group"
              className="grid grid-cols-1 col-start-2 pl-6 space-y-1 mt-1"
            >
              {childrenWithKey}
            </ul>
          </TreeContext.Provider>
          {showBorder ? (
            <div
              className={cn(
                "absolute h-full bg-border w-[1px] left-2.5 top-0",
                `left-${
                  typeof iconSize === "number"
                    ? iconSize / 2
                    : handleBorderOffest(iconSize)
                }`
              )}
            />
          ) : null}
        </div>
      </li>
    );
  }
);

TreeItem.displayName = "TreeItem";

export { Tree, TreeItem };
