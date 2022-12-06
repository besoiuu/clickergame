// const props = {
//     title: 'Timer 1',
//     color: '#0000FF'
// }




const Timer = ({title, color}) => {
    return(
        <div>
            <p style={{color}}>
            {title}
            </p>
        </div>
    )
}

export default Timer;