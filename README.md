# 🐝 Spelling Bee 英文拼字學習機

一個專為兒童設計的互動式英文拼字學習網頁應用程式。單一 HTML 檔案，無需後端，可直接在瀏覽器中使用。

## ✨ 功能特色

### 📚 分組學習
- 單字自動分組（每 10 個一組）
- 可選擇特定 Level 或全部單字練習
- 即時顯示學習進度與得分

### 🔊 語音發音系統
- 使用瀏覽器原生 Web Speech API
- 提供語音選擇下拉選單
- 自動優先選取英文語音
- 支援各種裝置與瀏覽器

### 🎮 三種學習模式

| 模式 | 說明 |
|------|------|
| 📖 **學習模式** | 顯示單字卡，母音（紅色）與子音（藍色）顏色區分，可切換顯示音節拆解 |
| 🧱 **積木拼字** | 聽發音看中文提示，點擊打亂的字母按鈕重組單字 |
| ✏️ **聽寫練習** | 只有發音與中文提示，手動輸入完整單字 |

### 🎨 兒童友善介面
- 活潑明亮的配色（亮黃、天空藍、粉紅）
- 響應式設計，支援電腦、平板、手機
- 大字體，方便孩子閱讀
- 答對時有彩帶慶祝動畫 🎉

## 🚀 快速開始

### 方法一：直接使用
1. 下載 `index.html` 檔案
2. 用瀏覽器開啟即可使用

### 方法二：GitHub Pages
訪問線上版本：`https://<your-username>.github.io/iris-test-spelling-bee/`

## 📖 使用說明

1. **選擇關卡**：從下拉選單選擇要練習的 Level 或全部單字
2. **選擇語音**：選擇適合的英文發音語音
3. **選擇模式**：點擊上方 Tab 切換三種學習模式
4. **開始學習**：
   - 學習模式：點擊「🔊 聽發音」聆聽單字，點擊「📝 顯示音節」查看音節拆解
   - 積木模式：聽發音後，點擊下方字母按鈕依序拼出單字
   - 聽寫模式：聽發音後，在輸入框輸入單字，按 Enter 或點擊「✅ 檢查答案」

## 📝 內建單字列表

目前包含 50 個基礎英文單字，涵蓋：
- 水果：apple, banana, orange, lemon
- 動物：cat, dog, elephant, fish, giraffe, lion, monkey, rabbit, tiger, zebra, bird, butterfly
- 顏色：yellow, violet
- 自然：sun, cloud, flower, rainbow, mountain, ocean, island
- 食物：pizza, juice, ice cream, jelly
- 日常用品：umbrella, pencil, notebook, box, window
- 地點：house, garden, kitchen, yard, school, zoo
- 其他：happy, friend, teacher, queen, unicorn, vegetable, water, kite, nest

## 🛠️ 自訂單字

### 字庫位置

字庫檔案位於 `data/words.js`，可直接編輯此檔案來新增或修改單字。

### 單字格式

每個單字需要包含以下欄位：

```javascript
{
    word: "apple",              // 英文單字
    syllables: ["ap", "ple"],   // 音節拆解（陣列）
    chinese: "蘋果",            // 中文翻譯
    example: "I eat an apple every day.", // 例句
    category: "fruits"          // 分類（選填）
}
```

### 可用分類

| 分類 ID | 名稱 | 圖示 |
|---------|------|------|
| `fruits` | 水果 | 🍎 |
| `animals` | 動物 | 🐾 |
| `colors` | 顏色 | 🎨 |
| `nature` | 自然 | 🌿 |
| `food` | 食物 | 🍕 |
| `daily` | 日常用品 | 📦 |
| `places` | 地點 | 🏠 |
| `people` | 人物/情感 | 👥 |
| `others` | 其他 | 📚 |

### 新增單字範例

在 `data/words.js` 的 `words` 陣列中新增：

```javascript
{ word: "strawberry", syllables: ["straw", "ber", "ry"], chinese: "草莓", example: "I love strawberry cake.", category: "fruits" },
```

### 輔助函數

字庫模組提供以下輔助函數：

```javascript
// 取得所有單字
getWordsData()

// 按分類取得單字
getWordsByCategory("animals")

// 取得字庫版本資訊
getLibraryVersion()
```

## 🌐 瀏覽器支援

- ✅ Google Chrome（推薦）
- ✅ Microsoft Edge
- ✅ Safari
- ✅ Firefox

> 💡 提示：如果語音無法播放，請確認已選擇正確的語音，或嘗試切換其他語音選項。

## 📁 專案結構

```
iris-test-spelling-bee/
├── index.html              # 主應用程式
├── README.md               # 專案說明文件
├── data/
│   └── words.js            # 字庫模組（可獨立更新）
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages 自動部署設定
```

## 🚀 部署到 GitHub Pages

1. Fork 或 Clone 此專案到你的 GitHub
2. 進入 Repository Settings > Pages
3. Source 選擇 **GitHub Actions**
4. Push 到 `main` 分支後會自動部署

## 📄 授權

MIT License - 歡迎自由使用與修改！

---

Made with ❤️ for kids learning English
