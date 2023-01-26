import "./SalaCard.css"
export default function SalaCard (){

    return(

        <div class="card">
        <div class="img">
            <img src="data:image/jpeg;base64,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"></img>
        </div>
        <div class="textBox">
          <div class="textContent">
            <p class="h1">Renzo DOratto</p>
            <span class="span">2</span>
          </div>
          <p class="p">Hola como esstas</p>
        <div>
      </div></div></div>
    );
}