// txtgen@3.0.7, by @ndaidong - built with esbuild at 2024-02-23T02:10:16.997Z - published under MIT license
var a=["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee","cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog","giraffe","goat","goldfish","hamster","hippopotamus","horse","kangaroo","kitten","lion","lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion","seal","shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra","apple","apricot","banana","blackberry","blueberry","cherry","cranberry","currant","fig","grape","grapefruit","grapes","kiwi","kumquat","lemon","lime","melon","nectarine","orange","peach","pear","persimmon","pineapple","plum","pomegranate","prune","raspberry","strawberry","tangerine","watermelon"],r=["adaptable","adventurous","affable","affectionate","agreeable","alert","alluring","ambitious","ambitious","amiable","amicable","amused","amusing","boundless","brave","brave","bright","bright","broad-minded","calm","calm","capable","careful","charming","charming","cheerful","coherent","comfortable","communicative","compassionate","confident","conscientious","considerate","convivial","cooperative","courageous","courageous","courteous","creative","credible","cultured","dashing","dazzling","debonair","decisive","decisive","decorous","delightful","detailed","determined","determined","diligent","diligent","diplomatic","discreet","discreet","dynamic","dynamic","eager","easygoing","efficient","elated","eminent","emotional","enchanting","encouraging","endurable","energetic","energetic","entertaining","enthusiastic","enthusiastic","excellent","excited","exclusive","exuberant","exuberant","fabulous","fair","fair-minded","faithful","faithful","fantastic","fearless","fearless","fine","forceful","frank","frank","friendly","friendly","funny","funny","generous","generous","gentle","gentle","glorious","good","good","gregarious","happy","hard-working","harmonious","helpful","helpful","hilarious","honest","honorable","humorous","imaginative","impartial","impartial","independent","industrious","instinctive","intellectual","intelligent","intuitive","inventive","jolly","joyous","kind","kind","kind-hearted","knowledgeable","level","likeable","lively","lovely","loving","loving","loyal","lucky","mature","modern","modest","neat","nice","nice","obedient","optimistic","painstaking","passionate","patient","peaceful","perfect","persistent","philosophical","pioneering","placid","placid","plausible","pleasant","plucky","plucky","polite","powerful","practical","pro-active","productive","protective","proud","punctual","quick-witted","quiet","quiet","rational","receptive","reflective","reliable","relieved","reserved","resolute","resourceful","responsible","rhetorical","righteous","romantic","romantic","sedate","seemly","selective","self-assured","self-confident","self-disciplined","sensible","sensitive","sensitive","shrewd","shy","silly","sincere","sincere","skillful","smiling","sociable","splendid","steadfast","stimulating","straightforward","successful","succinct","sympathetic","talented","thoughtful","thoughtful","thrifty","tidy","tough","tough","trustworthy","unassuming","unbiased","understanding","unusual","upbeat","versatile","vigorous","vivacious","warm","warmhearted","willing","willing","wise","witty","witty","wonderful"],h=["a","e","i","o","u","y"],o=["however, {{nouns}} have begun to rent {{nouns}} over the past few months, specifically for {{nouns}} associated with their {{nouns}}"],m=["to be more specific, ","in recent years, ","however, ","by the way","of course, ","some assert that ","if this was somewhat unclear, ","unfortunately, that is wrong; on the contrary, ","it's very tricky, if not impossible, ","this could be, or perhaps ","this is not to discredit the idea that ","we know that ","it's an undeniable fact, really; ","framed in a different way, ","what we don't know for sure is whether or not ","as far as we can estimate, ","as far as he is concerned, ","the zeitgeist contends that ","though we assume the latter, ","far from the truth, ","extending this logic, ","nowhere is it disputed that ","in modern times ","in ancient times ","recent controversy aside, ","washing and polishing the car,","having been a gymnast, ","after a long day at school and work, ","waking to the buzz of the alarm clock, ","draped neatly on a hanger, ","shouting with happiness, "],p=(e=[],n=[])=>[...new Set([...e,...n])],x=(e=[])=>(a=p(a,e),a.length),k=(e=[])=>(r=p(r,e),r.length),j=(e=[])=>(o=p(o,e),o.length),q=(e=[])=>(a=[...new Set([...e])],a.length),z=(e=[])=>(r=[...new Set([...e])],r.length),A=(e=[])=>(o=[...new Set([...e])],o.length),T=()=>[...a],S=()=>[...r],N=()=>[...o];var f,b=e=>{f=e};b(Math.random);var d=()=>f(),l=(e,n)=>{let t=e,i=n-e+1;return Math.floor(d()*i)+t},s=e=>{let n;for(;!n;)n=e[l(0,e.length-1)];return n},v=()=>{let e=".......!?!?;...".split("");return s(e)},M=e=>e.endsWith("s")?e:(e.match(/(ss|ish|ch|x|us)$/)?e+="e":e.endsWith("y")&&!h.includes(e.charAt(e.length-2))&&(e=e.slice(0,e.length-1),e+="ie"),e+"s"),g=e=>{let n="a";return e.match(/^(a|e|heir|herb|hour|i|o)/)&&(n="an"),`${n} ${e}`},y={noun:()=>s(a),a_noun:()=>g(s(a)),nouns:()=>M(s(a)),adjective:()=>s(r),an_adjective:()=>g(s(r))};var w="a ac accumsan adipiscing aenean aliqua aliquam aliquet amet arcu at auctor augue bibendum blandit commodo condimentum consectetur consequat convallis cras cum curabitur cursus dapibus diam dictum dictumst dignissim dis do dolor dolore donec dui duis egestas eget eiusmod elementum elit enim erat eros est et etiam eu euismod facilisis faucibus felis fermentum feugiat fringilla gravida habitant habitasse hac hendrerit iaculis id imperdiet in incididunt integer ipsum justo labore lacinia lacus laoreet lectus leo libero lobortis lorem magna magnis massa mattis mauris mi molestie montes morbi mus nam nascetur natoque nec neque netus nibh nisi nisl non nulla nullam nunc odio orci ornare parturient pellentesque penatibus pharetra phasellus placerat platea porta porttitor praesent pretium proin pulvinar purus quam quis quisque ridiculus risus sagittis scelerisque sed sem semper senectus sit sociis sodales sollicitudin suscipit suspendisse tellus tempor tempus tincidunt tortor tristique turpis ullamcorper ultrices ultricies urna ut varius vel velit venenatis vestibulum vitae viverra volutpat".split(" "),W=w.length,_=(e=2,n=24)=>{let t=l(e,n),i=[];for(;i.length<t;){let u=l(0,W),c=w[u];c&&!i.includes(c)&&i.push(c)}return i.join(" ")};var $=["noun","a_noun","nouns","adjective","an_adjective"],P=e=>e.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "),D=e=>{let n=e,t=e.match(/\{\{(.+?)\}\}/g);if(t&&t.length)for(let i=0;i<t.length;i++){let u=P(t[i].replace("{{","").replace("}}","")),c;$.includes(u)&&(c=y[u]()),n=n.replace(t[i],c)}return n},L=()=>d()<.33?s(m):"",R=()=>D(s(o));var C=(e=!1)=>{let t=(e?"":L())+R();return t=t.charAt(0).toUpperCase()+t.slice(1),t+=v(),t},F=(e=0)=>{e||(e=l(3,10));let n=Math.min(e,15),t=[];for(;t.length<n;){let i=C();t.push(i)}return t.join(" ")},K=(e=0)=>{e||(e=l(3,10));let n=Math.min(e,15),t=[];for(;t.length<n;){let i=F();t.push(i)}return t.join(`

`)};export{k as addAdjectives,x as addNouns,j as addTemplates,K as article,S as getAdjectives,T as getNouns,N as getTemplates,_ as lorem,F as paragraph,C as sentence,z as setAdjectives,q as setNouns,b as setRandom,A as setTemplates};
