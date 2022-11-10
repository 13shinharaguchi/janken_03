# クラシッククラッシュ

## DEMO

  - とくになし

## 紹介と使い方
- 音楽家とPK戦をおこなうゲームです
- なぜ、音楽家なのかは、作業中にクラッシック聞いてみようと思って聞いていたからです。
- 音楽家がGK,操作者がキッカーのイメージです。
- 対決の時に出た数字の大きさによって勝敗を決めます。
- 数字の大きさによって、勝敗判定が変わるようにしていて、例としてGKとキッカーの
- 数字の差が開きすぎたらキッカーの負けになります。
- GKもキッカーも左から順に強くなる設定です
- キーパーの能力値より、キッカーの能力値が高いとゴールになります  
  キーパーの能力値はランダムで生成されます  
  キッカーの能力値は、ゲージアクションで力数値をきめます  
  その力数値を能力値に変えるために、ボタン連打をします  
  後は蹴るのみです  

## 工夫した点
- アクション要素の追加  
ゲージがGkによって速度が変わるところ
- ゲージの値をwidthにしたこと
- ゲージとボタンアクションを連携させたところ
-  使ったことないメソッドを使用したこと
- モーダル表示にしたこと
- 連打の回数で画像が変化すること

## 苦戦した点
### 苦戦したとこ
- widthの値を取得するところ

### 自分へのメッセージ
- css に毎回苦戦してるぞ、レイアウトかんがえろ！
- 途中で思いついたことをそのまま採用するなー
- 

## 参考にした web サイトなど
- [JavaScript | animate()で伸縮アニメーション](https://1-notes.com/javascript-expansion-and-contraction-animation-with-animate/)
- [jQuery 図形をクリックすると大きさが変わるアニメーション](https://qiita.com/tomtom1107/items/328305d88b7f3977dc15)
- [transform: scale()で要素を拡大・縮小する方法](https://web-dev.tech/front-end/css/transform-scale-up-down/)
- [【jQuery】要素の表示・非表示について (show, hide, toggle)](https://www.task-notes.com/entry/20150112/1420994026)
- [jQueryで幅の取得と設定（width,innerWidth,outerWidth)](https://www.flatflag.nir87.com/width-1077)
- [【jQuery】5〜0までカウントダウンするスクリプト](https://www.jtm.gr.jp/technote/jquery/countdown/)
