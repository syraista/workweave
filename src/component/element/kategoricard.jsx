import '../../css/minorel.css'
export default function Kategoricard({title,img,desc,link}) {
    return (
        <a className='cardcatmain' href={link}>
         <img src={img}/>
         <div>
            <h4>{title}</h4>
            <p>{desc}</p>
         </div>
        </a>
    );
}
