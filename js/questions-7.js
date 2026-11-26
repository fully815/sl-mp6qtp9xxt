/* ==========================================================
   questions-7.js  追加の問題データ（図表の読み取り・推論）
   ・1問ごとに、解き方のパターンが違うようにしてあります。
   ・書き方は js/questions.js のテンプレートと同じです。
   すべて学習用の独自作成です。数値は架空のものです。
   ========================================================== */

const Q7_T_BRANCH = {
  type: 'table', caption: '支店別の売上高と従業員数',
  headers: ['支店', '売上高', '従業員数'],
  rows: [['北支店', '4,800万円', '16人'], ['南支店', '5,400万円', '20人'], ['東支店', '3,900万円', '12人']]
};
const Q7_T_MIX = {
  type: 'table', caption: '売上高の合計と、製品Xの構成比',
  headers: ['年度', '売上高の合計', '製品Xの構成比'],
  rows: [['2022年度', '500億円', '30%'], ['2023年度', '600億円', '28%']]
};
const Q7_T_YOY = {
  type: 'table', caption: '今年の販売数と前年比',
  headers: ['商品', '今年の販売数', '前年比'],
  rows: [['商品P', '1,150個', '115%'], ['商品Q', '960個', '80%']]
};
const Q7_T_PRICE = {
  type: 'table', caption: '商品の単価と月別の販売数',
  headers: ['商品', '単価', '4月', '5月'],
  rows: [['A', '300円', '40個', '50個'], ['B', '500円', '30個', '20個'], ['C', '800円', '10個', '15個']]
};
const Q7_T_INDEX = {
  type: 'table', caption: '生産量の指数（2020年＝100。2020年の生産量は800トン）',
  headers: ['年', '指数'],
  rows: [['2020年', '100'], ['2021年', '110'], ['2022年', '125'], ['2023年', '140']]
};
const Q7_T_WEEK = {
  type: 'table', caption: '週ごとの売上',
  headers: ['週', '売上'],
  rows: [['第1週', '42万円'], ['第2週', '38万円'], ['第3週', '45万円'], ['第4週', '51万円']]
};
const Q7_T_CUM = {
  type: 'table', caption: '契約数の累計（1月からの合計）',
  headers: ['月', '累計の契約数'],
  rows: [['1月', '120件'], ['2月', '250件'], ['3月', '410件'], ['4月', '540件']]
};
const Q7_T_GUEST = {
  type: 'table', caption: '店舗別の客数・客単価・売上',
  headers: ['店舗', '客数', '客単価', '売上'],
  rows: [['A店', '200人', '1,500円', '30万円'], ['B店', '300人', '1,200円', '36万円'], ['C店', '250人', '2,000円', '50万円'], ['D店', '400人', '1,800円', '？']]
};
const Q7_T_MEMBER = {
  type: 'table', caption: '開店からの月数と会員数',
  headers: ['時期', '会員数'],
  rows: [['1か月目', '100人'], ['2か月目', '130人'], ['3か月目', '170人'], ['4か月目', '220人'], ['5か月目', '？']]
};
const Q7_T_USER = {
  type: 'table', caption: 'サービスの利用者数',
  headers: ['時期', '利用者数'],
  rows: [['1年目', '200人'], ['2年目', '300人'], ['3年目', '450人'], ['4年目', '？']]
};
const Q7_T_DAYS = {
  type: 'table', caption: '作業人数と、作業が終わるまでの日数',
  headers: ['作業人数', '日数'],
  rows: [['2人', '36日'], ['3人', '24日'], ['4人', '18日'], ['6人', '？']]
};
const Q7_T_SCORE = {
  type: 'table', caption: '科目別の受験者数と平均点（受験者は全員どちらか1科目だけを受験）',
  headers: ['科目', '受験者数', '平均点'],
  rows: [['国語', '40人', '60点'], ['数学', '60人', '？'], ['全体', '100人', '66点']]
};

const Q7_G_SHARE = {
  type: 'table', caption: '販売シェアの推移（市場全体の販売額は、2021年が400億円、2023年が500億円）',
  headers: ['会社', '2021年', '2023年'],
  rows: [['A社', '35%', '30%'], ['B社', '25%', '32%'], ['C社', '22%', '20%'], ['その他', '18%', '18%']]
};
const Q7_G_YEAR = {
  type: 'table', caption: 'ある会社の売上高・従業員数・営業利益',
  headers: ['年度', '売上高', '従業員数', '営業利益'],
  rows: [['2020年度', '800億円', '2,000人', '40億円'], ['2021年度', '880億円', '2,200人', '55億円'], ['2022年度', '968億円', '2,200人', '44億円'], ['2023年度', '1,000億円', '2,500人', '60億円']]
};
const Q7_G_REGION = {
  type: 'table', caption: '地域別の店舗数・売上高・来店客数（1年間）',
  headers: ['地域', '店舗数', '売上高', '来店客数'],
  rows: [['関東', '50店', '120億円', '600万人'], ['関西', '30店', '66億円', '300万人'], ['九州', '20店', '40億円', '250万人']]
};

const Q7_N_VISIT = {
  type: 'table', caption: '曜日別の来店者数',
  headers: ['曜日', '来店者数'],
  rows: [['月曜', '120人'], ['火曜', '95人'], ['水曜', '140人'], ['木曜', '110人'], ['金曜', '185人']]
};
const Q7_N_TRAIN = {
  type: 'table', caption: 'P駅からQ駅までの列車',
  headers: ['列車', 'P駅発', 'Q駅着'],
  rows: [['普通', '9:15', '10:40'], ['快速', '9:30', '10:35'], ['急行', '9:50', '10:45']]
};
const Q7_N_PLAN = {
  type: 'table', caption: '通信プランの料金（1か月）',
  headers: ['プラン', '基本料金', '使える量', '超えた分'],
  rows: [['S', '1,000円', '3GB', '1GBごとに500円'], ['M', '2,000円', '10GB', '1GBごとに300円'], ['L', '3,500円', '30GB', '1GBごとに200円']]
};
const Q7_N_CROSS = {
  type: 'table', caption: 'アンケートの結果（人数）',
  headers: ['', '満足', '不満', '合計'],
  rows: [['男性', '20人', '30人', '50人'], ['女性', '60人', '90人', '150人'], ['合計', '80人', '120人', '200人']]
};

QUESTIONS.push(
  /* ================= 玉手箱：図表の読み取り ================= */
  {
    id: 'tamatebako-numerical-401', examType: 'tamatebako', category: 'numerical', subCategory: '図表の読み取り（1人あたり）',
    difficulty: 2, questionType: 'single',
    questionText: '表から、従業員1人あたりの売上高が最も高い支店はどれか。',
    choices: ['東支店', '北支店', '南支店', '北支店と東支店が同じで最も高い'],
    correctAnswer: 0,
    explanation: '北支店は 4,800 ÷ 16 = 300万円、南支店は 5,400 ÷ 20 = 270万円、東支店は 3,900 ÷ 12 = 325万円です。最も高いのは東支店です。',
    shortCut: '「1人あたり」は、合計を人数で割ります。売上高が最も小さい支店が1位になることもあります。',
    commonMistakes: '売上高が最も大きい南支店を選ばないようにします。人数で割ると順位が変わります。',
    targetSeconds: 60, tags: ['表', '1人あたり'], figureData: Q7_T_BRANCH, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-402', examType: 'tamatebako', category: 'numerical', subCategory: '図表の読み取り（構成比の変化）',
    difficulty: 3, questionType: 'single',
    questionText: '表から、製品Xの売上高は、2022年度から2023年度にかけてどう変化したか。',
    choices: ['12億円減った', '10億円減った', '変わらない', '18億円増えた'],
    correctAnswer: 3,
    explanation: '2022年度は 500 × 0.30 = 150億円、2023年度は 600 × 0.28 = 168億円です。168 − 150 = 18億円増えています。',
    shortCut: '構成比は「全体に対する割合」です。金額を知りたいときは、必ずその年度の合計に掛けます。',
    commonMistakes: '構成比が30%から28%に下がったので売上高も減った、と考えないようにします。全体が大きくなれば、金額は増えることがあります。',
    targetSeconds: 70, tags: ['表', '構成比'], figureData: Q7_T_MIX, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-403', examType: 'tamatebako', category: 'numerical', subCategory: '図表の読み取り（前年比）',
    difficulty: 2, questionType: 'single',
    questionText: '表から、商品Pと商品Qの、前年の販売数の合計は何個か。',
    choices: ['2,200個', '2,110個', '2,000個', '2,400個'],
    correctAnswer: 0,
    explanation: '前年の販売数は「今年の販売数 ÷ 前年比」で求めます。商品Pは 1,150 ÷ 1.15 = 1,000個、商品Qは 960 ÷ 0.8 = 1,200個。合計は 2,200個です。',
    shortCut: '前年比115%は「前年の1.15倍」です。前年に戻すときは割り算です。',
    commonMistakes: '2,110個は今年の合計です。また、今年の数に前年比を掛けると、前年ではなく別の数になります。',
    targetSeconds: 70, tags: ['表', '前年比'], figureData: Q7_T_YOY, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-404', examType: 'tamatebako', category: 'numerical', subCategory: '図表の読み取り（単価と数量）',
    difficulty: 2, questionType: 'single',
    questionText: '表から、3つの商品を合わせた5月の売上は、4月の売上より何円多いか。',
    choices: ['1,000円', '2,000円', '3,000円', '5,000円'],
    correctAnswer: 1,
    explanation: '販売数の増減は、Aが +10個、Bが −10個、Cが +5個です。金額に直すと 300 × 10 − 500 × 10 + 800 × 5 = 3,000 − 5,000 + 4,000 = 2,000円の増加です。',
    shortCut: '月ごとの売上を全部計算せず、「増えた個数 × 単価」だけを足し引きします。',
    commonMistakes: '販売数の合計（4月80個、5月85個）の差だけで判断しないようにします。商品によって単価が違います。',
    targetSeconds: 70, tags: ['表', '単価'], figureData: Q7_T_PRICE, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-405', examType: 'tamatebako', category: 'numerical', subCategory: '図表の読み取り（指数）',
    difficulty: 3, questionType: 'single',
    questionText: '表から、2022年の生産量は、2021年の生産量より何トン多いか。',
    choices: ['15トン', '100トン', '120トン', '125トン'],
    correctAnswer: 2,
    explanation: '指数1あたりの生産量は 800 ÷ 100 = 8トンです。指数の差は 125 − 110 = 15 なので、8 × 15 = 120トンです。',
    shortCut: '指数は、基準の年を100としたときの大きさです。「指数1あたりの量」を先に出します。',
    commonMistakes: '指数の差15を、そのまま15トンとしないようにします。',
    targetSeconds: 60, tags: ['表', '指数'], figureData: Q7_T_INDEX, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-406', examType: 'tamatebako', category: 'numerical', subCategory: '図表の読み取り（平均と合計）',
    difficulty: 2, questionType: 'single',
    questionText: '表は4週間の売上である。第5週の売上がいくらであれば、5週間の平均がちょうど45万円になるか。',
    choices: ['47万円', '49万円', '51万円', '53万円'],
    correctAnswer: 1,
    explanation: '5週間の平均が45万円なら、合計は 45 × 5 = 225万円です。4週間の合計は 42 + 38 + 45 + 51 = 176万円なので、225 − 176 = 49万円です。',
    shortCut: '45万円との差だけを足す方法もあります。−3、−7、0、+6 で合計 −4。第5週は 45 + 4 = 49万円です。',
    commonMistakes: '4週間の平均（44万円）との差1万円だけを足して、46万円のように考えないようにします。不足分は5週分まとめて補います。',
    targetSeconds: 60, tags: ['表', '平均'], figureData: Q7_T_WEEK, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-407', examType: 'tamatebako', category: 'numerical', subCategory: '図表の読み取り（累計）',
    difficulty: 2, questionType: 'single',
    questionText: '表は、1月からの契約数の累計である。1か月の契約数が最も多かった月はどれか。',
    choices: ['1月', '2月', '3月', '4月'],
    correctAnswer: 2,
    explanation: '月ごとの契約数は、前の月の累計との差です。1月は120件、2月は 250 − 120 = 130件、3月は 410 − 250 = 160件、4月は 540 − 410 = 130件。最も多いのは3月です。',
    shortCut: '累計の表では、隣どうしの差が「その月の数」になります。',
    commonMistakes: '累計が最も大きい4月を選ばないようにします。累計は、あとの月ほど必ず大きくなります。',
    targetSeconds: 50, tags: ['表', '累計'], figureData: Q7_T_CUM, sourceType: 'original'
  },

  /* ================= 玉手箱：表の空欄推測 ================= */
  {
    id: 'tamatebako-numerical-408', examType: 'tamatebako', category: 'numerical', subCategory: '表の空欄推測（2つの要因）',
    difficulty: 2, questionType: 'single',
    questionText: '表の「？」に入る数値として、最も適切と推測できるものはどれか。',
    choices: ['54万円', '60万円', '66万円', '72万円'],
    correctAnswer: 3,
    explanation: 'どの店舗も「客数 × 客単価 = 売上」になっています（200 × 1,500 = 30万円 など）。D店は 400 × 1,800 = 720,000円で、72万円です。',
    shortCut: '列が3つ以上あるときは、2つの列を掛けたり割ったりして、残りの列になるかを試します。',
    commonMistakes: '客数だけ、または客単価だけを見て比例で求めないようにします。2つの要因の両方で決まります。',
    targetSeconds: 50, tags: ['表', '推測'], figureData: Q7_T_GUEST, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-409', examType: 'tamatebako', category: 'numerical', subCategory: '表の空欄推測（増え方が変わる）',
    difficulty: 2, questionType: 'single',
    questionText: '表の「？」に入る数値として、最も適切と推測できるものはどれか。',
    choices: ['260人', '270人', '280人', '290人'],
    correctAnswer: 2,
    explanation: '増えた人数は、30人、40人、50人と、10人ずつ大きくなっています。次は60人増えると考えられるので、220 + 60 = 280人です。',
    shortCut: '差が一定でないときは、差そのものがどう変わっているかを調べます。',
    commonMistakes: '直前と同じ50人を足して270人としないようにします。増え方そのものが大きくなっています。',
    targetSeconds: 50, tags: ['表', '推測'], figureData: Q7_T_MEMBER, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-410', examType: 'tamatebako', category: 'numerical', subCategory: '表の空欄推測（一定の倍率）',
    difficulty: 3, questionType: 'single',
    questionText: '表の「？」に入る数値として、最も適切と推測できるものはどれか。',
    choices: ['525人', '600人', '650人', '675人'],
    correctAnswer: 3,
    explanation: '200 → 300 → 450 と、毎年1.5倍になっています。4年目は 450 × 1.5 = 675人と推測できます。',
    shortCut: '差が 100、150 と一定でないときは、「何倍か」を調べます。300 ÷ 200 と 450 ÷ 300 がどちらも1.5です。',
    commonMistakes: '直前と同じ150人を足して600人としないようにします。',
    targetSeconds: 50, tags: ['表', '推測'], figureData: Q7_T_USER, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-411', examType: 'tamatebako', category: 'numerical', subCategory: '表の空欄推測（反比例）',
    difficulty: 3, questionType: 'single',
    questionText: '表の「？」に入る数値として、最も適切と推測できるものはどれか。',
    choices: ['9日', '12日', '15日', '16日'],
    correctAnswer: 1,
    explanation: 'どの行も「作業人数 × 日数 = 72」になっています（2 × 36、3 × 24、4 × 18）。6人では 72 ÷ 6 = 12日と推測できます。',
    shortCut: '一方が増えるともう一方が減るときは、掛け算の結果が一定かどうかを確かめます。',
    commonMistakes: '日数の減り方（12日、6日）から、次は3日減ると考えて15日としないようにします。人数の増え方も一定ではありません。',
    targetSeconds: 50, tags: ['表', '推測', '反比例'], figureData: Q7_T_DAYS, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-412', examType: 'tamatebako', category: 'numerical', subCategory: '表の空欄推測（合計から逆算）',
    difficulty: 3, questionType: 'single',
    questionText: '表の「？」に入る数値はどれか。',
    choices: ['70点', '72点', '74点', '76点'],
    correctAnswer: 0,
    explanation: '全体の合計点は 66 × 100 = 6,600点。国語の合計点は 60 × 40 = 2,400点。数学の合計点は 6,600 − 2,400 = 4,200点なので、平均は 4,200 ÷ 60 = 70点です。',
    shortCut: '平均は、人数を掛けて合計に直してから計算します。',
    commonMistakes: '60点と「？」の真ん中が66点になると考えて72点としないようにします。人数が違うので、単純な平均にはなりません。',
    targetSeconds: 70, tags: ['表', '平均'], figureData: Q7_T_SCORE, sourceType: 'original'
  },

  /* ================= GAB：計数理解 ================= */
  {
    id: 'gab-numerical-401', examType: 'gab', category: 'numerical', subCategory: 'シェアの順位',
    difficulty: 1, questionType: 'single',
    questionText: '表から、2021年と2023年を比べて、シェアの順位が上がったのはどれか。「その他」は順位に含めない。',
    choices: ['A社', 'B社', 'C社', '順位が上がった会社はない'],
    correctAnswer: 1,
    explanation: '2021年は A社（35%）、B社（25%）、C社（22%）の順です。2023年は B社（32%）、A社（30%）、C社（20%）の順です。B社が2位から1位に上がっています。',
    shortCut: '年ごとに、大きい順に並べ直してから比べます。',
    commonMistakes: 'シェアの大きさだけを見て、2021年に1位だったA社を選ばないようにします。',
    targetSeconds: 40, tags: ['表', '順位'], figureData: Q7_G_SHARE, sourceType: 'original'
  },
  {
    id: 'gab-numerical-402', examType: 'gab', category: 'numerical', subCategory: 'ポイント差',
    difficulty: 2, questionType: 'single',
    questionText: '表から、B社のシェアは、2021年から2023年にかけて何ポイント上がったか。',
    choices: ['28ポイント', '32ポイント', '5ポイント', '7ポイント'],
    correctAnswer: 3,
    explanation: '割合どうしの差は「ポイント」で表します。32 − 25 = 7ポイントです。',
    shortCut: '「何ポイント」と問われたら、%の数字をそのまま引き算します。',
    commonMistakes: '7 ÷ 25 = 28% は「何%増えたか」の答えです。「何ポイント上がったか」とは違います。',
    targetSeconds: 30, tags: ['表', 'ポイント'], figureData: Q7_G_SHARE, sourceType: 'original'
  },
  {
    id: 'gab-numerical-403', examType: 'gab', category: 'numerical', subCategory: '増加への寄与',
    difficulty: 3, questionType: 'single',
    questionText: '表から、市場全体の販売額の増加分のうち、B社の販売額の増加分が占める割合は何%か。',
    choices: ['28%', '32%', '60%', '64%'],
    correctAnswer: 2,
    explanation: '市場全体の増加は 500 − 400 = 100億円。B社の販売額は、2021年が 400 × 0.25 = 100億円、2023年が 500 × 0.32 = 160億円で、60億円の増加です。60 ÷ 100 = 60% です。',
    shortCut: '「全体の増加分」と「その会社の増加分」を、どちらも金額で出してから割ります。',
    commonMistakes: '2023年のシェア32%を、そのまま答えにしないようにします。問われているのは、増えた分に占める割合です。',
    targetSeconds: 90, tags: ['表', '寄与'], figureData: Q7_G_SHARE, sourceType: 'original'
  },
  {
    id: 'gab-numerical-404', examType: 'gab', category: 'numerical', subCategory: '増加額の順位',
    difficulty: 3, questionType: 'single',
    questionText: '表から、2021年から2023年にかけての販売額の増加額が、2番目に大きいのはどれか。',
    choices: ['A社', 'B社', 'C社', 'その他'],
    correctAnswer: 3,
    explanation: '販売額は、A社が 140億円 → 150億円（+10）、B社が 100億円 → 160億円（+60）、C社が 88億円 → 100億円（+12）、その他が 72億円 → 90億円（+18）です。2番目に大きいのは「その他」です。',
    shortCut: 'シェアが変わらない「その他」でも、市場全体が大きくなれば金額は増えます。18% × 100億円 = 18億円とすぐ出せます。',
    commonMistakes: 'シェアが変わらない「その他」や、シェアが下がったA社・C社を、増加額0やマイナスと決めつけないようにします。',
    targetSeconds: 100, tags: ['表', '増加額'], figureData: Q7_G_SHARE, sourceType: 'original'
  },
  {
    id: 'gab-numerical-405', examType: 'gab', category: 'numerical', subCategory: '年平均の伸び',
    difficulty: 3, questionType: 'single',
    questionText: '表から、2020年度から2022年度までの2年間で、売上高は1年あたり平均して何%ずつ伸びたといえるか。毎年同じ割合で伸びたものとして考える。',
    choices: ['10%', '10.5%', '11%', '21%'],
    correctAnswer: 0,
    explanation: '968 ÷ 800 = 1.21 で、2年間で1.21倍です。1年あたりの倍率を2回掛けて1.21になる数は1.1（1.1 × 1.1 = 1.21）なので、1年あたり10%です。',
    shortCut: '実際に、2021年度が 800 × 1.1 = 880億円、2022年度が 880 × 1.1 = 968億円になっていることでも確かめられます。',
    commonMistakes: '2年間の伸び21%を2で割って10.5%としないようにします。伸び率は、掛け算で積み重なります。',
    targetSeconds: 80, tags: ['表', '伸び率'], figureData: Q7_G_YEAR, sourceType: 'original'
  },
  {
    id: 'gab-numerical-406', examType: 'gab', category: 'numerical', subCategory: '条件に合う項目の数',
    difficulty: 2, questionType: 'single',
    questionText: '表の2021年度から2023年度のうち、売上高と営業利益の両方が前の年度より増えた年度はいくつあるか。',
    choices: ['1つもない', '1つ', '2つ', '3つ'],
    correctAnswer: 2,
    explanation: '2021年度は売上高（800 → 880）も営業利益（40 → 55）も増加。2022年度は売上高は増加、営業利益は減少（55 → 44）。2023年度は売上高（968 → 1,000）も営業利益（44 → 60）も増加。当てはまるのは2つです。',
    shortCut: '条件が2つあるときは、当てはまらない年度を先に除きます。営業利益が減ったのは2022年度だけです。',
    commonMistakes: '売上高がずっと増えていることだけを見て、3つと答えないようにします。',
    targetSeconds: 50, tags: ['表', '条件'], figureData: Q7_G_YEAR, sourceType: 'original'
  },
  {
    id: 'gab-numerical-407', examType: 'gab', category: 'numerical', subCategory: '1人あたりの変化',
    difficulty: 2, questionType: 'single',
    questionText: '表から、従業員1人あたりの売上高は、2020年度と2023年度を比べてどうなったか。',
    choices: ['変わらない', '増えた', '減った', '表からは判断できない'],
    correctAnswer: 0,
    explanation: '2020年度は 800億円 ÷ 2,000人 = 4,000万円。2023年度は 1,000億円 ÷ 2,500人 = 4,000万円。同じです。',
    shortCut: '売上高も従業員数も、どちらも1.25倍になっています。同じ倍率なら、1人あたりは変わりません。',
    commonMistakes: '売上高が増えたので1人あたりも増えた、と決めつけないようにします。従業員数の増え方と比べます。',
    targetSeconds: 60, tags: ['表', '1人あたり'], figureData: Q7_G_YEAR, sourceType: 'original'
  },
  {
    id: 'gab-numerical-408', examType: 'gab', category: 'numerical', subCategory: '推移の読み取り',
    difficulty: 2, questionType: 'single',
    questionText: '表の2021年度から2023年度のうち、営業利益が前の年度から最も大きく動いた（増えた額、または減った額が最も大きい）年度はどれか。',
    choices: ['2021年度', '2022年度', '2023年度', '2021年度と2023年度が同じ'],
    correctAnswer: 2,
    explanation: '前の年度との差は、2021年度が +15億円、2022年度が −11億円、2023年度が +16億円です。動いた幅が最も大きいのは2023年度です。',
    shortCut: '増えたか減ったかに関係なく、差の大きさだけを比べます。',
    commonMistakes: '1つだけ減っている2022年度を、目立つという理由で選ばないようにします。',
    targetSeconds: 50, tags: ['表', '推移'], figureData: Q7_G_YEAR, sourceType: 'original'
  },
  {
    id: 'gab-numerical-409', examType: 'gab', category: 'numerical', subCategory: '目標までの不足',
    difficulty: 3, questionType: 'single',
    questionText: '表から、九州の1店舗あたりの売上高を関東と同じにするには、九州の売上高をあと何億円増やす必要があるか。店舗数は変わらないものとする。',
    choices: ['4億円', '8億円', '10億円', '48億円'],
    correctAnswer: 1,
    explanation: '関東の1店舗あたりの売上高は 120 ÷ 50 = 2.4億円。九州が同じになるには 2.4 × 20 = 48億円が必要です。今は40億円なので、あと 48 − 40 = 8億円です。',
    shortCut: '「目標の合計」を先に出し、今の合計を引きます。',
    commonMistakes: '48億円は、目標とする売上高の合計です。「あと何億円か」は、そこから今の40億円を引きます。',
    targetSeconds: 80, tags: ['表', '1店舗あたり'], figureData: Q7_G_REGION, sourceType: 'original'
  },
  {
    id: 'gab-numerical-410', examType: 'gab', category: 'numerical', subCategory: '表から言えること',
    difficulty: 3, questionType: 'single',
    questionText: '表から確実に言えるものはどれか。',
    choices: ['関東の店舗は、どの店舗も九州の店舗より売上高が多い。', '関西の1店舗あたりの売上高は、九州より高い。', '来店客数が最も多い店舗は、関東にある。', '九州の来店客1人あたりの売上高は、関西より高い。'],
    correctAnswer: 1,
    explanation: '1店舗あたりの売上高は、関西が 66 ÷ 30 = 2.2億円、九州が 40 ÷ 20 = 2.0億円で、関西のほうが高いです。来店客1人あたりは、九州が1,600円、関西が2,200円なので4つ目は誤りです。1つ目と3つ目は、店舗ごとの数値が表にないので判断できません。',
    shortCut: '表にあるのは地域ごとの合計だけです。「どの店舗も」「最も多い店舗」のような、1店舗ずつの話は判断できません。',
    commonMistakes: '合計や平均が大きいからといって、その中の1つ1つがすべて大きいとは限りません。',
    targetSeconds: 90, tags: ['表', '判断'], figureData: Q7_G_REGION, sourceType: 'original'
  },

  /* ================= TG-WEB：計数（従来型） ================= */
  {
    id: 'tgweb-numerical-classic-401', examType: 'tgweb', category: 'numerical-classic', subCategory: '推論（順位）',
    difficulty: 2, questionType: 'single',
    questionText: 'A、B、C、D、Eの5人が競走をした。同着はなく、次のことが分かっている。\n・CはAより上位、AはBより上位だった\n・DはEのすぐ次の順位だった\n・Bは最下位ではなかった\nEは何位か。',
    choices: ['2位', '3位', '4位', '5位'],
    correctAnswer: 2,
    explanation: 'C、A、Bはこの順で、Bは4位以内です。DとEは続いた順位なので、2人で「4位と5位」か、それより上の続いた2つを使います。Bが4位だと、残りは5位と上位の1つになり、続きません。したがって C＝1位、A＝2位、B＝3位、E＝4位、D＝5位です。',
    shortCut: '「すぐ次」の2人を1つのかたまりと考え、置ける場所を先にしぼります。',
    commonMistakes: '「すぐ次の順位」は、Eの1つ下という意味です。DとEの上下を逆にしないようにします。',
    targetSeconds: 90, tags: ['推論', '順位'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-402', examType: 'tgweb', category: 'numerical-classic', subCategory: '推論（円卓の席順）',
    difficulty: 3, questionType: 'single',
    questionText: 'A、B、C、D、E、Fの6人が、丸いテーブルのまわりに等しい間隔で座っている。次のことが分かっている。\n・AとDは真向かいに座っている\n・BはAの隣に座っている\n・CはBの隣に座っているが、Aの隣ではない\n・EはDの隣ではない\nFの真向かいに座っているのは誰か。',
    choices: ['A', 'B', 'C', 'E'],
    correctAnswer: 1,
    explanation: 'Aの席を決めると、Dは真向かいです。BはAの隣で、CはBのもう一方の隣（Dの隣）になります。残りの2席のうち、Dの隣でないほうがE、Dの隣がFです。FはAから見てBと反対側の2つ先の席になり、その真向かいはBです。Bを左右どちらの隣に置いても、結果は同じです。',
    shortCut: '円卓の問題は、1人の席を固定して図を描きます。6人なら、真向かいは3つ先の席です。',
    commonMistakes: 'Bを右隣に置く場合と左隣に置く場合の両方があります。どちらでも答えが同じになることを確かめます。',
    targetSeconds: 100, tags: ['推論', '席順'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-403', examType: 'tgweb', category: 'numerical-classic', subCategory: '推論（リーグ戦）',
    difficulty: 2, questionType: 'single',
    questionText: 'A、B、C、Dの4チームが、どのチームとも1回ずつ試合をした。引き分けはなく、Aは3勝0敗、Bは1勝2敗、Cは2勝1敗だった。Dの成績はどれか。',
    choices: ['0勝3敗', '1勝2敗', '2勝1敗', 'これだけでは決まらない'],
    correctAnswer: 0,
    explanation: '試合は全部で6試合なので、勝ち数の合計は6です。A、B、Cの勝ち数の合計は 3 + 1 + 2 = 6 なので、Dは0勝です。Dは3試合しているので、0勝3敗です。',
    shortCut: '引き分けがないとき、全チームの勝ち数の合計は試合数と同じになります。',
    commonMistakes: '誰が誰に勝ったかを1試合ずつ調べなくても、勝ち数の合計だけで決まります。',
    targetSeconds: 60, tags: ['推論', '勝敗'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-404', examType: 'tgweb', category: 'numerical-classic', subCategory: 'じゃんけん',
    difficulty: 2, questionType: 'single',
    questionText: '3人で1回じゃんけんをする。あいこ（勝ち負けが決まらない）になる確率はどれか。3人とも、グー、チョキ、パーを同じ確率で出すものとする。',
    choices: ['1/9', '2/9', '1/3', '2/3'],
    correctAnswer: 2,
    explanation: '手の出し方は 3 × 3 × 3 = 27通りです。あいこになるのは、3人とも同じ手（3通り）と、3人とも違う手（3 × 2 × 1 = 6通り）の、合わせて9通り。9/27 = 1/3 です。',
    shortCut: 'あいこは「全員同じ」と「全員ばらばら」の2種類です。',
    commonMistakes: '「全員同じ」の3通りだけを数えて 1/9 としないようにします。3つの手がすべて出た場合もあいこです。',
    targetSeconds: 70, tags: ['確率', 'じゃんけん'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-405', examType: 'tgweb', category: 'numerical-classic', subCategory: '最小の手順（天秤）',
    difficulty: 3, questionType: 'single',
    questionText: '見た目が同じ9枚のコインがあり、1枚だけがほかより軽い。上皿てんびんを使って、軽い1枚を確実に見つけるには、てんびんを最低何回使えばよいか。',
    choices: ['2回', '3回', '4回', '8回'],
    correctAnswer: 0,
    explanation: '1回目は、3枚ずつをてんびんに乗せ、3枚を残します。軽いほうの皿、またはつり合えば残した3枚に、軽いコインがあります。2回目は、その3枚から1枚ずつを乗せ、1枚を残します。同じように考えて、軽い1枚が決まります。',
    shortCut: 'てんびんは1回で「左が軽い・右が軽い・つり合う」の3つに分けられます。3つのグループに分けると、1回ごとに候補が3分の1になります。',
    commonMistakes: '半分ずつに分けていくと、回数が多くなります。乗せないグループも手がかりになります。',
    targetSeconds: 80, tags: ['推論', '最小手順'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-406', examType: 'tgweb', category: 'numerical-classic', subCategory: '最小の手順（水を量る）',
    difficulty: 3, questionType: 'single',
    questionText: '5リットル入る容器と3リットル入る容器が1つずつあり、どちらも空である。目盛りはない。「水道から容器をいっぱいにする」「容器の水をすべて捨てる」「一方の容器から他方へ、移せるだけ移す」をそれぞれ1回の操作と数える。どちらかの容器にちょうど4リットルの水を入れるには、最低何回の操作が必要か。',
    choices: ['4回', '6回', '7回', '8回'],
    correctAnswer: 1,
    explanation: '（5Lの容器, 3Lの容器）の水の量で表します。①5Lをいっぱいにする（5, 0）②3Lへ移す（2, 3）③3Lを捨てる（2, 0）④3Lへ移す（0, 2）⑤5Lをいっぱいにする（5, 2）⑥3Lへ移す（4, 3）。6回で、5Lの容器に4リットルが残ります。これより少ない回数ではできません。',
    shortCut: '大きい容器から小さい容器へ移すことをくり返すと、5 − 3 = 2、5 − 1 = 4 のように、差の量を作れます。',
    commonMistakes: '3Lの容器から始めると8回かかります。始め方を変えて、少ないほうを選びます。',
    targetSeconds: 120, tags: ['推論', '最小手順'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-407', examType: 'tgweb', category: 'numerical-classic', subCategory: '魔方陣',
    difficulty: 2, questionType: 'single',
    questionText: '縦3マス、横3マスの表に、1から9までの数を1つずつ入れ、縦・横・斜めのどの3つの数の和も等しくなるようにする。上の段が左から「2、7、6」、中の段の左が「9」のとき、下の段の右に入る数はどれか。',
    choices: ['1', '3', '4', '8'],
    correctAnswer: 3,
    explanation: '上の段の和は 2 + 7 + 6 = 15 なので、どの列の和も15です。左の列は 2 + 9 + □ = 15 より、下の段の左は4。斜め（右上から左下）は 6 + □ + 4 = 15 より、中央は5。斜め（左上から右下）は 2 + 5 + □ = 15 より、下の段の右は8です。',
    shortCut: '1から9までを使う3マス四方の魔方陣では、1列の和は15、中央は必ず5です。左上が2なので、右下は 15 − 2 − 5 = 8 とすぐに求められます。',
    commonMistakes: '斜めの列も和が等しいことを忘れないようにします。',
    targetSeconds: 70, tags: ['魔方陣'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-408', examType: 'tgweb', category: 'numerical-classic', subCategory: '覆面算',
    difficulty: 3, questionType: 'single',
    questionText: '次の計算で、A、B、Cはそれぞれ0から9までの異なる数字を表す。「AA」は2けた、「BCC」は3けたの整数で、いちばん上の位は0ではない。A + B + C はいくつか。\nAA + B = BCC',
    choices: ['9', '10', '11', '18'],
    correctAnswer: 1,
    explanation: '2けたの数に1けたの数を足しても、最大で 99 + 9 = 108 です。答えが3けたになるので、百の位のBは1です。AA + 1 が3けたになるのは 99 + 1 = 100 のときだけなので、A = 9、C = 0。A + B + C = 9 + 1 + 0 = 10 です。',
    shortCut: 'けたが増えるところ（くり上がり）に注目します。2けた＋1けたで3けたになるなら、百の位は必ず1です。',
    commonMistakes: 'CとCが同じ数字であることを使わないと、答えが1つに決まりません。',
    targetSeconds: 90, tags: ['覆面算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-409', examType: 'tgweb', category: 'numerical-classic', subCategory: '暦と曜日',
    difficulty: 2, questionType: 'single',
    questionText: 'ある年の4月1日は火曜日である。同じ年の5月5日は何曜日か。',
    choices: ['土曜日', '日曜日', '月曜日', '火曜日'],
    correctAnswer: 2,
    explanation: '4月は30日まであるので、4月1日から5月5日までは 30 + 4 = 34日後です。34 ÷ 7 = 4 あまり 6 なので、火曜日の6日後で、月曜日です。',
    shortCut: '7日後は同じ曜日です。日数を7で割ったあまりだけ、曜日を進めます。',
    commonMistakes: '4月を31日として数えると、1日ずれます。30日の月（4月、6月、9月、11月）を確かめます。',
    targetSeconds: 60, tags: ['暦', '曜日'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-410', examType: 'tgweb', category: 'numerical-classic', subCategory: '時計',
    difficulty: 3, questionType: 'single',
    questionText: '時計が4時20分を指しているとき、長針と短針がつくる角のうち、小さいほうの角度は何度か。',
    choices: ['10度', '20度', '30度', '40度'],
    correctAnswer: 0,
    explanation: '長針は1分に6度進むので、20分で 6 × 20 = 120度の位置です。短針は1時間に30度、1分に0.5度進むので、4時20分では 30 × 4 + 0.5 × 20 = 130度の位置です。差は 130 − 120 = 10度です。',
    shortCut: '長針は「分 × 6度」、短針は「時 × 30度 ＋ 分 × 0.5度」で位置を出します。',
    commonMistakes: '短針が「4」の真上にあると考えて0度としないようにします。短針も20分の間に10度進んでいます。',
    targetSeconds: 70, tags: ['時計', '角度'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-411', examType: 'tgweb', category: 'numerical-classic', subCategory: '折り紙',
    difficulty: 2, questionType: 'single',
    questionText: '正方形の紙を、半分に折る操作を3回くり返した。重なったまま、折り目にかからない位置に穴を1つあけた。紙をすべて開くと、穴はいくつあいているか。',
    choices: ['3個', '6個', '8個', '9個'],
    correctAnswer: 2,
    explanation: '半分に折るたびに、重なる枚数は2倍になります。3回折ると 2 × 2 × 2 = 8枚が重なっているので、穴は8個あきます。',
    shortCut: '折った回数だけ2を掛けます。1回で2枚、2回で4枚、3回で8枚です。',
    commonMistakes: '3回 × 2 = 6個としないようにします。枚数は足し算ではなく、2倍ずつ増えます。',
    targetSeconds: 40, tags: ['図形', '折り紙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-412', examType: 'tgweb', category: 'numerical-classic', subCategory: '立方体',
    difficulty: 3, questionType: 'single',
    questionText: '同じ大きさの小さな立方体を27個使って、縦・横・高さがそれぞれ3個の大きな立方体を作った。大きな立方体の表面（6つの面すべて）に色を塗ったとき、ちょうど2つの面だけに色が塗られた小さな立方体は何個あるか。',
    choices: ['6個', '8個', '10個', '12個'],
    correctAnswer: 3,
    explanation: '2つの面だけが塗られるのは、大きな立方体の「辺」の上にあり、角ではない小さな立方体です。辺は12本あり、1本の辺につき真ん中の1個が当てはまるので、12個です。',
    shortCut: '角の8個は3面、辺の真ん中の12個は2面、面の真ん中の6個は1面、中心の1個は0面です。8 + 12 + 6 + 1 = 27 で確かめられます。',
    commonMistakes: '角の8個は3つの面が塗られています。面の真ん中の6個は1つの面だけです。',
    targetSeconds: 80, tags: ['図形', '立方体'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-413', examType: 'tgweb', category: 'numerical-classic', subCategory: 'サイコロを転がす',
    difficulty: 3, questionType: 'single',
    questionText: '向かい合う面の目の和が7になるサイコロが、上の面が1、手前の面が2、右の面が3の向きで置いてある。このサイコロを、すべらせずに右へ1回、続けて手前へ1回転がした。上の面の目はいくつか。',
    choices: ['2', '3', '4', '5'],
    correctAnswer: 3,
    explanation: '最初、左の面は4、奥の面は5、下の面は6です。右へ転がすと、左の面が上にきて、上は4になります。このとき、手前の2と奥の5は動きません。続けて手前へ転がすと、奥の面が上にくるので、上は5です。',
    shortCut: '転がした方向と反対側の面が、上にきます。転がす軸の両側の面（右へ転がすなら手前と奥）は変わりません。',
    commonMistakes: '転がした方向の面（右の3や手前の2）が上にくると考えないようにします。上にくるのは反対側の面です。',
    targetSeconds: 90, tags: ['図形', 'サイコロ'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-414', examType: 'tgweb', category: 'numerical-classic', subCategory: '推論（対偶）',
    difficulty: 2, questionType: 'single',
    questionText: '「甘いものが好きな人は、コーヒーを飲まない」が正しいとき、必ず正しいといえるものはどれか。',
    choices: ['コーヒーを飲む人は、甘いものが好きではない。', 'コーヒーを飲まない人は、甘いものが好きである。', '甘いものが好きではない人は、コーヒーを飲む。', '甘いものが好きな人の中には、コーヒーを飲む人もいる。'],
    correctAnswer: 0,
    explanation: '「AならばB」が正しいとき、「BでないならばAでない」（対偶）も必ず正しくなります。「コーヒーを飲まない」の反対は「コーヒーを飲む」なので、「コーヒーを飲む人は、甘いものが好きではない」が正しいです。',
    shortCut: '前後を入れ替えて、両方を否定します。',
    commonMistakes: '前後を入れ替えただけ（2つ目）や、両方を否定しただけ（3つ目）は、必ず正しいとはいえません。',
    targetSeconds: 50, tags: ['推論', '対偶'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-415', examType: 'tgweb', category: 'numerical-classic', subCategory: '集合（3つ）',
    difficulty: 3, questionType: 'single',
    questionText: '40人に、国語、数学、英語が好きかどうかを聞いた。国語が好きな人は20人、数学が好きな人は18人、英語が好きな人は15人だった。国語と数学の両方が好きな人は8人、数学と英語の両方が好きな人は6人、国語と英語の両方が好きな人は5人で、3つとも好きな人は3人だった。3つとも好きではない人は何人か。',
    choices: ['2人', '3人', '5人', '13人'],
    correctAnswer: 1,
    explanation: '少なくとも1つが好きな人は、20 + 18 + 15 −（8 + 6 + 5）+ 3 = 53 − 19 + 3 = 37人です。3つとも好きではない人は 40 − 37 = 3人です。',
    shortCut: '「3つの合計 − 2つずつの重なり ＋ 3つの重なり」で、どれかに当てはまる人数が出ます。',
    commonMistakes: '最後に3つの重なりを足し戻すのを忘れると、34人となり、答えが6人にずれます。',
    targetSeconds: 100, tags: ['集合'], figureData: null, sourceType: 'original'
  },

  /* ================= TG-WEB：計数（新型） ================= */
  {
    id: 'tgweb-numerical-new-401', examType: 'tgweb', category: 'numerical-new', subCategory: '図表の読み取り（最大と最小）',
    difficulty: 1, questionType: 'single',
    questionText: '表から、来店者数が最も多い曜日と最も少ない曜日の差は何人か。',
    choices: ['65人', '75人', '90人', '185人'],
    correctAnswer: 2,
    explanation: '最も多いのは金曜の185人、最も少ないのは火曜の95人です。185 − 95 = 90人です。',
    shortCut: '最大と最小の2つだけを探します。ほかの数字は使いません。',
    commonMistakes: '最初の行（月曜120人）との差 65人を答えにしないようにします。最も少ないのは火曜です。',
    targetSeconds: 25, tags: ['表', '最大と最小'], figureData: Q7_N_VISIT, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-new-402', examType: 'tgweb', category: 'numerical-new', subCategory: '図表の読み取り（中央値）',
    difficulty: 2, questionType: 'single',
    questionText: '表の5日間の来店者数について、中央値（小さい順に並べたとき真ん中にくる値）は何人か。',
    choices: ['110人', '120人', '130人', '140人'],
    correctAnswer: 1,
    explanation: '小さい順に並べると 95、110、120、140、185 です。真ん中の3番目は120人です。',
    shortCut: '中央値は、並べ替えて真ん中を見るだけです。計算はいりません。',
    commonMistakes: '平均（650 ÷ 5 = 130人）と取り違えないようにします。また、表の真ん中の行（水曜140人）でもありません。',
    targetSeconds: 30, tags: ['表', '中央値'], figureData: Q7_N_VISIT, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-new-403', examType: 'tgweb', category: 'numerical-new', subCategory: '図表の読み取り（時刻）',
    difficulty: 2, questionType: 'single',
    questionText: '表から、P駅からQ駅までの所要時間が最も長い列車と最も短い列車の、所要時間の差は何分か。',
    choices: ['10分', '20分', '25分', '30分'],
    correctAnswer: 3,
    explanation: '普通は 9:15 → 10:40 で85分、快速は 9:30 → 10:35 で65分、急行は 9:50 → 10:45 で55分です。85 − 55 = 30分です。',
    shortCut: '「10時まで何分」と「10時から何分」に分けて足すと、時刻の引き算を間違えにくくなります。',
    commonMistakes: '到着時刻だけを比べないようにします。出発時刻が違うので、列車ごとに所要時間を出します。',
    targetSeconds: 50, tags: ['表', '時刻'], figureData: Q7_N_TRAIN, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-new-404', examType: 'tgweb', category: 'numerical-new', subCategory: '図表の読み取り（料金表）',
    difficulty: 2, questionType: 'single',
    questionText: '表から、1か月に7GB使う人にとって、料金が最も安くなるプランと、その料金はどれか。',
    choices: ['プランM（2,000円）', 'プランS（1,000円）', 'プランS（3,000円）', 'プランL（3,500円）'],
    correctAnswer: 0,
    explanation: 'プランSは、3GBを超えた4GB分が 500 × 4 = 2,000円かかり、合計3,000円です。プランMは10GBまで使えるので2,000円、プランLは3,500円です。最も安いのはプランMです。',
    shortCut: '使う量が「使える量」を超えるプランだけ、超えた分を計算します。',
    commonMistakes: '基本料金が最も安いプランSを、そのまま選ばないようにします。超えた分の料金が加わります。',
    targetSeconds: 50, tags: ['表', '料金'], figureData: Q7_N_PLAN, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-new-405', examType: 'tgweb', category: 'numerical-new', subCategory: '図表の読み取り（集計表）',
    difficulty: 3, questionType: 'single',
    questionText: '表から、「満足」と答えた人のうち、女性が占める割合は何%か。',
    choices: ['30%', '40%', '60%', '75%'],
    correctAnswer: 3,
    explanation: '「満足」と答えた人は80人で、そのうち女性は60人です。60 ÷ 80 = 75% です。',
    shortCut: '「〜のうち」の前にある集団（ここでは満足と答えた80人）が、割る数になります。',
    commonMistakes: '女性150人のうち満足と答えた割合（60 ÷ 150 = 40%）や、全体200人に対する割合（30%）と取り違えないようにします。',
    targetSeconds: 45, tags: ['表', '割合'], figureData: Q7_N_CROSS, sourceType: 'original'
  }
);

checkQuestions(QUESTIONS);
