// ==UserScript==
// @name         小红书屏蔽器
// @namespace    https://github.com/MiPoNianYou/MiPo-UserScript
// @version      1.1.0
// @description  屏蔽小红书无用元素
// @author       MiPoNianYou
// @match        *://www.xiaohongshu.com/*
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-start
// @license      GPL-3.0
// @icon         data:image/png;base64,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

// ==/UserScript==

(function () {
  "use strict";

  const TAB_CONFIG = [
    { id: "blocker", label: "屏蔽设置" },
    { id: "webui", label: "界面设置" },
    { id: "menuui", label: "脚本设置" },
  ];

  const CONFIG_ITEMS = [
    {
      id: "searchTipBlock",
      label: "文字搜索提示",
      default: true,
      tab: "blocker",
    },
    {
      id: "headerBtnBlock",
      label: "创作&业务按钮",
      default: true,
      tab: "webui",
    },
  ];

  const SELECTORS_MAP = {
    searchTipBlock: [
      '.search-position, [class*="search-tooltip"]',
      '[data-testid="text-search-popover"]',
      'div[role="tooltip"][aria-label^="搜索"]',
      '[data-testid="common-tooltip"]',
    ],
    headerBtnBlock: [".channel-btn"],
  };

  let currentConfig = {};
  let settingsWindow = null;
  let overlay = null;

  const loadConfig = () => {
    CONFIG_ITEMS.forEach((item) => {
      currentConfig[item.id] = GM_getValue(item.id, item.default);
    });
  };

  const saveConfig = (id, value) => {
    GM_setValue(id, value);
    currentConfig[id] = value;
    updateBlockingStyles();
  };

  const getActiveSelectors = () => {
    return Object.entries(SELECTORS_MAP)
      .filter(([key]) => currentConfig[key])
      .flatMap(([, values]) => values);
  };

  const generateBlockingCSS = () => {
    const activeSelectors = getActiveSelectors().join(", ");
    return `
            :root {
                --rednote-blocker-display: none !important;
            }
            ${activeSelectors} {
                display: var(--rednote-blocker-display) !important;
                contain: strict !important;
                height: 0 !important;
                margin: 0 !important;
                padding: 0 !important;
                visibility: hidden !important;
            }
            .__rednote_blocker__ {
                display: none !important;
            }`;
  };

  const handleBlockedNode = (node) => {
    const selectors = getActiveSelectors().join(", ");
    if (node.nodeType === Node.ELEMENT_NODE && node.matches(selectors)) {
      node.classList.add("__rednote_blocker__");
    }
    node.querySelectorAll?.(selectors).forEach((element) => {
      element.classList.add("__rednote_blocker__");
    });
  };

  const initMutationObserver = () => {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach(handleBlockedNode);
        } else if (
          mutation.type === "attributes" &&
          (mutation.attributeName === "class" ||
            mutation.attributeName === "style")
        ) {
          handleBlockedNode(mutation.target);
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributeFilter: ["class", "style"],
      attributes: true,
    });
  };

  const createSettingsWindow = () => {
    if (settingsWindow) {
      settingsWindow.style.opacity = "0";
      settingsWindow.style.transform = "translate(-50%, -50%) scale(0.8)";
      settingsWindow.style.pointerEvents = "none";
      overlay.style.opacity = "0";

      setTimeout(() => {
        settingsWindow.remove();
        overlay.remove();
        settingsWindow = null;
        overlay = null;
      }, 300);
      return;
    }

    overlay = document.createElement("div");
    overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(2px);
            z-index: 99998;
            opacity: 0;
            transition: opacity 0.3s;
        `;
    document.body.appendChild(overlay);

    settingsWindow = document.createElement("div");
    settingsWindow.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
            transform-origin: center;
            transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
            background: #fff;
            color: #333;
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0 12px 32px rgba(0,0,0,0.15);
            z-index: 99999;
            min-width: 320px;
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            pointer-events: none;
        `;

    const closeBtn = document.createElement("div");
    closeBtn.style.cssText = `
            position: absolute;
            top: 16px;
            left: 16px;
            width: 12px;
            height: 12px;
            background: #ff5f57;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        `;
    closeBtn.addEventListener("mouseover", () => {
      closeBtn.style.backgroundColor = "#ff3b30";
    });
    closeBtn.addEventListener("mouseout", () => {
      closeBtn.style.backgroundColor = "#ff5f57";
    });
    closeBtn.addEventListener("mousedown", () => {
      closeBtn.style.transform = "scale(0.9)";
    });
    closeBtn.addEventListener("mouseup", () => {
      closeBtn.style.transform = "scale(1)";
    });

    const closeWindow = () => {
      settingsWindow.style.opacity = "0";
      settingsWindow.style.transform = "translate(-50%, -50%) scale(0.8)";
      settingsWindow.style.pointerEvents = "none";
      overlay.style.opacity = "0";

      setTimeout(() => {
        settingsWindow.remove();
        overlay.remove();
        settingsWindow = null;
        overlay = null;
        document.removeEventListener("keydown", handleKeyDown);
      }, 300);
    };

    const handleKeyDown = (e) => e.key === "Escape" && closeWindow();
    document.addEventListener("keydown", handleKeyDown);
    closeBtn.addEventListener("click", closeWindow);

    const title = document.createElement("h3");
    title.textContent = "全局设置";
    title.style.cssText = `
            margin: 0 0 24px 0;
            font-size: 18px;
            color: #1a1a1a;
            text-align: center;
            font-weight: 500;
        `;

    const tabBar = document.createElement("div");
    tabBar.style.cssText = `
            display: flex;
            gap: 12px;
            margin-bottom: 24px;
            border-bottom: 1px solid #eee;
            padding-bottom: 12px;
        `;

    const tabContent = document.createElement("div");
    tabContent.style.cssText = `
            min-height: 200px;
            position: relative;
        `;

    let activeTab = TAB_CONFIG[0].id;
    const createTabContent = () => {
      tabContent.innerHTML = "";
      const currentItems = CONFIG_ITEMS.filter(
        (item) => item.tab === activeTab
      );

      if (currentItems.length === 0) {
        const emptyTip = document.createElement("div");
        emptyTip.textContent = "暂无可用设置项";
        emptyTip.style.cssText = `
                    text-align: center;
                    color: #999;
                    padding: 40px 0;
                `;
        tabContent.appendChild(emptyTip);
        return;
      }

      currentItems.forEach((item) => {
        const container = document.createElement("div");
        container.style.cssText = `
                    margin: 16px 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    user-select: none;
                `;

        const label = document.createElement("span");
        label.textContent = item.label;
        label.style.cssText = `
                    font-size: 14px;
                    color: #333;
                `;

        const switchContainer = document.createElement("div");
        switchContainer.style.cssText = `
                    position: relative;
                    width: 51px;
                    height: 31px;
                `;

        const track = document.createElement("div");
        track.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: ${
                      currentConfig[item.id] ? "#34C759" : "#E9E9EA"
                    };
                    border-radius: 16px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                `;

        const thumb = document.createElement("div");
        thumb.style.cssText = `
                    position: absolute;
                    top: 2px;
                    left: ${currentConfig[item.id] ? "23px" : "2px"};
                    width: 27px;
                    height: 27px;
                    background: #fff;
                    border-radius: 50%;
                    box-shadow: 0 3px 8px rgba(0,0,0,0.15);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                `;

        container.addEventListener("click", () => {
          const newValue = !currentConfig[item.id];
          saveConfig(item.id, newValue);

          track.style.background = newValue ? "#34C759" : "#E9E9EA";
          thumb.style.left = newValue ? "23px" : "2px";

          thumb.style.transform = "scale(0.85)";
          setTimeout(() => {
            thumb.style.transform = "scale(1)";
          }, 80);
        });

        switchContainer.append(track, thumb);
        container.append(label, switchContainer);
        tabContent.appendChild(container);
      });
    };

    TAB_CONFIG.forEach((tab) => {
      const tabBtn = document.createElement("div");
      tabBtn.textContent = tab.label;
      tabBtn.style.cssText = `
                padding: 8px 16px;
                border-radius: 6px;
                cursor: pointer;
                background: ${activeTab === tab.id ? "#f0f0f0" : "transparent"};
                color: ${activeTab === tab.id ? "#333" : "#666"};
                transition: all 0.2s ease;
                font-weight: ${activeTab === tab.id ? "500" : "400"};
                border-bottom: 2px solid ${
                  activeTab === tab.id ? "#34C759" : "transparent"
                };
            `;

      tabBtn.addEventListener("click", () => {
        activeTab = tab.id;
        tabBar.querySelectorAll("div").forEach((t) => {
          t.style.background = "transparent";
          t.style.color = "#666";
          t.style.fontWeight = "400";
          t.style.borderBottomColor = "transparent";
        });
        tabBtn.style.background = "#f0f0f0";
        tabBtn.style.color = "#333";
        tabBtn.style.fontWeight = "500";
        tabBtn.style.borderBottomColor = "#34C759";
        createTabContent();
      });

      tabBar.appendChild(tabBtn);
    });

    settingsWindow.append(closeBtn, title, tabBar, tabContent);
    createTabContent();
    document.body.appendChild(settingsWindow);

    setTimeout(() => {
      overlay.style.opacity = "1";
      settingsWindow.style.opacity = "1";
      settingsWindow.style.transform = "translate(-50%, -50%) scale(1)";
      settingsWindow.style.pointerEvents = "auto";
    }, 10);
  };

  const updateBlockingStyles = () => {
    const newStyle = generateBlockingCSS();
    const oldStyle = document.querySelector("style[data-rednote-blocker]");
    if (oldStyle) oldStyle.remove();
    const styleTag = document.createElement("style");
    styleTag.textContent = newStyle;
    styleTag.dataset.rednoteBlocker = "v1";
    document.head.prepend(styleTag);
  };

  const init = () => {
    loadConfig();
    updateBlockingStyles();
    GM_registerMenuCommand("全局设置", createSettingsWindow);

    if ("requestIdleCallback" in window) {
      requestIdleCallback(initMutationObserver);
    } else {
      setTimeout(initMutationObserver, 500);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
