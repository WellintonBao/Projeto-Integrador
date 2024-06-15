import React from 'react';

const Icones = () => {
  return (
    <div className="col-lg-2 col-sm-12" style={{ textAlign: 'right' }}>
      <a id="bitmap_twitter" href="https://twitter.com/uffsonline" style={{ textDecoration: 'none' }}>
        <img className="bitmap" alt="Ícone do X (twitter)" src="https://www.uffs.edu.br/++resource++importIMG/icon/100px/whiteTwitter.png" />
      </a>
      <a id="bitmap_insta" href="https://instagram.com/escolhiseruffs" style={{ textDecoration: 'none' }}>
        <img className="bitmap" alt="Icone do Instagram" src="https://www.uffs.edu.br/++resource++importIMG/icon/100px/whiteInstagram.png" />
      </a>
      <a id="bitmap_dark">
        <img className="bitmap" alt="ícone de lua" style={{ filter: 'invert(1)' }} src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png" />
      </a>
    </div>
  );
};

export default Icones;