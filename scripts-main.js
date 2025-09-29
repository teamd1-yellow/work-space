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
                unseiText = "運１";
                break;
            case 2:
                unseiText = "運２";
                break;
            case 3:
                unseiText = "運３";
                break;
            case 4:
                unseiText = "運４";
                break;
            case 5:
                unseiText = "運５";
                break;
            case 6:
                unseiText = "運６";
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
                image = "い１";
                break;
            case 2:
                image = "い２";
                break;
            case 3:
                image = "い３";
                break;
            case 4:
                image = "い４";
                break;
            case 5:
                image = "い５";
                break;
            case 6:
                image = "い６";
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
                message = "め１";
                break;
            case 2:
                message = "め２";
                break;
            case 3:
                message = "め３";
                break;
            case 4:
                message = "め４";
                break;
            case 5:
                message = "め５";
                break;
            case 6:
                message = "め６";
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
                rosen = "ろ１";
                break;
            case 2:
                rosen = "ろ２";
                break;
            case 3:
                rosen = "ろ３";
                break;
            case 4:
                rosen = "ろ４";
                break;
            case 5:
                rosen = "ろ５";
                break;
            case 6:
                rosen = "ろ６";
                break;
            case 7:
                rosen = "ろ７";
                break;
            case 8:
                rosen = "ろ８";
                break;
            case 9:
                rosen = "ろ９";
                break;
            case 10:
                rosen = "ろ１０";
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
                ryori = "り１";
                break;
            case 2:
                ryori = "り２";
                break;
            case 3:
                ryori = "り３";
                break;
            case 4:
                ryori = "り４";
                break;
            case 5:
                ryori = "り５";
                break;
            case 6:
                ryori = "り６";
                break;
            case 7:
                ryori = "り７";
                break;
            case 8:
                ryori = "り８";
                break;
            case 9:
                ryori = "り９";
                break;
            case 10:
                ryori = "り１０";
                break;
            case 11:
                ryori = "り１１";
                break;
            case 12:
                ryori = "り１２";
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
                spot = "す１";
                break;
            case 2:
                spot = "す２";
                break;
            case 3:
                spot = "す３";
                break;
            case 4:
                spot = "す４";
                break;
            case 5:
                spot = "す５";
                break;
            case 6:
                spot = "す６";
                break;
            case 7:
                spot = "す７";
                break;
            case 8:
                spot = "す８";
                break;
            case 9:
                spot = "す９";
                break;
            case 10:
                spot = "す１０";
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
    let fortuneKanji = document.getElementById("resultFortuneKanji");
    fortuneKanji.innerHTML = omikuji.unseiText;
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