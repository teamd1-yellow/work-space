//非表示
function displayNone(ele){
    ele.classList.remove("d-block");
    ele.classList.add("d-none");
}

//表示
function displayBlock(ele){
    ele.classList.remove("d-none");
    ele.classList.add("d-block");
}

//ページ
const pages = {
    topPage : document.getElementById("heroSection"),
    omikujiPage : document.getElementById("resultSection")
}

//おみくじ
class Omikuji{
    constructor(){
        this.unsei = this.getUnsei();
        this.unseiText = this.getUnseiText(this.unsei);
        this.unseiImage = this.getUnseiImage(this.unsei);
        this.message = this.getMessage(this.unsei);
        this.rosen = this.getRosen(getRandomNum(10));
        this.ryori = this.getRyori(getRandomNum(12));
        this.spot = this.getSpot(getRandomNum(10));
    }

    //運勢の取得(出現頻度の設定)
    getUnsei(){
        let un = Math.random();//0から1のランダムな値
        if(un < 0.1){
            return 1;
        }else if(un < 0.2){
            return 2;
        }else if(un < 0.4){
            return 3;
        }else if(un < 0.6){
            return 4;
        }else if(un < 0.9){
            return 5;
        }else{
            return 6;
        }
    }
    
    //運勢の名称取得
    //hiroさん内容入力
    getUnseiText(num){
        let unseiText = "";
        switch(num){
            case 1:

                unseiText = "大吉";
                break;
            case 2:
                unseiText = "中吉";
                break;
            case 3:
                unseiText = "小吉";
                break;
            case 4:
                unseiText = "吉";
                break;
            case 5:
                unseiText = "末吉";
                break;
            case 6:
                unseiText = "凶";
                break;
        }
        return unseiText;
    }

    //画像の取得
    //hiroさん内容入力
    getUnseiImage(num){
        let image = "";
        switch(num){
            case 1:

                image = "daikiti.png";
                break;
            case 2:
                image = "chukiti.png";
                break;
            case 3:
                image = "syoukiti.png";
                break;
            case 4:
                image = "kiti.png";
                break;
            case 5:
                image = "suekiti.png";
                break;
            case 6:
                image = "kyou.png";
                break;
        }
        return image;
    }

    //メッセージの取得
    //hiroさん内容入力
    getMessage(num){
        let message = "";
        switch(num){
            case 1:

                message = "やることなすこと、すべてが上手くいく一日です。自信をもって、どんどん行動してみましょう。";
                break;
            case 2:
                message = "努力がきちんと形になる、嬉しい一日です。自分のペースを大切にすれば、物事はスムーズに進みます。";
                break;
            case 3:
                message = "小さな幸せを見つけられる、心温まる一日になりそう。いつもより少し周りをよく見てみましょう。";
                break;
            case 4:
                message = "平穏で、落ち着いた一日。現状維持を心がけましょう。";
                break;
            case 5:
                message = "これから運気は上がっていきます。今日の頑張りが、明日のあなたを助けてくれます。";
                break;
            case 6:
                message = "ゆっくり休んで、エネルギーを充電しましょう。焦りは禁物です。";
                break;
        }
        return message;
    }

    //路線の取得
    //hiroさん内容入力
    getRosen(num){
        let rosen = "";
        switch(num){
            case 1:
                rosen = "山手線";
                break;
            case 2:
                rosen = "東急東横線";
                break;
            case 3:
                rosen = "小田急線";
                break;
            case 4:
                rosen = "中央線";
                break;
            case 5:
                rosen = "ゆりかもめ"
                break;
            case 6:
                rosen = "江ノ電";
                break;
            case 7:
                rosen = "京王線";
                break;
            case 8:
                rosen = "横須賀線";
                break;
            case 9:
                rosen = "都電荒川線";
                break;
            case 10:
                rosen = "湘南新宿ライン";

                break;
        }
        return rosen;
    }

    //料理の取得
    //hiroさん内容入力
    getRyori(num){
        let ryori = "";
        switch(num){
            case 1:

                ryori = "お寿司";
                break;
            case 2:
                ryori = "ラーメン";
                break;
            case 3:
                ryori = "カレーライス";
                break;
            case 4:
                ryori = "天ぷら";
                break;
            case 5:
                ryori = "うなぎの蒲焼き";
                break;
            case 6:
                ryori = "焼き鳥";
                break;
            case 7:
                ryori = "すき焼き";
                break;
            case 8:
                ryori = "親子丼";
                break;
            case 9:
                ryori = "餃子";
                break;
            case 10:
                ryori = "おにぎり";
                break;
            case 11:
                ryori = "担々麺";
                break;
            case 12:
                ryori = "麻婆豆腐";

                break;
        }
        return ryori;
    }

    //スポットの取得
    //hiroさん内容入力
    getSpot(num){
        let spot = "";
        switch(num){
            case 1:

                spot = "展望台";
                break;
            case 2:
                spot = "公園";
                break;
            case 3:
                spot = "神社・お寺";
                break;
            case 4:
                spot = "美術館・博物館";
                break;
            case 5:
                spot = "カフェ";
                break;
            case 6:
                spot = "本屋";
                break;
            case 7:
                spot = "海・湖";
                break;
            case 8:
                spot = "商店街";
                break;
            case 9:
                spot = "動物園・水族館";
                break;
            case 10:
                spot = "温泉";

                break;
        }
        return spot;
    }
}

function goToOmikujiPage(omikuji){
    displayNone(pages.topPage);
    displayBlock(pages.omikujiPage);
    createOmikujiPage(omikuji);
}

function backToTopPage(){
    displayNone(pages.omikujiPage);
    displayBlock(pages.topPage);
}

function createOmikujiPage(omikuji){
    let omikujiFortune = document.getElementById("omikuji-fortune");
    omikujiFortune.innerHTML = omikuji.unseiText;
    let omikujiMessage = document.getElementById("omikuji-message");
    omikujiMessage.innerHTML = omikuji.message;
    let omikujiFortuneImage = document.getElementById("omikuji-fortune-image");
    omikujiFortuneImage.src = "assets/" + omikuji.unseiImage;
    let omikujiLuckyLine = document.getElementById("omikuji-lucky-line");
    omikujiLuckyLine.innerHTML = omikuji.rosen;
    let omikujiLuckyDish = document.getElementById("omikuji-lucky-dish");
    omikujiLuckyDish.innerHTML = omikuji.ryori;
    let omikujiLuchySpot = document.getElementById("omikuji-lucky-spot");
    omikujiLuchySpot.innerHTML = omikuji.spot;
}

//1-nの整数をランダムに生成
function getRandomNum(n){
    return Math.floor(Math.random()*n)+1;
}

//おみくじを引くボタン押下イベント
function drawOmikuji(){
    let omikuji = new Omikuji();
    //運勢生成確認
    console.log(omikuji);

    goToOmikujiPage(omikuji);
}