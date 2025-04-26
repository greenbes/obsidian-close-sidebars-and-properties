# 📚 Always Close Sidebars

An Obsidian plugin that **always closes** the **left** and **right** sidebars, and **hides the Properties view**.

For convenience, I set an environment variable

```shell
export OBSIDIAN_VAULT="${HOME}/path/to/your/vault"
```

Then you can use `install` to create the deployment directory and move the files

```shell
install -d "${OBSIDIAN_VAULT}/.obsidian/plugins/obsidian-close-sidebars-and-properties"
install -m 644 main.js main.js.map manifest.json "${OBSIDIAN_VAULT}/.obsidian/plugins/obsidian-close-sidebars-and-properties/"
```

This plugin was written by ChatGPT.

## ✨ Features

- Closes the **left sidebar** if open.
- Closes the **right sidebar** if open.
- Hides the **Properties** panel from the active note.
- Adds a command that can be triggered manually or bound to a hotkey.

## 🔧 Installation

### From GitHub (Manual)

1. Download the latest release assets:
    - `manifest.json`
    - `main.js`
    - `main.js.map`
2. Create a new folder inside your vault's `.obsidian/plugins/` directory:
    - Example: `.obsidian/plugins/always-close-sidebars/`
3. Place the downloaded files into the newly created folder.
4. Enable the plugin from **Settings → Community Plugins** in Obsidian.


## 🚀 Usage

Once installed and enabled:

- Open the Command Palette (`Ctrl+P` or `Cmd+P`).
- Search for the command:  
  **"Close Sidebars and Hide Properties"**
- Run the command manually or assign it to a custom hotkey for even faster access.

## 🛠 Development

### Building from Source

```bash
git clone https://github.com/yourusername/obsidian-always-close-sidebars.git
cd obsidian-always-close-sidebars
npm install
npm run build
```

Copy the compiled files (`manifest.json`, `main.js`, `main.js.map`) into your vault's `.obsidian/plugins/` directory.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

