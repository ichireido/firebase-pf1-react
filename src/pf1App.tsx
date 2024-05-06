import React from 'react';
import './pf1App.css';
import { Link as LinkScroll } from 'react-scroll';
import Cofee from './assets/coffee.jpg';
import Bike from './assets/bike.jpg';
import Petshop from './assets/petshop.png';
import Danvc from './assets/danvc.png';
import Kiryu from './assets/kiryu.jpg';
import Mc1040hw from './assets/mc1040hw.png';
import OkkParkingres from './assets/okk_parkingres.png';

const pf1App: React.FunctionComponent = () => {
  return (
    <div id="wrapper">
      <article id="main">
        <div className="nav">
          <nav className="nav-inner">
            <LinkScroll
              to="top"
              className="nav-link"
              smooth={true}
              duration={800}
            >
              {/* <a id="nav1" className="nav-link" href="#top"> */}
              top
              {/* </a> */}
            </LinkScroll>
            <LinkScroll
              to="bio"
              className="nav-link"
              smooth={true}
              duration={800}
            >
              {/* <a id="nav1_5" className="nav-link" href="#bio"> */}
              bio
              {/* </a> */}
            </LinkScroll>
            <LinkScroll
              to="cc"
              className="nav-link"
              smooth={true}
              duration={800}
            >
              {/* <a id="nav2" className="nav-link" href="#cc"> */}
              cc
              {/* </a> */}
            </LinkScroll>
            <LinkScroll
              to="bike"
              className="nav-link"
              smooth={true}
              duration={800}
            >
              {/* <a id="nav3" className="nav-link" href="#bike"> */}
              bike
              {/* </a> */}
            </LinkScroll>
            <LinkScroll
              to="petshop"
              className="nav-link"
              smooth={true}
              duration={800}
            >
              {/* <a id="nav4" className="nav-link" href="#petshop"> */}
              petshop
              {/* </a> */}
            </LinkScroll>
            <LinkScroll
              to="danvc"
              className="nav-link"
              smooth={true}
              duration={800}
            >
              {/* <a id="nav5" className="nav-link" href="#danvc"> */}
              danvc
              {/* </a> */}
            </LinkScroll>
            <LinkScroll
              to="koiryu"
              className="nav-link"
              smooth={true}
              duration={800}
            >
              {/* <a id="nav6" className="nav-link" href="#koiryu"> */}
              koiryu
              {/* </a> */}
            </LinkScroll>
            <LinkScroll
              to="miicoro"
              className="nav-link"
              smooth={true}
              duration={800}
            >
              {/* <a id="nav7" className="nav-link" href="#miicoro"> */}
              miicoro
              {/* </a> */}
            </LinkScroll>
            <LinkScroll
              to="parkingreserve"
              className="nav-link"
              smooth={true}
              duration={800}
            >
              {/* <a id="nav8" className="nav-link" href="#parkingreserve"> */}
              parkingreserve
              {/* </a> */}
            </LinkScroll>
          </nav>
        </div>

        <div id="top" className="mainblock prologuetop">
          {/* <div className="navenpty">
                </div> */}
          <section className="mainblocksection text-white">
            <h1>PORTFOLIO</h1>
          </section>
        </div>
        <div id="bio" className="mainblock prologuetop">
          {/* <div className="navenpty">
                </div> */}
          <div className="mainblocksection bg-black">
            <section className="biosection">
              <section className="biosections text-white">
                <h3>【webデザイン　HTMLコーディング　その他】</h3>
                <p className="biodate">2004/3~2004/5 (3ヶ月)</p>
                <li>自社ウェブサイト制作</li>
                <li>ショッピングカートPerlプログラム設置</li>
                <li>HTML,CSSコーディング</li>
              </section>
              <section className="biosections text-white">
                <h3>【webデザイン　HTMLコーディング】</h3>
                <p className="biodate">2010/12~2011/1（２ヶ月）</p>
                <li>小売業自社ウェブサイトの制作</li>
              </section>
              <section className="biosections text-white">
                <h3>【webデザイン　HTMLコーディング】</h3>
                <p className="biodate">2011/1〜2011/7（7ヶ月）</p>
                <li>
                  他社ウェブサイトのCMSによる構築製作、修正　webデザイン　HTMLコーディング
                </li>
                <li>サイトテーマのもととなるWebページ作成</li>
                <li>他社サイトのCMSによる製作</li>
                <li>
                  テスト環境をMAC, APACHE, MySQL,
                  PHPにより構築、WORDPRESSでサイト構築し、PHPサイトテーマをコーディング（HTML,CSS,PHP）。
                  <br />
                  のちに本サーバに移行（移行時にURLが変わるのでMySQLの編集を行う）
                </li>
              </section>
              <section className="biosections text-white">
                <h3>【webデザイン　HTMLコーディング】</h3>
                <p className="biodate">2015/6~2015/９</p>
                <li>ウェブサイト制作(ベンチャーキャピタル系)</li>
                <li>レスポンシブサイト、HTML5+CSS3+Jquery</li>
                <li>ウェブデザイン、コーディング</li>
              </section>
              <section className="biosections text-white">
                <h3>【HTMLコーディング】</h3>
                <p className="biodate">2015/10~2015/12</p>
                <li>生保向け端末更改　担当フェーズ：画面レイアウト</li>
                <li>HTML5+CSS3+JavaScript(Jquery)　一部SVG</li>
                <li>コーディング</li>
              </section>
              <section className="biosections text-white">
                <h3>【画像処理　HTMLコーディング】</h3>
                <p className="biodate">2016/3~2016/5</p>
                <li>
                  担当フェーズ：キャラクター、パーツ、サイトの画像処理、送信フォーム作成
                </li>
                <li>Photoshop illustlator bootstrap</li>
                <li>コーディング</li>
              </section>
              <section className="biosections text-white">
                <h3>【HTMLコーディング】</h3>
                <p className="biodate">2016/4~2016/11</p>
                <li>担当フェーズ：画像処理　HTMLコーディング</li>
                <li>Photoshop Dreamweaver HTML5 CSS3 </li>
              </section>
              <section className="biosections text-white">
                <h3>【Angularjs開発】</h3>
                <p className="biodate">2016/12~2017/12</p>
                <li>担当フェーズ：AngularJS開発　テスト</li>
                <li>
                  AngularJS bootstrap Javascript HTML5 CSS3 LESS VSCode
                  Protractor SVN
                </li>
              </section>
              <section className="biosections text-white">
                <h3>【Swift開発 サイト制作】</h3>
                <p className="biodate">201８/５~201８/７</p>
                <li>担当フェーズ：iOSアプリ開発　webデザイン　コーディング</li>
                <li>Swift XCode Git bootstrap Javascript HTML5 CSS3</li>
              </section>
              <section className="biosections text-white">
                <h3>【交通インフラサイト開発】</h3>
                <p className="biodate">201８/８~201９/６</p>
                <li>
                  担当フェーズ：iUI/UXデザイン 画面設計　コーディング　要件定義
                </li>
                <li>Photoshop Illustlator PowerPoint Javascript HTML5 CSS3</li>
              </section>
              <section className="biosections text-white">
                <h3>【金融系・帳票ペーパーレス開発】</h3>
                <p className="biodate">2019/9~2020/4</p>
                <li>
                  担当フェーズ：コーディング　テスト及びdb上でテスト用データ作成
                </li>
                <li>Angular6 Typescript HTML5 SCSS WindowsSQL Git</li>
              </section>
              <section className="biosections text-white">
                <h3>【大手外資保険会社・証券読み取りプログラム保守運用】</h3>
                <p className="biodate">2020/9~2021/1</p>
                <li>担当フェーズ：クラウドインフラエンジニア</li>
                <li>Angular8 Typescript Django Python Git</li>
              </section>
              <section className="biosections text-white">
                <h3>【ソフトウェアエンジニアリング推進】</h3>
                <p className="biodate">2021/3~2021/4</p>
                <li>担当フェーズ：ソフトウェアエンジニアリング</li>
                <li>Angular8 Typescript Subversion</li>
              </section>
              <section className="biosections text-white">
                <h3>Angularリファクタリング</h3>
                <p className="biodate">2023/12~2024/3</p>
                <li>担当フェーズ：フロントエンド</li>
                <li>Angular12 Typescript</li>
              </section>
            </section>
          </div>
        </div>
        <div id="heading1" className="mainblock sticky heading">
          {/* <div className="navenpty">
                </div> */}
          <section className="mainblocksection">
            <h2>
              デザイン実績、作品紹介 <br />
              (リンク先に制作物あり)
            </h2>
          </section>
        </div>
        <div id="cc" className="mainblock sticky performance1">
          {/* <div className="navenpty">
                </div> */}
          <div className="mainblocksection bg-white">
            <section className="tilesection appear-totop text-black">
              <a className="imglink" href="cc/" target="_new">
                <img className="site-img" src={Cofee} />
              </a>
              <h3 className="sakuhinh3">
                <a href="cc/" target="_new">
                  小売サイト（自家焙煎コーヒー）
                </a>
              </h3>
              <p>
                トップ画像は、背景（白）を右上に行くに従い透明になるようにPhotoshopで加工し、CSSで背景を茶色系に指定することで茶色系の背景が左下に行くに従って白くなるように。
              </p>
              <p>中央画像は、左に行くに従い透明になるようPhotoshopで加工。</p>
              <p>
                ナビゲーションバーは、マウスを乗せると字が大きくなるようにCSSで指定し、サイドバーはマウスを乗せると茶色の背景が白くなり、文字の色が黒に反転。
              </p>
              <p>
                なおかつマウスで押下すると数px右下にずれる、周りの影が反転することで、ボタンが画面の中へ入っていくかのようにみせるようCSSで指定。
              </p>
            </section>
          </div>
        </div>
        <div id="bike" className="mainblock sticky performance2">
          {/* <div className="navenpty">
                </div> */}
          <div className="mainblocksection">
            <section className="tilesection appear-totop text-white">
              <a className="imglink" href="bike/" target="_new">
                <img className="site-img" src={Bike} />
              </a>
              <h3 className="sakuhinh3">
                <a href="bike/" target="_new">
                  中古バイク引き取りサイト
                </a>
                　(選考のため制作物)
              </h3>
              <p>
                バイク画像、数字の画像、日本地図の画像は、元あったクライアント様のものから使わせていただきました。
              </p>
              <p>トップバナー画像</p>
              <p>
                バイクの画像は、元あったクライアント様のものを加工をPhotoshopで加工。
              </p>
              <p>女性の３D画像は、POSERで制作。ロゴもPhotoshopで作成。</p>
              <p>
                それらをPhotoshop上で配置、テキストを加え一枚のバナーにしました。
              </p>
              <p>入力ボックスはクライアント様のものを使いました。</p>
            </section>
          </div>
        </div>
        <div id="petshop" className="mainblock sticky performance3">
          <div className="mainblocksection bg-white">
            <section className="tilesection appear-totop text-black">
              <a className="imglink" href="petshop/" target="_new">
                <img className="site-img" src={Petshop} />
              </a>
              <h3 className="sakuhinh3">
                <a href="petshop/" target="_new">
                  ペットショップサイト
                </a>
                　(個人の制作物)
              </h3>
              <p>navbarをjavascript(jquery)でレスポンシブ</p>
              <p>足跡の画像は、ネットからひっぱってきた物をillustlatorで加工</p>
              <p>また、写真以外の画像はゼロからphotoshopで制作</p>
              <p>
                キャラクターは、illustlatorで制作したオリジナルキャラクターです。
              </p>
              <p>
                ナビゲーションバーのボタンは、CSS3で画像切り替えで実装、メインコンテンツの『一覧へ』ボタンのデザインと動作はCSS3のみで実装
              </p>
            </section>
          </div>
        </div>
        <div id="danvc" className="mainblock sticky performance4">
          <div className="mainblocksection bg-white">
            <section className="tilesection-white appear-totop text-black">
              <a className="imglink" href="http://danvc.com" target="_new">
                <img className="site-img" src={Danvc} />
              </a>
              <h3 className="sakuhinh3">
                <a href="http://danvc.com" target="_new">
                  ベンチャーキャピタル
                </a>
              </h3>
              <p>２０１５年６月サイトを制作しました</p>
              <p>
                すでにできているデザインをもとに、デザイン修正及びコーディング
              </p>
              <p>レスポンシブサイトです。</p>
              <p>
                トップへ戻るボタン、画像のグレイ表示をjavascript(jquery)で実装
              </p>
              <p>ボタンは、CSS3で画像切り替えで実装</p>
              <p>phpでのフォームメールコーディング</p>
            </section>
          </div>
        </div>
        <div id="koiryu" className="mainblock sticky performance5">
          <div className="mainblocksection">
            <section className="tilesection appear-totop text-white">
              <a
                className="imglink"
                href="http://frankart.jp/koiryu/"
                target="_new"
              >
                <img className="site-img" src={Kiryu} />
              </a>
              <h3 className="sakuhinh3">
                <a href="http://frankart.jp/koiryu/" target="_new">
                  ゲームアプリ画像処理
                </a>
              </h3>
              <p>
                担当フェーズ：キャラクター、パーツ、サイトの画像処理、送信フォーム作成
              </p>
              <p>
                キャラクター衣装加工、ロゴ加工、セリフ背景加工、サイトの画像処理、送信フォーム作成
              </p>
            </section>
          </div>
        </div>
        <div id="miicoro" className="mainblock sticky performance6">
          <div className="mainblocksection bg-white">
            <section className="tilesection appear-totop text-black">
              <a
                className="imglink"
                href="https://store.line.me/stickershop/product/1476806/ja"
                target="_new"
              >
                <img className="site-img" src={Mc1040hw} />
              </a>
              <h3 className="sakuhinh3">
                <a
                  href="https://store.line.me/stickershop/product/1476806/ja"
                  target="_new"
                >
                  LINEスタンプ制作
                </a>
              </h3>
              <p>担当フェーズ：LINEスタンプみぃころの制作</p>
              <p>ツール；Photoshop Illustlator</p>
            </section>
          </div>
        </div>
        <div id="parkingreserve" className="mainblock sticky performance7">
          <div className="mainblocksection bg-black">
            <section className="tilesection appear-totop text-white">
              <div className="imglink">
                <img className="site-img" src={OkkParkingres} />
              </div>
              <h3 className="sakuhinh3">
                空港駐車場予約サービス
                <br /> https://itami.reserve.parkingweb.jp
              </h3>
              <p>担当フェーズ：UI/UXデザイン　webデザイン　一部コーディング</p>
              <p>ツール；Photoshop Illustlator　VSCode</p>
            </section>
          </div>
        </div>
        <div id="footer" className="mainblock sticky footer">
          <div className="mainblocksection">
            <footer className="appear-totop">
              <div id="copyright">
                <p>Copyright(C) ichireido All Rights Reserved.</p>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </div>
  );
};

export default pf1App;
