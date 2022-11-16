
import './RainEffect.css'

const RainEffect = () => {

    var increment = 0;
    const lluvia = [];
    while (increment < 100) {
        console.log("iters");
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        //random number between 5 and 2
        var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        increment += randoFiver;
        lluvia.push({ increment, randoFiver, randoHundo });
    }
    console.log("quepasau");


    return (
        <div className="rain-effect">
            <div className="rain front-row">
                {
                    lluvia.map( (item, index) => {
                        return (<div key={index} className="drop" style={{ left: item.increment+"%", bottom: (item.randoFiver + item.randoFiver - 1 + 100)+"%", animationDelay: item.randoHundo/10+"s", animationDuration: item.randoHundo/100 +0.5 +"s"}}>
                                    <div className="stem" style={{animationDelay: item.randoHundo/10 + "s", animationDuration: item.randoHundo/100 +0.5 +"s"}}></div>
                                </div>
                                );
                    })
                }
            </div>
        </div>
    );
}

export default RainEffect;