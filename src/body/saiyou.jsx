import image from '../imgs/skills.png'

const johou = [
    { title: 'ReactJs(PG) N2', country: 'インド国籍', area: '東京' },
    { title: 'ReactJs(PG) N2', country: 'インド国籍', area: '東京' },
    { title: 'ReactJs(PG) N2', country: 'インド国籍', area: '東京' },
    { title: 'ReactJs(PG) N2', country: 'インド国籍', area: '東京' },
]


const Saiyou = () => {
    return (
        <div>
            <div>
                {johou.map((johou) => 
                <h1>{johou.title}</h1>,
                <h2>{johou.country}</h2>,
                <h2>{johou.area}</h2>
            )}
            </div>



        </div>
    );
}

export default Saiyou;



