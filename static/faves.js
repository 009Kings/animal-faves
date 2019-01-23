var displayFavorites = function() {
  var STATE = {
    faves: FAVORITES,

    handles: {
      inputs: {},
      outputs: {}
    }
  };

  function init() {
    STATE.handles.outputs.faveList = document.getElementById('fave-list');
    STATE.handles.outputs.desc = document.getElementById('desc');
    
    show();

  }
  
  function show() {
    render();

    STATE.handles.inputs.btns = document.querySelectorAll('.btn-toggle');
    STATE.handles.outputs.cardDesc = document.querySelectorAll('.to-toggle');

    STATE.handles.inputs.btns.forEach((btn, index)=>{
      btn.addEventListener('click', function () {
        toggleDesc(btn, STATE.handles.outputs.cardDesc[index]);
      });
    })

  }

  function render() {
    var container = STATE.handles.outputs.faveList;
    
    STATE.faves.forEach(fave=>{
      var card = renderCards(fave);
      container.appendChild(card);
    })
  }
  
  function toggleDesc(toggle, toToggle) {
    if (toToggle.classList.contains('dn')) {
      toToggle.classList.remove('dn');
      toggle.textContent="Hide Description";
    } else {
      toToggle.classList.add('dn')
      toggle="Show Description";
    }
    
  }
  
  function renderCards(fave) {
    var article = document.createElement('article');
    article.classList = 'center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 fave-card';
    
    // First section
    var titleSection = document.createElement('div');
    titleSection.classList = 'tc'
    var h1 = document.createElement('h1');
    h1.classList = fave.extinct ? 'f3 mb2 red' : 'f3 mb2';
    h1.textContent = fave.species_name;
    titleSection.appendChild(h1);

    var h2 = document.createElement('h2');
    h2.classList = 'f5 fw4 gray mt0 i';
    h2.textContent = fave.scientific_name;
    titleSection.appendChild(h2);
    
    var img = document.createElement('img');
    img.classList = 'br-100 h4 w4 dib ba b--black-05 pa2';
    img.src = fave.image_url ? fave.image_url : 'https://i.pinimg.com/750x/93/62/60/936260aae1c544c77285b4b10f25bb02.jpg';
    img.title = fave.scientific_name;
    titleSection.appendChild(img);
    
    article.appendChild(titleSection);

    // Next Section
    var displayBtn = document.createElement('div');
    displayBtn.classList = 'tc'
    var btnA = document.createElement('a');
    btnA.classList = 'f6 link dim br2 ba ph3 pv2 mv2 dib dark-green btn-toggle';
    btnA.href = '#0';
    btnA.textContent = 'Show Description';
    displayBtn.appendChild(btnA);

    article.appendChild(displayBtn);
    
    // And last
    var descDisplay = document.createElement('div');
    descDisplay.classList = 'tc dn to-toggle';
    var dl = document.createElement('dl');
    dl.classList = 'f6 lh-title mv2';
    var dt = document.createElement('dt');
    dt.classList = 'dib b mr2';
    dt.textContent = 'Description';
    dl.appendChild(dt);

    var dd = document.createElement('dd');
    dd.classList = 'dib mr2';
    dd.textContent = fave.description;
    dl.appendChild(dd);

    descDisplay.appendChild(dl);

    article.appendChild(descDisplay);


    return article;
  }

  document.addEventListener('DOMContentLoaded', init);
}();