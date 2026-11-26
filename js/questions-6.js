/* ==========================================================
   questions-6.js  追加の問題データ（計算・推論。解き方のパターンが1問ずつ違います）
   ・書き方は js/questions.js のテンプレートと同じです。
   すべて学習用の独自作成です。実際の試験問題は載せません。
   ========================================================== */

const Q6_TABLE_CITY = {
  type: 'table',
  caption: '3つの市の人口密度と面積',
  headers: ['市', '人口密度（1km²あたり）', '面積'],
  rows: [['X市', '400人', '50km²'], ['Y市', '250人', '120km²'], ['Z市', '600人', '30km²']]
};
const Q6_TABLE_SALES = {
  type: 'table',
  caption: '月別の販売個数と売上高',
  headers: ['月', '販売個数', '売上高'],
  rows: [['4月', '300個', '45万円'], ['5月', '360個', '54万円'], ['6月', '400個', '52万円']]
};
const Q6_TABLE_VOTE = {
  type: 'table',
  caption: 'アンケートの結果（ア、イは空欄）',
  headers: ['', '賛成', '反対', '合計'],
  rows: [['男性', '30人', 'ア', '50人'], ['女性', 'イ', '15人', '40人']]
};

QUESTIONS.push(
  {
    id: 'spi3-nonverbal-301', examType: 'spi3', category: 'nonverbal', subCategory: '推論（勝敗）',
    difficulty: 2, questionType: 'single',
    questionText: 'A、B、C、Dの4チームが、総当たりで1回ずつ試合をした。引き分けはなく、Aは3勝0敗、Bは1勝2敗、Cは2勝1敗だった。Dの成績はどれか。',
    choices: ['0勝3敗', '1勝2敗', '2勝1敗', 'これだけでは決まらない'],
    correctAnswer: 0,
    explanation: '4チームの総当たりは全部で 4 × 3 ÷ 2 = 6試合です。1試合につき勝ちは1つなので、勝ち数の合計は6です。Dの勝ち数は 6 − 3 − 1 − 2 = 0 なので、0勝3敗です。',
    shortCut: '引き分けがないとき、「勝ち数の合計 = 試合数」を使います。',
    commonMistakes: '誰が誰に勝ったかを1つずつ調べなくても、合計だけで決まります。',
    targetSeconds: 60, tags: ['推論', '勝敗'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-302', examType: 'spi3', category: 'nonverbal', subCategory: '推論（位置関係）',
    difficulty: 3, questionType: 'single',
    questionText: 'A、B、C、D、Eの5人が横一列に並んでいる。次のことが分かっている。\n・Aは左端にいる\n・BはCのすぐ右にいる\n・DはBと隣り合っている\n・EはAと隣り合っていない\n左から3番目にいるのは誰か。',
    choices: ['C', 'B', 'D', 'E'],
    correctAnswer: 1,
    explanation: 'CとBの位置は（2, 3）（3, 4）（4, 5）番目のどれかです。（2, 3）のとき、DはBの隣で4番目、Eは5番目となり、すべての条件に合います。（3, 4）のとき、Dは5番目、Eは2番目でAの隣になり、合いません。（4, 5）のとき、DはBの隣に入れません。並びは「A C B D E」で、3番目はBです。',
    shortCut: '動かせない条件（Aは左端、CとBはひと組）から先に置き、残りを場合分けします。',
    commonMistakes: '「BはCのすぐ右」を「BはCの左」と読み違えると、並びが変わります。',
    targetSeconds: 90, tags: ['推論', '位置'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-303', examType: 'spi3', category: 'nonverbal', subCategory: '推論（発言の正誤）',
    difficulty: 2, questionType: 'single',
    questionText: '箱の中の玉の個数について、次の3つの発言がある。\nア　玉は5個以上ある\nイ　玉は8個以上ある\nウ　玉は6個以上で、個数は偶数である\nこのとき、必ず正しいといえるものはどれか。',
    choices: ['アが正しければ、イも必ず正しい', 'アが正しければ、ウも必ず正しい', 'イが正しければ、アも必ず正しい', 'ウが正しければ、イも必ず正しい'],
    correctAnswer: 2,
    explanation: '8個以上なら、必ず5個以上です。したがって「イが正しければ、アも正しい」は必ず成り立ちます。玉が5個のときアは正しいがイもウも誤りです。玉が6個のときウは正しいがイは誤りです。',
    shortCut: '条件のきびしい発言が正しければ、ゆるい発言も正しくなります。',
    commonMistakes: '矢印の向きを逆にしないようにします。ゆるい発言が正しくても、きびしい発言が正しいとは限りません。',
    targetSeconds: 60, tags: ['推論', '正誤'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-304', examType: 'spi3', category: 'nonverbal', subCategory: '推論（人口密度）',
    difficulty: 3, questionType: 'single',
    questionText: '表は、3つの市の人口密度と面積である。X市とZ市が合併して1つの市になると、人口密度は1km²あたり何人になるか。',
    choices: ['450人', '475人', '500人', '525人'],
    correctAnswer: 1,
    explanation: 'X市の人口は 400 × 50 = 20,000人、Z市の人口は 600 × 30 = 18,000人です。合わせて38,000人、面積は80km²なので、38,000 ÷ 80 = 475人です。',
    shortCut: '人口密度は足したり平均したりできません。人口と面積をそれぞれ合計してから割ります。',
    commonMistakes: '(400 + 600) ÷ 2 = 500人としないようにします。面積が違うので、単純な平均にはなりません。',
    targetSeconds: 80, tags: ['推論', '人口密度', '表'], figureData: Q6_TABLE_CITY, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-305', examType: 'spi3', category: 'nonverbal', subCategory: '推論（内訳）',
    difficulty: 3, questionType: 'single',
    questionText: '赤、青、白の玉が合わせて13個ある。どの色も1個以上あり、赤は青のちょうど2倍で、白は青より少ない。赤の玉は何個か。',
    choices: ['2個', '4個', '6個', '8個'],
    correctAnswer: 3,
    explanation: '青を b 個とすると、赤は 2b 個、白は 13 − 3b 個です。白は1個以上なので b は4以下、白は青より少ないので 13 − 3b < b、つまり b は4以上です。b = 4 に決まり、赤は8個、白は1個です。',
    shortCut: '青の個数を1、2、3、4と順に入れて、条件に合うものを探しても解けます。',
    commonMistakes: '青が3個（赤6個、白4個）は、白が青より多くなるので条件に合いません。',
    targetSeconds: 80, tags: ['推論', '内訳'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-306', examType: 'spi3', category: 'nonverbal', subCategory: '推論（トーナメント）',
    difficulty: 2, questionType: 'single',
    questionText: '37チームが、負けたら終わりの勝ち抜き戦で優勝を争う。引き分けはない。優勝チームが決まるまでに、全部で何試合が行われるか。',
    choices: ['19試合', '35試合', '36試合', '37試合'],
    correctAnswer: 2,
    explanation: '1試合ごとに、1チームが負けて抜けます。優勝する1チーム以外の36チームが1回ずつ負けるので、試合数は36です。',
    shortCut: '勝ち抜き戦の試合数は、いつも「チーム数 − 1」です。',
    commonMistakes: '組み合わせ表を書いて数えようとすると時間がかかります。不戦勝があっても試合数は変わりません。',
    targetSeconds: 40, tags: ['推論', 'トーナメント'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-307', examType: 'spi3', category: 'nonverbal', subCategory: '集合（3つ）',
    difficulty: 3, questionType: 'single',
    questionText: '100人に、3つのサービスP、Q、Rの利用について調査した。Pを利用する人は50人、Qは40人、Rは30人だった。PとQの両方を利用する人は15人、QとRの両方は10人、PとRの両方は12人で、3つすべてを利用する人は5人だった（「両方を利用する人」には、3つすべてを利用する人も含む）。どれも利用しない人は何人か。',
    choices: ['12人', '17人', '20人', '25人'],
    correctAnswer: 0,
    explanation: '少なくとも1つを利用する人は、50 + 40 + 30 − 15 − 10 − 12 + 5 = 88人です。どれも利用しない人は 100 − 88 = 12人です。',
    shortCut: '3つの集合は「1つずつ足す → 2つの重なりを引く → 3つの重なりを足す」の順に計算します。',
    commonMistakes: '最後に3つの重なり（5人）を足し忘れると、17人になってしまいます。',
    targetSeconds: 90, tags: ['集合'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-308', examType: 'spi3', category: 'nonverbal', subCategory: '確率（くじ引き）',
    difficulty: 2, questionType: 'single',
    questionText: '10本のうち3本が当たりのくじがある。Aさんが先に1本引き、引いたくじを戻さずに、Bさんが1本引く。Bさんが当たりを引く確率はどれか。',
    choices: ['2/9', '7/30', '3/10', '1/3'],
    correctAnswer: 2,
    explanation: 'Aが当たりでBも当たりの確率は 3/10 × 2/9 = 6/90。AがはずれでBが当たりの確率は 7/10 × 3/9 = 21/90。合わせて 27/90 = 3/10 です。',
    shortCut: 'くじ引きは、引く順番に関係なく、当たる確率が同じです。3/10 とすぐに答えられます。',
    commonMistakes: 'Aが当たった場合だけを考えて 2/9 としないようにします。Aがはずれた場合も足します。',
    targetSeconds: 60, tags: ['確率', 'くじ'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-309', examType: 'spi3', category: 'nonverbal', subCategory: '確率（じゃんけん）',
    difficulty: 2, questionType: 'single',
    questionText: '3人で1回じゃんけんをするとき、あいこになる確率はどれか。',
    choices: ['1/3', '4/9', '5/9', '2/3'],
    correctAnswer: 0,
    explanation: '手の出し方は 3 × 3 × 3 = 27通りです。あいこは、3人とも同じ手（3通り）と、3人とも違う手（3 × 2 × 1 = 6通り）の合わせて9通りです。9/27 = 1/3 です。',
    shortCut: 'あいこは「全員同じ」と「全員ばらばら」の2種類を数えます。',
    commonMistakes: '「全員同じ」の3通りだけを数えて 1/9 としないようにします。',
    targetSeconds: 60, tags: ['確率', 'じゃんけん'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-310', examType: 'spi3', category: 'nonverbal', subCategory: '確率（期待値）',
    difficulty: 2, questionType: 'single',
    questionText: '100本のくじがあり、1等（賞金1,000円）が5本、2等（賞金200円）が20本で、残りははずれ（賞金0円）である。このくじを1本引くとき、もらえる賞金の期待値はいくらか。',
    choices: ['60円', '90円', '120円', '400円'],
    correctAnswer: 1,
    explanation: '賞金の合計は 1,000 × 5 + 200 × 20 = 9,000円です。これを100本で割ると、1本あたり90円です。',
    shortCut: '期待値は「賞金の総額 ÷ くじの本数」で求められます。',
    commonMistakes: '賞金の総額を、当たりの本数25本で割らないようにします。はずれも含めた100本で割ります。',
    targetSeconds: 50, tags: ['確率', '期待値'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-311', examType: 'spi3', category: 'nonverbal', subCategory: '場合の数（円形に並ぶ）',
    difficulty: 2, questionType: 'single',
    questionText: '5人が円形のテーブルのまわりに座る。回転して同じになる座り方は同じものとみなすとき、座り方は何通りあるか。',
    choices: ['6通り', '12通り', '20通り', '24通り'],
    correctAnswer: 3,
    explanation: '1人の席を固定し、残りの4人の並び方を数えます。4 × 3 × 2 × 1 = 24通りです。',
    shortCut: '円形に並ぶときは「(人数 − 1) の並べ方」になります。',
    commonMistakes: '一列に並ぶときの 5 × 4 × 3 × 2 × 1 = 120通りとは違います。回して同じになるものを1つと数えます。',
    targetSeconds: 45, tags: ['場合の数', '円順列'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-312', examType: 'spi3', category: 'nonverbal', subCategory: '場合の数（同じものを含む）',
    difficulty: 3, questionType: 'single',
    questionText: 'A、A、B、B、C の5枚のカードを、横一列に並べる。並べ方は何通りあるか。同じ文字のカードは区別しない。',
    choices: ['20通り', '30通り', '60通り', '120通り'],
    correctAnswer: 1,
    explanation: '5枚をすべて区別すると 120通りです。Aどうしの入れ替え（2通り）とBどうしの入れ替え（2通り）は同じ並びになるので、120 ÷ 2 ÷ 2 = 30通りです。',
    shortCut: '同じものがあるときは、全体の並べ方を「同じものどうしの並べ方」で割ります。',
    commonMistakes: 'Aの分だけ割って60通りとしないようにします。Bも2枚あります。',
    targetSeconds: 60, tags: ['場合の数'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-313', examType: 'spi3', category: 'nonverbal', subCategory: '場合の数（交互に並ぶ）',
    difficulty: 3, questionType: 'single',
    questionText: '男性3人と女性3人が、横一列に男女交互に並ぶ。並び方は何通りあるか。',
    choices: ['18通り', '36通り', '72通り', '720通り'],
    correctAnswer: 2,
    explanation: '男性の並び方は 3 × 2 × 1 = 6通り、女性の並び方も6通りです。左端が男性の場合と女性の場合の2通りがあるので、6 × 6 × 2 = 72通りです。',
    shortCut: '「男性の並び × 女性の並び × 先頭がどちらか」に分けて数えます。',
    commonMistakes: '左端が女性の場合を忘れて36通りとしないようにします。',
    targetSeconds: 70, tags: ['場合の数', '順列'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-314', examType: 'spi3', category: 'nonverbal', subCategory: '場合の数（重複を許す）',
    difficulty: 3, questionType: 'single',
    questionText: 'りんご、ぶどう、ももの3種類のジュースが、それぞれたくさんある。この中から合わせて4本を選ぶ。同じ種類を何本選んでもよく、選ばない種類があってもよいとき、選び方は何通りあるか。',
    choices: ['4通り', '12通り', '15通り', '81通り'],
    correctAnswer: 2,
    explanation: '4本を表す○4つと、3種類を分ける仕切り2本を、一列に並べると考えます。6か所から仕切りの2か所を選ぶので、6 × 5 ÷ 2 = 15通りです。',
    shortCut: '「○と仕切りの並べ方」に置き換えます。種類が3つなら仕切りは2本です。',
    commonMistakes: '3 × 3 × 3 × 3 = 81通りは、4本に順番の区別がある場合の数です。',
    targetSeconds: 80, tags: ['場合の数', '組み合わせ'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-315', examType: 'spi3', category: 'nonverbal', subCategory: '場合の数（塗り分け）',
    difficulty: 2, questionType: 'single',
    questionText: '横に並んだ3つの区画を、赤、青、黄、緑の4色を使って塗る。隣り合う区画を違う色にするとき、塗り方は何通りあるか。使わない色があってもよい。',
    choices: ['24通り', '36通り', '48通り', '64通り'],
    correctAnswer: 1,
    explanation: '左の区画は4通り。真ん中は左と違う色で3通り。右は真ん中と違う色で3通りです。4 × 3 × 3 = 36通りです。',
    shortCut: '端から順に、「隣と違う色が何通りあるか」を掛けていきます。',
    commonMistakes: '右の区画を2通りとして24通りにしないようにします。右は左と同じ色でもかまいません。',
    targetSeconds: 50, tags: ['場合の数', '塗り分け'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-316', examType: 'spi3', category: 'nonverbal', subCategory: '速さ（追いつき）',
    difficulty: 2, questionType: 'single',
    questionText: '弟が分速60mで家を出発した。その10分後に、兄が分速90mで同じ道を追いかけた。兄が弟に追いつくのは、兄が出発してから何分後か。',
    choices: ['20分後', '30分後', '40分後', '60分後'],
    correctAnswer: 0,
    explanation: '兄が出発するとき、弟は 60 × 10 = 600m 先にいます。兄は1分間に 90 − 60 = 30m ずつ近づくので、600 ÷ 30 = 20分後です。',
    shortCut: '追いかけるときは、「はじめの差 ÷ 速さの差」で求めます。',
    commonMistakes: '弟が出発してからの時間（30分後）と取り違えないようにします。',
    targetSeconds: 60, tags: ['速さ', '旅人算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-317', examType: 'spi3', category: 'nonverbal', subCategory: '速さ（通過算）',
    difficulty: 3, questionType: 'single',
    questionText: '長さ120mの列車が、時速72kmで走っている。この列車が、長さ480mの鉄橋を渡り始めてから渡り終わるまでに、何秒かかるか。',
    choices: ['24秒', '30秒', '36秒', '60秒'],
    correctAnswer: 1,
    explanation: '時速72kmは、秒速20mです（72,000 ÷ 3,600）。渡り終わるまでに進む距離は、鉄橋の長さと列車の長さの合計で 480 + 120 = 600m。600 ÷ 20 = 30秒です。',
    shortCut: '「渡り終わる」までの距離は「橋の長さ + 列車の長さ」です。',
    commonMistakes: '鉄橋の長さだけで 480 ÷ 20 = 24秒としないようにします。',
    targetSeconds: 70, tags: ['速さ', '通過算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-318', examType: 'spi3', category: 'nonverbal', subCategory: '速さ（流水算）',
    difficulty: 3, questionType: 'single',
    questionText: '流れのない水の上を時速12kmで進む船がある。流れの速さが時速3kmの川で、45km離れた2地点の間を往復すると、何時間かかるか。',
    choices: ['6時間', '7時間', '7.5時間', '8時間'],
    correctAnswer: 3,
    explanation: '上りの速さは 12 − 3 = 時速9kmで、45 ÷ 9 = 5時間。下りの速さは 12 + 3 = 時速15kmで、45 ÷ 15 = 3時間。合わせて8時間です。',
    shortCut: '上りは「船の速さ − 流れ」、下りは「船の速さ + 流れ」で、別々に時間を出します。',
    commonMistakes: '流れを無視して 90 ÷ 12 = 7.5時間としないようにします。上りで失う時間のほうが大きくなります。',
    targetSeconds: 70, tags: ['速さ', '流水算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-319', examType: 'spi3', category: 'nonverbal', subCategory: '速さ（時計の針）',
    difficulty: 3, questionType: 'single',
    questionText: '時計が4時20分を指しているとき、長針と短針がつくる小さいほうの角度は何度か。',
    choices: ['0度', '10度', '20度', '30度'],
    correctAnswer: 1,
    explanation: '長針は1分に6度進むので、20分で120度の位置にあります。短針は1時間に30度、1分に0.5度進むので、4時20分には 120 + 10 = 130度の位置にあります。差は10度です。',
    shortCut: '短針は「時 × 30 + 分 × 0.5」度、長針は「分 × 6」度で求めます。',
    commonMistakes: '短針が「4」の位置から動かないと考えて0度としないようにします。20分の間に10度進みます。',
    targetSeconds: 70, tags: ['速さ', '時計算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-320', examType: 'spi3', category: 'nonverbal', subCategory: '速さ（速さの比）',
    difficulty: 2, questionType: 'single',
    questionText: 'AさんとBさんの歩く速さの比は 3：2 である。同じ道のりを歩くのに、Aさんは40分かかった。Bさんは何分かかるか。',
    choices: ['30分', '50分', '60分', '80分'],
    correctAnswer: 2,
    explanation: '道のりが同じとき、かかる時間の比は速さの比の逆になります。時間の比は A：B = 2：3 なので、Bさんは 40 × 3 ÷ 2 = 60分です。',
    shortCut: '同じ道のりでは、「速さの比」と「時間の比」が逆になります。',
    commonMistakes: '40 × 2 ÷ 3 のように、速さの比をそのまま時間に掛けないようにします。遅い人のほうが時間は長くなります。',
    targetSeconds: 50, tags: ['速さ', '比'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-321', examType: 'spi3', category: 'nonverbal', subCategory: '割合（連続する増減）',
    difficulty: 2, questionType: 'single',
    questionText: 'ある商品の値段を20%値上げし、その後、値上げ後の値段から20%値下げした。最後の値段は、最初の値段の何%にあたるか。',
    choices: ['80%', '96%', '100%', '104%'],
    correctAnswer: 1,
    explanation: '1.2 × 0.8 = 0.96 なので、最初の値段の96%です。最初が1,000円なら、1,200円に上がり、そこから240円下がって960円になります。',
    shortCut: '増減が続くときは、倍率を掛け合わせます。',
    commonMistakes: '20%上げて20%下げたので元どおり（100%）と考えないようにします。値下げは、値上げ後の高い値段にかかります。',
    targetSeconds: 45, tags: ['割合', '増減'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-322', examType: 'spi3', category: 'nonverbal', subCategory: '割合（比の合成）',
    difficulty: 2, questionType: 'single',
    questionText: 'AとBの所持金の比は 2：3、BとCの所持金の比は 4：5 である。AとCの所持金の比はどれか。',
    choices: ['2：5', '1：2', '4：9', '8：15'],
    correctAnswer: 3,
    explanation: 'Bを3と4の最小公倍数の12にそろえます。A：B = 8：12、B：C = 12：15 なので、A：C = 8：15 です。',
    shortCut: '2つの比に共通するもの（ここではB）の数をそろえてから、つなげます。',
    commonMistakes: 'Bをそろえずに、両端の数をそのまま並べて 2：5 としないようにします。',
    targetSeconds: 50, tags: ['割合', '比'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-323', examType: 'spi3', category: 'nonverbal', subCategory: '濃度（食塩を加える）',
    difficulty: 3, questionType: 'single',
    questionText: '濃度10%の食塩水180gに、食塩を20g加えて溶かした。できた食塩水の濃度は何%か。',
    choices: ['19%', '20%', '21%', '30%'],
    correctAnswer: 0,
    explanation: 'はじめの食塩は 180 × 0.1 = 18g です。食塩を加えると、食塩は 38g、食塩水全体は 200g になります。38 ÷ 200 = 19% です。',
    shortCut: '食塩を加えると、「食塩の量」と「全体の量」の両方が増えます。',
    commonMistakes: '全体を180gのままにして 38 ÷ 180 = 約21% としないようにします。',
    targetSeconds: 60, tags: ['濃度'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-324', examType: 'spi3', category: 'nonverbal', subCategory: '損益算（売れ残り）',
    difficulty: 3, questionType: 'single',
    questionText: 'ある品物を1個200円で50個仕入れた。定価300円で40個を売り、残りの10個は定価の半額で売り切った。全体の利益はいくらか。',
    choices: ['3,500円', '4,000円', '5,000円', '13,500円'],
    correctAnswer: 0,
    explanation: '仕入れ値の合計は 200 × 50 = 10,000円。売上は 300 × 40 + 150 × 10 = 13,500円。利益は 13,500 − 10,000 = 3,500円です。',
    shortCut: '全体の利益は「売上の合計 − 仕入れ値の合計」で求めます。',
    commonMistakes: '50個すべてを定価で売ったとして5,000円としないようにします。13,500円は売上で、利益ではありません。',
    targetSeconds: 70, tags: ['損益算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-325', examType: 'spi3', category: 'nonverbal', subCategory: '損益算（値引きの限界）',
    difficulty: 2, questionType: 'single',
    questionText: '原価600円の品物に、1,000円の定価をつけた。売値が原価を下回らないようにするには、定価から最大で何%まで値引きできるか。',
    choices: ['33%', '40%', '60%', '67%'],
    correctAnswer: 1,
    explanation: '値引きできる金額は 1,000 − 600 = 400円までです。定価に対する割合は 400 ÷ 1,000 = 40% です。',
    shortCut: '値引き率は、定価をもとにして計算します。',
    commonMistakes: '原価で割って 400 ÷ 600 = 約67% としないようにします。60%は、売値が定価の何%かを表す数です。',
    targetSeconds: 50, tags: ['損益算', '割引'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-326', examType: 'spi3', category: 'nonverbal', subCategory: '仕事算（途中で交代）',
    difficulty: 3, questionType: 'single',
    questionText: 'ある仕事を、Aさんは1人で10日、Bさんは1人で15日で仕上げる。この仕事を、はじめの4日間はAさんが1人で行い、残りをBさんが1人で行った。Bさんは何日間働いたか。',
    choices: ['9日', '10日', '11日', '13日'],
    correctAnswer: 0,
    explanation: '仕事全体を30とすると、Aさんは1日に3、Bさんは1日に2進めます。Aさんが4日で12進めるので、残りは18。18 ÷ 2 = 9日です。',
    shortCut: '全体を、10と15の最小公倍数の30と置くと、分数を使わずに計算できます。',
    commonMistakes: '問われているのはBさんの日数です。全体の日数（13日）と取り違えないようにします。',
    targetSeconds: 70, tags: ['仕事算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-327', examType: 'spi3', category: 'nonverbal', subCategory: '仕事算（1人分を求める）',
    difficulty: 3, questionType: 'single',
    questionText: 'ある仕事を、AさんとBさんの2人で行うと12日で仕上がる。同じ仕事を、Aさんが1人で行うと20日で仕上がる。Bさんが1人で行うと、何日で仕上がるか。',
    choices: ['8日', '16日', '30日', '32日'],
    correctAnswer: 2,
    explanation: '仕事全体を60とすると、2人では1日に5、Aさんは1日に3進めます。Bさんは1日に 5 − 3 = 2 進めるので、60 ÷ 2 = 30日です。',
    shortCut: '「2人の1日分 − Aさんの1日分 = Bさんの1日分」で求めます。',
    commonMistakes: '日数どうしを引いて 20 − 12 = 8日としないようにします。引くのは1日あたりの仕事量です。',
    targetSeconds: 70, tags: ['仕事算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-328', examType: 'spi3', category: 'nonverbal', subCategory: '仕事算（給水と排水）',
    difficulty: 3, questionType: 'single',
    questionText: 'ある水槽は、給水管を開くと30分で満水になり、満水の状態から排水口を開くと60分で空になる。空の水槽で、給水管と排水口を同時に開くと、何分で満水になるか。',
    choices: ['20分', '30分', '45分', '60分'],
    correctAnswer: 3,
    explanation: '水槽の容量を60とすると、給水は1分に2、排水は1分に1です。差し引きで1分に1ずつ増えるので、60 ÷ 1 = 60分です。',
    shortCut: '入る量と出る量を「1分あたり」にそろえて、引き算します。',
    commonMistakes: '2 + 1 = 3 と足して20分としないようにします。排水は水を減らす向きです。',
    targetSeconds: 60, tags: ['仕事算', '水槽'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-329', examType: 'spi3', category: 'nonverbal', subCategory: '料金（時間制）',
    difficulty: 2, questionType: 'single',
    questionText: 'ある駐車場の料金は、最初の1時間までが400円で、その後は30分ごと（30分に満たない場合も30分とみなす）に150円が加算される。3時間20分駐車したときの料金はいくらか。',
    choices: ['850円', '1,000円', '1,100円', '1,150円'],
    correctAnswer: 3,
    explanation: '最初の1時間を除くと、残りは2時間20分です。30分ごとに区切ると、4回と端数20分で5回分になります。400 + 150 × 5 = 1,150円です。',
    shortCut: '最初の時間を先に引き、残りを30分で割って、端数は切り上げます。',
    commonMistakes: '端数の20分を切り捨てて1,000円としないようにします。',
    targetSeconds: 60, tags: ['料金'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-330', examType: 'spi3', category: 'nonverbal', subCategory: '料金（プランの比較）',
    difficulty: 2, questionType: 'single',
    questionText: 'ある通話サービスには2つのプランがある。プランAは基本料金1,000円で、通話1分につき20円かかる。プランBは基本料金2,500円で、通話1分につき5円かかる。1か月の通話時間が何分を超えると、プランBのほうが安くなるか。',
    choices: ['100分', '120分', '150分', '175分'],
    correctAnswer: 0,
    explanation: '基本料金の差は 2,500 − 1,000 = 1,500円。1分あたりの差は 20 − 5 = 15円。1,500 ÷ 15 = 100分で料金が同じになり、それを超えるとプランBが安くなります。',
    shortCut: '「基本料金の差 ÷ 1分あたりの料金の差」で、料金が並ぶ時間を求めます。',
    commonMistakes: '基本料金の差を20円で割って75分としないようにします。割るのは1分あたりの「差」です。',
    targetSeconds: 60, tags: ['料金', '方程式'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-331', examType: 'spi3', category: 'nonverbal', subCategory: '料金（団体の損得）',
    difficulty: 3, questionType: 'single',
    questionText: 'ある施設の入場料は1人600円である。30人以上の団体には、1人500円の団体料金が適用される。30人に満たないグループでも、30人分の団体料金を払えば入場できる。30人分の団体料金を払ったほうが安くなるのは、グループが何人以上のときか。',
    choices: ['25人', '26人', '29人', '30人'],
    correctAnswer: 1,
    explanation: '30人分の団体料金は 500 × 30 = 15,000円です。ふつうの料金がこれを超えるのは、600 × 人数 > 15,000 のときで、人数が25人より多いときです。25人ではちょうど同じ額なので、26人以上です。',
    shortCut: '団体料金の総額を先に出し、ふつうの料金で割ります。15,000 ÷ 600 = 25。',
    commonMistakes: '25人のときは同じ金額で、安くはなりません。「安くなる」のは26人からです。',
    targetSeconds: 70, tags: ['料金', '不等式'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-332', examType: 'spi3', category: 'nonverbal', subCategory: '代金の精算（貸し借り）',
    difficulty: 2, questionType: 'single',
    questionText: 'AさんはBさんから2,000円を借りている。ある日、2人で食事をし、代金6,000円をAさんが全額支払った。食事代を半分ずつ負担し、借りているお金も合わせて精算するには、どうすればよいか。',
    choices: ['BさんがAさんに3,000円渡す', 'BさんがAさんに5,000円渡す', 'AさんがBさんに1,000円渡す', 'BさんがAさんに1,000円渡す'],
    correctAnswer: 3,
    explanation: '食事代は1人3,000円なので、BさんはAさんに3,000円を払う必要があります。一方、AさんはBさんに2,000円を返す必要があります。差し引きで、BさんがAさんに 3,000 − 2,000 = 1,000円を渡します。',
    shortCut: '「誰が誰にいくら払うべきか」を1つずつ書き出し、最後に差し引きします。',
    commonMistakes: '借りているお金を足して5,000円としないようにします。向きが逆なので引き算です。',
    targetSeconds: 60, tags: ['精算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-333', examType: 'spi3', category: 'nonverbal', subCategory: '分割払い（残額の割合）',
    difficulty: 3, questionType: 'single',
    questionText: 'ある品物を買い、購入時に総額の 2/5 を支払った。次の支払いで、残額の 1/3 を支払った。まだ支払っていない金額は、総額のどれだけにあたるか。利子は考えない。',
    choices: ['1/5', '4/15', '1/3', '2/5'],
    correctAnswer: 3,
    explanation: '購入時の支払い後の残額は、総額の 3/5 です。次に支払うのはその 1/3 で、総額の 1/5 にあたります。残りは 3/5 − 1/5 = 2/5 です。',
    shortCut: '残額の 1/3 を払うと、残額の 2/3 が残ります。3/5 × 2/3 = 2/5。',
    commonMistakes: '「残額の 1/3」を「総額の 1/3」と読んで、1 − 2/5 − 1/3 = 4/15 としないようにします。',
    targetSeconds: 60, tags: ['分数', '分割払い'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-334', examType: 'spi3', category: 'nonverbal', subCategory: '整数（約数）',
    difficulty: 2, questionType: 'single',
    questionText: '縦48cm、横72cmの長方形の板を、すき間なく、同じ大きさの正方形のタイルで敷きつめる。できるだけ大きいタイルを使うとき、タイルは何枚必要か。',
    choices: ['6枚', '12枚', '24枚', '144枚'],
    correctAnswer: 0,
    explanation: 'タイルの1辺は、48と72の最大公約数の24cmです。縦に 48 ÷ 24 = 2枚、横に 72 ÷ 24 = 3枚並ぶので、2 × 3 = 6枚です。',
    shortCut: '「できるだけ大きい正方形」は、縦と横の最大公約数が1辺になります。',
    commonMistakes: '最大公約数の24を、そのまま枚数にしないようにします。',
    targetSeconds: 60, tags: ['整数', '約数'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-335', examType: 'spi3', category: 'nonverbal', subCategory: '整数（余り）',
    difficulty: 3, questionType: 'single',
    questionText: '5で割ると3余り、7で割ると2余る正の整数のうち、最も小さいものはどれか。',
    choices: ['13', '18', '23', '37'],
    correctAnswer: 2,
    explanation: '7で割ると2余る数は 2、9、16、23、30…です。このうち5で割ると3余る最初の数は23です（23 ÷ 5 = 4 余り 3）。',
    shortCut: '割る数が大きいほう（7）の条件に合う数を書き出し、もう一方の条件を確かめます。',
    commonMistakes: '片方の条件だけを確かめて選ばないようにします。13と18は5で割ると3余りますが、7で割った余りが合いません。',
    targetSeconds: 60, tags: ['整数', '余り'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-336', examType: 'spi3', category: 'nonverbal', subCategory: '整数（けたの入れ替え）',
    difficulty: 3, questionType: 'single',
    questionText: 'ある2けたの整数は、十の位の数と一の位の数の和が11である。十の位と一の位を入れ替えてできる整数は、もとの整数より27大きい。もとの整数はどれか。',
    choices: ['29', '38', '47', '74'],
    correctAnswer: 2,
    explanation: '位を入れ替えたときの差は、「2つの数字の差 × 9」になります。27 ÷ 9 = 3 なので、一の位は十の位より3大きい数です。和が11、差が3なので、十の位は4、一の位は7。もとの整数は47です（74 − 47 = 27）。',
    shortCut: '選択肢の数を入れ替えて、差が27になるかを確かめる方法も速いです。',
    commonMistakes: '74は入れ替えたあとの整数です。「もとの整数」を答えます。',
    targetSeconds: 70, tags: ['整数'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-337', examType: 'spi3', category: 'nonverbal', subCategory: '過不足算',
    difficulty: 2, questionType: 'single',
    questionText: '子どもたちにあめを配る。1人に5個ずつ配ると12個余り、1人に7個ずつ配ると8個足りない。子どもは何人いるか。',
    choices: ['2人', '4人', '8人', '10人'],
    correctAnswer: 3,
    explanation: '1人あたりの個数を2個増やすと、「12個余る」から「8個足りない」に変わります。必要な個数は 12 + 8 = 20個増えたので、20 ÷ 2 = 10人です。あめは 5 × 10 + 12 = 62個です。',
    shortCut: '「余り + 不足」を「1人あたりの差」で割ります。',
    commonMistakes: '12 − 8 = 4 を使って2人としないようにします。余りと不足は足し合わせます。',
    targetSeconds: 60, tags: ['過不足算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-338', examType: 'spi3', category: 'nonverbal', subCategory: 'n進法',
    difficulty: 2, questionType: 'single',
    questionText: '2進法で表された数「1101」を、10進法で表すとどれか。',
    choices: ['13', '14', '22', '26'],
    correctAnswer: 0,
    explanation: '2進法の各けたは、右から 1、2、4、8 を表します。1101 は 8 × 1 + 4 × 1 + 2 × 0 + 1 × 1 = 13 です。',
    shortCut: '右のけたから順に 1、2、4、8、16…と重みを書き、1のけただけを足します。',
    commonMistakes: 'けたの重みを左から 1、2、4、8 と並べて 11 などにしないようにします。右端が1です。',
    targetSeconds: 40, tags: ['n進法'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-339', examType: 'spi3', category: 'nonverbal', subCategory: '物の流れと比率',
    difficulty: 3, questionType: 'single',
    questionText: '工場Pで作られた製品のうち、60%が倉庫Qへ、20%が直接、店Rへ送られる。倉庫Qに届いた製品のうち、50%が店Rへ送られる。店Rに届く製品は、工場Pで作られた製品の何%か。',
    choices: ['30%', '50%', '60%', '80%'],
    correctAnswer: 1,
    explanation: '倉庫Qを通って店Rに届くのは 0.6 × 0.5 = 0.3、つまり30%です。直接届く20%と合わせて、50%です。',
    shortCut: '1本の道をたどるときは掛け算、別々の道で届く分は足し算をします。',
    commonMistakes: '倉庫Qを通る30%だけを答えないようにします。直接届く20%もあります。',
    targetSeconds: 60, tags: ['割合', '流れ'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-340', examType: 'spi3', category: 'nonverbal', subCategory: 'ブラックボックス',
    difficulty: 2, questionType: 'single',
    questionText: '2つの数を入れると1つの数を出す装置がある。装置Xは、入れた2つの数の和を出す。装置Yは、入れた2つの数のうち大きいほうを出す。「3と5をXに入れた結果」と「2と9をYに入れた結果」の2つを、Yに入れた。出てくる数はどれか。',
    choices: ['8', '9', '11', '17'],
    correctAnswer: 1,
    explanation: '3と5をXに入れると 3 + 5 = 8。2と9をYに入れると、大きいほうの9。8と9をYに入れると、大きいほうの9が出ます。',
    shortCut: '内側の装置から順に、結果を数に置き換えていきます。',
    commonMistakes: '最後の装置をXと取り違えて 8 + 9 = 17 としないようにします。',
    targetSeconds: 50, tags: ['装置', '規則'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-341', examType: 'spi3', category: 'nonverbal', subCategory: '表の読み取り（1個あたり）',
    difficulty: 2, questionType: 'single',
    questionText: '表は、ある商品の月別の販売個数と売上高である。1個あたりの売上高が最も低い月はどれか。',
    choices: ['4月', '5月', '6月', '4月と5月が同じで最も低い'],
    correctAnswer: 2,
    explanation: '4月は 45万 ÷ 300 = 1,500円、5月は 54万 ÷ 360 = 1,500円、6月は 52万 ÷ 400 = 1,300円です。最も低いのは6月です。',
    shortCut: '6月は5月より個数が多いのに売上高が低いので、計算しなくても1個あたりが下がったと分かります。',
    commonMistakes: '売上高そのものが最も低い4月を選ばないようにします。問われているのは1個あたりです。',
    targetSeconds: 60, tags: ['表', '単価'], figureData: Q6_TABLE_SALES, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-342', examType: 'spi3', category: 'nonverbal', subCategory: '表の読み取り（空欄の逆算）',
    difficulty: 2, questionType: 'single',
    questionText: '表は、あるアンケートの結果で、一部が空欄（ア、イ）になっている。「反対」と答えた人は、男女合わせて何人か。',
    choices: ['30人', '35人', '40人', '45人'],
    correctAnswer: 1,
    explanation: '男性の反対（ア）は 50 − 30 = 20人です。女性の反対は15人なので、合わせて 20 + 15 = 35人です。',
    shortCut: '必要な空欄だけを求めます。ここではイ（女性の賛成）は使いません。',
    commonMistakes: 'イ（40 − 15 = 25人）を求めて、それを足してしまう誤りに注意します。',
    targetSeconds: 50, tags: ['表', '逆算'], figureData: Q6_TABLE_VOTE, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-343', examType: 'spi3', category: 'nonverbal', subCategory: '平均（人数の違う2組）',
    difficulty: 2, questionType: 'single',
    questionText: 'あるテストで、男子20人の平均点は62点、女子30人の平均点は72点だった。全体の平均点は何点か。',
    choices: ['64点', '66点', '67点', '68点'],
    correctAnswer: 3,
    explanation: '男子の合計は 62 × 20 = 1,240点、女子の合計は 72 × 30 = 2,160点です。全体は 3,400点で、50人で割ると68点です。',
    shortCut: '人数の比が 2：3 なので、62点と72点の間を 3：2 に分けた68点になります。人数の多い側に寄ります。',
    commonMistakes: '(62 + 72) ÷ 2 = 67点としないようにします。人数が違うので、単純な平均にはなりません。',
    targetSeconds: 60, tags: ['平均'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-344', examType: 'spi3', category: 'nonverbal', subCategory: '植木算',
    difficulty: 1, questionType: 'single',
    questionText: '長さ120mのまっすぐな道の片側に、端から端まで8mおきに木を植える。両端にも植えるとき、木は何本必要か。',
    choices: ['14本', '15本', '16本', '17本'],
    correctAnswer: 2,
    explanation: '木と木の間は 120 ÷ 8 = 15か所です。両端にも植えるので、木の本数は間の数より1多く、16本です。',
    shortCut: '両端に植えるときは「間の数 + 1」、円形に植えるときは「間の数」と同じです。',
    commonMistakes: '間の数の15を、そのまま本数にしないようにします。',
    targetSeconds: 40, tags: ['植木算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-345', examType: 'spi3', category: 'nonverbal', subCategory: '暦と曜日',
    difficulty: 2, questionType: 'single',
    questionText: 'ある年の4月1日は月曜日だった。同じ年の5月20日は何曜日か。',
    choices: ['月曜日', '火曜日', '水曜日', '木曜日'],
    correctAnswer: 0,
    explanation: '4月は30日まであるので、4月1日から4月30日までは29日後、そこから5月20日まではさらに20日後で、合わせて49日後です。49 ÷ 7 = 7 で余りがないので、同じ月曜日です。',
    shortCut: '「何日後か」を7で割った余りの分だけ、曜日を進めます。',
    commonMistakes: '4月を31日までと数えると、1日ずれて火曜日になってしまいます。',
    targetSeconds: 60, tags: ['暦', '曜日'], figureData: null, sourceType: 'original'
  }
);

checkQuestions(QUESTIONS);
