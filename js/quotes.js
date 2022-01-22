const quotes = [
    {
        quote:"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author:"사무엘존슨"
    },
    {
        quote:"진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
        author:"찰리 채플린"
    },
    {
        quote:"신은 용기있는자를 결코 버리지 않는다",
        author:"켄러"
    },
    {
        quote:"한번의 실패와 영원한 실패를 혼동하지 마라",
        author:"F.스콧 핏제랄드"
    },
    {
        quote:"행복은 결코 많고 큰데만 있는 것이 아니다 작은 것을 가지고도 고마워 하고 만족할 줄 안다면 그는 행복한 사람이다. 여백과 공간의 아름다움은 단순함과 간소함에 있다. ",
        author:"법정스님 "
    },
    {
        quote:"재산을 잃은 사람은 많이 잃은 것이고, 친구를 잃은 사람은 더많이 잃은 것이며, 용기를 잃은 사람은 모든것을 잃은 것이다. ",
        author:"세르반테스"
    },
    {
        quote:"금이야 말로 일할때다. 지금이야말로 싸울때다. 지금이야말로 나를 더 훌륭한 사람으로 만들때다 오늘 그것을 못하면 내일 그것을 할수있는가",
        author:"토마스 아켐피스"
    }
    ,{
        quote:"인생이란 학교에는 불행 이란 훌륭한 스승이 있다. 그 스승 때문에 우리는 더욱 단련되는 것이다.",
        author:"프리체"
    },
    {
        quote:"최고에 도달하려면 최저에서 시작하라.",
        author:"P.시루스"
    }
    ,{
        quote:"문제는 목적지에 얼마나 빨리 가느내가 아니라 그 목적지가 어디냐는 것이다",
        author:"메이벨 뉴컴버"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(3)");

const todaysQuote = quotes[Math.ceil(Math.random()*quotes.length)-1];

quote.innerText = `명언- ${todaysQuote.quote}`;
author.innerText = `저자- ${todaysQuote.author}`;