 //const options={minute: "numeric", hour: "numeric", day: "numeric", month: "long", }
 const options= {year:"numeric"};
          
 document.getElementById('currentdate').textContent=new Date().toLocaleDateString("en-US", options);
// const modoptions ={ second: "numeric", minute: "numeric", hour: "numeric", day: "numeric", month:"numeric", year: "numeric"};
 //document.getElementById('lastModified').textContent=new Date(document.lastModified);
 document.getElementById('lastModified').textContent=document.lastModified;
