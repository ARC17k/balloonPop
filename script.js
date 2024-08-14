@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box ;
    cursor: none;
}

body{
    background-color: lightblue;
    overflow: hidden;
    width: 100%;
    height: 100%;

}

#space{
    position: absolute;
    width: 90%;
    height: 90%;
    border: 1px solid rebeccapurple;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
}

#balloon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /* background-color: red; */
    position: absolute;
    top: 50px;
    left: 50px;
}

#balloon::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 50px;
    translate: -50%;
    width: 50%;
    height: 50%;
    background-image: var(--alpha-image);
    background-size: var(--alpha-size);
    opacity: .8;
}

#balloon::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url(assets/threade.png);
    top: 58px;
    left: 0px;
}

#score{
    position: absolute;
    right: 3%;
    top: 3%;
    font-family: "Comic Neue", cursive;
    font-size: 5rem;
    font-weight: bolder;
    color: red;
    -webkit-text-stroke: 2px black;
    z-index: 1;
}

#cursor{
    border-radius: 50%;
    margin: 3px;
    height: 15px;
    width: 15px;

    position: absolute;
    border: 1px solid black;
    transition: .0s linear;
    z-index: 1;
    transition: .2s ease;
}

#cursor::after{
    content: "";
    position: absolute;
    width: 1px;
    height: 35px;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    background-color: black;
}
#cursor::before{
    content: "";
    position: absolute;
    width: 35px;
    height: 1px;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    background-color: black;
}
