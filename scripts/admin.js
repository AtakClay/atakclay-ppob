
async function loadAdmin(){ const res=await fetch('/data/products_combined_A_D.json'); const prods=await res.json(); document.getElementById('stats').innerText = 'Products: ' + prods.length; } document.addEventListener('DOMContentLoaded', loadAdmin);
