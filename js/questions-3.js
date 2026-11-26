/* ==========================================================
   questions-3.js  追加の問題データ（各分野の問題数を増やす分）
   ・書き方は js/questions.js のテンプレートと同じです。
   すべて学習用の独自作成です。実際の試験問題は載せません。
   ========================================================== */

const PASSAGE_CAFE = '　ある喫茶店では、先月から開店時間を朝7時に早めた。開店直後の時間帯は、近くの会社に勤める人の利用が多い。店主は、今後は朝食のメニューを増やすことを検討している。';
const PASSAGE_TRAIN = '　ある鉄道会社は、通勤時間帯の混雑を和らげるため、早朝に乗車した利用者にポイントを付与する制度を始めた。開始から半年で、最も混雑する時間帯の乗客数は約5%減少した。同社は、対象となる路線を来年度から増やす方針である。';
const PASSAGE_MUSEUM = 'The city museum is closed every Monday. Admission is free for children under twelve. Last year, the museum added a new section about local history.';

const TABLE_SURVEY = {
  type: 'table',
  caption: '年代別の回答者数と「賛成」の人数',
  headers: ['年代', '回答者数', '賛成'],
  rows: [['20代', '80人', '48人'], ['30代', '120人', '60人'], ['40代', '100人', '45人']]
};
const TABLE_SHARE = {
  type: 'table',
  caption: '製品別の売上構成比（売上の合計は800万円）',
  headers: ['製品', '構成比'],
  rows: [['製品A', '35%'], ['製品B', '25%'], ['製品C', '40%']]
};
const TABLE_AREA = {
  type: 'table',
  caption: '売場面積と月間売上',
  headers: ['店舗', '売場面積', '月間売上'],
  rows: [['W店', '100㎡', '300万円'], ['X店', '150㎡', '450万円'], ['Y店', '200㎡', '600万円'], ['Z店', '260㎡', '？']]
};

QUESTIONS.push(
  /* ================= SPI3：言語 ================= */
  {
    id: 'spi3-verbal-008', examType: 'spi3', category: 'verbal', subCategory: '二語の関係',
    difficulty: 1, questionType: 'single',
    questionText: '「包丁：切る」と同じ関係になっている組み合わせはどれか。',
    choices: ['紙：鉛筆', '料理：包丁', '切る：刻む', '鉛筆：書く'],
    correctAnswer: 3,
    explanation: '「包丁」は「切る」ための道具です。「道具：その用途」の関係なので、「鉛筆：書く」が同じです。',
    shortCut: '「AはBするための道具」という文を作り、選択肢に当てはめます。',
    commonMistakes: '「料理：包丁」は関連がありますが、順番が逆で、用途の関係でもありません。',
    targetSeconds: 25, tags: ['語彙', '関係'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-009', examType: 'spi3', category: 'verbal', subCategory: '二語の関係',
    difficulty: 2, questionType: 'single',
    questionText: '「野菜：にんじん」と同じ関係になっている組み合わせはどれか。',
    choices: ['楽器：ピアノ', 'ピアノ：音楽', '机：いす', '春：季節'],
    correctAnswer: 0,
    explanation: '「にんじん」は「野菜」の一種です。「大きな分類：その中の1つ」の関係なので、「楽器：ピアノ」が同じです。',
    shortCut: '「BはAの一種」と言えるかを確かめます。',
    commonMistakes: '「春：季節」は含む・含まれるの関係ですが、順番が逆です。左右の順番まで確かめます。',
    targetSeconds: 25, tags: ['語彙', '関係'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-010', examType: 'spi3', category: 'verbal', subCategory: '語句の意味',
    difficulty: 1, questionType: 'single',
    questionText: '「物事の中心となる、最も大切な部分」という意味に最も近い語はどれか。',
    choices: ['確信', '核心', '革新', '改心'],
    correctAnswer: 1,
    explanation: '「核心」は物事の中心となる大切な部分です。「確信」は固く信じること、「革新」は古いやり方を新しくすること、「改心」は心を入れかえることです。',
    shortCut: '「核」は中心、「心」も中心を表します。漢字の意味から選びます。',
    commonMistakes: '読みが同じ「かくしん」の語が並んでいます。音ではなく漢字で判断します。',
    targetSeconds: 25, tags: ['語彙', '同音異義語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-011', examType: 'spi3', category: 'verbal', subCategory: '語句の意味',
    difficulty: 2, questionType: 'single',
    questionText: '「あれこれ迷って、決心がつかないこと」という意味に最も近い語はどれか。',
    choices: ['熟慮', '遠慮', '躊躇', '配慮'],
    correctAnswer: 2,
    explanation: '「躊躇（ちゅうちょ）」は、迷ってためらうことです。「熟慮」はよく考えること、「遠慮」は控えめにすること、「配慮」は心を配ることです。',
    shortCut: '「迷う」「決められない」の要素があるのは躊躇だけです。',
    commonMistakes: '「熟慮」は時間をかけて考える点は似ていますが、迷っているという意味はありません。',
    targetSeconds: 25, tags: ['語彙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-012', examType: 'spi3', category: 'verbal', subCategory: '語句の用法',
    difficulty: 3, questionType: 'single',
    questionText: '次の文の「の」と、同じ働きをしているものはどれか。\n「雨の降る日は、客が少ない。」',
    choices: ['これは私の本だ。', '走るのが速い。', '赤いのがほしい。', '母の作った料理はおいしい。'],
    correctAnswer: 3,
    explanation: '例文の「の」は「雨が降る日」と言い換えられ、主語を表しています。「母の作った料理」も「母が作った料理」と言い換えられます。「私の本」は持ち主、「走るの」「赤いの」は「こと」「もの」の代わりです。',
    shortCut: '「の」を「が」に置き換えて、意味が通るものを探します。',
    commonMistakes: '「私の本」の「の」が最もよく見る形なので選びがちですが、「私が本」とは言えません。',
    targetSeconds: 40, tags: ['文法', '助詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-013', examType: 'spi3', category: 'verbal', subCategory: '空欄補充',
    difficulty: 1, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n「彼は毎日の練習を欠かさなかった。（　　）、本番では実力を出し切れなかった。」',
    choices: ['だから', 'つまり', 'しかし', 'たとえば'],
    correctAnswer: 2,
    explanation: '前の文（練習を続けた）から予想される結果と、後ろの文（実力を出せなかった）が逆になっています。逆の内容をつなぐ「しかし」が入ります。',
    shortCut: '前後の文が「予想どおり」か「予想と逆」かを先に判断します。',
    commonMistakes: '「だから」は、前の文が後ろの文の理由になるときに使います。',
    targetSeconds: 25, tags: ['接続詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-014', examType: 'spi3', category: 'verbal', subCategory: '文の並べ替え',
    difficulty: 2, questionType: 'single',
    questionText: 'ア〜エを並べ替えて文を完成させるとき、2番目にくるものはどれか。\n「今年の夏は、［1］［2］［3］［4］。」\nア　暑く\nイ　ほど\nウ　去年\nエ　ならなかった',
    choices: ['ア', 'イ', 'ウ', 'エ'],
    correctAnswer: 1,
    explanation: '「去年（ウ）／ほど（イ）／暑く（ア）／ならなかった（エ）」となります。2番目は「イ」です。',
    shortCut: '文の終わりになれるのは「ならなかった」だけです。後ろから決めます。',
    commonMistakes: '問われている順番（2番目）を取り違えないようにします。',
    targetSeconds: 40, tags: ['文法', '並べ替え'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-015', examType: 'spi3', category: 'verbal', subCategory: '熟語の成り立ち',
    difficulty: 1, questionType: 'single',
    questionText: '熟語「増減」の成り立ちとして、最も適切なものはどれか。',
    choices: ['似た意味の漢字を重ねている', '反対の意味の漢字を重ねている', '前の漢字が後ろの漢字を修飾している', '動詞のあとに目的語がきている'],
    correctAnswer: 1,
    explanation: '「増える」と「減る」は反対の意味です。「高低」「売買」と同じ成り立ちです。',
    shortCut: '2つの漢字を別々に訓読みして、意味を比べます。',
    commonMistakes: 'どちらも数量の変化を表すため「似た意味」と考えがちですが、向きが反対です。',
    targetSeconds: 20, tags: ['熟語'], figureData: null, sourceType: 'original'
  },

  /* ================= SPI3：非言語 ================= */
  {
    id: 'spi3-nonverbal-017', examType: 'spi3', category: 'nonverbal', subCategory: '損益算',
    difficulty: 3, questionType: 'single',
    questionText: '定価1,500円の品物を2割引で売ったところ、原価の20%にあたる利益が出た。原価はいくらか。',
    choices: ['900円', '960円', '1,000円', '1,200円'],
    correctAnswer: 2,
    explanation: '売値は 1,500 × 0.8 = 1,200円。これが原価の1.2倍にあたるので、原価は 1,200 ÷ 1.2 = 1,000円です。',
    shortCut: '売値を先に出し、「売値 = 原価 × 1.2」から割り算で戻します。',
    commonMistakes: '1,200 × 0.8 = 960円とする誤りが多いです。利益は原価に対する割合なので、割り算で求めます。',
    targetSeconds: 70, tags: ['損益算', '割合'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-018', examType: 'spi3', category: 'nonverbal', subCategory: '速さ（出会い）',
    difficulty: 2, questionType: 'single',
    questionText: '1.8km離れた2地点から、Aさんは分速70m、Bさんは分速50mで、向かい合って同時に歩き始めた。2人が出会うのは何分後か。',
    choices: ['12分後', '15分後', '18分後', '90分後'],
    correctAnswer: 1,
    explanation: '2人は1分間に 70 + 50 = 120m ずつ近づきます。1,800 ÷ 120 = 15分後です。',
    shortCut: '向かい合うときは速さを足し、追いかけるときは速さを引きます。',
    commonMistakes: '速さの差 20m で割って90分としないようにします。kmをmに直すことも忘れやすいです。',
    targetSeconds: 60, tags: ['速さ', '旅人算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-019', examType: 'spi3', category: 'nonverbal', subCategory: '速さ（平均の速さ）',
    difficulty: 3, questionType: 'single',
    questionText: '120km離れた2地点の間を、行きは時速60km、帰りは時速40kmで往復した。往復の平均の速さは時速何kmか。',
    choices: ['時速45km', '時速48km', '時速50km', '時速52km'],
    correctAnswer: 1,
    explanation: '行きは 120 ÷ 60 = 2時間、帰りは 120 ÷ 40 = 3時間。往復240kmを5時間で進んだので、240 ÷ 5 = 時速48kmです。',
    shortCut: '平均の速さは「全体の距離 ÷ 全体の時間」で求めます。',
    commonMistakes: '(60 + 40) ÷ 2 = 50 としてしまう誤りが多いです。遅い速さで走る時間のほうが長くなります。',
    targetSeconds: 70, tags: ['速さ', '平均'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-020', examType: 'spi3', category: 'nonverbal', subCategory: '推論（対応）',
    difficulty: 2, questionType: 'single',
    questionText: 'A、B、Cの3人が、赤、青、黄の帽子を1つずつ、重ならないようにかぶっている。Aは赤ではない。Bは赤でも青でもない。Cの帽子は何色か。',
    choices: ['赤', '青', '黄', 'これだけでは決まらない'],
    correctAnswer: 0,
    explanation: 'Bは赤でも青でもないので黄です。Aは赤ではなく、黄はBなので青です。残ったCは赤です。',
    shortCut: '条件が多い人（ここではB）から先に決めます。',
    commonMistakes: 'Aの条件から考え始めると、青か黄か決まらず手が止まります。',
    targetSeconds: 50, tags: ['推論', '対応'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-021', examType: 'spi3', category: 'nonverbal', subCategory: '推論（平均）',
    difficulty: 2, questionType: 'single',
    questionText: 'X、Y、Zの3人のテストの平均点は70点で、XとYの2人の平均点は65点だった。Zは何点か。',
    choices: ['70点', '75点', '80点', '85点'],
    correctAnswer: 2,
    explanation: '3人の合計は 70 × 3 = 210点。XとYの合計は 65 × 2 = 130点。Zは 210 − 130 = 80点です。',
    shortCut: '平均は、人数を掛けて合計に直してから計算します。',
    commonMistakes: '70 + (70 − 65) = 75点とする誤りがあります。差の5点は2人分あるので、10点上乗せになります。',
    targetSeconds: 50, tags: ['推論', '平均'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-022', examType: 'spi3', category: 'nonverbal', subCategory: '順列',
    difficulty: 3, questionType: 'single',
    questionText: 'A、B、C、D、Eの5人が横一列に並ぶ。AとBが隣り合う並び方は何通りあるか。',
    choices: ['24通り', '48通り', '60通り', '120通り'],
    correctAnswer: 1,
    explanation: 'AとBを1つのかたまりと考えると、4つのものの並べ方は 4 × 3 × 2 × 1 = 24通り。かたまりの中でAとBの順番が2通りあるので、24 × 2 = 48通りです。',
    shortCut: '「隣り合う」ときは、まとめて1人とみなしてから、中の並び順を掛けます。',
    commonMistakes: 'かたまりの中の入れ替え（AB と BA）を忘れて24通りとする誤りが多いです。',
    targetSeconds: 70, tags: ['場合の数', '順列'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-023', examType: 'spi3', category: 'nonverbal', subCategory: '組み合わせ',
    difficulty: 1, questionType: 'single',
    questionText: '8人の中から、掃除当番を3人選ぶ。選び方は何通りあるか。',
    choices: ['24通り', '56通り', '112通り', '336通り'],
    correctAnswer: 1,
    explanation: '8 × 7 × 6 = 336 を、3人の並べ方 3 × 2 × 1 = 6 で割ります。336 ÷ 6 = 56通りです。',
    shortCut: '役割の区別がないときは、順列を「選ぶ人数の並べ方」で割ります。',
    commonMistakes: '336通りは、3人に順番や役割の区別がある場合の数です。',
    targetSeconds: 50, tags: ['場合の数', '組み合わせ'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-024', examType: 'spi3', category: 'nonverbal', subCategory: '確率',
    difficulty: 2, questionType: 'single',
    questionText: '2個のサイコロを同時に投げるとき、出た目の和が8になる確率はどれか。',
    choices: ['1/9', '5/36', '1/6', '2/9'],
    correctAnswer: 1,
    explanation: '目の出方は全部で 6 × 6 = 36通り。和が8になるのは (2, 6)、(3, 5)、(4, 4)、(5, 3)、(6, 2) の5通りなので、5/36 です。',
    shortCut: '片方の目を2から6まで順に決めて、もう片方を書き出します。',
    commonMistakes: '(4, 4) を2回数えて 6/36 = 1/6 とする誤りがあります。同じ目の組は1通りです。',
    targetSeconds: 60, tags: ['確率', 'サイコロ'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-025', examType: 'spi3', category: 'nonverbal', subCategory: '確率',
    difficulty: 2, questionType: 'single',
    questionText: '1枚のコインを3回投げるとき、少なくとも1回は表が出る確率はどれか。',
    choices: ['1/2', '3/4', '7/8', '1/8'],
    correctAnswer: 2,
    explanation: '3回とも裏になる確率は 1/2 × 1/2 × 1/2 = 1/8。「少なくとも1回は表」はその反対なので、1 − 1/8 = 7/8 です。',
    shortCut: '「少なくとも1回」は、「1回も起こらない」確率を1から引きます。',
    commonMistakes: '1/8 は「3回とも裏」の確率です。最後に1から引くのを忘れないようにします。',
    targetSeconds: 50, tags: ['確率', '余事象'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-026', examType: 'spi3', category: 'nonverbal', subCategory: '集合',
    difficulty: 1, questionType: 'single',
    questionText: '50人のうち、毎日朝食をとる人は35人、週に1回以上運動をする人は20人、その両方に当てはまる人は12人だった。朝食はとるが運動はしない人は何人か。',
    choices: ['8人', '15人', '23人', '27人'],
    correctAnswer: 2,
    explanation: '朝食をとる35人から、運動もする12人を引きます。35 − 12 = 23人です。',
    shortCut: '問われている部分だけを見ます。全体の50人や運動する20人は使いません。',
    commonMistakes: '使わない数字まで計算に入れてしまう誤りがあります。円を2つ描いて確かめます。',
    targetSeconds: 40, tags: ['集合'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-027', examType: 'spi3', category: 'nonverbal', subCategory: '割合と比',
    difficulty: 2, questionType: 'single',
    questionText: 'ある講座に、定員の120%にあたる84人の応募があった。この講座の定員は何人か。',
    choices: ['64人', '67人', '70人', '100人'],
    correctAnswer: 2,
    explanation: '定員 × 1.2 = 84 なので、定員は 84 ÷ 1.2 = 70人です。',
    shortCut: '「〜にあたる」の前にある割合で、数を割ります。',
    commonMistakes: '84 × 0.8 = 67.2 として67人にしてしまう誤りがあります。20%増やす前の数は、0.8倍では求められません。',
    targetSeconds: 45, tags: ['割合'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-028', examType: 'spi3', category: 'nonverbal', subCategory: '仕事算',
    difficulty: 2, questionType: 'single',
    questionText: '空の水槽を満水にするのに、A管だけでは20分、B管だけでは30分かかる。両方の管を同時に使うと、何分で満水になるか。',
    choices: ['10分', '12分', '15分', '25分'],
    correctAnswer: 1,
    explanation: '水槽の容量を60とすると、A管は1分に3、B管は1分に2入れます。合わせて1分に5なので、60 ÷ 5 = 12分です。',
    shortCut: '全体を、20と30の最小公倍数の60と置きます。',
    commonMistakes: '時間の平均 (20 + 30) ÷ 2 = 25分としないようにします。2本使えば、1本のときより必ず速くなります。',
    targetSeconds: 60, tags: ['仕事算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-029', examType: 'spi3', category: 'nonverbal', subCategory: '料金の割引',
    difficulty: 1, questionType: 'single',
    questionText: 'ある商品は1個200円で、10個を超えた分は1個150円になる。16個買うと、代金はいくらか。',
    choices: ['2,400円', '2,900円', '3,000円', '3,200円'],
    correctAnswer: 1,
    explanation: '10個までは 200 × 10 = 2,000円。超えた6個は 150 × 6 = 900円。合計は 2,900円です。',
    shortCut: '「10個まで」と「超えた分」に分けて計算します。',
    commonMistakes: '16個すべてを150円で計算して2,400円としないようにします。',
    targetSeconds: 45, tags: ['割引', '料金'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-030', examType: 'spi3', category: 'nonverbal', subCategory: '代金の精算',
    difficulty: 1, questionType: 'single',
    questionText: 'AさんとBさんが、友人への贈り物を用意した。Aさんがプレゼント代8,000円を、Bさんが花代2,000円を支払った。費用を2人で同じ額ずつ負担するには、BさんはAさんにいくら渡せばよいか。',
    choices: ['2,000円', '3,000円', '4,000円', '5,000円'],
    correctAnswer: 1,
    explanation: '費用の合計は10,000円で、1人あたり5,000円です。Bさんは2,000円を払っているので、5,000 − 2,000 = 3,000円を渡します。',
    shortCut: '2人のときは、支払額の差の半分でも求められます。(8,000 − 2,000) ÷ 2 = 3,000円。',
    commonMistakes: '1人あたりの負担額5,000円を、そのまま渡す額としないようにします。',
    targetSeconds: 45, tags: ['精算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-031', examType: 'spi3', category: 'nonverbal', subCategory: '表の読み取り',
    difficulty: 2, questionType: 'single',
    questionText: '表は、ある調査の年代別の回答者数と、そのうち「賛成」と答えた人数である。回答者全体に占める「賛成」の割合は何%か。',
    choices: ['50%', '51%', '52%', '55%'],
    correctAnswer: 1,
    explanation: '回答者の合計は 80 + 120 + 100 = 300人。賛成の合計は 48 + 60 + 45 = 153人。153 ÷ 300 = 51% です。',
    shortCut: '全体の割合は、人数を合計してから割ります。',
    commonMistakes: '年代ごとの割合（60%、50%、45%）を平均して約52%とする誤りがあります。回答者数が年代で違うため、単純な平均は使えません。',
    targetSeconds: 70, tags: ['表', '割合'], figureData: TABLE_SURVEY, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-032', examType: 'spi3', category: 'nonverbal', subCategory: '鶴亀算',
    difficulty: 2, questionType: 'single',
    questionText: '50円切手と80円切手を合わせて15枚買ったところ、代金は990円だった。80円切手は何枚買ったか。',
    choices: ['6枚', '7枚', '8枚', '9枚'],
    correctAnswer: 2,
    explanation: '15枚すべてが50円切手なら 750円で、実際より 240円少なくなります。1枚を80円切手に替えるごとに30円増えるので、240 ÷ 30 = 8枚です。',
    shortCut: '全部を安いほうと仮定し、実際との差を「1枚あたりの差」で割ります。',
    commonMistakes: '求めた8枚が、どちらの切手の枚数かを取り違えないようにします。50円切手は7枚です。',
    targetSeconds: 60, tags: ['鶴亀算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-nonverbal-033', examType: 'spi3', category: 'nonverbal', subCategory: '濃度',
    difficulty: 3, questionType: 'single',
    questionText: '濃度10%の食塩水300gに水を加えて、濃度6%の食塩水にしたい。水を何g加えればよいか。',
    choices: ['120g', '180g', '200g', '500g'],
    correctAnswer: 2,
    explanation: '食塩の量は 300 × 0.1 = 30g で、水を加えても変わりません。30g が6%にあたる食塩水は 30 ÷ 0.06 = 500g。加える水は 500 − 300 = 200g です。',
    shortCut: '水を加える問題では「食塩の量は変わらない」ことを使います。',
    commonMistakes: '500g は、できあがった食塩水全体の重さです。加える水の量は、そこから300gを引きます。',
    targetSeconds: 70, tags: ['濃度'], figureData: null, sourceType: 'original'
  },

  /* ================= SPI3：英語 ================= */
  {
    id: 'spi3-english-008', examType: 'spi3', category: 'english', subCategory: '同意語',
    difficulty: 1, questionType: 'single',
    questionText: '"purchase" と最も意味が近い語はどれか。',
    choices: ['sell', 'buy', 'borrow', 'choose'],
    correctAnswer: 1,
    explanation: '"purchase" は「購入する」という意味で、"buy" が最も近い語です。sell は「売る」、borrow は「借りる」、choose は「選ぶ」です。',
    shortCut: '"purchase" は "buy" のあらたまった言い方、と組で覚えます。',
    commonMistakes: '売り買いの場面を思い浮かべて、反対の "sell" を選ばないようにします。',
    targetSeconds: 20, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-009', examType: 'spi3', category: 'english', subCategory: '反意語',
    difficulty: 2, questionType: 'single',
    questionText: '"permanent" と反対の意味をもつ語はどれか。',
    choices: ['temporary', 'personal', 'constant', 'present'],
    correctAnswer: 0,
    explanation: '"permanent" は「永久の、ずっと続く」、"temporary" は「一時的な」で反対の意味です。constant は「絶えず続く」で似た意味、personal は「個人の」、present は「現在の」です。',
    shortCut: '"permanent job（正規の仕事）" と "temporary job（臨時の仕事）" の組で覚えます。',
    commonMistakes: '似た意味の "constant" を選ばないようにします。',
    targetSeconds: 20, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-010', examType: 'spi3', category: 'english', subCategory: '空欄補充',
    difficulty: 2, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n"I\'m looking forward to (   ) you again."',
    choices: ['see', 'saw', 'seen', 'seeing'],
    correctAnswer: 3,
    explanation: '"look forward to" の "to" は前置詞なので、後ろには名詞か動名詞（-ing形）がきます。"seeing" が入ります。',
    shortCut: '"look forward to -ing" を1つのかたまりとして覚えます。',
    commonMistakes: '"to" の後ろなので動詞の原形 "see" を選びがちです。この "to" は不定詞の to ではありません。',
    targetSeconds: 25, tags: ['文法', '動名詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-011', examType: 'spi3', category: 'english', subCategory: '英英辞典',
    difficulty: 2, questionType: 'single',
    questionText: '次の説明に最も合う語はどれか。\n"to say that you are sorry for something you have done"',
    choices: ['appreciate', 'apologize', 'complain', 'promise'],
    correctAnswer: 1,
    explanation: '「自分のしたことについて、すまないと言うこと」は "apologize（謝る）" です。appreciate は「感謝する」、complain は「不満を言う」、promise は「約束する」です。',
    shortCut: '説明文の "sorry" に注目します。',
    commonMistakes: 'つづりが似ている "appreciate" と取り違えないようにします。',
    targetSeconds: 25, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-012', examType: 'spi3', category: 'english', subCategory: '誤文訂正',
    difficulty: 3, questionType: 'single',
    questionText: '次の文で、誤りを含む部分はどれか。\n"Each of the students (A) have (B) to submit a report (C) by Friday, and it must be (D) written in English."',
    choices: ['(A) have', '(B) to submit', '(C) by Friday', '(D) written'],
    correctAnswer: 0,
    explanation: '主語の中心は "Each（それぞれ）" で、単数として扱います。"have" ではなく "has" が正しい形です。',
    shortCut: 'each、every、either が主語のときは、動詞を単数の形にします。',
    commonMistakes: 'すぐ前の "students" につられて、複数の形 "have" を正しいと判断しがちです。',
    targetSeconds: 40, tags: ['文法', '主語と動詞'], figureData: null, sourceType: 'original'
  },

  /* ================= SPI3：構造的把握力 ================= */
  {
    id: 'spi3-structure-003', examType: 'spi3', category: 'structure', subCategory: '非言語の構造',
    difficulty: 2, questionType: 'single',
    questionText: '次の例と、解き方の構造が最も似ている問題はどれか。\n例：「濃度5%の食塩水200gに含まれる食塩は何gか。」',
    choices: ['240kmの道のりを時速60kmで進むと、何時間かかるか。', '3回のテストが60点、70点、80点のとき、平均は何点か。', '2つの数の和が20、差が4のとき、大きいほうの数はいくつか。', '定価800円の品物の15%にあたる金額はいくらか。'],
    correctAnswer: 3,
    explanation: '例は 200 × 0.05 で、「全体の量 × 割合」で求めます。「定価800円の15%」も 800 × 0.15 で同じ構造です。ほかは、割り算（道のり ÷ 速さ）、平均、和と差の問題です。',
    shortCut: '問題の題材ではなく、式の形（掛け算か割り算か、何と何を使うか）で比べます。',
    commonMistakes: '題材が似ているかどうかで選ばないようにします。食塩水と値段でも、式の形は同じです。',
    targetSeconds: 60, tags: ['構造把握'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-structure-004', examType: 'spi3', category: 'structure', subCategory: '言語の構造',
    difficulty: 2, questionType: 'single',
    questionText: '次の例と、前半と後半の関係が同じものはどれか。\n例：「大雨が降ったので、試合は中止になった。」',
    choices: ['兄は背が高いが、弟は低い。', '寝坊したため、いつもの電車に乗り遅れた。', '明日晴れれば、公園へ出かける。', '果物、たとえばりんごやみかんが好きだ。'],
    correctAnswer: 1,
    explanation: '例は「原因 → 結果」の関係です。「寝坊した（原因）ため、乗り遅れた（結果）」が同じです。ほかは、対比、条件、例示の関係です。',
    shortCut: '前半と後半の関係に「原因と結果」「対比」「条件」「例示」などの名前をつけて比べます。',
    commonMistakes: '「晴れれば出かける」は、まだ起きていない条件です。すでに起きた原因とは違います。',
    targetSeconds: 50, tags: ['構造把握'], figureData: null, sourceType: 'original'
  },

  /* ================= 玉手箱 ================= */
  {
    id: 'tamatebako-numerical-005', examType: 'tamatebako', category: 'numerical', subCategory: '四則逆算',
    difficulty: 1, questionType: 'single',
    questionText: '□に入る数はどれか。\n□ × 12 = 180 ÷ 3',
    choices: ['4', '5', '6', '15'],
    correctAnswer: 1,
    explanation: '右辺は 180 ÷ 3 = 60。□ × 12 = 60 なので、□ = 60 ÷ 12 = 5 です。',
    shortCut: '計算できる側（右辺）を先に1つの数にします。',
    commonMistakes: '180 ÷ 12 = 15 を答えにしないようにします。右辺の「÷ 3」が残っています。',
    targetSeconds: 15, tags: ['四則逆算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-006', examType: 'tamatebako', category: 'numerical', subCategory: '四則逆算',
    difficulty: 1, questionType: 'single',
    questionText: '□に入る数はどれか。\n0.25 × □ = 15',
    choices: ['3.75', '40', '60', '75'],
    correctAnswer: 2,
    explanation: '0.25 は 1/4 です。□ の 1/4 が 15 なので、□ = 15 × 4 = 60 です。',
    shortCut: '0.25 = 1/4、0.5 = 1/2、0.125 = 1/8 は、分数に直すと速く計算できます。',
    commonMistakes: '15 × 0.25 = 3.75 としないようにします。□を求めるときは割り算です。',
    targetSeconds: 15, tags: ['四則逆算', '小数'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-007', examType: 'tamatebako', category: 'numerical', subCategory: '四則逆算',
    difficulty: 2, questionType: 'single',
    questionText: '□に入る数はどれか。\n□ ÷ 4 + 7 = 19',
    choices: ['3', '48', '69', '104'],
    correctAnswer: 1,
    explanation: '□ ÷ 4 = 19 − 7 = 12。□ = 12 × 4 = 48 です。',
    shortCut: '□から遠い計算（+ 7）から順に、逆の計算で戻します。',
    commonMistakes: '先に 19 × 4 を計算して、(76 − 7) = 69 としないようにします。戻す順番が逆です。',
    targetSeconds: 20, tags: ['四則逆算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-008', examType: 'tamatebako', category: 'numerical', subCategory: '図表の読み取り',
    difficulty: 1, questionType: 'single',
    questionText: '表から、製品Cの売上はいくらか。',
    choices: ['200万円', '280万円', '320万円', '400万円'],
    correctAnswer: 2,
    explanation: '売上の合計800万円の40%なので、800 × 0.4 = 320万円です。',
    shortCut: '10%（80万円）を先に出して、4倍します。',
    commonMistakes: '構成比の数字「40」を、そのまま金額と読み違えないようにします。',
    targetSeconds: 30, tags: ['表', '構成比'], figureData: TABLE_SHARE, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-009', examType: 'tamatebako', category: 'numerical', subCategory: '図表の読み取り',
    difficulty: 2, questionType: 'single',
    questionText: '表から、製品Aの売上は、製品Bの売上より何万円多いか。',
    choices: ['10万円', '80万円', '100万円', '280万円'],
    correctAnswer: 1,
    explanation: '構成比の差は 35 − 25 = 10ポイント。800万円の10%なので、80万円です。',
    shortCut: '2つの売上を別々に出さず、構成比の差を先に求めます。',
    commonMistakes: '構成比の差「10」を、そのまま10万円としないようにします。',
    targetSeconds: 40, tags: ['表', '構成比'], figureData: TABLE_SHARE, sourceType: 'original'
  },
  {
    id: 'tamatebako-numerical-010', examType: 'tamatebako', category: 'numerical', subCategory: '表の空欄推測',
    difficulty: 2, questionType: 'single',
    questionText: '表の「？」に入る数値として、最も適切と推測できるものはどれか。',
    choices: ['720万円', '750万円', '780万円', '900万円'],
    correctAnswer: 2,
    explanation: 'どの店舗も、売場面積1㎡あたりの月間売上が3万円です。260㎡では 260 × 3 = 780万円と推測できます。',
    shortCut: '売上 ÷ 面積が一定かどうかを、最初に確かめます。',
    commonMistakes: 'これまでの増え方（150万円ずつ）をそのまま足して750万円としないようにします。面積の増え方が60㎡に変わっています。',
    targetSeconds: 50, tags: ['表', '推測'], figureData: TABLE_AREA, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-007', examType: 'tamatebako', category: 'verbal', subCategory: '論理的読解',
    difficulty: 2, questionType: 'judge',
    passage: PASSAGE_CAFE,
    questionText: '「この喫茶店は、先月より前は、朝7時より遅い時間に開店していた。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 0,
    explanation: '本文に「開店時間を朝7時に早めた」とあります。早めたということは、それまでは7時より遅く開店していたことになります。',
    shortCut: '「早めた」「増やした」などの変化を表す言葉から、変化の前の状態を読み取ります。',
    commonMistakes: '以前の開店時間が書かれていないので「判断できない」としがちです。何時だったかは分かりませんが、7時より遅かったことは分かります。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-008', examType: 'tamatebako', category: 'verbal', subCategory: '論理的読解',
    difficulty: 2, questionType: 'judge',
    passage: PASSAGE_CAFE,
    questionText: '「この喫茶店では、朝の時間帯の売上が、昼の時間帯の売上より多い。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 2,
    explanation: '本文は、開店直後に会社員の利用が多いと述べているだけで、売上や、昼の時間帯との比較には触れていません。',
    shortCut: '比べる相手（ここでは昼の時間帯）が本文に出てこなければ、判断できません。',
    commonMistakes: '「利用が多い」から「売上が多い」と推測しないようにします。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-english-004', examType: 'tamatebako', category: 'english', subCategory: '論理的読解',
    difficulty: 1, questionType: 'judge',
    passage: PASSAGE_MUSEUM,
    questionText: '"A ten-year-old child must pay to enter the museum."',
    choices: JUDGE_CHOICES,
    correctAnswer: 1,
    explanation: '本文に「12歳未満の子どもは入場無料」とあります。10歳の子どもは無料なので、「料金を払わなければならない」は誤りです。',
    shortCut: '数字（年齢、曜日、金額）が出てきたら、本文の条件と照らし合わせます。',
    commonMistakes: '"under twelve" は「12歳未満」です。10歳は当てはまります。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },

  /* ================= Web-CAB／CAB ================= */
  {
    id: 'cab-reverse-calc-003', examType: 'cab', category: 'reverse-calc', subCategory: '四則逆算',
    difficulty: 2, questionType: 'single',
    questionText: '□に入る数はどれか。\n36 ÷ □ = 4.5',
    choices: ['6', '8', '9', '162'],
    correctAnswer: 1,
    explanation: '□ = 36 ÷ 4.5 = 8 です。4.5 × 8 = 36 で確かめられます。',
    shortCut: '割る数が□のときは、「割られる数 ÷ 答え」で求めます。',
    commonMistakes: '36 × 4.5 = 162 としないようにします。',
    targetSeconds: 15, tags: ['四則逆算', '小数'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-reverse-calc-004', examType: 'cab', category: 'reverse-calc', subCategory: '四則逆算',
    difficulty: 2, questionType: 'single',
    questionText: '□に入る数はどれか。\n(□ + 15) × 3 = 96',
    choices: ['17', '27', '32', '47'],
    correctAnswer: 0,
    explanation: '□ + 15 = 96 ÷ 3 = 32。□ = 32 − 15 = 17 です。',
    shortCut: 'かっこの外の計算（× 3）から先に戻します。',
    commonMistakes: '途中の 32 を答えにしないようにします。15を引くところまで進めます。',
    targetSeconds: 20, tags: ['四則逆算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-mental-003', examType: 'cab', category: 'mental', subCategory: '暗算（概算）',
    difficulty: 1, questionType: 'single',
    questionText: '49 × 51 の答えに最も近いものはどれか。暗算で求めること。',
    choices: ['2,000', '2,500', '3,000', '3,500'],
    correctAnswer: 1,
    explanation: 'どちらも50とみると 50 × 50 = 2,500 です。実際の値は 2,499 です。',
    shortCut: '(50 − 1) × (50 + 1) = 2,500 − 1 と考えることもできます。',
    commonMistakes: '筆算のように1けたずつ計算すると時間がかかります。',
    targetSeconds: 10, tags: ['暗算', '概算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-mental-004', examType: 'cab', category: 'mental', subCategory: '暗算（概算）',
    difficulty: 1, questionType: 'single',
    questionText: '6,020 − 2,985 の答えに最も近いものはどれか。暗算で求めること。',
    choices: ['2,000', '3,000', '4,000', '5,000'],
    correctAnswer: 1,
    explanation: '6,000 − 3,000 = 3,000 とみます。実際の値は 3,035 です。',
    shortCut: '2,985 を 3,000 にして引き、あとで15を足すと、正確な値も出せます。',
    commonMistakes: '千の位だけを見て 6 − 2 = 4 とし、4,000 を選ばないようにします。2,985 はほぼ 3,000 です。',
    targetSeconds: 10, tags: ['暗算', '概算'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-command-003', examType: 'cab', category: 'command', subCategory: '命令の適用',
    difficulty: 2, questionType: 'single',
    questionText: '並び「A B C D」に、命令を「入」→「反」の順に実行した。結果の並びはどれか。',
    choices: ['D C B A', 'D C A B', 'B A D C', 'C D A B'],
    correctAnswer: 1,
    explanation: '「入」で1番目と2番目を入れ替えると「B A C D」。次に「反」で左右逆にすると「D C A B」です。',
    shortCut: '命令を1つ実行するたびに、結果を書き出してから次へ進みます。',
    commonMistakes: '「反」だけを実行した「D C B A」を選ばないようにします。',
    targetSeconds: 40, tags: ['命令表'], figureData: TABLE_COMMANDS, sourceType: 'original'
  },
  {
    id: 'cab-command-004', examType: 'cab', category: 'command', subCategory: '命令の適用',
    difficulty: 3, questionType: 'single',
    questionText: '並び「1 2 3 4 5」に、命令を「先」→「入」→「反」の順に実行した。結果の並びはどれか。',
    choices: ['5 4 3 2', '5 4 2 3', '4 5 2 3', '5 4 3 1'],
    correctAnswer: 1,
    explanation: '「先」で先頭の1を取り除くと「2 3 4 5」。「入」で1番目と2番目を入れ替えると「3 2 4 5」。「反」で左右逆にすると「5 4 2 3」です。',
    shortCut: '3つの命令でも、1つずつ順番に書き出せば確実です。',
    commonMistakes: '「入」は、その時点での1番目と2番目を入れ替えます。元の並びの1番目と2番目ではありません。',
    targetSeconds: 50, tags: ['命令表'], figureData: TABLE_COMMANDS, sourceType: 'original'
  },
  {
    id: 'cab-cipher-003', examType: 'cab', category: 'cipher', subCategory: 'かなの暗号',
    difficulty: 2, questionType: 'single',
    questionText: 'ある暗号では、「あき」を「いく」、「かさ」を「きし」と表す。この暗号で「たな」はどう表されるか。',
    choices: ['ちに', 'つぬ', 'なは', 'てね'],
    correctAnswer: 0,
    explanation: 'どの文字も、五十音の同じ行の「1つ次の文字」に変わっています（あ→い、き→く、か→き、さ→し）。た→ち、な→に なので「ちに」です。',
    shortCut: '1文字ずつ、元の文字と暗号の文字を五十音表の上で比べます。',
    commonMistakes: '次の「行」にずらして「なは」としないようにします。ずれているのは行の中です。',
    targetSeconds: 50, tags: ['暗号'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-cipher-004', examType: 'cab', category: 'cipher', subCategory: 'アルファベットの暗号',
    difficulty: 3, questionType: 'single',
    questionText: 'ある暗号では、「BAD」を「YZW」と表す。この暗号で「CAB」はどう表されるか。',
    choices: ['XZY', 'DBC', 'XYZ', 'YZX'],
    correctAnswer: 0,
    explanation: 'アルファベットを前後逆に対応させています（A↔Z、B↔Y、C↔X、D↔W）。C→X、A→Z、B→Y なので「XZY」です。',
    shortCut: 'A→Z のように最初の文字が最後の文字になっていたら、逆順の対応を疑います。',
    commonMistakes: '1文字ずつ後ろにずらす暗号と思い込み「DBC」を選ばないようにします。',
    targetSeconds: 50, tags: ['暗号'], figureData: null, sourceType: 'original'
  },

  /* ================= GAB／Web-GAB ================= */
  {
    id: 'gab-verbal-003', examType: 'gab', category: 'verbal', subCategory: '長文読解',
    difficulty: 2, questionType: 'judge',
    passage: PASSAGE_TRAIN,
    questionText: '「この制度によって、鉄道会社の収入は増えた。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 2,
    explanation: '本文は、混雑する時間帯の乗客数が減ったことと、対象路線を増やす方針を述べているだけで、収入には触れていません。',
    shortCut: '本文にない話題（ここでは収入）は、正しいとも誤りとも言えません。',
    commonMistakes: '対象路線を増やすのだから収入も増えたはずだ、と推測しないようにします。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-verbal-004', examType: 'gab', category: 'verbal', subCategory: '長文読解',
    difficulty: 1, questionType: 'judge',
    passage: PASSAGE_TRAIN,
    questionText: '「同社は、来年度にこの制度を終了する予定である。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 1,
    explanation: '本文に「対象となる路線を来年度から増やす方針である」とあります。制度を広げる方針なので、「終了する予定」は誤りです。',
    shortCut: '本文と反対の内容になっていれば「誤り」です。',
    commonMistakes: '「来年度」という言葉が本文と同じでも、その後の内容が合っているかを確かめます。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-english-003', examType: 'gab', category: 'english', subCategory: '長文読解',
    difficulty: 2, questionType: 'judge',
    passage: PASSAGE_MUSEUM,
    questionText: '"The new section about local history is the most popular part of the museum."',
    choices: JUDGE_CHOICES,
    correctAnswer: 2,
    explanation: '本文は、昨年、郷土の歴史の展示が加わったと述べているだけです。人気があるかどうかは書かれていません。',
    shortCut: '"the most" のような比較の表現は、本文に根拠があるかを確かめます。',
    commonMistakes: '新しい展示なので人気があるはずだ、と推測しないようにします。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-numerical-005', examType: 'gab', category: 'numerical', subCategory: '倍率',
    difficulty: 2, questionType: 'single',
    questionText: '表から、2022年度の営業利益は、2021年度の営業利益の何倍か。',
    choices: ['1.14倍', '1.2倍', '1.35倍', '1.4倍'],
    correctAnswer: 2,
    explanation: '54 ÷ 40 = 1.35倍です。',
    shortCut: '40の1.25倍が50、1.5倍が60です。54はその間なので、選択肢をしぼれます。',
    commonMistakes: '売上高の倍率（600 ÷ 500 = 1.2倍）と取り違えないようにします。',
    targetSeconds: 40, tags: ['表', '倍率'], figureData: TABLE_PROFIT, sourceType: 'original'
  },

  /* ================= TG-WEB ================= */
  {
    id: 'tgweb-verbal-classic-004', examType: 'tgweb', category: 'verbal-classic', subCategory: '空欄補充',
    difficulty: 3, questionType: 'single',
    questionText: '空欄に入る最も適切な語句はどれか。\n「理論は実践によって確かめられ、実践は理論によって（　　）。両者は対立するものではなく、互いを支え合う関係にある。」',
    choices: ['否定される', '不要になる', '方向づけられる', '置き換えられる'],
    correctAnswer: 2,
    explanation: '後ろの文に「互いを支え合う関係」とあります。理論が実践を助ける内容になる「方向づけられる」が入ります。ほかの選択肢は、理論が実践を打ち消す内容で、後ろの文と合いません。',
    shortCut: '空欄の後ろにある、まとめの文（支え合う関係）を手がかりにします。',
    commonMistakes: '空欄の前だけを読んで選ばないようにします。答えの手がかりは後ろにあります。',
    targetSeconds: 50, tags: ['空欄補充'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-classic-005', examType: 'tgweb', category: 'verbal-classic', subCategory: '文の並べ替え',
    difficulty: 3, questionType: 'single',
    questionText: 'ア〜エの文を、意味が通るように並べ替えたものはどれか。\nア　そのため、多くの店が深夜の営業をやめた。\nイ　この地域では、深夜の人通りが年々減っている。\nウ　しかし、営業をやめたあとも、店の売上はほとんど変わらなかった。\nエ　深夜の売上が、もともと全体のごく一部だったからである。',
    choices: ['イ → ア → ウ → エ', 'イ → ウ → ア → エ', 'ア → イ → エ → ウ', 'エ → イ → ア → ウ'],
    correctAnswer: 0,
    explanation: 'イで状況を述べ、ア「そのため」でその結果を述べます。ウ「しかし」で予想と違う事実を示し、エ「〜からである」でその理由を説明します。',
    shortCut: '「そのため」「しかし」「〜からである」は、前に文が必要です。前置きのいらないイが最初です。',
    commonMistakes: 'エの「〜からである」は、直前の文の理由を表します。ウの直後にしか置けません。',
    targetSeconds: 70, tags: ['並べ替え', '接続詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-new-005', examType: 'tgweb', category: 'verbal-new', subCategory: '同義語',
    difficulty: 1, questionType: 'single',
    questionText: '「承諾」と意味が最も近い語はどれか。',
    choices: ['承認', '了承', '伝承', '継承'],
    correctAnswer: 1,
    explanation: '「承諾」は、相手の頼みや申し出を聞き入れることです。「了承」が最も近い意味です。「承認」は正しいと認めて許すこと、「伝承」は古くからのものを受け伝えること、「継承」は受け継ぐことです。',
    shortCut: '「依頼を承諾する」のように短い文に入れて、言い換えられる語を探します。',
    commonMistakes: '「承認」は、上の立場の人や機関が正式に認めるときに使います。頼みを聞き入れる意味では「了承」が近いです。',
    targetSeconds: 12, tags: ['語彙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-new-006', examType: 'tgweb', category: 'verbal-new', subCategory: '対義語',
    difficulty: 1, questionType: 'single',
    questionText: '「需要」の対義語はどれか。',
    choices: ['消費', '必要', '供給', '生産'],
    correctAnswer: 2,
    explanation: '「需要」は求めること、「供給」は求めに応じて提供することで、対になる語です。',
    shortCut: '「需要と供給」のように、組で使う言葉として覚えます。',
    commonMistakes: '「生産」は関連する語ですが、対義語は「消費」です。',
    targetSeconds: 12, tags: ['語彙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-new-007', examType: 'tgweb', category: 'verbal-new', subCategory: 'ことわざ',
    difficulty: 1, questionType: 'single',
    questionText: '「急がば回れ」の意味として、最も適切なものはどれか。',
    choices: ['急いでいるときは、近道を探すべきだ。', '急ぐときほど、遠回りでも確実な方法をとるほうがよい。', '急いで行動すると、よい機会を逃さない。', '物事は、早く始めるほど有利になる。'],
    correctAnswer: 1,
    explanation: '危険な近道より、遠くても安全な道を行くほうが、結局は早く着くという意味です。',
    shortCut: '「回れ」は「遠回りをせよ」という意味です。',
    commonMistakes: '4つ目は「先んずれば人を制す」に近い意味です。',
    targetSeconds: 12, tags: ['ことわざ'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-new-003', examType: 'tgweb', category: 'numerical-new', subCategory: '四則逆算',
    difficulty: 1, questionType: 'single',
    questionText: '□に入る数はどれか。\n□ ÷ 0.5 = 36',
    choices: ['18', '36.5', '72', '180'],
    correctAnswer: 0,
    explanation: '□ = 36 × 0.5 = 18 です。0.5で割ることは、2を掛けることと同じなので、18 × 2 = 36 で確かめられます。',
    shortCut: '「÷ 0.5」は「× 2」と同じです。□は36の半分になります。',
    commonMistakes: '36 ÷ 0.5 = 72 としないようにします。□は割られる数です。',
    targetSeconds: 12, tags: ['四則逆算', '小数'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-new-004', examType: 'tgweb', category: 'numerical-new', subCategory: '図表の読み取り',
    difficulty: 2, questionType: 'single',
    questionText: '表から、3つの店舗を合わせた購入者数は、来客数の合計の約何%か。',
    choices: ['約20%', '約24%', '約25%', '約30%'],
    correctAnswer: 1,
    explanation: '来客数の合計は 200 + 150 + 250 = 600人。購入者数の合計は 50 + 45 + 50 = 145人。145 ÷ 600 = 約24.2% です。',
    shortCut: '600人の25%は150人です。145人はそれより少し少ないので、約24%と判断できます。',
    commonMistakes: '3つの店舗の割合（25%、30%、20%）を平均して25%としないようにします。',
    targetSeconds: 50, tags: ['表', '割合'], figureData: TABLE_SHOPS, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-009', examType: 'tgweb', category: 'numerical-classic', subCategory: '場合の数',
    difficulty: 2, questionType: 'single',
    questionText: '0、1、2、3 の数字が書かれた4枚のカードから2枚を選んで並べ、2けたの整数を作る。全部で何通りの整数ができるか。',
    choices: ['6通り', '9通り', '12通り', '16通り'],
    correctAnswer: 1,
    explanation: '十の位には0を置けないので、1、2、3 の3通り。一の位は、残りの3枚から選ぶので3通り。3 × 3 = 9通りです。',
    shortCut: '条件のある位（十の位）から先に数えます。',
    commonMistakes: '4 × 3 = 12通りとすると、「01」のように十の位が0のものまで数えてしまいます。',
    targetSeconds: 60, tags: ['場合の数'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-numerical-classic-010', examType: 'tgweb', category: 'numerical-classic', subCategory: '暗号',
    difficulty: 3, questionType: 'single',
    questionText: 'ある暗号では、「あ」を「11」、「い」を「12」、「か」を「21」、「さ」を「31」と表す。この暗号で「す」はどう表されるか。',
    choices: ['23', '32', '33', '43'],
    correctAnswer: 2,
    explanation: '十の位が「行」（あ行=1、か行=2、さ行=3）、一の位が「段」（あ段=1、い段=2、う段=3）を表しています。「す」はさ行のう段なので「33」です。',
    shortCut: '「あ」と「い」（同じ行）、「あ」と「か」（同じ段）を比べて、どちらのけたが変わるかを見ます。',
    commonMistakes: '行と段を逆に読むと、別の文字になります。「あ=11、い=12」から、一の位が段だと確かめます。',
    targetSeconds: 70, tags: ['暗号'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-english-004', examType: 'tgweb', category: 'english', subCategory: '空欄補充',
    difficulty: 1, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n"Please let me know if you have (   ) questions."',
    choices: ['any', 'much', 'every', 'a'],
    correctAnswer: 0,
    explanation: '"if" の文の中で、数えられる名詞の複数形の前に置けるのは "any" です。「何か質問があれば、お知らせください」という意味です。',
    shortCut: '後ろの名詞が複数形（questions）であることを確かめます。',
    commonMistakes: '"much" は数えられない名詞に、"every" と "a" は単数形の名詞に使います。',
    targetSeconds: 20, tags: ['文法'], figureData: null, sourceType: 'original'
  },

  /* ================= その他 ================= */
  {
    id: 'other-general-003', examType: 'other', category: 'general', subCategory: '国語',
    difficulty: 1, questionType: 'single',
    questionText: '「言う」の尊敬語はどれか。',
    choices: ['申し上げる', '申す', 'おっしゃる', '言います'],
    correctAnswer: 2,
    explanation: '「おっしゃる」は、相手の動作を高める尊敬語です。「申す」「申し上げる」は自分の動作をへりくだって言う謙譲語、「言います」は丁寧語です。',
    shortCut: '尊敬語は「相手がすること」、謙譲語は「自分がすること」に使います。',
    commonMistakes: '「申し上げる」は丁寧な印象がありますが、相手の動作には使えません。',
    targetSeconds: 15, tags: ['一般常識', '敬語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-general-004', examType: 'other', category: 'general', subCategory: '社会',
    difficulty: 1, questionType: 'single',
    questionText: '日本の中央銀行はどれか。',
    choices: ['日本銀行', '財務省', '金融庁', '日本政策金融公庫'],
    correctAnswer: 0,
    explanation: '日本の中央銀行は日本銀行です。紙幣の発行や、金融政策の運営などを行います。財務省と金融庁は国の行政機関です。',
    shortCut: '「紙幣を発行するところ」と結びつけて覚えます。',
    commonMistakes: '国の予算を扱う財務省と取り違えないようにします。',
    targetSeconds: 15, tags: ['一般常識', '経済'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-logic-003', examType: 'other', category: 'logic', subCategory: '数列',
    difficulty: 1, questionType: 'single',
    questionText: '次の数はある規則で並んでいる。「？」に入る数はどれか。\n3、6、12、24、？',
    choices: ['30', '36', '48', '72'],
    correctAnswer: 2,
    explanation: '前の数を2倍にしています。24 × 2 = 48 です。',
    shortCut: '差が一定でないときは、何倍になっているかを調べます。',
    commonMistakes: '最後の差（12）をそのまま足して36としないようにします。',
    targetSeconds: 20, tags: ['数列'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-logic-004', examType: 'other', category: 'logic', subCategory: '数列',
    difficulty: 2, questionType: 'single',
    questionText: '次の数はある規則で並んでいる。「？」に入る数はどれか。\n1、1、2、3、5、8、？',
    choices: ['11', '12', '13', '16'],
    correctAnswer: 2,
    explanation: '前の2つの数を足した数が、次の数になっています（1 + 1 = 2、1 + 2 = 3、2 + 3 = 5、3 + 5 = 8）。5 + 8 = 13 です。',
    shortCut: '差も倍率も一定でないときは、「前の2つの和」を試します。',
    commonMistakes: '最後の差（3）を足して11としないようにします。',
    targetSeconds: 30, tags: ['数列'], figureData: null, sourceType: 'original'
  }
);

checkQuestions(QUESTIONS);
