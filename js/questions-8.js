/* ==========================================================
   questions-8.js  追加の問題データ（法則性・命令表・暗号・論理・基礎知識）
   ・1問ごとに解き方のパターンが違う問題を集めています。
   ・書き方は js/questions.js のテンプレートと同じです。
   すべて学習用の独自作成です。実際の試験問題は載せません。
   ========================================================== */

/* 命令表A：並びの長さが変わる命令 */
const Q8_TABLE_CMD_A = {
  type: 'table',
  caption: '命令表',
  headers: ['命令', '内容'],
  rows: [['末', '最後の1つを取り除く'], ['回', '先頭の1つを、最後に移す'], ['倍', '先頭と同じものを、先頭にもう1つ加える']]
};

/* 命令表B：ほかの命令に働きかける命令を含む */
const Q8_TABLE_CMD_B = {
  type: 'table',
  caption: '命令表',
  headers: ['命令', '内容'],
  rows: [['足', 'すべての数に1を足す'], ['交', '最初の数と最後の数を入れ替える'], ['消', '次の命令を1つ取り消す（実行しない）'], ['全', '直前に実行した命令を、もう一度実行する']]
};

QUESTIONS.push(
  /* ================= 法則性 ================= */
  {
    id: 'cab-pattern-501', examType: 'cab', category: 'pattern', subCategory: '回転の角度が増える法則',
    difficulty: 3, questionType: 'single',
    questionText: '矢印がある法則で並んでいる。「？」に入る矢印の向きはどれか。',
    choices: ['右向きの矢印', '右上向きの矢印', '左上向きの矢印', '下向きの矢印'],
    correctAnswer: 2,
    explanation: '時計回りに回る角度が、45度、90度、135度、180度と、45度ずつ大きくなっています。次は225度回るので、右向きから225度回って左上向きになります。',
    shortCut: '隣どうしで「何度回ったか」を書き出します。回る角度そのものに規則があります。',
    commonMistakes: '毎回同じ角度だけ回ると思い込むと、規則が見つかりません。角度の変化を並べて確かめます。',
    targetSeconds: 50, tags: ['法則性', '回転'],
    figureData: {
      type: 'shapes', alt: '矢印が左から順に、上向き、右上向き、右下向き、左向き、右向き、最後が「？」',
      items: [{ shape: 'arrow', rotate: 0 }, { shape: 'arrow', rotate: 45 }, { shape: 'arrow', rotate: 135 }, { shape: 'arrow', rotate: 270 }, { shape: 'arrow', rotate: 90 }, { shape: 'question' }]
    },
    sourceType: 'original'
  },
  {
    id: 'cab-pattern-502', examType: 'cab', category: 'pattern', subCategory: '行って戻る法則',
    difficulty: 2, questionType: 'single',
    questionText: '図形がある法則で並んでいる。「？」に入る図形はどれか。',
    choices: ['白い四角', '白い丸', '白い三角', '塗りつぶした四角'],
    correctAnswer: 0,
    explanation: '「丸 → 四角 → 三角」と進んだあと、「三角 → 四角 → 丸」と来た道を戻っています。丸まで戻ったので、次はまた四角に進みます。',
    shortCut: '端（丸と三角）で折り返す動きだと気づけば、次は折り返したあとの1つ目です。',
    commonMistakes: '3つの形を順番にくり返すと考えると、4番目が合いません。4番目以降も必ず確かめます。',
    targetSeconds: 35, tags: ['法則性', '往復'],
    figureData: {
      type: 'shapes', alt: '左から順に、白い丸、白い四角、白い三角、白い四角、白い丸、最後が「？」',
      items: [{ shape: 'circle', filled: false }, { shape: 'square', filled: false }, { shape: 'triangle', filled: false }, { shape: 'square', filled: false }, { shape: 'circle', filled: false }, { shape: 'question' }]
    },
    sourceType: 'original'
  },
  {
    id: 'cab-pattern-503', examType: 'cab', category: 'pattern', subCategory: '形は2つ、塗りは3つでくり返す法則',
    difficulty: 3, questionType: 'single',
    questionText: '図形がある法則で並んでいる。「？」に入る図形はどれか。',
    choices: ['塗りつぶした三角', '塗りつぶした四角', '白い三角', '白い四角'],
    correctAnswer: 3,
    explanation: '形は「三角・四角」の2つでくり返しています。塗りは「塗り・白・白」の3つでくり返しています。6番目は、形が四角、塗りは「塗り・白・白・塗り・白・白」の6番目で白です。',
    shortCut: '塗りつぶした図形が1番目と4番目にあります。3つおきなので、次に塗りになるのは7番目です。',
    commonMistakes: '四角は「白・塗り」と来たので次も塗りだ、と形ごとに考えると間違えます。塗りは形と関係なく進んでいます。',
    targetSeconds: 45, tags: ['法則性', '周期'],
    figureData: {
      type: 'shapes', alt: '左から順に、塗りつぶした三角、白い四角、白い三角、塗りつぶした四角、白い三角、最後が「？」',
      items: [{ shape: 'triangle', filled: true }, { shape: 'square', filled: false }, { shape: 'triangle', filled: false }, { shape: 'square', filled: true }, { shape: 'triangle', filled: false }, { shape: 'question' }]
    },
    sourceType: 'original'
  },
  {
    id: 'cab-pattern-504', examType: 'cab', category: 'pattern', subCategory: '1つおきに別の法則',
    difficulty: 2, questionType: 'single',
    questionText: '図形がある法則で並んでいる。「？」に入る図形はどれか。',
    choices: ['下向きの矢印', '上向きの矢印', '塗りつぶした丸', '白い丸'],
    correctAnswer: 1,
    explanation: '1・3・5番目は丸で、塗りが「塗り・白・塗り」と入れ替わっています。2・4・6番目は矢印で、「上・下」と向きが逆になっています。6番目は矢印の番で、下の次なので上向きです。',
    shortCut: '丸と矢印を別々の列に分けて書き出します。',
    commonMistakes: '直前の図形（塗りつぶした丸）から続きを考えると迷います。「？」は矢印の列の3つ目です。',
    targetSeconds: 40, tags: ['法則性', '1つおき'],
    figureData: {
      type: 'shapes', alt: '左から順に、塗りつぶした丸、上向きの矢印、白い丸、下向きの矢印、塗りつぶした丸、最後が「？」',
      items: [{ shape: 'circle', filled: true }, { shape: 'arrow', rotate: 0 }, { shape: 'circle', filled: false }, { shape: 'arrow', rotate: 180 }, { shape: 'circle', filled: true }, { shape: 'question' }]
    },
    sourceType: 'original'
  },
  {
    id: 'cab-pattern-505', examType: 'cab', category: 'pattern', subCategory: '左右対称の法則',
    difficulty: 2, questionType: 'single',
    questionText: '6つの図形が、ある法則で並んでいる。「？」に入る図形はどれか。',
    choices: ['白い丸', '白い三角', '塗りつぶした三角', '塗りつぶした四角'],
    correctAnswer: 2,
    explanation: '真ん中を境に、左右が鏡に映したように同じ並びになっています。3番目と4番目、2番目と5番目が同じなので、6番目は1番目と同じ、塗りつぶした三角です。',
    shortCut: '真ん中の2つが同じ図形のときは、左右対称を疑います。',
    commonMistakes: 'くり返しの周期を探しても見つかりません。同じ図形が隣り合う場所に注目します。',
    targetSeconds: 35, tags: ['法則性', '対称'],
    figureData: {
      type: 'shapes', alt: '左から順に、塗りつぶした三角、白い丸、塗りつぶした四角、塗りつぶした四角、白い丸、最後が「？」',
      items: [{ shape: 'triangle', filled: true }, { shape: 'circle', filled: false }, { shape: 'square', filled: true }, { shape: 'square', filled: true }, { shape: 'circle', filled: false }, { shape: 'question' }]
    },
    sourceType: 'original'
  },
  {
    id: 'cab-pattern-506', examType: 'cab', category: 'pattern', subCategory: '振り子の法則',
    difficulty: 2, questionType: 'single',
    questionText: '矢印がある法則で並んでいる。「？」に入る矢印の向きはどれか。',
    choices: ['右向きの矢印', '左向きの矢印', '上向きの矢印', '下向きの矢印'],
    correctAnswer: 0,
    explanation: '矢印は、上を中心にして、右へ倒れて戻り、左へ倒れて戻る、という振り子のような動きをしています。「上・右・上・左・上」の次は、また右向きです。',
    shortCut: '1つおきに見ると、奇数番目はすべて上向き、偶数番目は「右・左」と入れ替わっています。',
    commonMistakes: '同じ向きに回り続けると考えると、3番目で合わなくなります。',
    targetSeconds: 35, tags: ['法則性', '回転'],
    figureData: {
      type: 'shapes', alt: '矢印が左から順に、上向き、右向き、上向き、左向き、上向き、最後が「？」',
      items: [{ shape: 'arrow', rotate: 0 }, { shape: 'arrow', rotate: 90 }, { shape: 'arrow', rotate: 0 }, { shape: 'arrow', rotate: 270 }, { shape: 'arrow', rotate: 0 }, { shape: 'question' }]
    },
    sourceType: 'original'
  },
  {
    id: 'cab-pattern-507', examType: 'cab', category: 'pattern', subCategory: '区切りを見つける法則',
    difficulty: 3, questionType: 'single',
    questionText: '図形がある法則で並んでいる。「？」に入る図形はどれか。',
    choices: ['塗りつぶした丸', '塗りつぶした四角', '白い四角', '白い丸'],
    correctAnswer: 3,
    explanation: '塗りつぶした丸を区切りと考えます。区切りの前の白い丸は、1個、2個と増えています。5番目の区切りのあとは、また白い丸が続きます。',
    shortCut: '1つだけ違う図形（塗りつぶした丸）を区切りの印と考え、区切りの間の個数を数えます。',
    commonMistakes: '塗りと白が交互に並ぶと考えると、3番目と4番目が合いません。',
    targetSeconds: 45, tags: ['法則性', '個数'],
    figureData: {
      type: 'shapes', alt: '左から順に、白い丸、塗りつぶした丸、白い丸、白い丸、塗りつぶした丸、最後が「？」',
      items: [{ shape: 'circle', filled: false }, { shape: 'circle', filled: true }, { shape: 'circle', filled: false }, { shape: 'circle', filled: false }, { shape: 'circle', filled: true }, { shape: 'question' }]
    },
    sourceType: 'original'
  },
  {
    id: 'cab-pattern-508', examType: 'cab', category: 'pattern', subCategory: '2つ1組の法則',
    difficulty: 3, questionType: 'single',
    questionText: '図形は2つで1組になって、ある法則で並んでいる。「？」に入る図形はどれか。',
    choices: ['白い丸', '白い四角', '塗りつぶした四角', '塗りつぶした丸'],
    correctAnswer: 1,
    explanation: 'どの組も、1つ目が塗り、2つ目が白です。形は、1組目が「丸・四角」、2組目が「四角・丸」と、組ごとに入れ替わっています。3組目は1組目と同じ「丸・四角」になるので、白い四角です。',
    shortCut: '2つずつ線で区切り、組の中で変わらないもの（塗り）と、組ごとに変わるもの（形の順番）を分けます。',
    commonMistakes: '1つずつ見ると、塗りと形が複雑に変わって見えます。問題文の「2つで1組」を手がかりにします。',
    targetSeconds: 50, tags: ['法則性', '組'],
    figureData: {
      type: 'shapes', alt: '左から順に、塗りつぶした丸、白い四角、塗りつぶした四角、白い丸、塗りつぶした丸、最後が「？」',
      items: [{ shape: 'circle', filled: true }, { shape: 'square', filled: false }, { shape: 'square', filled: true }, { shape: 'circle', filled: false }, { shape: 'circle', filled: true }, { shape: 'question' }]
    },
    sourceType: 'original'
  },

  /* ================= 命令表 ================= */
  {
    id: 'cab-command-501', examType: 'cab', category: 'command', subCategory: '長さが変わる命令',
    difficulty: 2, questionType: 'single',
    questionText: '並び「A B C D」に、命令を「回」→「倍」→「末」の順に実行した。結果の並びはどれか。',
    choices: ['B C D A', 'B B C D', 'A A B C', 'B B C D A'],
    correctAnswer: 1,
    explanation: '「回」で先頭のAを最後に移すと「B C D A」。「倍」で先頭のBをもう1つ加えると「B B C D A」。「末」で最後のAを取り除くと「B B C D」です。',
    shortCut: '命令ごとに、並びの個数が合っているかを確かめます（4個 → 4個 → 5個 → 4個）。',
    commonMistakes: '「倍」は、その時点での先頭を増やします。最初の並びの先頭（A）ではありません。',
    targetSeconds: 45, tags: ['命令表'], figureData: Q8_TABLE_CMD_A, sourceType: 'original'
  },
  {
    id: 'cab-command-502', examType: 'cab', category: 'command', subCategory: '途中の並びを問う',
    difficulty: 2, questionType: 'single',
    questionText: '並び「1 2 3 4 5」に、命令を「末」→「回」→「回」→「倍」の順に実行する。3つ目の命令を実行した直後の並びはどれか。',
    choices: ['2 3 4 1', '3 3 4 1 2', '4 1 2 3', '3 4 1 2'],
    correctAnswer: 3,
    explanation: '「末」で「1 2 3 4」。1回目の「回」で「2 3 4 1」。2回目の「回」で「3 4 1 2」。ここまでが3つ目の命令です。',
    shortCut: '問われているのは途中の並びです。4つ目の命令は実行しなくてかまいません。',
    commonMistakes: '最後まで実行した「3 3 4 1 2」を選ばないようにします。',
    targetSeconds: 45, tags: ['命令表'], figureData: Q8_TABLE_CMD_A, sourceType: 'original'
  },
  {
    id: 'cab-command-503', examType: 'cab', category: 'command', subCategory: '最初の並びを逆算する',
    difficulty: 3, questionType: 'single',
    questionText: 'ある並びに、命令を「倍」→「回」の順に実行したところ、「P Q R P」になった。最初の並びはどれか。',
    choices: ['P Q R', 'Q R P', 'P P Q R', 'R P Q'],
    correctAnswer: 0,
    explanation: '後ろの命令から順に戻します。「回」の前は、最後のPを先頭に戻して「P P Q R」。「倍」の前は、先頭のPを1つ減らして「P Q R」です。',
    shortCut: '逆算するときは、最後に実行した命令から、反対の操作で戻します。',
    commonMistakes: '「P P Q R」は「倍」を実行した直後の並びです。もう1つ戻します。',
    targetSeconds: 60, tags: ['命令表', '逆算'], figureData: Q8_TABLE_CMD_A, sourceType: 'original'
  },
  {
    id: 'cab-command-504', examType: 'cab', category: 'command', subCategory: '取り消しを含む命令',
    difficulty: 2, questionType: 'single',
    questionText: '並び「2 5 8」に、命令を「足」→「消」→「交」→「足」の順に実行した。結果の並びはどれか。',
    choices: ['10 7 4', '3 6 9', '4 7 10', '9 6 3'],
    correctAnswer: 2,
    explanation: '「足」で「3 6 9」。「消」が次の「交」を取り消すので、「交」は実行しません。最後の「足」で「4 7 10」です。',
    shortCut: '先に「消」の次の命令に線を引いて消してから、残りを実行します。',
    commonMistakes: '「交」を実行してしまうと「10 7 4」になります。',
    targetSeconds: 45, tags: ['命令表', '取り消し'], figureData: Q8_TABLE_CMD_B, sourceType: 'original'
  },
  {
    id: 'cab-command-505', examType: 'cab', category: 'command', subCategory: '同じ結果になる命令を選ぶ',
    difficulty: 3, questionType: 'single',
    questionText: '並び「1 2 3」に、命令を「交」→「交」の順に実行した。これと同じ結果になる命令の組はどれか。',
    choices: ['「足」→「全」', '「交」→「足」', '「消」→「交」→「交」', '「消」→「足」'],
    correctAnswer: 3,
    explanation: '「交」を2回実行すると、元の「1 2 3」に戻ります。「消」→「足」は、「足」が取り消されて何も変わらないので、同じ「1 2 3」です。「足」→「全」は「3 4 5」、「交」→「足」は「4 3 2」、「消」→「交」→「交」は「交」が1回だけ実行されて「3 2 1」です。',
    shortCut: '同じ命令を2回行うと元に戻るもの（交）に注目し、「何も変わらない組」を探します。',
    commonMistakes: '「消」→「交」→「交」は、取り消されるのは1つ目の「交」だけです。2つ目は実行されます。',
    targetSeconds: 70, tags: ['命令表', '取り消し'], figureData: Q8_TABLE_CMD_B, sourceType: 'original'
  },
  {
    id: 'cab-command-506', examType: 'cab', category: 'command', subCategory: '空欄の命令を問う',
    difficulty: 3, questionType: 'single',
    questionText: '並び「4 1 6」に、命令を「足」→（　　）→「交」の順に実行したところ、「8 3 6」になった。空欄に入る命令はどれか。',
    choices: ['全', '交', '消', 'どの命令を入れても、同じ結果になる'],
    correctAnswer: 0,
    explanation: '「足」で「5 2 7」。「全」を入れると、直前の「足」をもう一度実行して「6 3 8」。最後の「交」で「8 3 6」になります。「交」を入れると「5 2 7」、「消」を入れると最後の「交」が取り消されて「5 2 7」になり、合いません。',
    shortCut: '結果の「8 3 6」を「交」の前に戻すと「6 3 8」。最初から2ずつ増えているので、「足」が2回分必要です。',
    commonMistakes: '「消」は空欄の次の命令（交）を取り消します。前の命令は取り消しません。',
    targetSeconds: 70, tags: ['命令表', '逆算'], figureData: Q8_TABLE_CMD_B, sourceType: 'original'
  },

  /* ================= 暗号 ================= */
  {
    id: 'cab-cipher-501', examType: 'cab', category: 'cipher', subCategory: 'かなの行をずらす暗号',
    difficulty: 2, questionType: 'single',
    questionText: 'ある暗号では、「いす」を「きつ」、「おか」を「こさ」と表す。この暗号で「さけ」はどう表されるか。',
    choices: ['しこ', 'かえ', 'たせ', 'たて'],
    correctAnswer: 2,
    explanation: 'どの文字も、五十音表で同じ段のまま、1つ次の行の文字に変わっています（い→き、す→つ、お→こ、か→さ）。さ→た、け→せ なので「たせ」です。',
    shortCut: '母音（あいうえお）が変わっていないことに気づけば、行だけがずれていると分かります。',
    commonMistakes: '同じ行の中で次の文字にずらして「しこ」としないようにします。',
    targetSeconds: 50, tags: ['暗号', 'かな'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-cipher-502', examType: 'cab', category: 'cipher', subCategory: '2段階の暗号',
    difficulty: 3, questionType: 'single',
    questionText: 'ある暗号では、「TOP」を「QPU」と表す。この暗号は、文字の並びを逆にしてから、すべての文字をアルファベット順で同じ数だけずらしている。この暗号で「RED」はどう表されるか。',
    choices: ['SFE', 'EFS', 'DER', 'CDQ'],
    correctAnswer: 1,
    explanation: '「TOP」を逆にすると「POT」。「POT」と「QPU」を比べると、どの文字も1つ後ろにずれています。「RED」を逆にすると「DER」、1つ後ろにずらすと「EFS」です。',
    shortCut: '2つの操作を分けて考えます。先に逆に並べ、それから例と比べてずれを調べます。',
    commonMistakes: '逆に並べるのを忘れて「SFE」としないようにします。',
    targetSeconds: 60, tags: ['暗号', 'アルファベット'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-cipher-503', examType: 'cab', category: 'cipher', subCategory: '位置でずらす数が変わる暗号',
    difficulty: 3, questionType: 'single',
    questionText: 'ある暗号では、「BED」を「CGG」、「CAT」を「DCW」と表す。この暗号で「FOG」はどう表されるか。',
    choices: ['GPH', 'IRJ', 'HQH', 'GQJ'],
    correctAnswer: 3,
    explanation: '1文字目は1つ後ろ、2文字目は2つ後ろ、3文字目は3つ後ろにずれています（B→C、E→G、D→G）。F→G、O→Q、G→J なので「GQJ」です。',
    shortCut: '文字ごとに「いくつずれたか」を数字で書きます。1、2、3 と並べば、位置で決まる規則です。',
    commonMistakes: '1文字目だけを調べて、すべて1つずらして「GPH」としないようにします。',
    targetSeconds: 60, tags: ['暗号', 'アルファベット'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-cipher-504', examType: 'cab', category: 'cipher', subCategory: '文字を入れ替える暗号',
    difficulty: 2, questionType: 'single',
    questionText: 'ある暗号では、「ひまわり」を「まひりわ」と表す。この暗号で「かみなり」はどう表されるか。',
    choices: ['みかりな', 'りなみか', 'なりかみ', 'みかなり'],
    correctAnswer: 0,
    explanation: '文字そのものは変わらず、1文字目と2文字目、3文字目と4文字目を入れ替えています。「かみ・なり」は「みか・りな」になります。',
    shortCut: '使われている文字が同じなら、並べ替えの暗号です。どの位置がどこへ動いたかを調べます。',
    commonMistakes: '全体を逆に並べた「りなみか」と取り違えないようにします。',
    targetSeconds: 40, tags: ['暗号', '並べ替え'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-cipher-505', examType: 'cab', category: 'cipher', subCategory: 'くり返しの回数で表す暗号',
    difficulty: 3, questionType: 'single',
    questionText: 'ある暗号では、「あ」を「1」、「い」を「11」、「か」を「2」、「く」を「222」、「た」を「4」と表す。この暗号で「そら」はどう表されるか。',
    choices: ['35 91', '33333 9', '3333 9', '33333 8'],
    correctAnswer: 1,
    explanation: '数字は行を表し（あ行=1、か行=2、さ行=3、た行=4…）、同じ数字を並べる回数が、その行の何番目の文字かを表します。「そ」はさ行の5番目なので「33333」、「ら」はら行（9番目の行）の1番目なので「9」です。',
    shortCut: '「あ・か・さ・た・な・は・ま・や・ら」と数えて、行の番号を出します。',
    commonMistakes: '「や行」を数え忘れて、ら行を8としないようにします。',
    targetSeconds: 70, tags: ['暗号', 'かな'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-cipher-506', examType: 'cab', category: 'cipher', subCategory: '複数の例から規則を見つける暗号',
    difficulty: 3, questionType: 'single',
    questionText: 'ある暗号では、「CAB」を「6」、「BAD」を「7」、「ACE」を「9」と表す。この暗号で「BEE」はどう表されるか。',
    choices: ['10', '50', '12', '255'],
    correctAnswer: 2,
    explanation: '各文字をアルファベットの順番の数字（A=1、B=2、C=3…）に直し、足し合わせています。BAD は 2 + 1 + 4 = 7、ACE は 1 + 3 + 5 = 9 です。BEE は 2 + 5 + 5 = 12 です。',
    shortCut: '1つの例だけで決めず、思いついた規則を2つ目の例で確かめます。',
    commonMistakes: '「CAB」は足しても掛けても6になります。掛け算だと考えると、「BAD」が8になって合いません。',
    targetSeconds: 60, tags: ['暗号', '規則の発見'], figureData: null, sourceType: 'original'
  },

  /* ================= 四則逆算 ================= */
  {
    id: 'cab-reverse-calc-501', examType: 'cab', category: 'reverse-calc', subCategory: '分数を含む四則逆算',
    difficulty: 2, questionType: 'single',
    questionText: '□に入る数はどれか。\n□ × 3/4 − 1/2 = 4',
    choices: ['4', '6', '8', '12'],
    correctAnswer: 1,
    explanation: '□ × 3/4 = 4 + 1/2 = 9/2。□ = 9/2 ÷ 3/4 = 9/2 × 4/3 = 6 です。',
    shortCut: '分数で割るときは、分母と分子を入れ替えて掛けます。',
    commonMistakes: '9/2 × 3/4 と、そのまま掛けてしまわないようにします。',
    targetSeconds: 30, tags: ['四則逆算', '分数'], figureData: null, sourceType: 'original'
  },
  {
    id: 'cab-reverse-calc-502', examType: 'cab', category: 'reverse-calc', subCategory: '小数と百分率を含む四則逆算',
    difficulty: 2, questionType: 'single',
    questionText: '□に入る数はどれか。\n80 の □% ＝ 0.4 × 30',
    choices: ['12', '24', '150', '15'],
    correctAnswer: 3,
    explanation: '右辺は 0.4 × 30 = 12。80 の □% が 12 なので、□ = 12 ÷ 80 × 100 = 15 です。',
    shortCut: '80 の 10% は 8、5% は 4 です。合わせて 12 になるので 15% と分かります。',
    commonMistakes: '右辺の 12 を、そのまま答えにしないようにします。',
    targetSeconds: 30, tags: ['四則逆算', '百分率'], figureData: null, sourceType: 'original'
  },

  /* ================= 構造的把握力（非言語） ================= */
  {
    id: 'spi3-structure-501', examType: 'spi3', category: 'structure', subCategory: '非言語の構造',
    difficulty: 2, questionType: 'single',
    questionText: '次のア〜エのうち、問題の解き方の構造が似ている組み合わせはどれか。\nア　兄と弟の所持金は合わせて5,000円で、兄は弟より800円多い。兄はいくら持っているか。\nイ　定価の3割引で買うと1,400円だった。定価はいくらか。\nウ　大小2つの数があり、和は50、差は12である。大きいほうの数はいくつか。\nエ　3個で450円の品物を7個買うと、いくらか。',
    choices: ['アとイ', 'アとウ', 'イとエ', 'ウとエ'],
    correctAnswer: 1,
    explanation: 'アとウは、どちらも2つの数の「和」と「差」から一方を求めます（(和 + 差) ÷ 2）。イは割合から元の数を求める問題、エは1個あたりの値段を出して掛ける問題です。',
    shortCut: '問題文の中の「合わせて」「より多い」「和」「差」という言葉に印をつけます。',
    commonMistakes: 'お金の問題どうし（アとイ）でまとめないようにします。',
    targetSeconds: 60, tags: ['構造把握'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-structure-502', examType: 'spi3', category: 'structure', subCategory: '非言語の構造',
    difficulty: 2, questionType: 'single',
    questionText: '次の例と、解き方の構造が最も似ている問題はどれか。\n例：「ある数の30%が60である。ある数はいくつか。」',
    choices: ['800円の25%は、いくらか。', '60は、200の何%か。', 'クラスの40%にあたる16人が女子である。クラスは何人か。', '2割増しにすると1,200円になる。元の値段はいくらか。'],
    correctAnswer: 2,
    explanation: '例は 60 ÷ 0.3 で、「部分の量 ÷ 割合」から全体を求めます。クラスの人数も 16 ÷ 0.4 で同じ構造です。1つ目は全体 × 割合、2つ目は割合そのものを求める問題です。4つ目は、増えたあとの量（1 + 0.2 倍）から戻すので、割合を足す手順が入ります。',
    shortCut: '「何が分かっていて、何を求めるか」を、全体・部分・割合の3つで整理します。',
    commonMistakes: '割り算で元の数を求める点は4つ目も同じですが、「2割増し」は割合を1に足す手順が加わります。',
    targetSeconds: 60, tags: ['構造把握'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-structure-503', examType: 'spi3', category: 'structure', subCategory: '非言語の構造',
    difficulty: 3, questionType: 'single',
    questionText: '次のア〜エのうち、問題の解き方の構造が似ている組み合わせはどれか。\nア　水そうをいっぱいにするのに、A管では20分、B管では30分かかる。両方を同時に使うと何分かかるか。\nイ　時速4kmで3時間歩くと、何km進むか。\nウ　ある作業を、1人では6日で終える人と、12日で終える人がいる。2人で行うと何日で終わるか。\nエ　濃度5%の食塩水200gに含まれる食塩は何gか。',
    choices: ['アとウ', 'アとイ', 'イとウ', 'ウとエ'],
    correctAnswer: 0,
    explanation: 'アとウは、どちらも全体を1と考え、「1分（1日）あたりに進む量」を2つ足してから、全体を割ります。イとエは、掛け算1回で求める問題です。',
    shortCut: '「それぞれ単独でかかる時間」が2つ与えられ、「一緒に行うと」と問われていれば、同じ構造です。',
    commonMistakes: '水の問題どうし（アとエ）や、時間が出てくる問題どうし（アとイ）でまとめないようにします。',
    targetSeconds: 60, tags: ['構造把握'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-structure-504', examType: 'spi3', category: 'structure', subCategory: '非言語の構造',
    difficulty: 3, questionType: 'single',
    questionText: '次の例と、解き方の構造が最も似ている問題はどれか。\n例：「50円切手と80円切手を合わせて10枚買うと、620円だった。80円切手は何枚か。」',
    choices: ['5人の平均点が70点で、そのうち4人の平均点が68点である。残りの1人は何点か。', 'あめを1人に3個ずつ配ると10個余り、5個ずつ配ると6個足りない。子どもは何人か。', '父は40歳、子は10歳である。父の年齢が子の3倍になるのは何年後か。', '2人乗りと3人乗りのボートが合わせて8そうあり、全部でちょうど21人が乗れる。3人乗りは何そうか。'],
    correctAnswer: 3,
    explanation: '例は、2種類のものの「個数の合計」と「量の合計」が分かっていて、一方の個数を求めます。ボートの問題も、そう数の合計（8そう）と人数の合計（21人）から求めるので同じ構造です。',
    shortCut: '「2種類」「合わせていくつ」「合計の量」の3つがそろっているかを確かめます。',
    commonMistakes: 'あめを配る問題は、配り方を変えたときの余りと不足から求める問題で、構造が違います。',
    targetSeconds: 70, tags: ['構造把握'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-structure-505', examType: 'spi3', category: 'structure', subCategory: '非言語の構造',
    difficulty: 3, questionType: 'single',
    questionText: '次のア〜エのうち、問題の解き方の構造が似ている組み合わせはどれか。\nア　1,200m離れた2人が、分速70mと分速50mで向かい合って歩く。出会うのは何分後か。\nイ　弟が分速60mで出発した10分後に、兄が分速90mで追いかける。兄が追いつくのは、兄が出発してから何分後か。\nウ　1分間に20枚刷れる印刷機と、30枚刷れる印刷機を同時に使う。600枚を刷り終えるのは何分後か。\nエ　1周400mのコースを、分速80mで5周する。何分かかるか。',
    choices: ['アとイ', 'アとウ', 'イとエ', 'ウとエ'],
    correctAnswer: 1,
    explanation: 'アは 1,200 ÷ (70 + 50)、ウは 600 ÷ (20 + 30) で、どちらも「全体の量 ÷ 2つの速さの和」です。イは速さの差で割る問題、エは道のりを出してから速さで割る問題です。',
    shortCut: '2つのものが「力を合わせて」全体を減らしていくときは、速さを足します。',
    commonMistakes: '歩く問題どうし（アとイ）でまとめないようにします。イは速さの差を使います。',
    targetSeconds: 70, tags: ['構造把握'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-structure-506', examType: 'spi3', category: 'structure', subCategory: '非言語の構造',
    difficulty: 3, questionType: 'single',
    questionText: '次の例と、解き方の構造が最も似ている問題はどれか。\n例：「あめを1人に3個ずつ配ると10個余り、5個ずつ配ると6個足りない。子どもは何人か。」',
    choices: ['長いすに1脚4人ずつ座ると7人が座れず、6人ずつ座ると5人分の席が余る。長いすは何脚か。', '1個30円のあめと1個50円のガムを合わせて12個買うと、440円だった。ガムは何個か。', '姉と妹のあめは合わせて26個で、姉は妹より4個多い。姉は何個持っているか。', 'あめ全体の40%にあたる16個を配った。あめは全部で何個あったか。'],
    correctAnswer: 0,
    explanation: '例は、1人あたりの数を変えたときの「余り」と「不足」の合計（10 + 6）を、1人あたりの差（5 − 3）で割ります。長いすの問題も、(7 + 5) ÷ (6 − 4) で同じ構造です。',
    shortCut: '「〜ずつにすると余る（足りない）」が2回出てくる問題を探します。',
    commonMistakes: 'あめが出てくる問題がほかに3つあります。題材ではなく、数の関係で比べます。',
    targetSeconds: 70, tags: ['構造把握'], figureData: null, sourceType: 'original'
  },

  /* ================= 論理 ================= */
  {
    id: 'other-logic-501', examType: 'other', category: 'logic', subCategory: '対偶',
    difficulty: 2, questionType: 'single',
    questionText: '「雨が降っている日は、Aさんは必ず傘を持っている」が正しいとき、必ず正しいといえるものはどれか。',
    choices: ['Aさんが傘を持っている日は、雨が降っている。', '雨が降っていない日は、Aさんは傘を持っていない。', 'Aさんが傘を持っていない日は、雨が降っていない。', '雨が降っていない日は、Aさんは必ず傘を持っている。'],
    correctAnswer: 2,
    explanation: '「PならばQ」が正しいとき、「QでなければPでない」も必ず正しくなります（対偶）。傘を持っていないのに雨が降っていたら、元の文に反するからです。',
    shortCut: '前後を入れ替えて、両方を否定した文を作ります。',
    commonMistakes: '前後を入れ替えただけの文（逆）や、両方を否定しただけの文（裏）は、正しいとは限りません。晴れの日に傘を持っていてもかまいません。',
    targetSeconds: 50, tags: ['論理', '対偶'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-logic-502', examType: 'other', category: 'logic', subCategory: '三段論法',
    difficulty: 1, questionType: 'single',
    questionText: '「早起きをする人は、朝食をとる」「朝食をとる人は、午前中に集中できる」。この2つが正しいとき、必ず正しいといえるものはどれか。',
    choices: ['早起きをする人は、午前中に集中できる。', '午前中に集中できる人は、早起きをする。', '朝食をとる人は、早起きをする。', '早起きをしない人は、午前中に集中できない。'],
    correctAnswer: 0,
    explanation: '「AならばB」「BならばC」がどちらも正しければ、「AならばC」も正しくなります。早起き → 朝食 → 集中 とつながります。',
    shortCut: '矢印でつなぎます（早起き → 朝食 → 集中）。矢印の向きにたどれるものだけが正しいといえます。',
    commonMistakes: '矢印を逆向きにたどることはできません。集中できる人が早起きとは限りません。',
    targetSeconds: 40, tags: ['論理', '三段論法'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-logic-503', examType: 'other', category: 'logic', subCategory: '必要条件と十分条件',
    difficulty: 3, questionType: 'single',
    questionText: '「東京都に住んでいる」ことは、「日本に住んでいる」ことの何にあたるか。',
    choices: ['必要条件であるが、十分条件ではない', '必要条件でも十分条件でもない', '必要条件であり、十分条件でもある', '十分条件であるが、必要条件ではない'],
    correctAnswer: 3,
    explanation: '東京都に住んでいれば、それだけで日本に住んでいるといえます（十分条件）。しかし、日本に住むために東京都に住む必要はありません（必要条件ではない）。',
    shortCut: '「それだけで十分か」「それがないと成り立たないか」の2つを順に確かめます。',
    commonMistakes: '範囲の狭いほうが「十分条件」、広いほうが「必要条件」です。逆に覚えないようにします。',
    targetSeconds: 50, tags: ['論理', '条件'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-logic-504', examType: 'other', category: 'logic', subCategory: '否定',
    difficulty: 2, questionType: 'single',
    questionText: '「3人のうち、少なくとも1人は合格した」という文を否定した内容として、正しいものはどれか。',
    choices: ['3人のうち、少なくとも1人は合格しなかった。', '3人とも、合格しなかった。', '3人とも、合格した。', '3人のうち、合格したのは1人だけである。'],
    correctAnswer: 1,
    explanation: '「少なくとも1人は合格した」は、合格者が1人、2人、3人のどれかという意味です。その否定は、合格者が0人、つまり「3人とも合格しなかった」です。',
    shortCut: '人数で言い換えます。「1人以上」の否定は「0人」です。',
    commonMistakes: '「少なくとも1人は合格しなかった」は、合格者が2人の場合なども含むので、否定になっていません。',
    targetSeconds: 45, tags: ['論理', '否定'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-logic-505', examType: 'other', category: 'logic', subCategory: '決まらない関係',
    difficulty: 2, questionType: 'single',
    questionText: 'A、B、Cの3つの荷物がある。「AはBより重い」「CはBより重い」ことが分かっている。このとき、必ず正しいといえるものはどれか。',
    choices: ['3つの中で、Bが最も軽い。', 'AはCより重い。', '3つの中で、Cが最も重い。', 'AとCは同じ重さである。'],
    correctAnswer: 0,
    explanation: 'AもCもBより重いので、Bが最も軽いことは確かです。AとCの重さは比べられていないので、どちらが重いか、同じかどうかは分かりません。',
    shortCut: '分かっている関係だけを線で結びます。線で結ばれていない2つは、比べられません。',
    commonMistakes: '書かれた順番から、AがCより重いと思い込まないようにします。',
    targetSeconds: 40, tags: ['論理', '順序'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-logic-506', examType: 'other', category: 'logic', subCategory: '「かつ」と「または」',
    difficulty: 2, questionType: 'single',
    questionText: 'ある催しに入場できるのは、「会員であり、かつ18歳以上である人」、または「招待状を持っている人」である。次のうち、入場できない人はどれか。',
    choices: ['会員で、20歳で、招待状を持っていない人', '会員ではなく、30歳で、招待状を持っている人', '会員で、16歳で、招待状を持っていない人', '会員ではなく、16歳で、招待状を持っている人'],
    correctAnswer: 2,
    explanation: '招待状があれば、ほかの条件に関係なく入場できます。招待状がない人は、会員と18歳以上の両方を満たす必要があります。会員でも16歳で招待状のない人は、どちらの条件も満たしません。',
    shortCut: '先に「招待状を持っている人」を除きます。残った人だけ、会員と年齢の両方を確かめます。',
    commonMistakes: '「かつ」は両方とも必要です。会員であるだけでは入場できません。',
    targetSeconds: 50, tags: ['論理', '条件'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-logic-507', examType: 'other', category: 'logic', subCategory: '重ならない集まり',
    difficulty: 2, questionType: 'single',
    questionText: '「この店のケーキは、すべて卵を使っている」「Xさんは、卵を使った食べ物を一切食べない」。この2つが正しいとき、必ず正しいといえるものはどれか。',
    choices: ['Xさんは、ケーキが嫌いである。', 'この店には、卵を使っていない食べ物はない。', 'Xさんは、ほかの店のケーキも食べない。', 'Xさんは、この店のケーキを食べない。'],
    correctAnswer: 3,
    explanation: 'この店のケーキはすべて「卵を使った食べ物」に含まれます。Xさんはその集まりのものを食べないので、この店のケーキも食べません。ほかの店のケーキや、この店のケーキ以外の食べ物、Xさんの好みについては分かりません。',
    shortCut: '円を描きます。「この店のケーキ」は「卵を使った食べ物」の円の中に入り、Xさんが食べるものはその外にあります。',
    commonMistakes: '食べないことと、嫌いであることは別です。本文にない理由を補わないようにします。',
    targetSeconds: 50, tags: ['論理', '集合'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-logic-508', examType: 'other', category: 'logic', subCategory: '数列（2つの列が交互に並ぶ）',
    difficulty: 2, questionType: 'single',
    questionText: '次の数はある規則で並んでいる。「？」に入る数はどれか。\n1、10、2、9、3、8、？',
    choices: ['7', '4', '9', '5'],
    correctAnswer: 1,
    explanation: '1つおきに見ると、「1、2、3、…」と1ずつ増える列と、「10、9、8、…」と1ずつ減る列が交互に並んでいます。「？」は増える列の4番目なので、4です。',
    shortCut: '増えたり減ったりをくり返す数列は、1つおきに分けて見ます。',
    commonMistakes: '直前の8から1を引いて7としないようにします。「？」は、8とは別の列です。',
    targetSeconds: 35, tags: ['数列'], figureData: null, sourceType: 'original'
  },

  /* ================= 一般常識 ================= */
  {
    id: 'other-general-501', examType: 'other', category: 'general', subCategory: '国語',
    difficulty: 1, questionType: 'single',
    questionText: '空欄に入る語はどれか。\n「（　　）を長くして待つ」（今か今かと、待ち遠しく思いながら待つこと）',
    choices: ['手', '足', '耳', '首'],
    correctAnswer: 3,
    explanation: '「首を長くして待つ」は、期待して待ちこがれるという意味の慣用句です。',
    shortCut: '遠くを見ようとして首を伸ばす様子を思い浮かべます。',
    commonMistakes: '体の部分を使った慣用句は多いので、意味と組にして覚えます。',
    targetSeconds: 15, tags: ['一般常識', '慣用句'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-general-502', examType: 'other', category: 'general', subCategory: '国語',
    difficulty: 1, questionType: 'single',
    questionText: '「一石二鳥」の意味として、最も適切なものはどれか。',
    choices: ['1つの行いで、2つの利益を得ること。', '一生に一度だけの、大切な出会いのこと。', '何度失敗しても、あきらめずに立ち上がること。', 'よいところもあれば、悪いところもあること。'],
    correctAnswer: 0,
    explanation: '1つの石を投げて2羽の鳥を落とすことから、1つの行いで2つの利益を得るという意味です。ほかは順に、一期一会、七転八起、一長一短の意味です。',
    shortCut: '漢字をそのまま読んで、場面を思い浮かべます。',
    commonMistakes: '数字を含む四字熟語は似て見えるので、意味と組にして覚えます。',
    targetSeconds: 15, tags: ['一般常識', '四字熟語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-general-503', examType: 'other', category: 'general', subCategory: '国語',
    difficulty: 2, questionType: 'single',
    questionText: '「見る」の謙譲語（自分の動作をへりくだって言う語）はどれか。',
    choices: ['ご覧になる', '見られる', '拝見する', 'お見えになる'],
    correctAnswer: 2,
    explanation: '「拝見する」は、自分が見ることをへりくだって言う謙譲語です。「ご覧になる」「見られる」は相手の動作を高める尊敬語、「お見えになる」は「来る」の尊敬語です。',
    shortCut: '「拝」のつく語（拝見、拝読、拝借）は、自分の動作に使う謙譲語です。',
    commonMistakes: '「ご覧になる」は相手が見るときに使います。自分には使えません。',
    targetSeconds: 20, tags: ['一般常識', '敬語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-general-504', examType: 'other', category: 'general', subCategory: '社会',
    difficulty: 1, questionType: 'single',
    questionText: '日本の三権分立で、法律を定める権限（立法権）をもつ機関はどれか。',
    choices: ['内閣', '国会', '裁判所', '都道府県知事'],
    correctAnswer: 1,
    explanation: '立法権は国会、行政権は内閣、司法権は裁判所がもちます。3つの権力を分けて、互いに行きすぎを抑える仕組みです。',
    shortCut: '「国会＝立法、内閣＝行政、裁判所＝司法」を3つ1組で覚えます。',
    commonMistakes: '法律の案を国会に出すことの多い内閣と、取り違えないようにします。法律を定めるのは国会です。',
    targetSeconds: 15, tags: ['一般常識', '政治'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-general-505', examType: 'other', category: 'general', subCategory: '社会',
    difficulty: 2, questionType: 'single',
    questionText: '日本の標準時の基準となる、東経135度の経線が通る都市はどれか。',
    choices: ['兵庫県明石市', '東京都千代田区', '京都府京都市', '愛知県名古屋市'],
    correctAnswer: 0,
    explanation: '日本の標準時は、兵庫県明石市などを通る東経135度の経線を基準にしています。',
    shortCut: '「標準時＝東経135度＝明石」を組にして覚えます。',
    commonMistakes: '首都の東京を基準にしているわけではありません。',
    targetSeconds: 15, tags: ['一般常識', '地理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-general-506', examType: 'other', category: 'general', subCategory: '理科',
    difficulty: 1, questionType: 'single',
    questionText: '電力（電気が1秒間にする仕事の量）を表す単位はどれか。',
    choices: ['ボルト（V）', 'アンペア（A）', 'オーム（Ω）', 'ワット（W）'],
    correctAnswer: 3,
    explanation: '電力の単位はワット（W）です。ボルトは電圧、アンペアは電流、オームは電気抵抗の単位です。',
    shortCut: '電気製品に書かれている「〇〇W」は消費電力です。身近な表示と結びつけます。',
    commonMistakes: '電圧のボルトと取り違えないようにします。電力は「電圧 × 電流」で求められます。',
    targetSeconds: 15, tags: ['一般常識', '単位'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-general-507', examType: 'other', category: 'general', subCategory: '数学',
    difficulty: 2, questionType: 'single',
    questionText: '時速72kmは、秒速何mか。',
    choices: ['秒速12m', '秒速200m', '秒速20m', '秒速72m'],
    correctAnswer: 2,
    explanation: '72kmは72,000m、1時間は3,600秒です。72,000 ÷ 3,600 = 20 なので、秒速20mです。',
    shortCut: '時速（km）を3.6で割ると、秒速（m）になります。72 ÷ 3.6 = 20。',
    commonMistakes: '1時間を60秒として割らないようにします。1時間は 60 × 60 = 3,600秒です。',
    targetSeconds: 30, tags: ['一般常識', '単位換算'], figureData: null, sourceType: 'original'
  }
);

checkQuestions(QUESTIONS);
