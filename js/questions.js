/* ==========================================================
   questions.js  試験の定義と問題データ
   ・EXAMS      … 試験カテゴリーと分野の一覧
   ・QUESTIONS  … 問題の一覧
   すべて学習用の独自作成です。実際の試験問題は載せません。
   ========================================================== */

/* 試験カテゴリーの定義。
   overview は断定を避け、「目安」として書きます。 */
const EXAMS = [
  {
    id: 'spi3',
    name: 'SPI3',
    overview: '言語・非言語を中心とした基礎能力を測る検査の練習です（内容は目安）。',
    hasPersonality: true,
    categories: [
      { id: 'verbal', name: '言語' },
      { id: 'nonverbal', name: '非言語' },
      { id: 'english', name: '英語' },
      { id: 'structure', name: '構造的把握力' }
    ]
  },
  {
    id: 'tamatebako',
    name: '玉手箱',
    overview: '短時間で多くの問題を処理する形式の練習です（内容は目安）。',
    hasPersonality: true,
    categories: [
      { id: 'numerical', name: '計数' },
      { id: 'verbal', name: '言語' },
      { id: 'english', name: '英語' }
    ]
  },
  {
    id: 'cab',
    name: 'Web-CAB／CAB',
    overview: '論理的な処理力を測る形式の練習です（内容は目安）。',
    hasPersonality: true,
    categories: [
      { id: 'mental', name: '暗算' },
      { id: 'reverse-calc', name: '四則逆算' },
      { id: 'pattern', name: '法則性' },
      { id: 'command', name: '命令表' },
      { id: 'cipher', name: '暗号' }
    ]
  },
  {
    id: 'gab',
    name: 'GAB／Web-GAB',
    overview: '長文や図表の読み取りを中心とした形式の練習です（内容は目安）。',
    hasPersonality: true,
    categories: [
      { id: 'verbal', name: '言語理解' },
      { id: 'numerical', name: '計数理解' },
      { id: 'english', name: '英語' }
    ]
  },
  {
    id: 'tgweb',
    name: 'TG-WEB',
    overview: '従来型と新型で傾向が異なる形式の練習です（内容は目安）。',
    hasPersonality: false,
    categories: [
      { id: 'verbal-classic', name: '言語（従来型）' },
      { id: 'verbal-new', name: '言語（新型）' },
      { id: 'numerical-classic', name: '計数（従来型）' },
      { id: 'numerical-new', name: '計数（新型）' },
      { id: 'english', name: '英語' }
    ]
  },
  {
    id: 'other',
    name: 'その他',
    overview: '一般常識や論理など、その他の形式の練習と、自分で追加する問題用のカテゴリーです（内容は目安）。',
    hasPersonality: false,
    categories: [
      { id: 'general', name: '一般常識' },
      { id: 'logic', name: '論理・数列' },
      { id: 'custom', name: '独自問題' }
    ]
  }
];

/* 性格検査の受検ガイド（全試験共通）。
   「望ましい回答」は載せません。健全な受検の注意点だけを書きます。 */
const PERSONALITY_GUIDE = [
  '性格検査は、能力の優劣ではなく、行動や考え方の傾向を知るための検査です。正解・不正解はありません。',
  '自分を良く見せようとせず、ふだんの自分に近いものを正直に選びましょう。',
  '一貫性を意識しすぎる必要はありません。考え込まず、直感に近い回答で進めるのが目安です。',
  '質問数が多いことがあります。時間配分に注意し、未回答を残さないようにしましょう。',
  '静かな環境で、体調のよいときに受検しましょう。',
  '形式や所要時間は変わることがあります。実際の受検案内を確認してください。'
];

/* ----------------------------------------------------------
   問題追加用テンプレート
   下のかたまりをコピーして QUESTIONS の [ ] の中に貼り、
   中身を書き換えてください。id は他の問題と重ならないようにします。

  {
    id: 'spi3-nonverbal-003',        // 「試験-分野-連番」の形式を推奨
    examType: 'spi3',                // EXAMS の id
    category: 'nonverbal',           // EXAMS の categories の id
    subCategory: '損益算',            // 細かい単元名（自由）
    difficulty: 2,                   // 1=やさしい 2=ふつう 3=難しい
    questionType: 'single',          // single=選択肢から1つ選ぶ
                                     // judge=「正しい／誤り／判断できない」（選択肢を並べ替えない）
    passage: '',                     // 長文があるときだけ書く（なければ行ごと消してよい）
    questionText: '問題文をここに書く',
    choices: ['選択肢A', '選択肢B', '選択肢C', '選択肢D'],
    correctAnswer: 0,                // 正解の位置（0が1番目）
    explanation: '詳しい解説',
    shortCut: '最短で解くための考え方',
    commonMistakes: '間違えやすいポイント',
    targetSeconds: 60,               // 目標回答時間（秒）
    tags: ['割合'],
    figureData: null,                // 図がないときは null（書き方は下の「図の書き方」）
    sourceType: 'original'           // 独自作成であることの印（必ず original）
  },

   図の書き方（figureData）
   ・表　　 { type: 'table', caption: '表の題名', headers: ['列1', '列2'], rows: [['a', 'b'], ['c', 'd']] }
   ・図形列 { type: 'shapes', alt: '図の説明文', items: [ { shape: 'circle', filled: true }, { shape: 'question' } ] }
            shape は circle / square / triangle / arrow / question。arrow は rotate（角度）で向きを指定
   ・マス目 { type: 'grid', alt: '図の説明文', rows: 3, cols: 3 }
   ---------------------------------------------------------- */

const JUDGE_CHOICES = ['本文から明らかに正しい', '本文から明らかに誤り', '本文からは判断できない'];

const PASSAGE_LIBRARY = '　ある町の図書館は、昨年から開館時間を夜8時まで延ばした。延長後、平日夕方以降の利用者数は延長前の約1.5倍になった。一方で、職員の勤務時間の調整が課題として残っている。';
const PASSAGE_BAKERY = 'A small bakery started selling its bread online last spring. Online orders now make up about one third of its total sales. The owner plans to hire one more baker next year.';
const PASSAGE_REMOTE = '　在宅勤務を導入したある企業では、通勤時間がなくなったことで、社員の多くが自由に使える時間が増えたと回答した。しかし、同じ調査では、同僚との雑談が減り、仕事上の小さな疑問を相談しにくくなったという声も少なくなかった。同社は、週に一度の出社日を設けることで、この問題に対応しようとしている。';
const PASSAGE_BIKE = 'A city introduced a bike-sharing program two years ago. The number of registered users has doubled since the first year. However, some residents complain that bikes are often left on sidewalks.';

const TABLE_DEPARTMENTS = {
  type: 'table',
  caption: '部門別の社員数と売上高',
  headers: ['部門', '社員数', '売上高'],
  rows: [['営業部', '40人', '6,000万円'], ['開発部', '25人', '4,500万円'], ['管理部', '10人', '1,200万円']]
};

const TABLE_COMMANDS = {
  type: 'table',
  caption: '命令表',
  headers: ['命令', '内容'],
  rows: [['反', '並びを左右逆にする'], ['先', '先頭の1つを取り除く'], ['入', '1番目と2番目を入れ替える']]
};

const QUESTIONS = [
  /* ================= SPI3 ================= */
  {
    id: 'spi3-verbal-001', examType: 'spi3', category: 'verbal', subCategory: '二語の関係',
    difficulty: 1, questionType: 'single',
    questionText: '「医師：診察」と同じ関係になっている組み合わせはどれか。',
    choices: ['教師：授業', '学校：生徒', '薬：病気', '病院：医師'],
    correctAnswer: 0,
    explanation: '「医師」は「診察」を行う人です。つまり「人：その人が仕事として行うこと」の関係です。「教師」は「授業」を行う人なので、同じ関係になります。',
    shortCut: '最初の2語を「AはBをする人」のように短い文にして、選択肢に同じ文を当てはめます。',
    commonMistakes: '「病院：医師」は関連が強い語ですが、「場所：人」の関係で、順番も役割も違います。',
    targetSeconds: 30, tags: ['語彙', '関係'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-002', examType: 'spi3', category: 'verbal', subCategory: '語句の意味',
    difficulty: 2, questionType: 'single',
    questionText: '「手を出さず、物事の成り行きを静かに見守ること」という意味に最も近い語はどれか。',
    choices: ['静観', '看破', '黙殺', '懸念'],
    correctAnswer: 0,
    explanation: '「静観」は、行動を起こさずに成り行きを静かに見守ることです。「看破」は見抜くこと、「黙殺」は無視して取り合わないこと、「懸念」は気がかりに思うことです。',
    shortCut: '漢字の意味から考えます。「静かに」「観る」で静観です。',
    commonMistakes: '「黙殺」は「何もしない」点は似ていますが、見守るのではなく無視する意味です。',
    targetSeconds: 30, tags: ['語彙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-001', examType: 'spi3', category: 'nonverbal', subCategory: '損益算',
    difficulty: 2, questionType: 'single',
    questionText: '原価800円の品物に25%の利益を見込んで定価をつけた。この品物を定価の1割引で売ったとき、利益はいくらか。',
    choices: ['80円', '100円', '120円', '200円'],
    correctAnswer: 1,
    explanation: '定価は 800 × 1.25 = 1,000円。1割引の売値は 1,000 × 0.9 = 900円。利益は 900 − 800 = 100円です。',
    shortCut: '原価 → 定価 → 売値の順に掛け算を2回するだけです。800 × 1.25 × 0.9 = 900。',
    commonMistakes: '「25% − 10% = 15%の利益」と考えて120円にしてしまう誤りが多いです。割引は定価に対してかかります。',
    targetSeconds: 60, tags: ['割合', '損益算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-002', examType: 'spi3', category: 'nonverbal', subCategory: '速さ',
    difficulty: 2, questionType: 'single',
    questionText: '家から駅まで、行きは時速4km、帰りは時速6kmで歩いたところ、往復でちょうど1時間かかった。家から駅までの道のりは何kmか。',
    choices: ['2.0km', '2.4km', '2.5km', '3.0km'],
    correctAnswer: 1,
    explanation: '道のりを d km とすると、行きは d÷4 時間、帰りは d÷6 時間。d/4 + d/6 = 1 より、5d/12 = 1。よって d = 2.4km です。',
    shortCut: '検算で選ぶ方法も速いです。2.4km なら 行き36分 + 帰り24分 = 60分。',
    commonMistakes: '速さの平均を (4 + 6) ÷ 2 = 5 として、片道2.5kmとしてしまう誤りに注意します。',
    targetSeconds: 90, tags: ['速さ', '方程式'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-001', examType: 'spi3', category: 'english', subCategory: '同意語',
    difficulty: 1, questionType: 'single',
    questionText: '"rapid" と最も意味が近い語はどれか。',
    choices: ['quick', 'quiet', 'rare', 'rough'],
    correctAnswer: 0,
    explanation: '"rapid" は「速い、急速な」という意味で、"quick" が最も近い語です。quiet は「静かな」、rare は「まれな」、rough は「粗い」です。',
    shortCut: '"rapid growth（急成長）" のように、よく使う組み合わせで覚えておくと即答できます。',
    commonMistakes: 'つづりが似ている "rare" や、音が似ている "quiet" を選ばないようにします。',
    targetSeconds: 20, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-002', examType: 'spi3', category: 'english', subCategory: '空欄補充',
    difficulty: 2, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n"The meeting was put (   ) until next Monday because the manager was sick."',
    choices: ['off', 'up', 'out', 'on'],
    correctAnswer: 0,
    explanation: '"put off" で「延期する」という意味です。「部長が病気のため、会議は来週月曜まで延期された」となります。',
    shortCut: '後ろの "until next Monday（来週月曜まで）" から「延期」の意味だと判断します。',
    commonMistakes: '"put on（身につける）" や "put out（火などを消す）" と混同しないようにします。',
    targetSeconds: 30, tags: ['熟語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-structure-001', examType: 'spi3', category: 'structure', subCategory: '非言語の構造',
    difficulty: 2, questionType: 'single',
    questionText: '次のア〜エのうち、問題の解き方の構造が似ている組み合わせはどれか。\nア　1個120円のりんごを何個か買って600円払った。何個買ったか。\nイ　時速40kmで走る車が120km進むのに何時間かかるか。\nウ　兄は弟より3歳年上で、2人の年齢の和は21歳である。弟は何歳か。\nエ　定価の2割引で売ると800円になる。定価はいくらか。',
    choices: ['アとイ', 'アとウ', 'イとエ', 'ウとエ'],
    correctAnswer: 0,
    explanation: 'アは 600 ÷ 120、イは 120 ÷ 40 で、どちらも「全体の量 ÷ 1つあたりの量」で求めます。ウは和と差から求める問題、エは割合から元の数を求める問題で、構造が異なります。',
    shortCut: '答えを計算する必要はありません。それぞれの式の形だけを書いて見比べます。',
    commonMistakes: '「買い物」「乗り物」など題材の見た目で分けてしまうと間違えます。見るのは式の形です。',
    targetSeconds: 60, tags: ['構造把握'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-structure-002', examType: 'spi3', category: 'structure', subCategory: '言語の構造',
    difficulty: 3, questionType: 'single',
    questionText: '次の例と、論理の組み立てが同じものはどれか。\n例：「雨が降れば試合は中止だ。雨が降った。だから試合は中止だ。」',
    choices: [
      '締切を過ぎれば受付できない。締切を過ぎた。だから受付できない。',
      '練習すれば上達する。上達した。だから練習したのだ。',
      '晴れれば洗濯をする。晴れなかった。だから洗濯をしない。',
      '合格すれば旅行に行く。旅行に行かなかった。だから合格しなかった。'
    ],
    correctAnswer: 0,
    explanation: '例は「AならばB。Aである。だからB。」という形です。同じ形になっているのは「締切を過ぎれば受付できない。締切を過ぎた。だから受付できない。」だけです。',
    shortCut: '文をA・Bの記号に置き換えます。例は「A→B、A、ゆえにB」。2文目が「Aである」になっている選択肢を探します。',
    commonMistakes: '「合格すれば旅行に行く。行かなかった。だから合格しなかった。」は論理として正しいですが、形は「A→B、Bでない、ゆえにAでない」で、例とは異なります。',
    targetSeconds: 75, tags: ['構造把握', '論理'], figureData: null, sourceType: 'original'
  },

  /* ================= 玉手箱 ================= */
  {
    id: 'tamatebako-numerical-001', examType: 'tamatebako', category: 'numerical', subCategory: '図表の読み取り',
    difficulty: 2, questionType: 'single',
    questionText: '次の表で、前年からの売上の増加率が最も大きい店舗はどれか。',
    choices: ['A店', 'B店', 'C店', 'どの店舗も同じ'],
    correctAnswer: 2,
    explanation: 'A店は 60 ÷ 400 = 15%、B店は 50 ÷ 500 = 10%、C店は 50 ÷ 250 = 20%。増加率が最も大きいのはC店です。',
    shortCut: '増えた金額ではなく「増えた金額 ÷ 前年の金額」で比べます。前年が小さいC店は、少ない増加でも率が高くなります。',
    commonMistakes: '増加額が最大のA店（60万円）を選んでしまう誤りが多いです。問われているのは「率」です。',
    targetSeconds: 60, tags: ['図表', '割合'],
    figureData: {
      type: 'table', caption: '店舗別の年間売上（万円）',
      headers: ['店舗', '前年', '今年'],
      rows: [['A店', '400', '460'], ['B店', '500', '550'], ['C店', '250', '300']]
    },
    sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-002', examType: 'tamatebako', category: 'numerical', subCategory: '四則逆算',
    difficulty: 1, questionType: 'single',
    questionText: '□に入る数はどれか。\n□ × 0.25 = 18',
    choices: ['4.5', '54', '72', '76'],
    correctAnswer: 2,
    explanation: '□ = 18 ÷ 0.25 = 72 です。',
    shortCut: '0.25 は 4分の1 なので、「4で割って18になる数」つまり 18 × 4 = 72 と考えると速いです。',
    commonMistakes: '18 × 0.25 = 4.5 と、割るべきところを掛けてしまう誤りに注意します。',
    targetSeconds: 20, tags: ['四則逆算', '小数'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-001', examType: 'tamatebako', category: 'verbal', subCategory: '論理的読解',
    difficulty: 1, questionType: 'judge',
    passage: PASSAGE_LIBRARY,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「開館時間の延長後、平日夕方以降の利用者は増えた。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 0,
    explanation: '本文に「平日夕方以降の利用者数は延長前の約1.5倍になった」とあるので、本文から明らかに正しいと言えます。',
    shortCut: '設問文のキーワード（平日夕方・利用者）を本文から探し、その一文だけで判断します。',
    commonMistakes: '自分の知識や常識で判断しないようにします。根拠は本文に書かれていることだけです。',
    targetSeconds: 40, tags: ['読解', '判断'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-002', examType: 'tamatebako', category: 'verbal', subCategory: '論理的読解',
    difficulty: 2, questionType: 'judge',
    passage: PASSAGE_LIBRARY,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「開館時間の延長によって、休日の利用者数は減った。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 2,
    explanation: '本文は平日夕方以降の利用者数にしか触れていません。休日の利用者数については何も書かれていないため、正しいとも誤りとも判断できません。',
    shortCut: '設問文の話題（休日）が本文に一度も出てこなければ、「判断できない」が候補になります。',
    commonMistakes: '「本文に書かれていない＝誤り」ではありません。本文と食い違う記述があるときだけ「誤り」です。',
    targetSeconds: 40, tags: ['読解', '判断'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-english-001', examType: 'tamatebako', category: 'english', subCategory: '論理的読解',
    difficulty: 2, questionType: 'judge',
    passage: PASSAGE_BAKERY,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n"Online orders account for more than half of the bakery\'s sales."',
    choices: JUDGE_CHOICES,
    correctAnswer: 1,
    explanation: '本文には、オンライン注文は売上全体の「約3分の1（about one third）」とあります。「半分より多い」は本文と食い違うので、明らかに誤りです。',
    shortCut: '数量を表す語（one third / half）を見比べるだけで判断できます。',
    commonMistakes: '"account for"（〜を占める）の意味があいまいだと判断に迷います。"make up" とほぼ同じ意味です。',
    targetSeconds: 45, tags: ['英語読解', '判断'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-english-002', examType: 'tamatebako', category: 'english', subCategory: '論理的読解',
    difficulty: 2, questionType: 'judge',
    passage: PASSAGE_BAKERY,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n"The bakery will open a second shop next year."',
    choices: JUDGE_CHOICES,
    correctAnswer: 2,
    explanation: '本文にある来年の予定は「パン職人をもう1人雇う」ことだけです。2号店の出店については書かれていないので、判断できません。',
    shortCut: '"next year" の一文を確認します。書かれているのは "hire one more baker" だけです。',
    commonMistakes: '「人を増やす＝店を増やすはず」と推測で補わないようにします。',
    targetSeconds: 45, tags: ['英語読解', '判断'], figureData: null, sourceType: 'original'
  },

  /* ================= Web-CAB／CAB ================= */
  {
    id: 'cab-reverse-calc-001', examType: 'cab', category: 'reverse-calc', subCategory: '四則逆算',
    difficulty: 1, questionType: 'single',
    questionText: '□に入る数はどれか。\n36 ÷ □ + 7 = 16',
    choices: ['3', '4', '6', '9'],
    correctAnswer: 1,
    explanation: '36 ÷ □ = 16 − 7 = 9。よって □ = 36 ÷ 9 = 4 です。',
    shortCut: '後ろから順に戻します。「+7」を先に消してから、割り算を考えます。',
    commonMistakes: '36 ÷ □ = 9 の「9」をそのまま答えにしてしまう誤りに注意します。',
    targetSeconds: 20, tags: ['四則逆算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-reverse-calc-002', examType: 'cab', category: 'reverse-calc', subCategory: '四則逆算',
    difficulty: 1, questionType: 'single',
    questionText: '□に入る数はどれか。\n□ × 6 − 14 = 40',
    choices: ['7', '8', '9', '11'],
    correctAnswer: 2,
    explanation: '□ × 6 = 40 + 14 = 54。よって □ = 54 ÷ 6 = 9 です。',
    shortCut: '「−14」を右辺へ移して54。六の段で54になるのは9です。',
    commonMistakes: '40 − 14 = 26 と、足すべきところを引いてしまう誤りに注意します。',
    targetSeconds: 20, tags: ['四則逆算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-pattern-001', examType: 'cab', category: 'pattern', subCategory: '回転',
    difficulty: 1, questionType: 'single',
    questionText: '矢印がある法則で並んでいる。「？」に入る矢印の向きはどれか。',
    choices: ['上向き', '右向き', '下向き', '左向き'],
    correctAnswer: 0,
    explanation: '矢印は 上 → 右 → 下 → 左 と、1つ進むごとに時計回りに90度ずつ回転しています。左の次は上向きです。',
    shortCut: '隣どうしの変化を1つだけ確認し（上→右＝時計回りに90度）、同じ変化が続いているかを確かめます。',
    commonMistakes: '4つで1周することを見落とし、まだ出ていない向きを探してしまうと迷います。',
    targetSeconds: 30, tags: ['法則性', '図形'],
    figureData: {
      type: 'shapes',
      alt: '矢印が左から順に、上向き、右向き、下向き、左向き、最後が「？」',
      items: [
        { shape: 'arrow', rotate: 0 }, { shape: 'arrow', rotate: 90 },
        { shape: 'arrow', rotate: 180 }, { shape: 'arrow', rotate: 270 },
        { shape: 'question' }
      ]
    },
    sourceType: 'original'
  },
  {
    id: 'cab-pattern-002', examType: 'cab', category: 'pattern', subCategory: '複合の法則',
    difficulty: 2, questionType: 'single',
    questionText: '図形がある法則で並んでいる。「？」に入る図形はどれか。',
    choices: ['白い三角形', '黒い三角形', '白い円', '黒い四角形'],
    correctAnswer: 0,
    explanation: '形は 円 → 四角形 → 三角形 の3つをくり返し、色は 黒 → 白 を交互にくり返しています。6番目の形は三角形、色は白なので、白い三角形です。',
    shortCut: '「形」と「色」を別々の法則として分けて考えます。形は3つ周期、色は2つ周期です。',
    commonMistakes: '3番目の三角形が黒だったことから、6番目も黒い三角形としてしまう誤りに注意します。色は1つごとに入れ替わります。',
    targetSeconds: 45, tags: ['法則性', '図形'],
    figureData: {
      type: 'shapes',
      alt: '左から順に、黒い円、白い四角形、黒い三角形、白い円、黒い四角形、最後が「？」',
      items: [
        { shape: 'circle', filled: true }, { shape: 'square', filled: false },
        { shape: 'triangle', filled: true }, { shape: 'circle', filled: false },
        { shape: 'square', filled: true }, { shape: 'question' }
      ]
    },
    sourceType: 'original'
  },
  {
    id: 'cab-command-001', examType: 'cab', category: 'command', subCategory: '命令の適用',
    difficulty: 1, questionType: 'single',
    questionText: '並び「A B C D」に、命令を「反」→「先」の順に実行した。結果の並びはどれか。',
    choices: ['C B A', 'D C B', 'B C D', 'A B C'],
    correctAnswer: 0,
    explanation: '「反」で左右逆にすると「D C B A」。次に「先」で先頭のDを取り除くと「C B A」です。',
    shortCut: '命令を1つ実行するたびに、結果を書き出してから次へ進みます。',
    commonMistakes: '「先」を先に実行すると「B C D」→「D C B」となり、結果が変わります。命令の順番を守ります。',
    targetSeconds: 40, tags: ['命令表'], figureData: TABLE_COMMANDS, sourceType: 'original'
  },
  {
    id: 'cab-command-002', examType: 'cab', category: 'command', subCategory: '命令の適用',
    difficulty: 2, questionType: 'single',
    questionText: '並び「1 2 3 4」に、命令を「入」→「反」→「入」の順に実行した。結果の並びはどれか。',
    choices: ['3 4 1 2', '4 3 1 2', '4 3 2 1', '3 4 2 1'],
    correctAnswer: 0,
    explanation: '「入」で1番目と2番目を入れ替えて「2 1 3 4」。「反」で左右逆にして「4 3 1 2」。もう一度「入」で「3 4 1 2」です。',
    shortCut: '途中経過を「2134 → 4312 → 3412」のように短く書き出すと速く正確です。',
    commonMistakes: '最後の「入」を忘れると「4 3 1 2」になります。命令の数と実行回数を照らし合わせます。',
    targetSeconds: 60, tags: ['命令表'], figureData: TABLE_COMMANDS, sourceType: 'original'
  },
  {
    id: 'cab-cipher-001', examType: 'cab', category: 'cipher', subCategory: 'かなの暗号',
    difficulty: 2, questionType: 'single',
    questionText: 'ある規則で「ねこ」は「のさ」に変換される。同じ規則で「うみ」を変換するとどうなるか。',
    choices: ['えむ', 'いま', 'おめ', 'えみ'],
    correctAnswer: 0,
    explanation: '「ね→の」「こ→さ」は、どちらも五十音順で1つ後ろの文字に置き換えています。同じ規則で「う→え」「み→む」となり、「えむ」です。',
    shortCut: '1文字ずつ、五十音表の上でどれだけ動いたかを確認します。',
    commonMistakes: '「こ→さ」は行をまたぐ（か行の最後→さ行の最初）ため、規則に気づきにくい点に注意します。',
    targetSeconds: 45, tags: ['暗号'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-cipher-002', examType: 'cab', category: 'cipher', subCategory: 'アルファベットの暗号',
    difficulty: 2, questionType: 'single',
    questionText: 'ある規則で「CAT」は「ECV」に変換される。同じ規則で「DOG」を変換するとどうなるか。',
    choices: ['FQI', 'EPH', 'FPI', 'BME'],
    correctAnswer: 0,
    explanation: 'C→E、A→C、T→V は、どれもアルファベット順で2つ後ろの文字です。同じ規則で D→F、O→Q、G→I となり、「FQI」です。',
    shortCut: '最初の1文字（C→E）で「2つ後ろ」と仮定し、残りの文字で確かめます。',
    commonMistakes: '1つ後ろ（EPH）と数え間違えないよう、指を折って数えるなど確実な方法をとります。',
    targetSeconds: 45, tags: ['暗号'], figureData: null, sourceType: 'original'
  },

  /* ================= GAB／Web-GAB ================= */
  {
    id: 'gab-verbal-001', examType: 'gab', category: 'verbal', subCategory: '長文読解',
    difficulty: 2, questionType: 'judge',
    passage: PASSAGE_REMOTE,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「同社は、相談のしにくさへの対応として出社日を設けようとしている。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 0,
    explanation: '本文の「この問題」は、直前の「雑談が減り、相談しにくくなった」ことを指しています。同社は出社日を設けて対応しようとしているので、本文から明らかに正しいと言えます。',
    shortCut: '「この問題」のような指示語が何を指すかを、直前の文で確認します。',
    commonMistakes: '指示語の中身を確かめずに「判断できない」としてしまう誤りに注意します。',
    targetSeconds: 60, tags: ['読解', '判断'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-verbal-002', examType: 'gab', category: 'verbal', subCategory: '長文読解',
    difficulty: 2, questionType: 'judge',
    passage: PASSAGE_REMOTE,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「在宅勤務の導入後、同社の業績は向上した。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 2,
    explanation: '本文は、社員の時間の使い方と相談のしやすさについて述べているだけです。業績については何も書かれていないので、判断できません。',
    shortCut: '設問文の主題（業績）が本文に登場するかを確認します。登場しなければ「判断できない」です。',
    commonMistakes: '「自由な時間が増えた＝業績も上がったはず」と推測で補わないようにします。',
    targetSeconds: 60, tags: ['読解', '判断'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-numerical-001', examType: 'gab', category: 'numerical', subCategory: '表の読み取り',
    difficulty: 2, questionType: 'single',
    questionText: '次の表で、社員1人あたりの売上高が最も大きい部門はどれか。',
    choices: ['営業部', '開発部', '管理部', 'どの部門も同じ'],
    correctAnswer: 1,
    explanation: '営業部は 6,000 ÷ 40 = 150万円、開発部は 4,500 ÷ 25 = 180万円、管理部は 1,200 ÷ 10 = 120万円。最も大きいのは開発部です。',
    shortCut: '25人は「100人の4分の1」なので、4,500 × 4 ÷ 100 = 180 と計算すると速いです。',
    commonMistakes: '売上高の合計が最大の営業部を選んでしまう誤りに注意します。問われているのは「1人あたり」です。',
    targetSeconds: 75, tags: ['図表', '割り算'], figureData: TABLE_DEPARTMENTS, sourceType: 'original'
  },
  {
    id: 'gab-numerical-002', examType: 'gab', category: 'numerical', subCategory: '表の読み取り',
    difficulty: 3, questionType: 'single',
    questionText: '次の表で、3部門の売上高の合計に占める営業部の割合に最も近いものはどれか。',
    choices: ['45%', '51%', '55%', '60%'],
    correctAnswer: 1,
    explanation: '合計は 6,000 + 4,500 + 1,200 = 11,700万円。営業部の割合は 6,000 ÷ 11,700 ≒ 0.513 で、約51%です。',
    shortCut: '合計11,700の半分は5,850。6,000はそれを少しだけ上回るので、50%をわずかに超える51%と判断できます。',
    commonMistakes: '合計を出すときに管理部の1,200を足し忘れると、6,000 ÷ 10,500 ≒ 57%となり、誤った選択肢に近づきます。',
    targetSeconds: 90, tags: ['図表', '割合'], figureData: TABLE_DEPARTMENTS, sourceType: 'original'
  },
  {
    id: 'gab-english-001', examType: 'gab', category: 'english', subCategory: '長文読解',
    difficulty: 2, questionType: 'judge',
    passage: PASSAGE_BIKE,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n"The number of registered users has increased since the program\'s first year."',
    choices: JUDGE_CHOICES,
    correctAnswer: 0,
    explanation: '本文に「登録利用者数は初年度から2倍になった（has doubled）」とあります。2倍になったのだから増えており、本文から明らかに正しいと言えます。',
    shortCut: '"doubled（2倍になった）" と "increased（増えた）" の言い換えに気づけば即答できます。',
    commonMistakes: '本文と同じ単語が使われていないからといって「判断できない」としないようにします。',
    targetSeconds: 60, tags: ['英語読解', '判断'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-english-002', examType: 'gab', category: 'english', subCategory: '長文読解',
    difficulty: 3, questionType: 'judge',
    passage: PASSAGE_BIKE,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n"Most residents are satisfied with the program."',
    choices: JUDGE_CHOICES,
    correctAnswer: 2,
    explanation: '本文にあるのは「一部の住民（some residents）が不満を述べている」ことだけです。大多数の住民が満足しているかどうかは書かれていないので、判断できません。',
    shortCut: '"some" と "most" の範囲の違いに注目します。一部の不満からは、残りの人の気持ちは分かりません。',
    commonMistakes: '「不満があるのは一部＝残りは満足」と考えて「正しい」に、または不満の記述から「誤り」にしてしまう誤りに注意します。',
    targetSeconds: 60, tags: ['英語読解', '判断'], figureData: null, sourceType: 'original'
  },

  /* ================= TG-WEB ================= */
  {
    id: 'tgweb-verbal-classic-001', examType: 'tgweb', category: 'verbal-classic', subCategory: '文の並べ替え',
    difficulty: 3, questionType: 'single',
    questionText: '次のア〜エを意味が通るように並べ替えたとき、3番目に来るものはどれか。\nア　しかし、道具は使い方を誤れば害にもなる。\nイ　技術は人間の生活を便利にする道具である。\nウ　このように考えると、結局は使う側の判断力が問われるのである。\nエ　たとえば、情報を瞬時に広げる仕組みは、誤った情報も同じ速さで広げてしまう。',
    choices: ['ア', 'イ', 'ウ', 'エ'],
    correctAnswer: 3,
    explanation: '正しい順番は イ → ア → エ → ウ です。イで主題を示し、アで「しかし」と問題点を挙げ、エの「たとえば」でその具体例を示し、ウの「このように考えると」で結論をまとめます。3番目はエです。',
    shortCut: '接続語に注目します。「しかし」「たとえば」「このように」で始まる文は先頭になれないので、先頭はイに決まります。',
    commonMistakes: '具体例（エ）は、説明したい内容（ア）のすぐ後ろに置きます。結論（ウ）の後ろに置かないようにします。',
    targetSeconds: 90, tags: ['並べ替え', '接続語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-classic-002', examType: 'tgweb', category: 'verbal-classic', subCategory: '空欄補充',
    difficulty: 2, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n「経験は知識を（　　）する。本で読んだだけの理解は、実際にやってみることで初めて確かなものになるからだ。」',
    choices: ['裏づけ', '否定', '省略', '模倣'],
    correctAnswer: 0,
    explanation: '2文目で「実際にやってみることで理解が確かなものになる」と理由を述べています。経験が知識を確かなものにする、という意味になる「裏づけ」が適切です。',
    shortCut: '空欄の直後にある「〜からだ」の文が理由です。理由の内容と同じ意味になる語を選びます。',
    commonMistakes: '「経験と知識は対立するもの」という先入観で「否定」を選ばないようにします。',
    targetSeconds: 60, tags: ['空欄補充'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-new-001', examType: 'tgweb', category: 'verbal-new', subCategory: '対義語',
    difficulty: 1, questionType: 'single',
    questionText: '「拡大」の対義語として最も適切なものはどれか。',
    choices: ['縮小', '減少', '短縮', '削減'],
    correctAnswer: 0,
    explanation: '「拡大」は規模や範囲を広げて大きくすること。反対に、小さくすることは「縮小」です。',
    shortCut: '対になる漢字で考えます。「拡⇔縮」「大⇔小」で、どちらも対応するのは縮小です。',
    commonMistakes: '「減少」の対義語は「増加」、「短縮」の対義語は「延長」です。似た意味の語と混同しないようにします。',
    targetSeconds: 20, tags: ['語彙', '対義語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-new-002', examType: 'tgweb', category: 'verbal-new', subCategory: '同義語',
    difficulty: 2, questionType: 'single',
    questionText: '「寄与」と最も意味が近い語はどれか。',
    choices: ['貢献', '寄付', '関与', '依存'],
    correctAnswer: 0,
    explanation: '「寄与」は、ある物事のために役に立つことです。同じ意味の語は「貢献」です。',
    shortCut: '「社会の発展に寄与する」のような短い文を作り、入れ替えても意味が変わらない語を選びます。',
    commonMistakes: '同じ漢字を含む「寄付」（金品を贈ること）や「関与」（関わること）を選ばないようにします。',
    targetSeconds: 20, tags: ['語彙', '同義語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-001', examType: 'tgweb', category: 'numerical-classic', subCategory: '推論',
    difficulty: 2, questionType: 'single',
    questionText: 'A・B・C・Dの4人が競走をした。同着はなく、次のことが分かっている。最後にゴールしたのは誰か。\n・AはBより先にゴールした。\n・CはDより先にゴールした。\n・BはCより先にゴールした。',
    choices: ['A', 'B', 'C', 'D'],
    correctAnswer: 3,
    explanation: '条件を順につなげると、A → B → C → D の順にゴールしたことになります。最後はDです。',
    shortCut: '「先」を不等号にして1本の列にします。A＞B、B＞C、C＞D をつなげるだけです。',
    commonMistakes: '条件が書かれた順（A、B、C、D、B、C）に惑わされず、同じ人が出てくる条件どうしをつなげます。',
    targetSeconds: 60, tags: ['推論', '順序'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-002', examType: 'tgweb', category: 'numerical-classic', subCategory: '図形',
    difficulty: 3, questionType: 'single',
    questionText: '同じ大きさの小さな正方形を、縦3個・横3個に並べた図がある。この図の中に、大きさの異なるものも含めて正方形は全部でいくつあるか。',
    choices: ['9個', '10個', '13個', '14個'],
    correctAnswer: 3,
    explanation: '1マス分の正方形が 3 × 3 = 9個、2マス四方の正方形が 2 × 2 = 4個、3マス四方の正方形が1個。合計で 9 + 4 + 1 = 14個です。',
    shortCut: '大きさごとに分けて数えます。n × n のマス目なら、1² + 2² + … + n² で求められます。',
    commonMistakes: '小さい正方形の9個だけ、または全体の大きな1個を足した10個で止めてしまう誤りが多いです。',
    targetSeconds: 90, tags: ['図形', '数え上げ'],
    figureData: { type: 'grid', alt: '縦3個・横3個に区切られた正方形のマス目', rows: 3, cols: 3 },
    sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-new-001', examType: 'tgweb', category: 'numerical-new', subCategory: '四則逆算',
    difficulty: 1, questionType: 'single',
    questionText: '□に入る数はどれか。\n48 × □ = 12',
    choices: ['0.25', '0.4', '4', '36'],
    correctAnswer: 0,
    explanation: '□ = 12 ÷ 48 = 0.25 です。',
    shortCut: '12は48の4分の1なので、□は 1/4 = 0.25 です。',
    commonMistakes: '48 ÷ 12 = 4 と、割る順番を逆にしてしまう誤りに注意します。',
    targetSeconds: 20, tags: ['四則逆算', '小数'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-new-002', examType: 'tgweb', category: 'numerical-new', subCategory: '図表の読み取り',
    difficulty: 2, questionType: 'single',
    questionText: '次の表で、5月の来店者数は4月に比べて何%増えたか。',
    choices: ['20%', '25%', '30%', '125%'],
    correctAnswer: 1,
    explanation: '増えた人数は 1,500 − 1,200 = 300人。増加率は 300 ÷ 1,200 = 0.25 で、25%です。',
    shortCut: '1,200の4分の1が300なので、25%増とすぐに分かります。',
    commonMistakes: '300 ÷ 1,500 = 20% と、5月の人数で割ってしまう誤りに注意します。基準は「比べる元」の4月です。',
    targetSeconds: 40, tags: ['図表', '割合'],
    figureData: {
      type: 'table', caption: '月別の来店者数',
      headers: ['月', '来店者数'],
      rows: [['4月', '1,200人'], ['5月', '1,500人'], ['6月', '1,350人']]
    },
    sourceType: 'original'
  },
  {
    id: 'tgweb-english-001', examType: 'tgweb', category: 'english', subCategory: '空欄補充',
    difficulty: 2, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n"Despite the heavy rain, the event was held (   ) scheduled."',
    choices: ['as', 'by', 'to', 'for'],
    correctAnswer: 0,
    explanation: '"as scheduled" で「予定どおりに」という意味です。「大雨にもかかわらず、イベントは予定どおり開催された」となります。',
    shortCut: '"as scheduled" "as planned" "as expected" は、まとめて「〜のとおりに」と覚えておきます。',
    commonMistakes: '日本語の「予定に」「予定で」に引きずられて "to" や "by" を選ばないようにします。',
    targetSeconds: 30, tags: ['熟語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-english-002', examType: 'tgweb', category: 'english', subCategory: '短文読解',
    difficulty: 2, questionType: 'single',
    questionText: '次の英文の内容に合うものはどれか。\n"The new policy is intended to reduce paper use, not to eliminate it entirely."',
    choices: [
      '新しい方針の目的は、紙の使用を減らすことであり、完全になくすことではない。',
      '新しい方針の目的は、紙の使用を完全になくすことである。',
      '新しい方針では、紙の使用量は変わらない。',
      '新しい方針は、紙の使用を増やすために作られた。'
    ],
    correctAnswer: 0,
    explanation: '"reduce" は「減らす」、"eliminate ... entirely" は「完全になくす」です。"A, not B"（Bではなく A）の形なので、目的は減らすことであり、完全になくすことではありません。',
    shortCut: '"not" の後ろが否定されている内容です。"not to eliminate" なので「なくすわけではない」と読み取ります。',
    commonMistakes: '"eliminate" だけを見て「完全になくす方針だ」と読んでしまう誤りに注意します。',
    targetSeconds: 45, tags: ['英語読解'], figureData: null, sourceType: 'original'
  },

  /* ================= その他（独自問題の見本） ================= */
  {
    id: 'other-custom-001', examType: 'other', category: 'custom', subCategory: '計算',
    difficulty: 1, questionType: 'single',
    questionText: '鉛筆が1ダースずつ入った箱が3箱ある。鉛筆は全部で何本あるか。',
    choices: ['24本', '30本', '36本', '48本'],
    correctAnswer: 2,
    explanation: '1ダースは12本です。12 × 3 = 36本です。',
    shortCut: '「1ダース＝12」をすぐに思い出せるようにしておきます。',
    commonMistakes: '1ダースを10本と考えて30本にしてしまう誤りに注意します。',
    targetSeconds: 20, tags: ['単位'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-custom-002', examType: 'other', category: 'custom', subCategory: '語彙',
    difficulty: 1, questionType: 'single',
    questionText: '「一石二鳥」の意味として最も適切なものはどれか。',
    choices: [
      '1つの行いで2つの利益を得ること',
      '2つのものを追って、どちらも得られないこと',
      '少しずつ努力を積み重ねること',
      '何度失敗してもあきらめないこと'
    ],
    correctAnswer: 0,
    explanation: '「一石二鳥」は、1つの石を投げて2羽の鳥を得ることから、1つの行いで2つの利益を得ることを表します。',
    shortCut: '漢字をそのまま読みます。「一つの石で二羽の鳥」です。',
    commonMistakes: '「二兎を追う者は一兎をも得ず」（2つを追ってどちらも得られない）と混同しないようにします。',
    targetSeconds: 20, tags: ['四字熟語'], figureData: null, sourceType: 'original'
  }
];

/* 問題データの簡易チェック。
   問題がおかしいときは、ブラウザの開発者向けコンソールに警告を出します。
   戻り値は警告の件数です。 */
function checkQuestions(list) {
  const seen = new Set();
  let warnings = 0;
  function warn(message, id) {
    warnings += 1;
    console.warn('[問題データ] ' + message + ': ' + id);
  }
  list.forEach(function (q) {
    if (seen.has(q.id)) warn('IDが重複しています', q.id);
    seen.add(q.id);

    const exam = EXAMS.find(function (e) { return e.id === q.examType; });
    if (!exam) {
      warn('examType が EXAMS にありません', q.id);
    } else if (!exam.categories.some(function (c) { return c.id === q.category; })) {
      warn('category がその試験の分野にありません', q.id);
    }
    if (q.sourceType !== 'original') warn('sourceType が original ではありません', q.id);
    if (!Array.isArray(q.choices) || q.choices.length < 2) {
      warn('選択肢が2つ未満です', q.id);
    } else {
      if (q.choices[q.correctAnswer] === undefined) warn('正解が選択肢の中にありません', q.id);
      if (new Set(q.choices).size !== q.choices.length) warn('同じ選択肢が重複しています', q.id);
    }
    if (!q.questionText || !q.explanation) warn('問題文または解説が空です', q.id);
    if (!(q.targetSeconds > 0)) warn('targetSeconds が正しくありません', q.id);
    if (![1, 2, 3].includes(q.difficulty)) warn('difficulty は 1〜3 にしてください', q.id);
  });
  return warnings;
}

checkQuestions(QUESTIONS);
