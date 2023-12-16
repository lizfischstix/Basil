import Plant from '../assets/Images/KatieVosPlant.gif';

export default function PlantChain() {
    Retrun(
        <>
            <img
                src={Plant}
                alt="Gif of plant by Katie Vos"
                style={{
                    width: '100%',
                    maxWidth: 200,
                    height: 'auto',
                    objectFit: 'cover',
                }}
            />
            <img
                src={Plant}
                alt="Gif of plant by Katie Vos"
                style={{
                    width: '100%',
                    maxWidth: 200,
                    height: 'auto',
                    objectFit: 'cover',
                }}
            />
            <div className='Lobser' justifycontent="center">
Check out what our users are saying!
            </div>
        </>
    )
}