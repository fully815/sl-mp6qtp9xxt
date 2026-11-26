/* ==========================================================
   questions-2.js  追加の問題データ（出題分野の抜けを埋める分）
   ・書き方は js/questions.js のテンプレートと同じです。
   ・ここに書いた問題は、QUESTIONS の後ろに追加されます。
   すべて学習用の独自作成です。実際の試験問題は載せません。
   ========================================================== */

/* 趣旨判定（3つの中から1つを選ぶ形式）の選択肢 */
const GIST_CHOICES = [
  '筆者が一番訴えたいこと（趣旨）が述べられている',
  '本文に書かれているが、一番訴えたいことではない',
  'この本文とは関係のないことが書かれている'
];

const PASSAGE_HABIT = '　新しい習慣を身につけるには、意志の強さよりも、行動を始めるきっかけを決めておくことが有効だとされる。たとえば「朝食の後に10分だけ本を読む」のように、すでに毎日行っている行動と結びつけると、思い出す手間が省ける。反対に、「時間があるときにやる」という決め方では、実行の機会そのものが訪れにくい。';
const PASSAGE_READING = '　読書の価値は、得られる知識の量だけでは測れない。自分とは異なる立場の人物の考えをたどることで、物事を複数の視点から見る力が養われる。最近は要約サービスを使って短時間で内容を知る人も増えたが、要約では結論は分かっても、そこに至る思考の過程までは味わえない。時間をかけて一冊を読み通す経験こそが、考える力の土台になるのである。';
const PASSAGE_MEETING = '　会議の時間を短くするには、開始前の準備が鍵になる。議題と決めたいことを事前に共有しておけば、参加者は自分の意見を整理してから臨める。その結果、当日は説明ではなく議論に時間を使えるようになる。会議中の進行を工夫するだけでは、効果は限られる。';
const PASSAGE_TOOL = '　道具は、使う人の能力を広げると同時に、使わなくなった能力を衰えさせる面をもつ。地図アプリに頼れば迷うことは減るが、道順を自分で覚えようとする機会も減る。重要なのは、道具を拒むことではなく、何を任せ、何を自分で行うかを意識して選ぶことである。';
const PASSAGE_GARBAGE = '　ある市では、家庭ごみの袋を有料にした翌年、家庭ごみの量が前年より約1割減った。一方で、資源ごみとして出される紙類の量は約2割増えた。';
const PASSAGE_HOMEWORK = 'A company surveyed 200 employees about working from home. About 70 percent of them said they could concentrate better at home. However, nearly half of all the employees also said they sometimes felt lonely. The company decided to hold an online lunch meeting every Friday.';
const PASSAGE_VEGETABLE = 'A supermarket chain began selling "imperfect" vegetables at a 30 percent discount last year. These vegetables taste the same as regular ones but have unusual shapes. Sales were higher than expected, and the chain now plans to offer imperfect fruit as well.';

const TABLE_SHOPS = {
  type: 'table',
  caption: '店舗別の来客数と購入者数（1日）',
  headers: ['店舗', '来客数', '購入者数'],
  rows: [['A店', '200人', '50人'], ['B店', '150人', '45人'], ['C店', '250人', '50人']]
};
const TABLE_AD = {
  type: 'table',
  caption: '広告費と来店者数',
  headers: ['店舗', '広告費', '来店者数'],
  rows: [['P店', '10万円', '500人'], ['Q店', '20万円', '1,000人'], ['R店', '30万円', '1,500人'], ['S店', '40万円', '？']]
};
const TABLE_ICE = {
  type: 'table',
  caption: '最高気温とアイスの販売数',
  headers: ['日', '最高気温', '販売数'],
  rows: [['1日目', '20℃', '110個'], ['2日目', '24℃', '150個'], ['3日目', '28℃', '190個'], ['4日目', '30℃', '？']]
};
const TABLE_PROFIT = {
  type: 'table',
  caption: '年度別の売上高と営業利益',
  headers: ['年度', '売上高', '営業利益'],
  rows: [['2021年度', '500億円', '40億円'], ['2022年度', '600億円', '54億円'], ['2023年度', '720億円', '54億円']]
};

QUESTIONS.push(
  /* ================= SPI3：言語 ================= */
  {
    id: 'spi3-verbal-003', examType: 'spi3', category: 'verbal', subCategory: '語句の用法',
    difficulty: 2, questionType: 'single',
    questionText: '次の文の「手」と、最も近い意味で使われているものはどれか。\n「忙しくて手が足りない。」',
    choices: ['この手の話は苦手だ。', 'うまい手を思いつく。', '引っ越しの手を借りる。', '火の手が上がる。'],
    correctAnswer: 2,
    explanation: '例文の「手」は「働く人、労力」の意味です。「引っ越しの手を借りる」も、手伝う人の労力を借りるという同じ意味です。「この手の話」は種類、「うまい手」は方法、「火の手」は勢いを表します。',
    shortCut: '「手」を別の言葉（労力・種類・方法）に置き換えて、例文と同じ言葉が入るものを選びます。',
    commonMistakes: '「うまい手」は仕事の場面でよく使うため選びがちですが、「方法」の意味です。',
    targetSeconds: 40, tags: ['語彙', '多義語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-004', examType: 'spi3', category: 'verbal', subCategory: '文の並べ替え',
    difficulty: 2, questionType: 'single',
    questionText: 'ア〜エを並べ替えて文を完成させるとき、3番目にくるものはどれか。\n「多くの専門家は、［1］［2］［3］［4］述べている。」\nア　を見直すことが\nイ　健康を保つには\nウ　欠かせないと\nエ　毎日の食事',
    choices: ['ア', 'イ', 'ウ', 'エ'],
    correctAnswer: 0,
    explanation: '「健康を保つには（イ）／毎日の食事（エ）／を見直すことが（ア）／欠かせないと（ウ）述べている」となります。3番目は「ア」です。',
    shortCut: '最後の「述べている」につながるのは「〜と」で終わるウだけです。後ろから決めると速く並べられます。',
    commonMistakes: '問われているのは「3番目」です。並べ終えたあと、1番目や4番目を答えないように注意します。',
    targetSeconds: 50, tags: ['文法', '並べ替え'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-005', examType: 'spi3', category: 'verbal', subCategory: '空欄補充',
    difficulty: 1, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n「彼の説明は（　　）を得ており、初めて聞く人にも分かりやすかった。」',
    choices: ['資格', '要領', '利益', '許可'],
    correctAnswer: 1,
    explanation: '「要領を得る」は、要点がはっきりしていて分かりやすいという意味の決まった言い方です。後ろの「分かりやすかった」とも合います。',
    shortCut: '後半の「分かりやすかった」が手がかりです。説明の分かりやすさを表す言い方を探します。',
    commonMistakes: '「資格を得る」「許可を得る」も言い方としては正しいので、空欄の前後だけで選ばず、文全体の意味で確かめます。',
    targetSeconds: 30, tags: ['語彙', '慣用表現'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-006', examType: 'spi3', category: 'verbal', subCategory: '熟語の成り立ち',
    difficulty: 2, questionType: 'single',
    questionText: '熟語「登山」の成り立ちとして、最も適切なものはどれか。',
    choices: ['似た意味の漢字を重ねている', '反対の意味の漢字を重ねている', '前の漢字が後ろの漢字を修飾している', '動詞のあとに目的語がきている'],
    correctAnswer: 3,
    explanation: '「登山」は「山に登る」と読めます。前の漢字が動作、後ろの漢字がその対象なので、「動詞のあとに目的語がきている」形です。「読書（書を読む）」「乗車（車に乗る）」と同じです。',
    shortCut: '下の字から上の字へ「〜を（に）〜する」と読めるかを最初に試します。',
    commonMistakes: '「前が後ろを修飾」は「高山（高い山）」のような形です。「登る山」と読んでしまうと間違えます。',
    targetSeconds: 30, tags: ['熟語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-007', examType: 'spi3', category: 'verbal', subCategory: '長文読解',
    difficulty: 2, questionType: 'single',
    passage: PASSAGE_HABIT,
    questionText: '本文の内容と合っているものはどれか。',
    choices: ['意志が強い人でなければ、習慣は身につかない。', '「時間があるときにやる」と決めるのが最も続けやすい。', 'すでにある日課と結びつけると、新しい習慣を始めやすい。', '習慣にするには、毎日1時間以上の練習が必要である。'],
    correctAnswer: 2,
    explanation: '本文は、すでに毎日行っている行動と結びつけると思い出す手間が省ける、と述べています。意志の強さは「よりも」と比較で退けられ、「時間があるとき」は実行しにくい例として挙げられています。練習時間の長さには触れていません。',
    shortCut: '選択肢を1つずつ本文に戻して、書かれているかどうかだけを確かめます。',
    commonMistakes: '一般的に正しそうな内容でも、本文に書かれていなければ選べません。',
    targetSeconds: 80, tags: ['読解'], figureData: null, sourceType: 'original'
  },

  /* ================= SPI3：非言語 ================= */
  {
    id: 'spi3-nonverbal-003', examType: 'spi3', category: 'nonverbal', subCategory: '推論（順序）',
    difficulty: 2, questionType: 'single',
    questionText: 'P、Q、R、Sの4人が競走をした。同着はなく、次のことが分かっている。\n・PはQより先にゴールした\n・RはSより後にゴールした\n・QはSより先にゴールした\nこのとき、必ず正しいといえるものはどれか。',
    choices: ['2位はSである', 'Rは3位である', '1位はPである', 'QはRより後にゴールした'],
    correctAnswer: 2,
    explanation: '条件をつなぐと、P → Q → S → R の順に決まります。したがって1位はP、2位はQ、3位はS、4位はRです。',
    shortCut: '「先」を左に書くと決めて、P＜Q、S＜R、Q＜S を1本の線につなぎます。',
    commonMistakes: '「先」「後」の向きを途中で逆に書いてしまう誤りが多いです。書き方を最初に決めます。',
    targetSeconds: 70, tags: ['推論', '順序'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-004', examType: 'spi3', category: 'nonverbal', subCategory: '推論（内訳）',
    difficulty: 3, questionType: 'single',
    questionText: 'りんご、みかん、柿を合わせて10個買った。どれも1個以上買い、りんごはみかんより多く、みかんは柿より多い。りんごが6個のとき、みかんは何個か。',
    choices: ['1個', '2個', '3個', '4個'],
    correctAnswer: 2,
    explanation: 'りんごが6個なら、みかんと柿の合計は4個です。柿は1個以上で、みかんは柿より多いので、（みかん, 柿）は（3, 1）だけです。（2, 2）は同じ数なので条件に合いません。',
    shortCut: '残りの個数（4個）を先に出し、条件に合う分け方を小さい順に書き出します。',
    commonMistakes: '「多い」は同じ数を含みません。（2, 2）を数えてしまう誤りに注意します。',
    targetSeconds: 80, tags: ['推論', '場合分け'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-005', examType: 'spi3', category: 'nonverbal', subCategory: '順列',
    difficulty: 1, questionType: 'single',
    questionText: '6人の中から、委員長と副委員長を1人ずつ選ぶ。選び方は何通りあるか。',
    choices: ['12通り', '15通り', '30通り', '36通り'],
    correctAnswer: 2,
    explanation: '委員長の選び方は6通り、副委員長は残りの5人から選ぶので5通りです。6 × 5 = 30通りです。',
    shortCut: '役割が違うときは順列です。「6 × 5」のように、人数を1つずつ減らして掛けます。',
    commonMistakes: '役割を区別せず 6 × 5 ÷ 2 = 15通りとしてしまう誤りがあります。委員長と副委員長は別の役割です。',
    targetSeconds: 40, tags: ['場合の数', '順列'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-006', examType: 'spi3', category: 'nonverbal', subCategory: '組み合わせ',
    difficulty: 2, questionType: 'single',
    questionText: '男性4人、女性3人の中から、男性2人と女性1人を選んで3人の班を作る。選び方は何通りあるか。',
    choices: ['12通り', '18通り', '24通り', '35通り'],
    correctAnswer: 1,
    explanation: '男性4人から2人を選ぶ方法は 4 × 3 ÷ 2 = 6通り。女性3人から1人を選ぶ方法は3通り。6 × 3 = 18通りです。',
    shortCut: '男女を別々に数えてから掛け合わせます。',
    commonMistakes: '7人から3人を選ぶ35通りは、男女の人数の条件を無視しています。',
    targetSeconds: 60, tags: ['場合の数', '組み合わせ'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-007', examType: 'spi3', category: 'nonverbal', subCategory: '確率',
    difficulty: 2, questionType: 'single',
    questionText: '赤玉3個、白玉2個が入った袋から、同時に2個を取り出す。2個とも赤玉である確率はどれか。',
    choices: ['1/5', '3/10', '2/5', '9/25'],
    correctAnswer: 1,
    explanation: '5個から2個を選ぶ方法は 5 × 4 ÷ 2 = 10通り。赤玉3個から2個を選ぶ方法は 3 × 2 ÷ 2 = 3通り。確率は 3/10 です。',
    shortCut: '1個ずつ考えてもよいです。3/5 × 2/4 = 6/20 = 3/10。',
    commonMistakes: '3/5 × 3/5 = 9/25 は、取り出した玉を戻す場合の計算です。同時に取り出すときは玉が減ります。',
    targetSeconds: 60, tags: ['確率'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-008', examType: 'spi3', category: 'nonverbal', subCategory: '集合',
    difficulty: 2, questionType: 'single',
    questionText: '100人に調査したところ、犬が好きな人は60人、猫が好きな人は50人、どちらも好きでない人は15人だった。犬も猫も好きな人は何人か。',
    choices: ['10人', '15人', '25人', '35人'],
    correctAnswer: 2,
    explanation: '少なくとも一方が好きな人は 100 − 15 = 85人。60 + 50 = 110人との差が、両方に数えられた人です。110 − 85 = 25人です。',
    shortCut: '「合計 − 全体のうち当てはまる人数 = 重なり」と覚えます。',
    commonMistakes: '全体の100人から引いて 110 − 100 = 10人とする誤りがあります。「どちらも好きでない」15人を先に除きます。',
    targetSeconds: 60, tags: ['集合'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-009', examType: 'spi3', category: 'nonverbal', subCategory: '割合と比',
    difficulty: 1, questionType: 'single',
    questionText: 'ある会社では、社員の40%が女性で、女性社員の25%が営業職である。女性の営業職は、社員全体の何%か。',
    choices: ['10%', '15%', '25%', '65%'],
    correctAnswer: 0,
    explanation: '0.4 × 0.25 = 0.1 なので、全体の10%です。社員が100人なら、女性は40人、そのうち営業職は10人です。',
    shortCut: '全体を100人と置いて、人数で考えると間違えにくいです。',
    commonMistakes: '40% − 25% = 15% や 40% + 25% = 65% としないようにします。「〜のうちの」は掛け算です。',
    targetSeconds: 40, tags: ['割合'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-010', examType: 'spi3', category: 'nonverbal', subCategory: '仕事算',
    difficulty: 2, questionType: 'single',
    questionText: 'ある仕事を、Aさんは1人で12日、Bさんは1人で24日で仕上げる。2人で一緒に行うと、何日で仕上がるか。',
    choices: ['6日', '8日', '9日', '18日'],
    correctAnswer: 1,
    explanation: '全体を1とすると、1日の仕事量はAさんが 1/12、Bさんが 1/24。合わせて 1/12 + 1/24 = 3/24 = 1/8。したがって8日です。',
    shortCut: '全体を24（12と24の最小公倍数）と置くと、Aは1日2、Bは1日1。24 ÷ 3 = 8日。',
    commonMistakes: '(12 + 24) ÷ 2 = 18日のように、日数の平均をとってはいけません。',
    targetSeconds: 60, tags: ['仕事算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-011', examType: 'spi3', category: 'nonverbal', subCategory: '料金の割引',
    difficulty: 2, questionType: 'single',
    questionText: 'ある施設の入場料は1人800円で、20人を超えた分については1人あたり2割引になる。25人で入場するとき、入場料の合計はいくらか。',
    choices: ['16,000円', '19,200円', '19,360円', '20,000円'],
    correctAnswer: 1,
    explanation: '20人までは 800 × 20 = 16,000円。超えた5人は 800 × 0.8 = 640円なので 640 × 5 = 3,200円。合計は 19,200円です。',
    shortCut: '割引がかかるのは「超えた分だけ」です。人数を2つに分けて計算します。',
    commonMistakes: '25人全員を2割引にして 16,000円とする誤りが多いです。',
    targetSeconds: 60, tags: ['割引', '料金'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-012', examType: 'spi3', category: 'nonverbal', subCategory: '代金の精算',
    difficulty: 2, questionType: 'single',
    questionText: 'A、B、Cの3人で食事をし、代金6,000円のうちAが4,500円、Bが1,500円を支払った。3人の負担を同じにするため、BとCがそれぞれAにお金を渡す。CはAにいくら渡せばよいか。',
    choices: ['1,500円', '2,000円', '2,500円', '3,000円'],
    correctAnswer: 1,
    explanation: '1人あたりの負担は 6,000 ÷ 3 = 2,000円。Cは何も払っていないので、2,000円をAに渡します。Bは 2,000 − 1,500 = 500円をAに渡します。Aは 4,500 − 2,500 = 2,000円の負担になります。',
    shortCut: '最初に「1人あたりの負担額」を出し、各自の支払額との差を見ます。',
    commonMistakes: 'Aが多く払った分 2,500円を、そのままCの額としてしまう誤りがあります。Bの不足分500円も含まれています。',
    targetSeconds: 70, tags: ['精算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-013', examType: 'spi3', category: 'nonverbal', subCategory: '分割払い',
    difficulty: 2, questionType: 'single',
    questionText: 'ある品物を買い、購入時に総額の 1/4 を支払った。残りを6回の均等払いにするとき、1回の支払額は総額のどれだけにあたるか。利子は考えない。',
    choices: ['1/6', '1/8', '1/10', '1/24'],
    correctAnswer: 1,
    explanation: '残りは 1 − 1/4 = 3/4。これを6回に分けるので、3/4 ÷ 6 = 3/24 = 1/8 です。',
    shortCut: '総額を24と置くと、最初に6、残り18を6回で割って1回3。3/24 = 1/8。',
    commonMistakes: '最初に払った分を引かずに 1/6 としてしまう誤りに注意します。',
    targetSeconds: 50, tags: ['分数', '分割払い'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-014', examType: 'spi3', category: 'nonverbal', subCategory: '表の読み取り',
    difficulty: 2, questionType: 'single',
    questionText: '表は、3つの店舗の1日の来客数と購入者数である。来客数に対する購入者数の割合が最も高い店舗はどれか。',
    choices: ['A店', 'B店', 'C店', 'A店とC店が同じで最も高い'],
    correctAnswer: 1,
    explanation: 'A店は 50 ÷ 200 = 25%、B店は 45 ÷ 150 = 30%、C店は 50 ÷ 250 = 20% です。最も高いのはB店です。',
    shortCut: '購入者数が同じA店とC店は、来客数が少ないA店のほうが高いとすぐ分かります。あとはA店とB店を比べるだけです。',
    commonMistakes: '購入者数の多さだけで選ばないようにします。問われているのは割合です。',
    targetSeconds: 60, tags: ['表', '割合'], figureData: TABLE_SHOPS, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-015', examType: 'spi3', category: 'nonverbal', subCategory: '濃度',
    difficulty: 2, questionType: 'single',
    questionText: '濃度5%の食塩水200gと、濃度10%の食塩水300gを混ぜた。できた食塩水の濃度は何%か。',
    choices: ['7%', '7.5%', '8%', '8.5%'],
    correctAnswer: 2,
    explanation: '食塩の量は 200 × 0.05 = 10g と 300 × 0.10 = 30g で、合わせて40g。食塩水は500gなので、40 ÷ 500 = 8% です。',
    shortCut: '食塩の重さを先に出して足し、全体の重さで割ります。',
    commonMistakes: '(5 + 10) ÷ 2 = 7.5% のように濃度を平均してはいけません。量が多い10%の側に寄ります。',
    targetSeconds: 60, tags: ['濃度', '割合'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-016', examType: 'spi3', category: 'nonverbal', subCategory: '年齢算',
    difficulty: 2, questionType: 'single',
    questionText: '現在、父は40歳、子は10歳である。父の年齢が子の年齢のちょうど3倍になるのは、何年後か。',
    choices: ['3年後', '5年後', '8年後', '10年後'],
    correctAnswer: 1,
    explanation: 'x年後とすると、40 + x = 3 × (10 + x)。40 + x = 30 + 3x より、2x = 10、x = 5 です。5年後は父45歳、子15歳です。',
    shortCut: '年齢の差30歳は変わりません。3倍のとき、差は子の年齢の2倍なので、子は15歳。今から5年後です。',
    commonMistakes: '子の年齢にだけ年数を足し、父の年齢を40歳のままにしてしまう誤りがあります。',
    targetSeconds: 60, tags: ['年齢算', '方程式'], figureData: null, sourceType: 'original'
  },

  /* ================= SPI3：英語 ================= */
  {
    id: 'spi3-english-003', examType: 'spi3', category: 'english', subCategory: '反意語',
    difficulty: 2, questionType: 'single',
    questionText: '"expand" と反対の意味をもつ語はどれか。',
    choices: ['extend', 'explain', 'shrink', 'expect'],
    correctAnswer: 2,
    explanation: '"expand" は「広がる、拡大する」、"shrink" は「縮む、縮小する」で反対の意味です。extend は「延ばす」で似た意味、explain は「説明する」、expect は「予期する」です。',
    shortCut: '反意語の問題では、似た意味の語（ここでは extend）が必ず混ざります。最初に消します。',
    commonMistakes: '"ex" で始まる語が並んでいるため、つづりだけで選ばないようにします。',
    targetSeconds: 20, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-004', examType: 'spi3', category: 'english', subCategory: '英英辞典',
    difficulty: 1, questionType: 'single',
    questionText: '次の説明に最も合う語はどれか。\n"a person who buys goods or services from a shop or business"',
    choices: ['clerk', 'customer', 'owner', 'supplier'],
    correctAnswer: 1,
    explanation: '「店や会社から商品やサービスを買う人」は "customer（客）" です。clerk は店員、owner は所有者、supplier は仕入れ先です。',
    shortCut: '説明文の動詞（ここでは buys）に注目します。「買う人」＝客です。',
    commonMistakes: '"shop" という語から clerk（店員）を選ばないようにします。店員は売る側です。',
    targetSeconds: 25, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-005', examType: 'spi3', category: 'english', subCategory: '誤文訂正',
    difficulty: 2, questionType: 'single',
    questionText: '次の文で、誤りを含む部分はどれか。\n"She (A) has lived in Osaka (B) since five years, and she (C) knows the city (D) very well."',
    choices: ['(A) has lived', '(B) since five years', '(C) knows', '(D) very well'],
    correctAnswer: 1,
    explanation: '「5年間」のように期間の長さを表すときは "for five years" を使います。"since" は "since 2020" のように、始まった時点を表す語と使います。',
    shortCut: '現在完了の文では、for（期間）と since（起点）の使い分けを最初に確かめます。',
    commonMistakes: '"has lived" を過去形に直したくなりますが、今も住んでいるので現在完了で正しいです。',
    targetSeconds: 40, tags: ['文法', '現在完了'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-006', examType: 'spi3', category: 'english', subCategory: '和文英訳',
    difficulty: 3, questionType: 'single',
    questionText: '次の日本語の意味を最もよく表している英文はどれか。\n「もっと早く出発していれば、電車に間に合ったのに。」',
    choices: ['If I left earlier, I will catch the train.', 'If I have left earlier, I would catch the train.', 'If I had left earlier, I will have caught the train.', 'If I had left earlier, I would have caught the train.'],
    correctAnswer: 3,
    explanation: '過去の事実と違うことを仮定するときは、「If + had + 過去分詞, would have + 過去分詞」の形を使います。',
    shortCut: '「〜していれば、〜したのに」は過去の後悔です。had と would have の組を探します。',
    commonMistakes: '前半だけ正しい形（had left）の選択肢があります。後半の形も確かめます。',
    targetSeconds: 45, tags: ['文法', '仮定法'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-007', examType: 'spi3', category: 'english', subCategory: '長文読解',
    difficulty: 2, questionType: 'single',
    passage: PASSAGE_HOMEWORK,
    questionText: 'According to the passage, which of the following is true?',
    choices: ['All the employees felt lonely at home.', 'The company stopped working from home.', 'Most employees said they could concentrate better at home.', 'The online lunch meeting is held every day.'],
    correctAnswer: 2,
    explanation: '本文に「約70%が自宅のほうが集中できると答えた」とあるので、"Most employees"（大半の社員）は正しいです。孤独を感じたのは「半数近く」で全員ではありません。在宅勤務をやめたとは書かれておらず、昼食会は毎週金曜です。',
    shortCut: '数字や頻度の語（all、most、every day）に注目して、本文の表現と比べます。',
    commonMistakes: '"nearly half"（半数近く）を "all" と読み替えないようにします。',
    targetSeconds: 80, tags: ['読解'], figureData: null, sourceType: 'original'
  },

  /* ================= 玉手箱 ================= */
  {
    id: 'tamatebako-numerical-003', examType: 'tamatebako', category: 'numerical', subCategory: '表の空欄推測',
    difficulty: 1, questionType: 'single',
    questionText: '表の「？」に入る数値として、最も適切と推測できるものはどれか。',
    choices: ['1,600人', '1,800人', '2,000人', '2,500人'],
    correctAnswer: 2,
    explanation: '広告費が10万円増えるごとに、来店者数が500人ずつ増えています。広告費1万円あたり50人の関係なので、40万円では 2,000人と推測できます。',
    shortCut: '最初に「割り算で一定になるか」「差が一定か」を確かめます。ここではどちらも一定です。',
    commonMistakes: '表の数値を全部使おうとせず、規則が見つかった時点で当てはめます。',
    targetSeconds: 50, tags: ['表', '推測'], figureData: TABLE_AD, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-004', examType: 'tamatebako', category: 'numerical', subCategory: '表の空欄推測',
    difficulty: 2, questionType: 'single',
    questionText: '表の「？」に入る数値として、最も適切と推測できるものはどれか。',
    choices: ['200個', '210個', '230個', '285個'],
    correctAnswer: 1,
    explanation: '気温が4℃上がるごとに販売数が40個増えているので、1℃あたり10個の増加です。28℃から2℃上がるので、190 + 20 = 210個と推測できます。',
    shortCut: '気温の差が等しくない行（28℃→30℃は2℃）に注意し、1℃あたりの増え方に直します。',
    commonMistakes: 'これまでと同じく40個増やして230個としてしまう誤りが多いです。4日目だけ気温の上がり幅が違います。',
    targetSeconds: 60, tags: ['表', '推測'], figureData: TABLE_ICE, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-003', examType: 'tamatebako', category: 'verbal', subCategory: '趣旨判定',
    difficulty: 2, questionType: 'single',
    passage: PASSAGE_READING,
    questionText: '次の文は、どれに当てはまるか。\n「時間をかけて本を読み通す経験が、考える力を育てる。」',
    choices: GIST_CHOICES,
    correctAnswer: 0,
    explanation: '本文の最後の一文「時間をかけて一冊を読み通す経験こそが、考える力の土台になる」と同じ内容です。「こそ」と強調されており、筆者が最も訴えたいことです。',
    shortCut: '趣旨は、最後の段落や「〜こそ」「〜べきだ」などの強い表現のある文に表れやすいです。',
    commonMistakes: '本文に書かれているかどうかだけでなく、「一番言いたいことか」まで判断します。',
    targetSeconds: 40, tags: ['読解', '趣旨'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-004', examType: 'tamatebako', category: 'verbal', subCategory: '趣旨判定',
    difficulty: 2, questionType: 'single',
    passage: PASSAGE_READING,
    questionText: '次の文は、どれに当てはまるか。\n「要約サービスを使って、短時間で本の内容を知る人が増えている。」',
    choices: GIST_CHOICES,
    correctAnswer: 1,
    explanation: '本文に書かれている事実ですが、筆者の主張を引き立てるための材料です。筆者が訴えたいのは、要約では得られないものがある、という点です。',
    shortCut: '「最近は〜が増えたが」のように、あとで打ち消される部分は、趣旨ではないことが多いです。',
    commonMistakes: '本文に書かれているという理由だけで「趣旨」を選ばないようにします。',
    targetSeconds: 40, tags: ['読解', '趣旨'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-005', examType: 'tamatebako', category: 'verbal', subCategory: '趣旨判定',
    difficulty: 1, questionType: 'single',
    passage: PASSAGE_READING,
    questionText: '次の文は、どれに当てはまるか。\n「読書量が多い人ほど、年収が高い傾向にある。」',
    choices: GIST_CHOICES,
    correctAnswer: 2,
    explanation: '本文は、読書と収入の関係には触れていません。本文とは関係のない内容です。',
    shortCut: '本文にない話題（ここでは年収）が出てきたら、すぐに「関係ない」と判断できます。',
    commonMistakes: '世の中で聞いたことのある話でも、本文に書かれていなければ「関係ない」です。',
    targetSeconds: 30, tags: ['読解', '趣旨'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-006', examType: 'tamatebako', category: 'verbal', subCategory: '趣旨把握',
    difficulty: 2, questionType: 'single',
    passage: PASSAGE_MEETING,
    questionText: '筆者の訴えに最も近いものはどれか。',
    choices: ['会議は短いほど、よい結論が出る。', '会議中の進行役は、交代制にするべきだ。', '参加者を減らせば、会議は短くなる。', '会議を短くするには、議題の事前共有などの準備が重要だ。'],
    correctAnswer: 3,
    explanation: '冒頭で「開始前の準備が鍵になる」と述べ、最後に「進行を工夫するだけでは効果は限られる」と重ねて、準備の重要性を訴えています。',
    shortCut: '最初の一文と最後の一文を読むと、主張の方向がつかめます。',
    commonMistakes: '本文に出てくる言葉（進行、参加者）を含むだけの選択肢に引かれないようにします。',
    targetSeconds: 70, tags: ['読解', '趣旨'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-english-003', examType: 'tamatebako', category: 'english', subCategory: '長文読解（設問選択）',
    difficulty: 2, questionType: 'single',
    passage: PASSAGE_VEGETABLE,
    questionText: 'What does the supermarket chain plan to do next?',
    choices: ['Sell imperfect fruit.', 'Stop selling imperfect vegetables.', 'Raise the price of regular vegetables.', 'Open stores in other countries.'],
    correctAnswer: 0,
    explanation: '最後の文に "the chain now plans to offer imperfect fruit as well"（規格外の果物も扱う予定）とあります。',
    shortCut: '設問の "plan"、"next" に対応する語（plans to）を本文から探します。',
    commonMistakes: '売れ行きは予想以上だったので、販売をやめるという選択肢は本文と逆です。',
    targetSeconds: 60, tags: ['読解'], figureData: null, sourceType: 'original'
  },

  /* ================= Web-CAB／CAB ================= */
  {
    id: 'cab-mental-001', examType: 'cab', category: 'mental', subCategory: '暗算（概算）',
    difficulty: 1, questionType: 'single',
    questionText: '398 × 21 の答えに最も近いものはどれか。暗算で求めること。',
    choices: ['6,400', '8,400', '10,400', '12,400'],
    correctAnswer: 1,
    explanation: '398 を 400、21 を 20 とみると 400 × 20 = 8,000。もう少し正確に 400 × 21 = 8,400 で、実際の値は 8,358 です。',
    shortCut: '選択肢の間隔が広いので、きりのよい数に丸めて計算します。',
    commonMistakes: '正確な値を出そうとして時間を使わないようにします。選択肢を見てから計算の細かさを決めます。',
    targetSeconds: 15, tags: ['暗算', '概算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-mental-002', examType: 'cab', category: 'mental', subCategory: '暗算（概算）',
    difficulty: 2, questionType: 'single',
    questionText: '7,912 ÷ 39 の答えに最も近いものはどれか。暗算で求めること。',
    choices: ['20', '100', '200', '400'],
    correctAnswer: 2,
    explanation: '7,912 を 8,000、39 を 40 とみると 8,000 ÷ 40 = 200 です。実際の値は約 202.9 です。',
    shortCut: '割り算は、割る数をきりのよい数にしてから、けた数を確かめます。',
    commonMistakes: 'けたを1つ間違えて 20 を選ばないようにします。40 × 200 = 8,000 と検算します。',
    targetSeconds: 15, tags: ['暗算', '概算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-pattern-003', examType: 'cab', category: 'pattern', subCategory: '2つずつ変わる法則',
    difficulty: 2, questionType: 'single',
    questionText: '図形はある法則で並んでいる。「？」に入る図形はどれか。',
    choices: ['塗りつぶした丸', '白い丸', '塗りつぶした四角', '白い四角'],
    correctAnswer: 0,
    explanation: '形はすべて丸で、塗りが「塗り・塗り・白・白・塗り…」と2つずつ変わっています。5番目が塗りなので、6番目も塗りつぶした丸です。',
    shortCut: '形・塗り・向きを1つずつ分けて、変わっているものだけを追います。',
    commonMistakes: '1つおきに変わると思い込み、白い丸を選んでしまう誤りがあります。',
    targetSeconds: 30, tags: ['法則性'],
    figureData: {
      type: 'shapes', alt: '塗りつぶした丸、塗りつぶした丸、白い丸、白い丸、塗りつぶした丸、「？」の順に並んでいる',
      items: [{ shape: 'circle', filled: true }, { shape: 'circle', filled: true }, { shape: 'circle', filled: false }, { shape: 'circle', filled: false }, { shape: 'circle', filled: true }, { shape: 'question' }]
    },
    sourceType: 'original'
  },
  {
    id: 'cab-pattern-004', examType: 'cab', category: 'pattern', subCategory: '周期の違う法則',
    difficulty: 3, questionType: 'single',
    questionText: '図形はある法則で並んでいる。「？」に入る図形はどれか。',
    choices: ['白い丸', '白い三角', '塗りつぶした四角', '塗りつぶした三角'],
    correctAnswer: 3,
    explanation: '形は「丸・四角・三角」の3つでくり返し、塗りは「塗り・塗り・白・白」の4つでくり返しています。6番目は、形が三角、塗りは「塗り・塗り・白・白・塗り・塗り」の6番目で塗りです。',
    shortCut: '形と塗りを別々の列として書き出し、それぞれの6番目を求めます。',
    commonMistakes: '形と塗りが同じ周期で変わると思い込むと間違えます。周期が違う組み合わせです。',
    targetSeconds: 40, tags: ['法則性'],
    figureData: {
      type: 'shapes', alt: '塗りつぶした丸、塗りつぶした四角、白い三角、白い丸、塗りつぶした四角、「？」の順に並んでいる',
      items: [{ shape: 'circle', filled: true }, { shape: 'square', filled: true }, { shape: 'triangle', filled: false }, { shape: 'circle', filled: false }, { shape: 'square', filled: true }, { shape: 'question' }]
    },
    sourceType: 'original'
  },

  /* ================= GAB／Web-GAB ================= */
  {
    id: 'gab-numerical-003', examType: 'gab', category: 'numerical', subCategory: '利益率の比較',
    difficulty: 2, questionType: 'single',
    questionText: '表から、売上高に対する営業利益の割合が最も高い年度はどれか。',
    choices: ['2021年度', '2022年度', '2023年度', '2022年度と2023年度が同じで最も高い'],
    correctAnswer: 1,
    explanation: '2021年度は 40 ÷ 500 = 8%、2022年度は 54 ÷ 600 = 9%、2023年度は 54 ÷ 720 = 7.5% です。最も高いのは2022年度です。',
    shortCut: '営業利益が同じ2022年度と2023年度は、売上高が小さい2022年度のほうが割合は高くなります。',
    commonMistakes: '営業利益の金額が同じでも、割合は同じとは限りません。',
    targetSeconds: 70, tags: ['表', '割合'], figureData: TABLE_PROFIT, sourceType: 'original'
  },
  {
    id: 'gab-numerical-004', examType: 'gab', category: 'numerical', subCategory: '増加率',
    difficulty: 2, questionType: 'single',
    questionText: '表から、2023年度の売上高は、2021年度と比べて何%増加したか。',
    choices: ['20%', '40%', '44%', '144%'],
    correctAnswer: 2,
    explanation: '増加額は 720 − 500 = 220億円。220 ÷ 500 = 0.44 なので、44%の増加です。',
    shortCut: '720 ÷ 500 = 1.44 と割ってから、1を引きます。',
    commonMistakes: '144% は「2021年度の何%にあたるか」の答えです。「何%増加したか」とは違います。',
    targetSeconds: 60, tags: ['表', '増加率'], figureData: TABLE_PROFIT, sourceType: 'original'
  },

  /* ================= TG-WEB ================= */
  {
    id: 'tgweb-verbal-classic-003', examType: 'tgweb', category: 'verbal-classic', subCategory: '長文読解',
    difficulty: 3, questionType: 'single',
    passage: PASSAGE_TOOL,
    questionText: '筆者の主張に最も近いものはどれか。',
    choices: ['便利な道具は能力を衰えさせるので、使うべきではない。', '道具に何を任せるかを、自覚して決めるべきだ。', '地図アプリは、紙の地図より正確である。', '道具を使っても、人の能力が衰えることはない。'],
    correctAnswer: 1,
    explanation: '最後の一文で「道具を拒むことではなく、何を任せ、何を自分で行うかを意識して選ぶこと」が重要だと述べています。',
    shortCut: '「重要なのは〜」「〜ではなく〜」の形の文に、主張がまとまっています。',
    commonMistakes: '本文は道具の欠点にも触れていますが、「使うべきではない」とまでは言っていません。',
    targetSeconds: 80, tags: ['読解', '主張'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-003', examType: 'tgweb', category: 'numerical-classic', subCategory: 'サイコロ',
    difficulty: 2, questionType: 'single',
    questionText: '向かい合う面の目の和が7になるサイコロがある。上の面が1、手前の面が2、右の面が3のとき、左の面の目はいくつか。',
    choices: ['6', '5', '4', '2'],
    correctAnswer: 2,
    explanation: '左の面は、右の面と向かい合っています。右が3なので、左は 7 − 3 = 4 です。同じように、下の面は6、奥の面は5です。',
    shortCut: '問われている面と向かい合う面を見つけて、7から引きます。',
    commonMistakes: '「手前」と向かい合うのは「奥」です。左右と前後を取り違えないようにします。',
    targetSeconds: 40, tags: ['図形', 'サイコロ'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-004', examType: 'tgweb', category: 'numerical-classic', subCategory: '集合',
    difficulty: 2, questionType: 'single',
    questionText: '40人の社員のうち、英語を話せる人は25人、中国語を話せる人は18人、両方を話せる人は8人である。どちらも話せない人は何人か。',
    choices: ['3人', '5人', '7人', '13人'],
    correctAnswer: 1,
    explanation: '少なくとも一方を話せる人は 25 + 18 − 8 = 35人。どちらも話せない人は 40 − 35 = 5人です。',
    shortCut: '「2つの合計 − 重なり」で、どちらかに当てはまる人数を出します。',
    commonMistakes: '重なりの8人を引かずに 25 + 18 = 43人として、計算が合わなくなる誤りがあります。',
    targetSeconds: 60, tags: ['集合'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-005', examType: 'tgweb', category: 'numerical-classic', subCategory: '暗号',
    difficulty: 2, questionType: 'single',
    questionText: 'ある暗号では、「CAT」を「3-1-20」と表す。この暗号で「DOG」はどう表されるか。',
    choices: ['4-14-7', '4-15-7', '4-15-8', '5-15-7'],
    correctAnswer: 1,
    explanation: 'アルファベットの順番を数字にしています（A=1、B=2、C=3…T=20）。Dは4番目、Oは15番目、Gは7番目なので「4-15-7」です。',
    shortCut: 'A=1、E=5、J=10、O=15、T=20 のように、5つおきの文字を覚えておくと速く数えられます。',
    commonMistakes: 'Oを14番目と数えてしまう誤りが多いです。Nが14番目、Oが15番目です。',
    targetSeconds: 60, tags: ['暗号'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-006', examType: 'tgweb', category: 'numerical-classic', subCategory: '場合の数（道順）',
    difficulty: 3, questionType: 'single',
    questionText: '図のように、縦2マス、横3マスの格子状の道がある。左下の角から右上の角まで、遠回りをせずに線の上を進む道順は何通りあるか。',
    choices: ['6通り', '8通り', '10通り', '12通り'],
    correctAnswer: 2,
    explanation: '右に3回、上に2回、合わせて5回進みます。5回のうち、上に進む2回をどこにするかを選べばよいので、5 × 4 ÷ 2 = 10通りです。',
    shortCut: '「右3回と上2回の並べ方」と考えて、組み合わせで数えます。',
    commonMistakes: 'マスの数（2 × 3 = 6）をそのまま答えにしないようにします。',
    targetSeconds: 80, tags: ['場合の数', '道順'],
    figureData: { type: 'grid', alt: '縦2マス、横3マスの格子', rows: 2, cols: 3 },
    sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-007', examType: 'tgweb', category: 'numerical-classic', subCategory: '推論（うそつき）',
    difficulty: 3, questionType: 'single',
    questionText: 'A、B、Cの3人は、それぞれ「いつも本当のことを言う人」か「いつもうそを言う人」のどちらかである。3人は次のように言った。\nA「Bはうそつきだ」\nB「Cはうそつきだ」\nC「AもBもうそつきだ」\n本当のことを言っているのは誰か。',
    choices: ['Aだけ', 'Bだけ', 'Cだけ', 'AとC'],
    correctAnswer: 1,
    explanation: 'Aが正直だとすると、Bはうそつきで、Bの発言はうそなのでCは正直です。するとCの発言「AもBもうそつき」が本当になり、Aが正直という仮定と合いません。Aがうそつきだとすると、Bは正直、Cはうそつきです。Cの発言は、Bが正直なのでうそになり、すべて合います。',
    shortCut: '1人を「正直」と仮定して順にたどり、矛盾が出たら反対の仮定に切り替えます。',
    commonMistakes: '途中で矛盾に気づかず、最初の仮定のまま答えてしまう誤りがあります。最後に3人全員の発言を確かめます。',
    targetSeconds: 100, tags: ['推論', '真偽'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-008', examType: 'tgweb', category: 'numerical-classic', subCategory: '一筆書き',
    difficulty: 3, questionType: 'single',
    questionText: 'すべての線がつながっている図形がある。各頂点に集まる線の本数が次のとおりであるとき、一筆書きができる図形はどれか。',
    choices: ['3本、3本、3本、3本', '1本、3本、3本、3本', '2本、3本、3本、4本、4本', '2本、3本、3本、3本、5本'],
    correctAnswer: 2,
    explanation: '一筆書きができるのは、線が奇数本集まる頂点が0個または2個のときです。「2、3、3、4、4」は奇数の頂点が2個なので、一筆書きができます。ほかはどれも奇数の頂点が4個あります。',
    shortCut: '奇数本の頂点の数だけを数えます。0個か2個ならできます。',
    commonMistakes: '偶数本の頂点の数は関係ありません。奇数本の頂点だけを数えます。',
    targetSeconds: 60, tags: ['図形', '一筆書き'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-new-003', examType: 'tgweb', category: 'verbal-new', subCategory: 'ことわざ',
    difficulty: 1, questionType: 'single',
    questionText: '「石の上にも三年」の意味として、最も適切なものはどれか。',
    choices: ['急いでいるときほど、遠回りでも確実な方法をとるべきだ。', 'つらくても辛抱して続ければ、やがて成果が得られる。', '失敗を重ねても、何度でもやり直せばよい。', '小さな努力も、積み重ねれば大きな結果になる。'],
    correctAnswer: 1,
    explanation: '冷たい石でも三年座り続ければ温まることから、辛抱強く続ければ報われるという意味です。1つ目は「急がば回れ」、3つ目は「七転び八起き」、4つ目は「ちりも積もれば山となる」に近い意味です。',
    shortCut: 'ことわざの場面（石に座り続ける）を思い浮かべると、意味を選びやすくなります。',
    commonMistakes: '「ちりも積もれば山となる」と混同しやすいです。こちらは「積み重ね」、石の上は「辛抱」が中心です。',
    targetSeconds: 15, tags: ['ことわざ'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-new-004', examType: 'tgweb', category: 'verbal-new', subCategory: '長文読解',
    difficulty: 1, questionType: 'single',
    passage: PASSAGE_GARBAGE,
    questionText: '本文の内容と合っているものはどれか。',
    choices: ['有料化の翌年、家庭ごみと紙類の資源ごみは、どちらも減った。', '有料化の翌年、家庭ごみは減り、紙類の資源ごみは増えた。', '有料化の翌年、家庭ごみの量は半分になった。', '有料化によって、市の収入は約1割増えた。'],
    correctAnswer: 1,
    explanation: '本文には、家庭ごみが約1割減り、紙類の資源ごみが約2割増えたとあります。市の収入については書かれていません。',
    shortCut: '「増えた／減った」と数字の組み合わせを、本文と1つずつ照らし合わせます。',
    commonMistakes: '「約1割」という数字だけを見て、収入の選択肢を選ばないようにします。',
    targetSeconds: 30, tags: ['読解'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-english-003', examType: 'tgweb', category: 'english', subCategory: '言い換え',
    difficulty: 2, questionType: 'single',
    questionText: '次の文の "called off" と最も意味が近い語はどれか。\n"The project was called off due to a lack of funds."',
    choices: ['delayed', 'started', 'canceled', 'approved'],
    correctAnswer: 2,
    explanation: '"call off" は「中止する」という意味です。「資金不足のため、その計画は中止された」となります。',
    shortCut: '後ろの "due to a lack of funds（資金不足のため）" から、よくない結果だと見当をつけます。',
    commonMistakes: '"put off（延期する）" と混同して delayed を選ばないようにします。',
    targetSeconds: 30, tags: ['熟語'], figureData: null, sourceType: 'original'
  },

  /* ================= その他 ================= */
  {
    id: 'other-general-001', examType: 'other', category: 'general', subCategory: '社会',
    difficulty: 1, questionType: 'single',
    questionText: '日本の衆議院議員の任期は何年か。ただし、解散がない場合とする。',
    choices: ['3年', '4年', '5年', '6年'],
    correctAnswer: 1,
    explanation: '衆議院議員の任期は4年です。ただし、解散があれば任期の途中で終わります。参議院議員の任期は6年で、3年ごとに半数が改選されます。',
    shortCut: '「衆議院4年・解散あり」「参議院6年・解散なし」を組にして覚えます。',
    commonMistakes: '参議院の6年と取り違えやすいです。',
    targetSeconds: 15, tags: ['一般常識', '政治'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-general-002', examType: 'other', category: 'general', subCategory: '理科',
    difficulty: 1, questionType: 'single',
    questionText: '植物が光合成を行うとき、空気中から取り入れる気体はどれか。',
    choices: ['酸素', '窒素', '水素', '二酸化炭素'],
    correctAnswer: 3,
    explanation: '光合成では、二酸化炭素と水から、光のエネルギーを使ってでんぷんなどの養分を作り、酸素を出します。',
    shortCut: '「取り入れるのは二酸化炭素、出すのは酸素」と、向きを組にして覚えます。',
    commonMistakes: '酸素は光合成で「出す」気体です。呼吸と混同しないようにします。',
    targetSeconds: 15, tags: ['一般常識', '理科'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-logic-001', examType: 'other', category: 'logic', subCategory: '数列',
    difficulty: 2, questionType: 'single',
    questionText: '次の数はある規則で並んでいる。「？」に入る数はどれか。\n2、6、12、20、30、？',
    choices: ['36', '40', '42', '56'],
    correctAnswer: 2,
    explanation: '隣どうしの差が 4、6、8、10 と2ずつ増えています。次の差は12なので、30 + 12 = 42 です。1×2、2×3、3×4…と見ることもでき、6番目は 6 × 7 = 42 です。',
    shortCut: '数列は、まず隣どうしの差を書き出します。',
    commonMistakes: '差がずっと10のままだと考えて40としてしまう誤りがあります。差そのものが増えています。',
    targetSeconds: 40, tags: ['数列'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-logic-002', examType: 'other', category: 'logic', subCategory: '論理',
    difficulty: 3, questionType: 'single',
    questionText: '「営業部の社員は、全員が運転免許を持っている」「新入社員の中には、営業部の社員がいる」。この2つが正しいとき、必ず正しいといえるものはどれか。',
    choices: ['新入社員は、全員が運転免許を持っている。', '運転免許を持っている人は、全員が営業部の社員である。', '新入社員の中には、運転免許を持っている人がいる。', '営業部の社員は、全員が新入社員である。'],
    correctAnswer: 2,
    explanation: '営業部の新入社員が少なくとも1人いて、その人は運転免許を持っています。したがって「新入社員の中には、運転免許を持っている人がいる」は必ず正しいです。ほかの選択肢は、条件からは言えません。',
    shortCut: '「全員」と「〜の中にはいる」を区別します。条件が「いる」なら、結論も「いる」までしか言えません。',
    commonMistakes: '「AならばB」から「BならばA」は言えません。免許を持つ人が全員営業部とは限りません。',
    targetSeconds: 60, tags: ['論理'], figureData: null, sourceType: 'original'
  }
);

checkQuestions(QUESTIONS);
