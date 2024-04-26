


const Button= ({handler,title})=>{

    return(
        <>
        <button id="btn" onClick={handler}>{title}</button>
        </>
    );

}

export default Button;