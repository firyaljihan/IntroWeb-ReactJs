export function Opentab(event, tabname) {
    const tablinks = document.querySelectorAll(".tab-links");
    const tabcontents = document.querySelectorAll(".tab-contents");
  
    for (const tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
  
    for (const tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
  
    event.target.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }
  

export default Opentab;