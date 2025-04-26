import { App, Plugin } from "obsidian";

export default class AlwaysCloseSidebarsPlugin extends Plugin {
    async onload() {
        this.addCommand({
            id: "close-sidebars-and-hide-properties",
            name: "Close Sidebars and Hide Properties",
            callback: () => this.closeSidebarsAndHideProperties()
        });
    }

    async closeSidebarsAndHideProperties() {
        const { workspace } = this.app;

        // Close left sidebar if open
        const leftSplit = workspace.leftSplit;
        if (leftSplit && !leftSplit.collapsed) {
            leftSplit.collapse();
        }

        // Close right sidebar if open
        const rightSplit = workspace.rightSplit;
        if (rightSplit && !rightSplit.collapsed) {
            rightSplit.collapse();
        }

        // Hide Properties view in the active editor
        const activeLeaf = workspace.getActiveViewOfType<any>(Object);
        if (activeLeaf && activeLeaf.metadataEditor) {
            if (activeLeaf.metadataEditor.containerEl) {
                activeLeaf.metadataEditor.containerEl.style.display = "none";
            }
        }
    }
}
