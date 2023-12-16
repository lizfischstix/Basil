import Graphic from '../assets/Images/Basil-laptop.png';
import Plant from '../assets/Images/KatieVosPlant.gif';
; 

export default function LapTop (){
    Return (
        <img
              src={Graphic}
              alt="laptop open to Basil"
              style={{
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                objectFit: 'cover',
              }}
            />
    )
}

export default function Gif (){
    Retrun (
        <img
              src={Plant}
              alt="Gif of plant by Katie Vos"
              style={{
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                objectFit: 'cover',
              }}
            />

    )
}