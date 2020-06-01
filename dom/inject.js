/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html
*/

const htmlCodePen = `<center>
  <h1><i>HTML Practice Exercise TEKcamp.</i></h1>
  <h2><a href="">TEKsystems "TEKcamp"</a></h2>
</center>

<hr />
<p>I love <i>HTML</i> for the following reasons:</p>
<ol>
  <li>I learned it quickly.</li>
  <li>I can make web pages using code
<li> It’s fun.</li>
</ol>
<hr />
  <p>My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.</p>
<h1>Have a great day!</h1>  I really look forward to learning how to code!  Have a great day.  
-[Team "Git'er Done"]
`;

document.querySelector('#inject').insertAdjacentHTML('beforeend', htmlCodePen);
