/**
 * Spelling Bee 字庫模組
 *
 * 更新說明：
 * 1. 可直接編輯此檔案新增或修改單字
 * 2. 每個單字需要包含以下欄位：
 *    - word: 英文單字
 *    - syllables: 音節拆分（陣列）
 *    - chinese: 中文翻譯
 *    - example: 例句
 *    - category: 分類（選填，用於組織和篩選）
 *
 * 新增單字範例：
 * { word: "example", syllables: ["ex", "am", "ple"], chinese: "範例", example: "This is an example.", category: "其他" }
 */

// 字庫資料 - 按分類組織
const WordLibrary = {
    // 版本資訊（方便追蹤更新）
    version: "1.0.0",
    lastUpdated: "2025-01-15",

    // 分類定義
    categories: {
        fruits: { name: "水果", icon: "🍎" },
        animals: { name: "動物", icon: "🐾" },
        colors: { name: "顏色", icon: "🎨" },
        nature: { name: "自然", icon: "🌿" },
        food: { name: "食物", icon: "🍕" },
        daily: { name: "日常用品", icon: "📦" },
        places: { name: "地點", icon: "🏠" },
        people: { name: "人物/情感", icon: "👥" },
        others: { name: "其他", icon: "📚" }
    },

    // 單字列表
    words: [
        // === 水果類 ===
        { word: "apple", syllables: ["ap", "ple"], chinese: "蘋果", example: "I eat an apple every day.", category: "fruits" },
        { word: "banana", syllables: ["ba", "na", "na"], chinese: "香蕉", example: "The monkey loves banana.", category: "fruits" },
        { word: "orange", syllables: ["or", "ange"], chinese: "橘子/橙色", example: "I like to eat orange.", category: "fruits" },
        { word: "lemon", syllables: ["lem", "on"], chinese: "檸檬", example: "Lemon is very sour.", category: "fruits" },

        // === 動物類 ===
        { word: "cat", syllables: ["cat"], chinese: "貓", example: "The cat is sleeping.", category: "animals" },
        { word: "dog", syllables: ["dog"], chinese: "狗", example: "My dog is very friendly.", category: "animals" },
        { word: "elephant", syllables: ["el", "e", "phant"], chinese: "大象", example: "The elephant has a long trunk.", category: "animals" },
        { word: "fish", syllables: ["fish"], chinese: "魚", example: "Fish live in water.", category: "animals" },
        { word: "giraffe", syllables: ["gi", "raffe"], chinese: "長頸鹿", example: "The giraffe has a long neck.", category: "animals" },
        { word: "lion", syllables: ["li", "on"], chinese: "獅子", example: "The lion is the king of animals.", category: "animals" },
        { word: "monkey", syllables: ["mon", "key"], chinese: "猴子", example: "The monkey climbs the tree.", category: "animals" },
        { word: "rabbit", syllables: ["rab", "bit"], chinese: "兔子", example: "The rabbit has long ears.", category: "animals" },
        { word: "tiger", syllables: ["ti", "ger"], chinese: "老虎", example: "The tiger runs very fast.", category: "animals" },
        { word: "zebra", syllables: ["ze", "bra"], chinese: "斑馬", example: "A zebra has black and white stripes.", category: "animals" },
        { word: "bird", syllables: ["bird"], chinese: "鳥", example: "The bird can fly high.", category: "animals" },
        { word: "butterfly", syllables: ["but", "ter", "fly"], chinese: "蝴蝶", example: "The butterfly is beautiful.", category: "animals" },

        // === 顏色類 ===
        { word: "yellow", syllables: ["yel", "low"], chinese: "黃色", example: "The sun is yellow.", category: "colors" },
        { word: "violet", syllables: ["vi", "o", "let"], chinese: "紫羅蘭/紫色", example: "Violet is a beautiful color.", category: "colors" },

        // === 自然類 ===
        { word: "sun", syllables: ["sun"], chinese: "太陽", example: "The sun rises in the east.", category: "nature" },
        { word: "cloud", syllables: ["cloud"], chinese: "雲", example: "Look at the white cloud.", category: "nature" },
        { word: "flower", syllables: ["flow", "er"], chinese: "花", example: "The flower smells nice.", category: "nature" },
        { word: "rainbow", syllables: ["rain", "bow"], chinese: "彩虹", example: "The rainbow has seven colors.", category: "nature" },
        { word: "mountain", syllables: ["moun", "tain"], chinese: "山", example: "The mountain is very tall.", category: "nature" },
        { word: "ocean", syllables: ["o", "cean"], chinese: "海洋", example: "The ocean is very deep.", category: "nature" },
        { word: "island", syllables: ["is", "land"], chinese: "島嶼", example: "The island is in the ocean.", category: "nature" },
        { word: "water", syllables: ["wa", "ter"], chinese: "水", example: "We need water to live.", category: "nature" },
        { word: "nest", syllables: ["nest"], chinese: "鳥巢", example: "Birds build a nest in the tree.", category: "nature" },

        // === 食物類 ===
        { word: "pizza", syllables: ["piz", "za"], chinese: "披薩", example: "Pizza is my favorite food.", category: "food" },
        { word: "juice", syllables: ["juice"], chinese: "果汁", example: "Orange juice is delicious.", category: "food" },
        { word: "ice cream", syllables: ["ice", "cream"], chinese: "冰淇淋", example: "I love ice cream in summer.", category: "food" },
        { word: "jelly", syllables: ["jel", "ly"], chinese: "果凍", example: "Kids love to eat jelly.", category: "food" },
        { word: "vegetable", syllables: ["veg", "e", "ta", "ble"], chinese: "蔬菜", example: "Eat more vegetables.", category: "food" },

        // === 日常用品類 ===
        { word: "umbrella", syllables: ["um", "brel", "la"], chinese: "雨傘", example: "Take an umbrella when it rains.", category: "daily" },
        { word: "pencil", syllables: ["pen", "cil"], chinese: "鉛筆", example: "I draw with a pencil.", category: "daily" },
        { word: "notebook", syllables: ["note", "book"], chinese: "筆記本", example: "I write in my notebook.", category: "daily" },
        { word: "box", syllables: ["box"], chinese: "盒子", example: "The toy is in the box.", category: "daily" },
        { word: "window", syllables: ["win", "dow"], chinese: "窗戶", example: "Open the window please.", category: "daily" },
        { word: "kite", syllables: ["kite"], chinese: "風箏", example: "Let's fly a kite in the park.", category: "daily" },
        { word: "xylophone", syllables: ["xy", "lo", "phone"], chinese: "木琴", example: "She plays the xylophone.", category: "daily" },

        // === 地點類 ===
        { word: "house", syllables: ["house"], chinese: "房子", example: "I live in a big house.", category: "places" },
        { word: "garden", syllables: ["gar", "den"], chinese: "花園", example: "We play in the garden.", category: "places" },
        { word: "kitchen", syllables: ["kitch", "en"], chinese: "廚房", example: "Mom cooks in the kitchen.", category: "places" },
        { word: "yard", syllables: ["yard"], chinese: "院子", example: "I play in the yard.", category: "places" },
        { word: "school", syllables: ["school"], chinese: "學校", example: "I go to school every day.", category: "places" },
        { word: "zoo", syllables: ["zoo"], chinese: "動物園", example: "We visit the zoo on Sunday.", category: "places" },

        // === 人物/情感類 ===
        { word: "happy", syllables: ["hap", "py"], chinese: "快樂的", example: "I am very happy today.", category: "people" },
        { word: "friend", syllables: ["friend"], chinese: "朋友", example: "You are my best friend.", category: "people" },
        { word: "teacher", syllables: ["teach", "er"], chinese: "老師", example: "My teacher is very kind.", category: "people" },
        { word: "queen", syllables: ["queen"], chinese: "皇后", example: "The queen lives in a castle.", category: "people" },
        { word: "unicorn", syllables: ["u", "ni", "corn"], chinese: "獨角獸", example: "The unicorn is magical.", category: "people" }
    ]
};

// 輔助函數：取得所有單字（用於向後相容）
function getWordsData() {
    return WordLibrary.words;
}

// 輔助函數：按分類取得單字
function getWordsByCategory(category) {
    return WordLibrary.words.filter(word => word.category === category);
}

// 輔助函數：取得所有分類
function getCategories() {
    return WordLibrary.categories;
}

// 輔助函數：取得字庫版本
function getLibraryVersion() {
    return {
        version: WordLibrary.version,
        lastUpdated: WordLibrary.lastUpdated,
        totalWords: WordLibrary.words.length
    };
}

// 為了向後相容，直接匯出 wordsData 陣列
const wordsData = WordLibrary.words;
