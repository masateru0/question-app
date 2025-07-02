import Raichu from '@/assets/raichu.png'
import Lizardon from '@/assets/lizardon.png'
import Redgreen from '@/assets/redgreen.png'
import DandP from '@/assets/dandp.jpg'
import XandY from '@/assets/xandy.jpg'
import BandW from '@/assets/bandw.jpg'
import First3Dg from '@/assets/first3dg.jpg'
import Rekkuza from '@/assets/rekkuza.jpg'
import Rugia from '@/assets/rugia.png'
import Kamonegi from '@/assets/Kamonegi.png'

export default [
    {
        text: 'Q1.ピカチュウの進化系は？',
        choices: ['ミミッキュ', 'ライチュウ', 'デデンネ', 'ピチュー'],
        answer: 'ライチュウ',
        correctImage: Raichu,
        explanation: 'ピカチュウは"かみなりのいし"を使うことでライチュウに進化します。',
    },
    {
        text: 'Q2.ヒトカゲの最終進化系は？',
        choices: ['リザード', 'バシャーモ', 'リザードン', 'ゴウカザル'],
        answer: 'リザードン',
        correctImage: Lizardon,
        explanation: 'ヒトカゲ⇨リザード⇨リザードンの順に進化します。',
    },
    {
        text: 'Q3.ポケモンゲームシリーズの初代は？',
        choices: [
            'ポケットモンスター 赤・緑',
            'ポケットモンスター ピカチュウ',
            'ポケットモンスター 青',
            'ポケットモンスター 金・銀',
        ],
        answer: 'ポケットモンスター 赤・緑',
        correctImage: Redgreen,
        explanation: 'ポケットモンスター 赤・緑は1996年に発売されました。',
    },
    {
        text: 'Q4.ポケモンゲームシリーズで任天堂DSで初めて発売された作品は？',
        choices: [
            'ポケットモンスター ブラック・ホワイト',
            'ポケットモンスター X・Y',
            'ポケットモンスター サン・ムーン',
            'ポケットモンスター ダイヤモンド・パール',
        ],
        answer: 'ポケットモンスター ダイヤモンド・パール',
        correctImage: DandP,
        explanation: 'ポケットモンスター ダイヤモンド・パールは2006年に発売されました。',
    },
    {
        text: 'Q5.ポケモンゲームシリーズで初めてメガシンカが導入された作品は？',
        choices: [
            'ポケットモンスター サン・ムーン',
            'ポケットモンスター ダイヤモンド・パール',
            'ポケットモンスター X・Y',
            'ポケットモンスター ブラック・ホワイト',
        ],
        answer: 'ポケットモンスター X・Y',
        correctImage: XandY,
        explanation:
            'ポケットモンスター X・Yは2013年に発売され、メガシンカが初めて導入されました。',
    },
    {
        text: 'Q6.ポケモンゲームシリーズで初めてオンライン対戦が可能になった作品は？',
        choices: [
            'ポケットモンスター X・Y',
            'ポケットモンスター ブラック・ホワイト',
            'ポケットモンスター サン・ムーン',
            'ポケットモンスター ダイヤモンド・パール',
        ],
        answer: 'ポケットモンスター ブラック・ホワイト',
        correctImage: BandW,
        explanation:
            'ポケットモンスター ブラック・ホワイトは2010年に発売され、オンライン対戦が可能になりました。',
    },
    {
        text: 'Q7.ポケモンゲームシリーズで初めて3Dグラフィックを採用した作品は？',
        choices: [
            'ポケットモンスター X・Y',
            'ポケットモンスター サン・ムーン',
            'ポケットモンスター ダイヤモンド・パール',
            'ポケットモンスター ブラック・ホワイト',
        ],
        answer: 'ポケットモンスター X・Y',
        correctImage: First3Dg,
        explanation:
            'ポケットモンスター X・Yは2013年に発売され、3Dグラフィックが初めて採用されました。',
    },
    {
        text: 'Q8.ポケットモンスターエメラルドのでんせつのポケモンは？',
        choices: ['デオキシス', 'グラードン', 'カイオーガ', 'レックウザ'],
        answer: 'レックウザ',
        correctImage: Rekkuza,
        explanation: 'ポケットモンスターエメラルドではレックウザが伝説のポケモンとして登場します。',
    },
    {
        text: 'Q9.ポケモンGOで最初に実装された伝説のポケモンは？',
        choices: ['ルギア', 'ミュウツー', 'デオキシス', 'ホウオウ'],
        answer: 'ルギア',
        correctImage: Rugia,
        explanation: 'ポケモンGOで最初に実装された伝説のポケモンはルギアです。',
    },
    {
        text: 'Q10.ポケモンGOで最初に実装された地域限定ポケモンは？',
        choices: ['バリヤード', 'ガルーラ', 'サンドパン', 'カモネギ'],
        answer: 'カモネギ',
        correctImage: Kamonegi,
        explanation: 'ポケモンGOで最初に実装された地域限定ポケモンはカモネギです。',
    },
]