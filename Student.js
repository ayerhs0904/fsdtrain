const parent = document.getElementById('parent');
console.log(parent);
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2",{style:{color:'brown',backgroundColor:'lightyellow'}}, "Hello World");
root.render(h2);

//jsx
const myname = <h2>Shreya singh</h2>
const branch = <h2>CS</h2>
const pic = <img src="D:\Downloads\Gemini_Generated_Image_stoixdstoixdstoi.png" alt="Shreya singh" />
const section = <h2>Section B</h2>
const college = <h2>ABES Engineering College</h2>
const container = (
    <div style={{textAlign:'center', margin:'0 400px', backgroundColor:'#D3D3D3'}}>
        {pic}
        {myname}
        {branch}
        {section}
        {college}
    </div>
)
root.render(container);