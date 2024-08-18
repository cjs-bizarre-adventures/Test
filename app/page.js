import Image from 'next/image'
import { promises as fs } from 'fs';

const file = await fs.readFile(process.cwd() + '/app/parameters.json', 'utf8');
var data = JSON.parse(file);

function Options_number ({input_name, var_name}) {
  return (
    <div><label>
          {input_name}: <input name = {var_name} type = "number" placeholder="0"/>
        </label>
    </div>

  )
}

export default function Home() {
  return (
    <main>
      <div className="banner">

      <div className='banner_img'>

      <Image
        src= "\PSEMLogo.svg"
        width = {70}
        height= {100}
        >
      </Image>
      </div>

      <h1>PSEM Simulator</h1>

      </div>
      
    <h2 className='Divider'>Nome</h2>
    <label>
      Name: <input name="NAME" type="Text" placeholder='Insert Name Here'/>
    </label>

    {Object.keys(data).map((nome, categoria) => (<><h2 className='Divider'>{nome}</h2>{Object.keys(data[nome]).map((input_name, var_name) => (<Options_number input_name={input_name}  var_name={var_name}/>))}</>))}

    <label>
      <input name="TRACK" type="file"/>
    </label>

    <button className = "sub_button" type="submit">Submit</button>

    <footer>
        <p><b>PSEM</b></p>
        <p>All Rights Reserved, 2024</p>
    </footer>

    </main>

  
  )
}
