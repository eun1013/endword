
export const dictionaty =  async (startChar) => {
    const API_KEY="243D92D202988D46CA5711FBD719E4CF";
    const base = "https://opendict.korean.go.kr/api/search";
    const params = new URLSearchParams({
    key: API_KEY,
    q: startChar,
    req_type: "json",
    part: "word",
    advanced: "y",
    sort: "popular",
    num: "20",
    pos: "1",        // 명사
    method: "start", // 시작 글자
    target: "1",      // 표제어
    type1:"word"
    });

    const originURL = `${base}?${params.toString()}`;
    console.log( originURL );
    // const proxyURL = `https://corsproxy.io/?${encodeURIComponent(originURL)}`;
    const proxyURL = originURL;
    try{

    const res = await fetch(proxyURL); //데이터를 요청하는 순간
    if( !res.ok ){
        throw new Error("API응답오류", res.status);
    }
    const data = await res.json(); // 데이터를 가져오는 순간
    //조건 : 하이픈이 없고, 2글자 이상만 배열처리로 출력처리
    const filterData = data.channel.item.filter((item)=>{
        return !item.word.includes('-') && item.word.length>=2;
    });
    const word = filterData[0].word;  //데이터의 첫번째 워드값을 가져오는 것
    return word;
    } catch(err){
        console.log("API오류",err);
        return null;
    }

};
